import type { UserSelection } from '@/types';
import { getOptionById } from '@/data';

// 提示词组装顺序（按文档规范）
const ORDER = [
  'customText',  // 自定义文本
  'subject',     // 主体
  'industry',    // 行业
  'clothing',    // 服装
  'mood',        // 情绪
  'style',       // 风格
  'view',        // 视角
  'lighting',    // 光照
  'weather',     // 天气
  'time',        // 时间
  'color',       // 色彩
  'material',    // 材质
  'effects',     // 特效
  'camera',      // 相机
  'quality',     // 画质
];

export function buildPrompt(selection: UserSelection): string {
  const parts: string[] = [];

  for (const key of ORDER) {
    const value = selection[key as keyof UserSelection];

    if (!value) continue;

    if (key === 'customText' && typeof value === 'string' && value.trim()) {
      parts.push(value.trim());
      continue;
    }

    if (Array.isArray(value)) {
      for (const id of value) {
        const option = getOptionById(key, id);
        if (option) {
          parts.push(option.zh);  // 只使用中文
        }
      }
    }
  }

  return parts.join(', ');
}

export function buildNegativePrompt(selection: UserSelection): string {
  if (!selection.negative?.length) return '';

  return selection.negative
    .map(id => {
      const option = getOptionById('negative', id);
      return option ? option.zh : '';  // 只使用中文
    })
    .filter(Boolean)
    .join(', ');
}
