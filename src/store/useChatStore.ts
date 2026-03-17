import { create } from 'zustand';
import type { ChatMessage, ChatStore } from '@/types/chat';

// 生成唯一 ID
const generateId = () => `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

export const useChatStore = create<ChatStore>((set) => ({
  // 初始状态
  messages: [],
  isLoading: false,
  error: null,

  // 添加消息
  addMessage: (role, content) =>
    set((state) => ({
      messages: [
        ...state.messages,
        {
          id: generateId(),
          role,
          content,
          timestamp: Date.now()
        } as ChatMessage
      ]
    })),

  // 设置加载状态
  setLoading: (loading) => set({ isLoading: loading }),

  // 设置错误
  setError: (error) => set({ error }),

  // 清空消息
  clearMessages: () => set({ messages: [], error: null })
}));

// 选择器 hooks（优化性能）
export const useChatMessages = () => useChatStore((state) => state.messages);
export const useChatLoading = () => useChatStore((state) => state.isLoading);
export const useChatError = () => useChatStore((state) => state.error);
