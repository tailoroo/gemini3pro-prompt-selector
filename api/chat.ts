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
const SYSTEM_PROMPT = `你是一个专业的 AI 提示词优化助手。你的任务是帮助用户优化用于 AI 图像生成的提示词。

你的职责：
1. 分析用户提供的提示词，指出可以改进的地方
2. 根据用户的需求（如"让它更有电影感"、"增加科幻元素"等）优化提示词
3. 保持提示词的英文格式，因为大多数 AI 图像生成工具使用英文提示词
4. 优化后的提示词应该更加具体、生动、有层次感

回复格式要求：
- 当用户要求优化提示词时，直接返回优化后的完整提示词，不需要解释
- 如果用户只是在描述需求，给出优化建议或优化后的提示词
- 保持简洁专业，避免过多废话
- 必须使用中文回答`;

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
