import type { Dimension } from '@/types';

export const materialDimension: Dimension = {
  key: 'material',
  name: '材质/纹理',
  nameEn: 'Material',
  required: false,
  multiSelect: true,
  mode: 'advanced',
  categories: [
    {
      category: 'material',
      name: '材质分类',
      options: [
        { id: 'wood', zh: '木材', en: 'Wood, wooden texture' },
        { id: 'metal', zh: '金属', en: 'Metal, metallic' },
        { id: 'glass', zh: '玻璃', en: 'Glass, transparent' },
        { id: 'fabric', zh: '织物', en: 'Fabric, cloth, textile' },
        { id: 'leather', zh: '皮革', en: 'Leather' },
        { id: 'stone', zh: '石材', en: 'Stone, rocky texture' },
        { id: 'marble', zh: '大理石', en: 'Marble' },
        { id: 'concrete', zh: '混凝土', en: 'Concrete' },
        { id: 'brick', zh: '砖块', en: 'Brick' },
        { id: 'ceramic', zh: '陶瓷', en: 'Ceramic, porcelain' },
        { id: 'plastic', zh: '塑料', en: 'Plastic' },
        { id: 'rubber', zh: '橡胶', en: 'Rubber' },
        { id: 'velvet', zh: '丝绒', en: 'Velvet' },
        { id: 'silk', zh: '丝绸', en: 'Silk' },
        { id: 'fur', zh: '毛皮', en: 'Fur, furry' },
        { id: 'feather', zh: '羽毛', en: 'Feather' },
        { id: 'rust', zh: '锈蚀', en: 'Rusty, rusted metal' },
        { id: 'cracked', zh: '裂纹', en: 'Cracked, weathered' },
      ],
    },
  ],
};
