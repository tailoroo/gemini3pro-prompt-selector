import type { VercelRequest, VercelResponse } from '@vercel/node';

// DeepSeek API 配置（兼容 OpenAI 格式）
const DEEPSEEK_API_URL = 'https://api.deepseek.com/chat/completions';
const DEEPSEEK_MODEL = 'deepseek-chat'; // DeepSeek 通用模型

// 消息类型定义
interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

// 系统提示词 - 专注于提示词优化
const SYSTEM_PROMPT = `你是专业的 AI 图像生成提示词优化专家。

## 提示词结构原则

按重要性排序组织提示词：
1. 画面质量词 - 放在最前面
2. 主体描述 - 清晰具体
3. 艺术风格 - 根据需求选择
4. 构图视角 - 增强画面感
5. 光影氛围 - 营造情绪
6. 色调色彩 - 统一视觉
7. 技术参数 - 按需添加

## 优化技巧

- 重要内容放前面，顺序影响 AI 理解
- 具体描述优于模糊表达
- 适度详细，避免过度堆砌
- 添加风格提示增强画面表现
- 根据用户需求针对性调整

## 回复规则

1. 必须全部使用中文
2. 直接返回优化后的完整提示词
3. 简短说明主要改进点（一句话）
4. 保持提示词的丰富性和创造性`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // 只允许 POST 请求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
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
      console.error('DeepSeek API error:', errorText);
      return res.status(response.status).json({
        error: 'DeepSeek API request failed',
        details: errorText
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
    console.error('Chat API error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
