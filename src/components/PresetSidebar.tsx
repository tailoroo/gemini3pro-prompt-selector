import { memo, useState, useMemo, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { CATEGORIES, getPresetsByCategory, getCategoryByPresetId } from '@/data';
import type { Category } from '@/data/categories';
import type { Preset, SubPreset } from '@/data/presets';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface PresetSidebarProps {
  selectedCategory: string | null;
  selectedPreset: string | null;
  selectedSubPreset: string | null;
  onSelectCategory: (categoryId: string) => void;
  onSelectPreset: (presetId: string, categoryId?: string) => void;
  onSelectSubPreset: (subPresetId: string) => void;
}

const SubPresetItem = memo(function SubPresetItem({
  subPreset,
  isSelected,
  onClick
}: {
  subPreset: SubPreset;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
        "border hover:shadow-sm",
        isSelected
          ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white border-transparent shadow-lg shadow-purple-500/30"
          : "bg-purple-500/10 text-purple-300 border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/40"
      )}
    >
      {subPreset.name}
    </button>
  );
});

const PresetItem = memo(function PresetItem({
  preset,
  selectedSubPreset,
  isExpanded,
  isSelected,
  onToggle,
  onSelectSubPreset
}: {
  preset: Preset;
  selectedSubPreset: string | null;
  isExpanded: boolean;
  isSelected: boolean;
  onToggle: () => void;
  onSelectSubPreset: (subPresetId: string) => void;
}) {
  return (
    <div className="ml-2">
      <button
        onClick={onToggle}
        className={cn(
          "w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-all duration-200",
          "text-slate-300 hover:bg-white/10 hover:text-white",
          isExpanded && "bg-white/5 text-white",
          isSelected && "bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-purple-300 border border-purple-500/30"
        )}
      >
        {isExpanded ? (
          <ChevronDown className="h-4 w-4 text-purple-400 flex-shrink-0" />
        ) : (
          <ChevronRight className="h-4 w-4 text-slate-500 flex-shrink-0" />
        )}
        <span className="truncate">{preset.name}</span>
      </button>

      {isExpanded && (
        <div className="ml-4 mt-1.5 border-l-2 border-purple-500/30 pl-3 py-1">
          <div className="flex flex-wrap gap-2">
          {preset.subPresets.map((subPreset) => (
            <SubPresetItem
              key={subPreset.id}
              subPreset={subPreset}
              isSelected={selectedSubPreset === subPreset.id}
              onClick={() => onSelectSubPreset(subPreset.id)}
            />
          ))}
          </div>
        </div>
      )}
    </div>
  );
});

const CategorySection = memo(function CategorySection({
  category,
  selectedPreset,
  selectedSubPreset,
  isExpanded,
  expandedPresets,
  onToggleCategory,
  onTogglePreset,
  onSelectSubPreset
}: {
  category: Category;
  selectedPreset: string | null;
  selectedSubPreset: string | null;
  isExpanded: boolean;
  expandedPresets: Set<string>;
  onToggleCategory: () => void;
  onTogglePreset: (presetId: string) => void;
  onSelectSubPreset: (subPresetId: string) => void;
}) {
  const Icon = category.icon;
  const presets = getPresetsByCategory(category.id);

  return (
    <div className="rounded-lg overflow-hidden bg-white/[0.03] border border-white/5">
      {/* 分类标题 */}
      <button
        onClick={onToggleCategory}
        className={cn(
          "w-full flex items-center gap-3 px-3 py-2.5 text-left transition-colors",
          "hover:bg-white/5",
          isExpanded && "bg-white/5"
        )}
      >
        {isExpanded ? (
          <ChevronDown className="h-4 w-4 text-purple-400 flex-shrink-0" />
        ) : (
          <ChevronRight className="h-4 w-4 text-slate-500 flex-shrink-0" />
        )}
        <Icon className={cn(
          "h-4 w-4 flex-shrink-0",
          isExpanded ? "text-purple-400" : "text-slate-400"
        )} />
        <div className="flex-1 min-w-0">
          <div className="text-sm font-medium text-slate-200 truncate">{category.name}</div>
        </div>
      </button>

      {/* 展开的预设列表 */}
      {isExpanded && (
        <div className="border-t border-white/5 bg-black/20 py-1.5">
          {presets.map((preset) => (
            <PresetItem
              key={preset.id}
              preset={preset}
              selectedSubPreset={selectedSubPreset}
              isExpanded={expandedPresets.has(preset.id)}
              isSelected={selectedPreset === preset.id}
              onToggle={() => onTogglePreset(preset.id)}
              onSelectSubPreset={onSelectSubPreset}
            />
          ))}
        </div>
      )}
    </div>
  );
});

// 预缓存所有预设 ID，避免 expandAll 时重复计算
const ALL_PRESET_IDS = new Set(
  CATEGORIES.flatMap(cat => getPresetsByCategory(cat.id).map(p => p.id))
);

export function PresetSidebar({
  selectedCategory,
  selectedPreset,
  selectedSubPreset,
  onSelectCategory,
  onSelectPreset,
  onSelectSubPreset
}: PresetSidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [manuallyExpandedPresets, setManuallyExpandedPresets] = useState<Set<string>>(new Set());

  // 用 useMemo 避免每次渲染都创建新 Set，防止子组件不必要重渲染
  const expandedPresets = useMemo(() => {
    if (!selectedPreset) return manuallyExpandedPresets;
    const set = new Set(manuallyExpandedPresets);
    set.add(selectedPreset);
    return set;
  }, [manuallyExpandedPresets, selectedPreset]);

  const handleToggleCategory = useCallback((categoryId: string) => {
    const isSelected = selectedCategory === categoryId;

    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });

    if (isSelected) {
      onSelectCategory('');
    } else {
      onSelectCategory(categoryId);
    }
  }, [selectedCategory, onSelectCategory]);

  const handleTogglePreset = useCallback((presetId: string) => {
    setManuallyExpandedPresets(new Set([presetId]));

    const categoryId = getCategoryByPresetId(presetId);
    if (categoryId && selectedCategory !== categoryId) {
      onSelectPreset(presetId, categoryId);
    } else if (categoryId) {
      onSelectPreset(presetId);
    }
  }, [selectedCategory, onSelectPreset]);

  const expandAll = useCallback(() => {
    setExpandedCategories(new Set(CATEGORIES.map(c => c.id)));
    setManuallyExpandedPresets(ALL_PRESET_IDS);
  }, []);

  const collapseAll = useCallback(() => {
    setExpandedCategories(new Set());
    setManuallyExpandedPresets(new Set());
  }, []);

  return (
    <div className="rounded-xl bg-white/[0.08] backdrop-blur-xl border border-white/10 transition-all duration-300 hover:border-purple-500/30">
      {/* 顶部标题栏 */}
      <div className="border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <div>
          <h3 className="font-medium text-slate-200">预设选择</h3>
          <p className="text-xs text-slate-500 mt-1">
            选择分类和预设快速生成提示词
          </p>
        </div>
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
      </div>

      {/* 分类列表 */}
      <div className="p-4 space-y-3">
        {CATEGORIES.map((category) => (
          <CategorySection
            key={category.id}
            category={category}
            selectedPreset={selectedPreset}
            selectedSubPreset={selectedSubPreset}
            isExpanded={expandedCategories.has(category.id)}
            expandedPresets={expandedPresets}
            onToggleCategory={() => handleToggleCategory(category.id)}
            onTogglePreset={handleTogglePreset}
            onSelectSubPreset={onSelectSubPreset}
          />
        ))}
      </div>
    </div>
  );
}
