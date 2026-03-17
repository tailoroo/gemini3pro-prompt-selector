import { useState } from 'react';
import { cn } from '@/lib/utils';
import { CATEGORIES, getPresetsByCategory } from '@/data';
import type { Category } from '@/data/categories';
import type { Preset, SubPreset } from '@/data/presets';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface PresetSidebarProps {
  selectedPreset: string | null;
  selectedSubPreset: string | null;
  onSelectCategory: (categoryId: string) => void;
  onSelectPreset: (presetId: string) => void;
  onSelectSubPreset: (subPresetId: string) => void;
}

function SubPresetItem({
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
        "w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200",
        isSelected
          ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-lg shadow-purple-500/30"
          : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
      )}
    >
      {subPreset.name}
    </button>
  );
}

function PresetItem({
  preset,
  selectedSubPreset,
  isExpanded,
  onToggle,
  onSelectSubPreset
}: {
  preset: Preset;
  selectedSubPreset: string | null;
  isExpanded: boolean;
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
          isExpanded && "bg-white/5 text-white"
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
        <div className="ml-4 mt-1 space-y-1 border-l-2 border-purple-500/30 pl-2">
          {preset.subPresets.map((subPreset) => (
            <SubPresetItem
              key={subPreset.id}
              subPreset={subPreset}
              isSelected={selectedSubPreset === subPreset.id}
              onClick={() => onSelectSubPreset(subPreset.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function CategorySection({
  category,
  selectedSubPreset,
  isExpanded,
  expandedPresets,
  onToggleCategory,
  onTogglePreset,
  onSelectSubPreset
}: {
  category: Category;
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
    <div className="rounded-xl overflow-hidden bg-white/[0.08] backdrop-blur-xl border border-white/10 transition-all duration-300 hover:border-purple-500/30">
      {/* 分类标题 */}
      <button
        onClick={onToggleCategory}
        className={cn(
          "w-full flex items-center gap-3 px-4 py-3 text-left transition-colors",
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
          "h-5 w-5 flex-shrink-0",
          isExpanded ? "text-purple-400" : "text-slate-400"
        )} />
        <div className="flex-1 min-w-0">
          <div className="font-medium text-slate-200 truncate">{category.name}</div>
          <div className="text-xs text-slate-500 truncate">
            {category.description}
          </div>
        </div>
      </button>

      {/* 展开的预设列表 */}
      {isExpanded && (
        <div className="border-t border-white/10 bg-black/20 py-2">
          {presets.map((preset) => (
            <PresetItem
              key={preset.id}
              preset={preset}
              selectedSubPreset={selectedSubPreset}
              isExpanded={expandedPresets.has(preset.id)}
              onToggle={() => onTogglePreset(preset.id)}
              onSelectSubPreset={onSelectSubPreset}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function PresetSidebar({
  selectedSubPreset,
  onSelectCategory: _onSelectCategory,
  onSelectPreset: _onSelectPreset,
  onSelectSubPreset
}: PresetSidebarProps) {
  // 使用本地状态管理展开的分类
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  // 使用本地状态管理展开的预设（二级菜单）
  const [expandedPresets, setExpandedPresets] = useState<Set<string>>(new Set());

  // 切换分类展开状态
  const handleToggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  // 切换预设展开状态
  const handleTogglePreset = (presetId: string) => {
    setExpandedPresets((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(presetId)) {
        newSet.delete(presetId);
      } else {
        newSet.add(presetId);
      }
      return newSet;
    });
  };

  // 全部展开
  const expandAll = () => {
    setExpandedCategories(new Set(CATEGORIES.map(c => c.id)));
    // 展开所有预设
    const allPresets = CATEGORIES.flatMap(cat => getPresetsByCategory(cat.id).map(p => p.id));
    setExpandedPresets(new Set(allPresets));
  };

  // 全部收起
  const collapseAll = () => {
    setExpandedCategories(new Set());
    setExpandedPresets(new Set());
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between px-1 mb-4">
        <h2 className="text-lg font-semibold bg-gradient-to-r from-violet-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">预设选择</h2>
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
      {CATEGORIES.map((category) => (
        <CategorySection
          key={category.id}
          category={category}
          selectedSubPreset={selectedSubPreset}
          isExpanded={expandedCategories.has(category.id)}
          expandedPresets={expandedPresets}
          onToggleCategory={() => handleToggleCategory(category.id)}
          onTogglePreset={handleTogglePreset}
          onSelectSubPreset={onSelectSubPreset}
        />
      ))}
    </div>
  );
}
