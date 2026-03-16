import type { Dimension } from '@/types';

export const subjectDimension: Dimension = {
  key: 'subject',
  name: '主体',
  nameEn: 'Subject',
  required: true,
  multiSelect: true,
  mode: 'both',
  categories: [
    {
      category: 'people',
      name: '人物类',
      options: [
        { id: 'portrait', zh: '肖像', en: 'Portrait', simple: true },
        { id: 'full_body', zh: '全身', en: 'Full body', simple: true },
        { id: 'group', zh: '群体', en: 'Group shot' },
        { id: 'action', zh: '动作镜头', en: 'Action shot' },
        { id: 'candid', zh: '抓拍', en: 'Candid moment' },
      ],
    },
    {
      category: 'animals',
      name: '动物类',
      options: [
        { id: 'pets', zh: '宠物', en: 'Domestic pets', simple: true },
        { id: 'wildlife', zh: '野生动物', en: 'Wildlife', simple: true },
        { id: 'birds', zh: '鸟类', en: 'Birds' },
        { id: 'marine', zh: '海洋生物', en: 'Marine life' },
        { id: 'insects', zh: '昆虫', en: 'Insects' },
        { id: 'fantasy_creatures', zh: '奇幻生物', en: 'Fantasy creatures' },
      ],
    },
    {
      category: 'objects',
      name: '物品类',
      options: [
        { id: 'everyday', zh: '日常物品', en: 'Everyday objects', simple: true },
        { id: 'electronics', zh: '电子产品', en: 'Electronics' },
        { id: 'vehicles', zh: '车辆', en: 'Vehicles' },
        { id: 'food_drink', zh: '食物饮品', en: 'Food and drink' },
        { id: 'flowers', zh: '花卉植物', en: 'Flowers and plants', simple: true },
        { id: 'jewelry', zh: '珠宝配饰', en: 'Jewelry / Accessories' },
        { id: 'furniture', zh: '家具', en: 'Furniture' },
        { id: 'tools', zh: '工具设备', en: 'Tools and equipment' },
      ],
    },
    {
      category: 'environment',
      name: '风景/环境类',
      options: [
        { id: 'landscape', zh: '风景', en: 'Landscape', simple: true },
        { id: 'cityscape', zh: '城市景观', en: 'Cityscape', simple: true },
        { id: 'seascape', zh: '海景', en: 'Seascape' },
        { id: 'mountains', zh: '山景', en: 'Mountainscape' },
        { id: 'forest', zh: '森林', en: 'Forest' },
        { id: 'desert', zh: '沙漠', en: 'Desert' },
        { id: 'interior', zh: '室内', en: 'Interior' },
        { id: 'exterior', zh: '室外', en: 'Exterior' },
      ],
    },
  ],
};
