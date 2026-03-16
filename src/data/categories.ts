import { User, Package, Mountain, Palette, Briefcase, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  description: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'portrait',
    name: '人像摄影',
    icon: User,
    description: '专业人像、自然人像、时尚人像等',
  },
  {
    id: 'product',
    name: '产品摄影',
    icon: Package,
    description: '电商产品、奢侈品、电子产品等',
  },
  {
    id: 'landscape',
    name: '风景建筑',
    icon: Mountain,
    description: '自然风景、城市景观、建筑摄影等',
  },
  {
    id: 'art',
    name: '艺术创作',
    icon: Palette,
    description: '油画风格、动漫风格、概念艺术等',
  },
  {
    id: 'commercial',
    name: '商业应用',
    icon: Briefcase,
    description: '社交媒体、广告宣传、品牌视觉等',
  },
  {
    id: 'effects',
    name: '特效场景',
    icon: Sparkles,
    description: '梦幻氛围、恐怖氛围、史诗场景等',
  },
];

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find(c => c.id === id);
}
