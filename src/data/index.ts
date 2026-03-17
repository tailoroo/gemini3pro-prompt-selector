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

/**
 * 根据维度和选项 ID 获取选项
 * @param dimensionKey 维度名称 (style, view, subject 等)
 * @param optionId 选项 ID
 * @returns 选项对象，如果未找到返回 null
 */
export function getOptionById(dimensionKey: string, optionId: string): PromptOption | null {
  const dimension = DIMENSIONS.find(d => d.key === dimensionKey);
  if (!dimension) return null;

  for (const category of dimension.categories) {
    const option = category.options.find(o => o.id === optionId);
    if (option) return option;
  }

  return null;
}

// 工具函数：根据维度键获取维度
export function getDimensionByKey(key: string): Dimension | null {
  return DIMENSIONS.find(d => d.key === key) || null;
}

// 工具函数：获取简单模式的选项
export function getSimpleModeOptions(dimensionKey: string): PromptOption[] {
  const dimension = getDimensionByKey(dimensionKey);
  if (!dimension) return [];

  const options: PromptOption[] = [];
  for (const category of dimension.categories) {
    for (const option of category.options) {
      if (option.simple) {
        options.push(option);
      }
    }
  }
  return options;
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
