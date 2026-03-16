import { cn } from '@/lib/utils';
import { CATEGORIES, getPresetsByCategory } from '@/data';
import type { Category } from '@/data/categories';
import type { Preset, SubPreset } from '@/data/presets';
import { ChevronRight, ChevronDown } from 'lucide-react';

interface PresetSidebarProps {
  selectedCategory: string | null;
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
        "w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200",
        "hover:bg-accent",
        isSelected
          ? "bg-primary text-primary-foreground"
          : "bg-muted/50"
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
          "w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-all duration-200",
          "hover:bg-accent",
          isExpanded && "bg-accent/50"
        )}
      >
        {isExpanded ? (
          <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />
        ) : (
          <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
        )}
        <span className="truncate">{preset.name}</span>
      </button>

      {isExpanded && (
        <div className="ml-4 mt-1 space-y-1 border-l-2 border-border pl-2">
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
  selectedPreset,
  selectedSubPreset,
  isExpanded,
  onToggleCategory,
  onSelectPreset,
  onSelectSubPreset
}: {
  category: Category;
  selectedPreset: string | null;
  selectedSubPreset: string | null;
  isExpanded: boolean;
  onToggleCategory: () => void;
  onSelectPreset: (presetId: string) => void;
  onSelectSubPreset: (subPresetId: string) => void;
}) {
  const Icon = category.icon;
  const presets = getPresetsByCategory(category.id);

  return (
    <div className="border rounded-lg overflow-hidden bg-card">
      {/* 分类标题 */}
      <button
        onClick={onToggleCategory}
        className={cn(
          "w-full flex items-center gap-3 px-4 py-3 text-left transition-colors",
          "hover:bg-accent",
          isExpanded && "bg-accent/50"
        )}
      >
        {isExpanded ? (
          <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />
        ) : (
          <ChevronRight className="h-4 w-4 text-muted-foreground flex-shrink-0" />
        )}
        <Icon className={cn(
          "h-5 w-5 flex-shrink-0",
          isExpanded ? "text-primary" : "text-muted-foreground"
        )} />
        <div className="flex-1 min-w-0">
          <div className="font-medium truncate">{category.name}</div>
          <div className="text-xs text-muted-foreground truncate">
            {category.description}
          </div>
        </div>
      </button>

      {/* 展开的预设列表 */}
      {isExpanded && (
        <div className="border-t bg-muted/20 py-2">
          {presets.map((preset) => (
            <PresetItem
              key={preset.id}
              preset={preset}
              selectedSubPreset={selectedSubPreset}
              isExpanded={selectedPreset === preset.id}
              onToggle={() => onSelectPreset(preset.id)}
              onSelectSubPreset={onSelectSubPreset}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function PresetSidebar({
  selectedCategory,
  selectedPreset,
  selectedSubPreset,
  onSelectCategory,
  onSelectPreset,
  onSelectSubPreset
}: PresetSidebarProps) {
  const handleToggleCategory = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      // 如果点击已展开的分类，收起它
      onSelectCategory('');
    } else {
      onSelectCategory(categoryId);
    }
  };

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold px-1 mb-4">预设选择</h2>
      {CATEGORIES.map((category) => (
        <CategorySection
          key={category.id}
          category={category}
          selectedPreset={selectedPreset}
          selectedSubPreset={selectedSubPreset}
          isExpanded={selectedCategory === category.id}
          onToggleCategory={() => handleToggleCategory(category.id)}
          onSelectPreset={onSelectPreset}
          onSelectSubPreset={onSelectSubPreset}
        />
      ))}
    </div>
  );
}
