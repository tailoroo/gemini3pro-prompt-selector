import { useAppStore } from '@/store/useAppStore';
import { DIMENSIONS, getOptionById } from '@/data';
import { Badge } from './ui/badge';
import type { UserSelection } from '@/types';

// 维度显示名称映射
const DIMENSION_LABELS: Record<string, string> = {
  style: '风格',
  view: '视角',
  subject: '主体',
  quality: '画质',
  lighting: '光照',
  color: '色彩',
  industry: '行业',
  mood: '情绪',
  clothing: '服装',
  weather: '天气',
  time: '时间',
  material: '材质',
  effects: '特效',
  camera: '相机',
  negative: '负面',
};

// 维度显示顺序
const DIMENSION_ORDER = [
  'style',
  'view',
  'subject',
  'quality',
  'lighting',
  'color',
  'mood',
  'effects',
  'camera',
  'weather',
  'time',
  'clothing',
  'material',
  'industry',
  'negative',
];

export function SelectionTweaker() {
  const { selection, toggleOption } = useAppStore();

  // 检查是否有任何选中项
  const hasSelection = DIMENSION_ORDER.some((key) => {
    const value = selection[key as keyof UserSelection];
    return Array.isArray(value) && value.length > 0;
  });

  if (!hasSelection) {
    return (
      <div className="rounded-lg border bg-card p-4 text-center text-muted-foreground">
        <p className="text-sm">选择预设后可在此微调</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-card">
      <div className="border-b px-4 py-3">
        <h3 className="font-medium">当前选择</h3>
        <p className="text-xs text-muted-foreground mt-1">点击可取消选中</p>
      </div>
      <div className="p-4 space-y-4">
        {DIMENSION_ORDER.map((dimensionKey) => {
          const value = selection[dimensionKey as keyof UserSelection];
          if (!Array.isArray(value) || value.length === 0) return null;

          const dimensionLabel = DIMENSION_LABELS[dimensionKey] || dimensionKey;

          return (
            <div key={dimensionKey} className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">
                {dimensionLabel}
              </h4>
              <div className="flex flex-wrap gap-2">
                {value.map((optionId) => {
                  const option = getOptionById(dimensionKey, optionId);
                  if (!option) {
                    // 如果找不到选项，显示 ID（但标注为未找到）
                    return (
                      <Badge
                        key={optionId}
                        variant="outline"
                        onClick={() => toggleOption(dimensionKey, optionId)}
                        className="cursor-pointer hover:bg-destructive/20 transition-colors text-destructive"
                        title={`ID: ${optionId}（未在维度数据中找到）`}
                      >
                        {optionId}
                        <span className="ml-1 text-xs opacity-60">?</span>
                      </Badge>
                    );
                  }
                  return (
                    <Badge
                      key={optionId}
                      variant="default"
                      onClick={() => toggleOption(dimensionKey, optionId)}
                      className="cursor-pointer hover:bg-primary/80 transition-colors"
                    >
                      {option.zh}
                    </Badge>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
