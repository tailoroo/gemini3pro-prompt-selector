import { cn } from '@/lib/utils';
import { getPresetsByCategory } from '@/data';
import type { Preset, SubPreset } from '@/data/presets';
import { ChevronRight } from 'lucide-react';

interface PresetDetailPanelProps {
  categoryId: string | null;
  selectedPreset: string | null;
  selectedSubPreset: string | null;
  onSelectPreset: (presetId: string) => void;
  onSelectSubPreset: (subPresetId: string) => void;
}

function SubPresetChip({
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
        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
        "border hover:shadow-sm",
        isSelected
          ? "bg-primary text-primary-foreground border-primary shadow-sm"
          : "bg-card text-card-foreground border-border hover:border-primary/50 hover:bg-accent"
      )}
    >
      {subPreset.name}
    </button>
  );
}

function PresetSection({
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
    <div className="border rounded-lg overflow-hidden bg-card">
      <button
        onClick={onToggle}
        className={cn(
          "w-full flex items-center justify-between px-4 py-3 text-left transition-colors",
          "hover:bg-accent",
          isExpanded && "bg-accent/50"
        )}
      >
        <div>
          <h3 className="font-semibold">{preset.name}</h3>
          <p className="text-sm text-muted-foreground">{preset.description}</p>
        </div>
        <ChevronRight
          className={cn(
            "h-5 w-5 text-muted-foreground transition-transform duration-200",
            isExpanded && "rotate-90"
          )}
        />
      </button>

      {isExpanded && (
        <div className="px-4 pb-4 pt-2 border-t bg-muted/30">
          <div className="flex flex-wrap gap-2">
            {preset.subPresets.map((subPreset) => (
              <SubPresetChip
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
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-8">
      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
        <ChevronRight className="h-8 w-8 text-muted-foreground" />
      </div>
      <h3 className="text-lg font-medium mb-2">请选择左侧分类</h3>
      <p className="text-sm text-muted-foreground max-w-xs">
        选择一个分类后，这里将显示该分类下的所有预设选项
      </p>
    </div>
  );
}

export function PresetDetailPanel({
  categoryId,
  selectedPreset,
  selectedSubPreset,
  onSelectPreset,
  onSelectSubPreset
}: PresetDetailPanelProps) {
  if (!categoryId) {
    return <EmptyState />;
  }

  const presets = getPresetsByCategory(categoryId);

  if (presets.length === 0) {
    return (
      <div className="flex items-center justify-center h-full min-h-[400px] text-center p-8">
        <p className="text-muted-foreground">该分类下暂无预设</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold px-1 mb-4">选择预设</h2>
      {presets.map((preset) => (
        <PresetSection
          key={preset.id}
          preset={preset}
          selectedSubPreset={selectedSubPreset}
          isExpanded={selectedPreset === preset.id}
          onToggle={() => onSelectPreset(preset.id)}
          onSelectSubPreset={onSelectSubPreset}
        />
      ))}
    </div>
  );
}
