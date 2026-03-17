import type { ChatRequest, ChatResponse, ChatMessage } from '@/types/chat';

const API_ENDPOINT = '/api/chat';
const REQUEST_TIMEOUT_MS = 30000;

// 发送消息到后端 API
export async function sendMessage(messages: ChatMessage[]): Promise<ChatResponse> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      signal: controller.signal,
      body: JSON.stringify({
        messages: messages.map(msg => ({
          role: msg.role,
          content: msg.content
        }))
      } as ChatRequest)
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data: ChatResponse = await response.json();
    return data;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      return {
        success: false,
        message: '',
        error: '请求超时，请稍后重试'
      };
    }
    console.error('Chat service error:', error);
    return {
      success: false,
      message: '',
      error: error instanceof Error ? error.message : 'Network error'
    };
  } finally {
    clearTimeout(timeoutId);
  }
}

// 优化提示词的快捷方法
export async function optimizePrompt(currentPrompt: string, requirement: string): Promise<ChatResponse> {
  const messages: ChatMessage[] = [
    {
      id: 'context',
      role: 'user',
      content: `这是我当前的提示词：
"${currentPrompt}"

请根据以下需求优化它：${requirement}`,
      timestamp: Date.now()
    }
  ];

  return sendMessage(messages);
}
