import type { VercelRequest, VercelResponse } from '@vercel/node';

// DeepSeek API 配置（兼容 OpenAI 格式）
const DEEPSEEK_API_URL = 'https://api.deepseek.com/chat/completions';
const DEEPSEEK_MODEL = 'deepseek-chat'; // DeepSeek 通用模型

// 速率限制配置 (Vercel Edge Function 兼容)
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 60秒窗口
const RATE_LIMIT_MAX_REQUESTS = 10; // 每窗口最多10次请求

// 简单的内存速率限制（适用于单实例，Vercel Serverless 会为每个请求创建新实例）
const requestCounts = new Map<string, { count: number; resetTime: number }>();

/**
 * 速率限制检查
 * @returns true 表示通过，false 表示被限制
 */
function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = requestCounts.get(ip);

  // 如果记录不存在或已过期，创建新记录
  if (!record || now > record.resetTime) {
    requestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  // 检查是否超过限制
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  // 增加计数
  record.count++;
  return true;
}

/**
 * 获取客户端 IP
 */
function getClientIP(req: VercelRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0].trim();
  }
  if (Array.isArray(forwarded)) {
    return String(forwarded[0]).split(',')[0].trim();
  }
  return req.headers['x-real-ip'] as string || 'unknown';
}

/**
 * 设置安全响应头
 */
function setSecurityHeaders(res: VercelResponse): void {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
}

// 消息类型定义
interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// 系统提示词 - 面向 Gemini、豆包等多模态大模型
const SYSTEM_PROMPT = `你是专业的 AI 图像生成提示词优化专家，专门为 Gemini、豆包等多模态大模型优化生图提示词。

## 输出格式（严格遵守）

只输出优化后的提示词，用自然语言段落写成，中文。不加任何标签、引号、前缀说明或额外解释。

示例输出：
一位身穿白色旗袍的年轻女性站在江南水乡的石板桥上，清晨薄雾弥漫，柔和的晨光从背后透过柳树洒落，营造出温柔唯美的氛围。画面色调清淡雅致，构图采用三分法，远处青瓦白墙虚化为背景，整体呈现中国风写实摄影质感。

---

## 优化原则

**描述方式**：
- 用连贯的自然语言句子，而非逗号分隔的标签
- 先描述主体（人物/场景/物体），再描述环境与光线，最后描述整体风格与画面质感
- 语言具体形象，避免模糊表达（如"很美"改为"五官精致，气质清冷"）

**核心维度（按顺序融入描述中）**：
1. 主体 — 谁/什么，外观特征、动作、表情
2. 场景与环境 — 在哪里，时间、天气、背景元素
3. 光线与氛围 — 光源方向、光质（柔光/硬光/逆光等）、情绪基调
4. 风格与色调 — 摄影/插画/油画/电影感，冷暖色调，饱和度
5. 构图与镜头 — 全身/半身/特写，景深，镜头焦段感

**面向多模态模型的语言技巧**：
- 用"画面呈现……""整体风格……""光线从……照射"等引导性短语
- 可参考电影或摄影术语，但要转化为描述性语言而非技术参数
- 保持中文，语言流畅优美

---

## 理解用户输入

1. 用户粘贴已有提示词（中文 tag 或句子）→ 重组为自然语言段落，补全缺失维度
2. 用户附加需求（如"加上赛博朋克风格"）→ 融合需求后统一输出
3. 用户只写一个主题词 → 自动扩展为完整场景描述

直接输出提示词，不需要任何前缀或额外说明。`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 设置安全响应头（所有响应都包含）
  setSecurityHeaders(res);

  // 只允许 POST 请求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 速率限制检查
  const clientIP = getClientIP(req);
  if (!checkRateLimit(clientIP)) {
    res.setHeader('Retry-After', String(Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)));
    return res.status(429).json({ 
      error: 'Too many requests. Please try again later.',
      retryAfter: Math.ceil(RATE_LIMIT_WINDOW_MS / 1000)
    });
  }

  // 检查 API Key
  const apiKey = process.env.DEEPSEEK_API_KEY;
  if (!apiKey) {
    console.error('DEEPSEEK_API_KEY not configured');
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const { messages } = req.body as { messages: Message[] };

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages format' });
    }

    // 验证消息格式，防止注入攻击
    for (const msg of messages) {
      if (typeof msg.role !== 'string' || typeof msg.content !== 'string') {
        return res.status(400).json({ error: 'Invalid message format' });
      }
      if (msg.role !== 'user' && msg.role !== 'assistant' && msg.role !== 'system') {
        return res.status(400).json({ error: 'Invalid message role' });
      }
    }

    // 构建请求消息，添加系统提示词
    const requestMessages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }))
    ];

    // 调用 DeepSeek API（OpenAI 兼容格式）
    const response = await fetch(DEEPSEEK_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: DEEPSEEK_MODEL,
        messages: requestMessages,
        temperature: 0.7,
        max_tokens: 2000
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      // 只记录错误日志，不返回给客户端
      console.error('DeepSeek API error:', response.status, errorText.substring(0, 200));
      return res.status(502).json({
        error: 'External API request failed'
      });
    }

    const data = await response.json();

    // 返回 DeepSeek 的响应（OpenAI 格式）
    return res.status(200).json({
      success: true,
      message: data.choices[0]?.message?.content || '',
      usage: data.usage
    });

  } catch (error) {
    // 只记录错误日志，不返回详细信息给客户端
    console.error('Chat API error:', error instanceof Error ? error.message : 'Unknown error');
    return res.status(500).json({
      error: 'Internal server error'
    });
  }
}
