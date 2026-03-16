import { useState } from 'react';
import { cn } from '@/lib/utils';
import { SIMPLE_MODE_DIMENSIONS, ADVANCED_MODE_DIMENSIONS } from '@/data';
import { DimensionSelector } from './DimensionSelector';
import { Switch } from './ui/switch';
import type { UserSelection } from '@/types';

interface DimensionPanelProps {
  selection: UserSelection;
  onToggleOption: (dimension: string, optionId: string) => void;
}

export function DimensionPanel({ selection, onToggleOption }: DimensionPanelProps) {
  const [isAdvancedMode, setIsAdvancedMode] = useState(false);

  const dimensions = isAdvancedMode ? ADVANCED_MODE_DIMENSIONS : SIMPLE_MODE_DIMENSIONS;

  return (
    <div className="rounded-lg border bg-card">
      {/* 顶部模式切换 */}
      <div className="border-b px-4 py-3 flex items-center justify-between">
        <div>
          <h3 className="font-medium">提示词维度选择</h3>
          <p className="text-xs text-muted-foreground mt-1">
            点击标签选择/取消选择
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className={cn(
            "text-sm",
            !isAdvancedMode ? "text-primary font-medium" : "text-muted-foreground"
          )}>
            简单
          </span>
          <Switch
            checked={isAdvancedMode}
            onCheckedChange={setIsAdvancedMode}
          />
          <span className={cn(
            "text-sm",
            isAdvancedMode ? "text-primary font-medium" : "text-muted-foreground"
          )}>
            高级
          </span>
        </div>
      </div>

      {/* 维度列表 */}
      <div className="p-4 space-y-6">
        {dimensions.map((dimension) => {
          const dimensionKey = dimension.key as keyof UserSelection;
          const currentSelection = selection[dimensionKey];

          return (
            <DimensionSelector
              key={dimension.key}
              dimension={dimension}
              selection={Array.isArray(currentSelection) ? currentSelection : []}
              onSelect={(optionId) => onToggleOption(dimension.key, optionId)}
              showCategories={isAdvancedMode}
            />
          );
        })}
      </div>
    </div>
  );
}
