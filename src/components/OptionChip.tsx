import { memo } from "react"
import { Badge } from "./ui/badge"
import type { PromptOption } from "@/types"

export interface OptionChipProps {
  option: PromptOption
  selected: boolean
  onClick: () => void
  language?: "zh" | "en"
}

export const OptionChip = memo(function OptionChip({ option, selected, onClick, language = "zh" }: OptionChipProps) {
  const label = language === "en" ? option.en : option.zh
  return (
    <Badge
      variant={selected ? "default" : "outline"}
      onClick={onClick}
      className="cursor-pointer"
    >
      {label}
    </Badge>
  )
})
