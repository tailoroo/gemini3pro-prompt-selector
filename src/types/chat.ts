// 对话消息类型
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

// API 请求类型
export interface ChatRequest {
  messages: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
}

// API 响应类型
export interface ChatResponse {
  success: boolean;
  message: string;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  error?: string;
}

// 对话状态类型
export interface ChatState {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
}

// 对话 Store 类型
export interface ChatStore extends ChatState {
  addMessage: (role: 'user' | 'assistant', content: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearMessages: () => void;
}
