import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { OptionChip } from "./OptionChip"
import type { Dimension, PromptOption } from "@/types"

export interface DimensionSelectorProps {
  dimension: Dimension
  selection: string[]
  onSelect: (optionId: string) => void
  language?: "zh" | "en"
  showCategories?: boolean
  expanded?: boolean
  onToggleExpanded?: () => void
}

export function DimensionSelector({
  dimension,
  selection,
  onSelect,
  language = "zh",
  showCategories = false,
  expanded = false,
  onToggleExpanded
}: DimensionSelectorProps) {
  const [internalExpanded, setInternalExpanded] = useState(false)

  // 使用外部控制或内部状态
  const isExpanded = onToggleExpanded ? expanded : internalExpanded
  const handleToggle = onToggleExpanded || (() => setInternalExpanded(!internalExpanded))

  const displayName = language === "en" ? dimension.nameEn : dimension.name

  // Get all options flattened for simple mode
  const allOptions: (PromptOption & { categoryName?: string })[] = []
  for (const cat of dimension.categories) {
    for (const opt of cat.options) {
      allOptions.push({ ...opt, categoryName: cat.name })
    }
  }

  // In simple mode, only show options marked as simple
  const visibleOptions = showCategories ? allOptions : allOptions.filter(opt => opt.simple)

  if (!showCategories) {
    return (
      <div className="space-y-2">
        <button
          onClick={handleToggle}
          className="flex items-center gap-1 font-medium text-sm text-slate-300 hover:text-purple-400 transition-colors"
        >
          {isExpanded ? <ChevronDown className="h-4 w-4 text-purple-400" /> : <ChevronRight className="h-4 w-4 text-slate-500" />}
          {displayName}
        </button>
        {isExpanded && (
          <div className="flex flex-wrap gap-2">
            {visibleOptions.map((option) => (
              <OptionChip
                key={option.id}
                option={option}
                selected={selection.includes(option.id)}
                onClick={() => onSelect(option.id)}
                language={language}
              />
            ))}
          </div>
        )}
      </div>
    )
  }

  // Grouped display by categories
  return (
    <div className="space-y-2">
      <button
        onClick={handleToggle}
        className="flex items-center gap-1 font-medium text-sm text-slate-300 hover:text-purple-400 transition-colors"
      >
        {isExpanded ? <ChevronDown className="h-4 w-4 text-purple-400" /> : <ChevronRight className="h-4 w-4 text-slate-500" />}
        {displayName}
      </button>
      {isExpanded && (
        <div className="space-y-3 pl-5">
          {dimension.categories.map((category) => (
            <div key={category.category} className="space-y-1">
              <span className="text-xs text-slate-500">{category.name}</span>
              <div className="flex flex-wrap gap-2">
                {category.options.map((option) => (
                  <OptionChip
                    key={option.id}
                    option={option}
                    selected={selection.includes(option.id)}
                    onClick={() => onSelect(option.id)}
                    language={language}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
