import { useState, useEffect } from 'react';
import { Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Textarea } from './ui/textarea';
import { useChatStore } from '@/store/useChatStore';
import { sendMessage } from '@/services/chatService';
import type { ChatMessage as ChatMessageType } from '@/types/chat';

interface ChatPanelProps {
  currentPrompt: string;
  onApplyPrompt: (prompt: string) => void;
}

export function ChatPanel({
  currentPrompt,
  onApplyPrompt
}: ChatPanelProps) {
  const [inputValue, setInputValue] = useState(currentPrompt);
  const [optimizedResult, setOptimizedResult] = useState<string | null>(null);
  const {
    isLoading,
    error,
    setLoading,
    setError
  } = useChatStore();

  // 当 currentPrompt 变化时更新输入框
  useEffect(() => {
    if (!optimizedResult) {
      setInputValue(currentPrompt);
    }
  }, [currentPrompt, optimizedResult]);

  // 发送优化请求
  const handleOptimize = async () => {
    if (!inputValue.trim()) return;

    setLoading(true);
    setError(null);
    setOptimizedResult(null);

    try {
      const optimizeRequest = `请帮我优化这个提示词，让它更加专业和有表现力。只返回优化后的提示词内容，不要添加任何解释或说明：\n\n"${inputValue}"`;

      const chatMessages: ChatMessageType[] = [
        {
          id: `temp_${Date.now()}`,
          role: 'user',
          content: optimizeRequest,
          timestamp: Date.now()
        }
      ];

      const response = await sendMessage(chatMessages);

      if (response.success && response.message) {
        setOptimizedResult(response.message);
      } else {
        setError(response.error || '优化失败，请重试');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : '网络错误');
    } finally {
      setLoading(false);
    }
  };

  // 应用优化结果
  const handleApply = () => {
    if (optimizedResult) {
      onApplyPrompt(optimizedResult);
      setOptimizedResult(null);
    }
  };

  // 清空优化结果
  const handleClearResult = () => {
    setOptimizedResult(null);
    setInputValue(currentPrompt);
  };

  return (
    <Card className="w-full h-full flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
          AI 优化
        </CardTitle>
        <Button
          variant="default"
          size="sm"
          onClick={handleOptimize}
          disabled={!inputValue.trim() || isLoading}
          className="gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              优化中...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              优化
            </>
          )}
        </Button>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-3 overflow-hidden">
        <Textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="输入提示词或优化需求..."
          className="min-h-[120px] font-mono text-sm resize-none"
          disabled={isLoading}
        />

        {/* 错误提示 */}
        {error && (
          <div className="p-2 bg-red-500/10 border border-red-500/20 rounded-lg text-xs text-red-400">
            {error}
          </div>
        )}

        {/* 优化结果 */}
        {optimizedResult && (
          <div className="flex-1 flex flex-col gap-2 min-h-0">
            <label className="text-xs text-slate-400 flex items-center justify-between">
              <span>AI 优化结果</span>
              <button
                onClick={handleClearResult}
                className="text-slate-500 hover:text-slate-300 transition-colors"
              >
                清除
              </button>
            </label>
            <div className="flex-1 overflow-auto">
              <div className="p-3 bg-white/5 border border-emerald-500/30 rounded-lg text-sm text-slate-200 whitespace-pre-wrap">
                {optimizedResult}
              </div>
            </div>
            <Button
              onClick={handleApply}
              className="w-full gap-2 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600"
            >
              <ArrowRight className="w-4 h-4" />
              应用此提示词
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
