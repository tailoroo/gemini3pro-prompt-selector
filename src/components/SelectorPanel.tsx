import { DimensionSelector } from "./DimensionSelector"
import type { Dimension } from "@/types"

export interface SelectorPanelProps {
  mode: "simple" | "advanced"
  dimensions: Dimension[]
  selection: Record<string, string[]>
  onSelect: (dimension: string, optionId: string) => void
  language?: "zh" | "en"
}

// 简单模式显示的维度
const SIMPLE_MODE_DIMENSIONS = ["style", "view", "subject", "quality", "lighting", "color"]

export function SelectorPanel({
  mode,
  dimensions,
  selection,
  onSelect,
  language = "zh"
}: SelectorPanelProps) {
  const filteredDimensions = mode === "simple"
    ? dimensions.filter(d => SIMPLE_MODE_DIMENSIONS.includes(d.key))
    : dimensions

  return (
    <div className="space-y-6">
      {filteredDimensions.map((dimension) => (
        <DimensionSelector
          key={dimension.key}
          dimension={dimension}
          selection={selection[dimension.key] || []}
          onSelect={(optionId) => onSelect(dimension.key, optionId)}
          language={language}
          showCategories={mode === "advanced"}
        />
      ))}
    </div>
  )
}
