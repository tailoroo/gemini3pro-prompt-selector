import { useState, useCallback } from 'react';
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
  // 管理展开的维度：简单模式默认全部展开，高级模式默认全部收起
  const [expandedDimensions, setExpandedDimensions] = useState<Set<string>>(
    () => new Set(SIMPLE_MODE_DIMENSIONS.map(d => d.key))
  );

  const dimensions = isAdvancedMode ? ADVANCED_MODE_DIMENSIONS : SIMPLE_MODE_DIMENSIONS;

  // 切换单个维度展开状态
  const toggleDimension = useCallback((key: string) => {
    setExpandedDimensions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  }, []);

  // 全部展开
  const expandAll = useCallback(() => {
    const dims = isAdvancedMode ? ADVANCED_MODE_DIMENSIONS : SIMPLE_MODE_DIMENSIONS;
    setExpandedDimensions(new Set(dims.map(d => d.key)));
  }, [isAdvancedMode]);

  // 全部收起
  const collapseAll = useCallback(() => {
    setExpandedDimensions(new Set());
  }, []);

  // 切换模式时设置展开状态：简单模式全部展开，高级模式全部收起
  // 使用目标维度列表而非当前 dimensions，避免读取旧状态
  const handleModeChange = useCallback((advanced: boolean) => {
    setIsAdvancedMode(advanced);
    if (advanced) {
      setExpandedDimensions(new Set());
    } else {
      setExpandedDimensions(new Set(SIMPLE_MODE_DIMENSIONS.map(d => d.key)));
    }
  }, []);

  return (
    <div className="rounded-xl bg-white/[0.08] backdrop-blur-xl border border-white/10 transition-all duration-300 hover:border-purple-500/30">
      {/* 顶部模式切换 */}
      <div className="border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <div>
          <h3 className="font-medium text-slate-200">提示词维度选择</h3>
          <p className="text-xs text-slate-500 mt-1">
            点击标签选择/取消选择
          </p>
        </div>
        <div className="flex items-center gap-4">
          {/* 全部展开/收起按钮 */}
          <div className="flex gap-1">
            <button
              onClick={expandAll}
              className="text-xs text-slate-400 hover:text-purple-400 transition-colors px-2 py-1 rounded hover:bg-white/5"
            >
              全部展开
            </button>
            <span className="text-slate-600">|</span>
            <button
              onClick={collapseAll}
              className="text-xs text-slate-400 hover:text-purple-400 transition-colors px-2 py-1 rounded hover:bg-white/5"
            >
              全部收起
            </button>
          </div>
          {/* 模式切换 */}
          <div className="flex items-center gap-2">
            <span className={cn(
              "text-sm transition-colors",
              !isAdvancedMode ? "text-purple-400 font-medium" : "text-slate-500"
            )}>
              简单
            </span>
            <Switch
              checked={isAdvancedMode}
              onCheckedChange={handleModeChange}
            />
            <span className={cn(
              "text-sm transition-colors",
              isAdvancedMode ? "text-purple-400 font-medium" : "text-slate-500"
            )}>
              高级
            </span>
          </div>
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
              expanded={expandedDimensions.has(dimension.key)}
              onToggleExpanded={() => toggleDimension(dimension.key)}
            />
          );
        })}
      </div>
    </div>
  );
}
