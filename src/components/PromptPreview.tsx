import { memo, useState, useCallback, useRef, useEffect } from "react"
import { Copy, Check, RotateCcw, Sparkles, Send } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"

export interface PromptPreviewProps {
  prompt: string
  isOptimized?: boolean
  onRestoreOriginal?: () => void
  onSendToAI?: () => void
}

export const PromptPreview = memo(function PromptPreview({ prompt, isOptimized, onRestoreOriginal, onSendToAI }: PromptPreviewProps) {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // 组件卸载时清理定时器，防止内存泄漏
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  // 随内容自动撑高
  useEffect(() => {
    const el = textareaRef.current
    if (!el) return
    el.style.height = 'auto'
    el.style.height = el.scrollHeight + 'px'
  }, [prompt])

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => setCopied(false), 2000)
  }, [prompt])

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          <CardTitle className="text-lg bg-gradient-to-r from-violet-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
            {isOptimized ? 'AI 优化提示词' : '预设提示词'}
          </CardTitle>
          {isOptimized && (
            <span className="flex items-center gap-1 px-2 py-0.5 text-xs bg-emerald-500/20 text-emerald-400 rounded-full">
              <Sparkles className="w-3 h-3" />
              已优化
            </span>
          )}
        </div>
        <div className="flex gap-2">
          {isOptimized && onRestoreOriginal && (
            <Button
              variant="ghost"
              size="sm"
              onClick={onRestoreOriginal}
              className="gap-2"
            >
              <RotateCcw className="h-4 w-4" />
              恢复原始
            </Button>
          )}
          {onSendToAI && (
            <Button
              variant="outline"
              size="sm"
              onClick={onSendToAI}
              className="gap-2 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10"
              disabled={!prompt}
            >
              <Send className="h-4 w-4" />
              发送到AI
            </Button>
          )}
          <Button
            variant="default"
            size="sm"
            onClick={handleCopy}
            className="gap-2"
            disabled={!prompt}
          >
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            {copied ? "已复制!" : "复制"}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <textarea
          ref={textareaRef}
          value={prompt}
          readOnly
          rows={1}
          placeholder="请选择分类和预设来生成提示词..."
          className="w-full font-mono text-sm resize-none overflow-hidden bg-transparent border border-white/10 rounded-md px-3 py-2 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-white/20"
        />
      </CardContent>
    </Card>
  )
})
