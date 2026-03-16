import { useState } from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "./ui/button"

export interface CopyButtonProps {
  text: string
  onCopy?: () => void
}

export function CopyButton({ text, onCopy }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    onCopy?.()
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button variant="outline" size="icon" onClick={handleCopy}>
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </Button>
  )
}
