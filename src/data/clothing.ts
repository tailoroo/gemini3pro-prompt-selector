import type { Dimension } from '@/types';

export const clothingDimension: Dimension = {
  key: 'clothing',
  name: '服装/造型',
  nameEn: 'Clothing',
  required: false,
  multiSelect: true,
  mode: 'advanced',
  categories: [
    {
      category: 'clothing_style',
      name: '服装风格',
      options: [
        { id: 'casual', zh: '休闲装', en: 'Casual wear' },
        { id: 'formal', zh: '正装', en: 'Formal attire, business suit' },
        { id: 'streetwear', zh: '街头风格', en: 'Streetwear, urban style' },
        { id: 'bohemian', zh: '波西米亚风', en: 'Bohemian, boho style' },
        { id: 'minimalist', zh: '极简风格', en: 'Minimalist fashion' },
        { id: 'vintage', zh: '复古风格', en: 'Vintage, retro fashion' },
        { id: 'sporty', zh: '运动风格', en: 'Sporty, athletic wear' },
        { id: 'elegant', zh: '优雅风格', en: 'Elegant, sophisticated' },
        { id: 'edgy', zh: '前卫风格', en: 'Edgy, avant-garde' },
        { id: 'preppy', zh: '学院风', en: 'Preppy style' },
      ],
    },
    {
      category: 'specific_clothing',
      name: '特定服装',
      options: [
        { id: 'evening_gown', zh: '晚礼服', en: 'Evening gown, formal dress' },
        { id: 'kimono', zh: '和服', en: 'Kimono, Japanese traditional' },
        { id: 'hanfu', zh: '汉服', en: 'Hanfu, Chinese traditional' },
        { id: 'sari', zh: '纱丽', en: 'Sari, Indian traditional' },
        { id: 'tuxedo', zh: '燕尾服', en: 'Tuxedo' },
        { id: 'leather_jacket', zh: '皮夹克', en: 'Leather jacket' },
        { id: 'denim', zh: '牛仔装', en: 'Denim, jeans' },
        { id: 'hoodie', zh: '连帽衫', en: 'Hoodie, sweatshirt' },
        { id: 'blazer', zh: '西装外套', en: 'Blazer' },
        { id: 'trench_coat', zh: '风衣', en: 'Trench coat' },
      ],
    },
    {
      category: 'accessories',
      name: '配饰',
      options: [
        { id: 'sunglasses', zh: '太阳镜', en: 'Sunglasses' },
        { id: 'hat', zh: '帽子', en: 'Hat, cap' },
        { id: 'scarf', zh: '围巾', en: 'Scarf' },
        { id: 'jewelry', zh: '珠宝首饰', en: 'Jewelry, necklace, earrings' },
        { id: 'watch', zh: '手表', en: 'Watch' },
        { id: 'bag', zh: '包袋', en: 'Bag, handbag, backpack' },
        { id: 'belt', zh: '腰带', en: 'Belt' },
        { id: 'gloves', zh: '手套', en: 'Gloves' },
      ],
    },
  ],
};
