import type { Dimension, PromptOption } from '@/types';
import { styleDimension } from './styles';
import { viewDimension } from './views';
import { subjectDimension } from './subjects';
import { qualityDimension } from './quality';
import { lightingDimension } from './lighting';
import { colorDimension } from './colors';
import { industryDimension } from './industries';
import { moodDimension } from './moods';
import { clothingDimension } from './clothing';
import { weatherDimension } from './weather';
import { timeDimension } from './time';
import { materialDimension } from './material';
import { effectsDimension } from './effects';
import { cameraDimension } from './camera';
import { negativeDimension } from './negative';
import { TEMPLATES } from './templates';

// 导出分类和预设
export { CATEGORIES, getCategoryById } from './categories';
export type { Category } from './categories';
export { PRESETS, getPresetsByCategory, getPresetById, getSubPresetById, getCategoryByPresetId, getCategoryAndPresetBySubPresetId } from './presets';
export type { Preset, SubPreset, PresetsByCategory } from './presets';

// 所有维度数据
export const DIMENSIONS: Dimension[] = [
  styleDimension,
  viewDimension,
  subjectDimension,
  qualityDimension,
  lightingDimension,
  colorDimension,
  industryDimension,
  moodDimension,
  clothingDimension,
  weatherDimension,
  timeDimension,
  materialDimension,
  effectsDimension,
  cameraDimension,
  negativeDimension,
];

// 简单模式显示的维度
export const SIMPLE_MODE_DIMENSIONS = DIMENSIONS.filter(
  d => d.mode === 'both' || d.mode === 'simple'
);

// 详细模式显示的维度
export const ADVANCED_MODE_DIMENSIONS = DIMENSIONS;

// 模板
export { TEMPLATES };

// 模块初始化时构建索引，将查询从 O(D*C*O) 降至 O(1)
const _optionIndex = new Map<string, Map<string, PromptOption>>();
const _dimensionIndex = new Map<string, Dimension>();
const _simpleModeOptionsIndex = new Map<string, PromptOption[]>();

for (const dimension of DIMENSIONS) {
  _dimensionIndex.set(dimension.key, dimension);

  const optionMap = new Map<string, PromptOption>();
  const simpleOptions: PromptOption[] = [];

  for (const category of dimension.categories) {
    for (const option of category.options) {
      optionMap.set(option.id, option);
      if (option.simple) simpleOptions.push(option);
    }
  }

  _optionIndex.set(dimension.key, optionMap);
  _simpleModeOptionsIndex.set(dimension.key, simpleOptions);
}

/**
 * 根据维度和选项 ID 获取选项（O(1) 查询）
 */
export function getOptionById(dimensionKey: string, optionId: string): PromptOption | null {
  return _optionIndex.get(dimensionKey)?.get(optionId) ?? null;
}

// 工具函数：根据维度键获取维度（O(1) 查询）
export function getDimensionByKey(key: string): Dimension | null {
  return _dimensionIndex.get(key) ?? null;
}

// 工具函数：获取简单模式的选项（O(1) 查询）
export function getSimpleModeOptions(dimensionKey: string): PromptOption[] {
  return _simpleModeOptionsIndex.get(dimensionKey) ?? [];
}

// 导出所有维度
export {
  styleDimension,
  viewDimension,
  subjectDimension,
  qualityDimension,
  lightingDimension,
  colorDimension,
  industryDimension,
  moodDimension,
  clothingDimension,
  weatherDimension,
  timeDimension,
  materialDimension,
  effectsDimension,
  cameraDimension,
  negativeDimension,
};
