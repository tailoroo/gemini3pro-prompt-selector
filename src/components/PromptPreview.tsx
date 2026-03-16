import { Copy, Check, X } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"
import { Textarea } from "./ui/textarea"
import { useState } from "react"

export interface PromptPreviewProps {
  prompt: string
  onClear: () => void
}

export function PromptPreview({ prompt, onClear }: PromptPreviewProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="w-full sticky top-4 z-10 shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg">生成的提示词</CardTitle>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onClear}
            className="gap-2 text-muted-foreground hover:text-destructive"
          >
            <X className="h-4 w-4" />
            清空
          </Button>
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
        <Textarea
          value={prompt}
          readOnly
          placeholder="请选择分类和预设来生成提示词..."
          className="min-h-[120px] font-mono text-sm resize-none bg-muted/50"
        />
      </CardContent>
    </Card>
  )
}
