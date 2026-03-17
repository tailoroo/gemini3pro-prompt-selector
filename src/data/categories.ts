import { User, Package, Mountain, Palette, Briefcase, Sparkles, Building2, Tv2, Flower2 } from 'lucide-react';
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
    name: '人像写真',
    icon: User,
    description: '自然光、影棚、时尚、婚纱、艺术人像等',
  },
  {
    id: 'product',
    name: '产品摄影',
    icon: Package,
    description: '电商、奢侈品、科技、美妆、服装等',
  },
  {
    id: 'landscape',
    name: '风景自然',
    icon: Mountain,
    description: '山川、森林、海洋、沙漠、四季、星空等',
  },
  {
    id: 'architecture',
    name: '建筑空间',
    icon: Building2,
    description: '现代建筑、古典建筑、室内设计、航拍等',
  },
  {
    id: 'anime',
    name: '动漫二次元',
    icon: Tv2,
    description: '日系动漫、奇幻冒险、赛博朋克、Q版萌系等',
  },
  {
    id: 'guofeng',
    name: '国风东方',
    icon: Flower2,
    description: '水墨山水、汉服人像、敦煌、国潮、宫廷古风等',
  },
  {
    id: 'art',
    name: '艺术插画',
    icon: Palette,
    description: '油画、水彩、概念艺术、数字艺术、超现实等',
  },
  {
    id: 'commercial',
    name: '商业应用',
    icon: Briefcase,
    description: '社交媒体、广告海报、书籍封面、PPT配图等',
  },
  {
    id: 'effects',
    name: '特效场景',
    icon: Sparkles,
    description: '梦幻仙境、恐怖黑暗、史诗壮观、科幻、节日等',
  },
];

export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find(c => c.id === id);
}
