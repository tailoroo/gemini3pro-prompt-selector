import type { Dimension } from '@/types';

export const lightingDimension: Dimension = {
  key: 'lighting',
  name: '光照',
  nameEn: 'Lighting',
  required: false,
  multiSelect: true,
  mode: 'both',
  categories: [
    {
      category: 'natural_light',
      name: '自然光照',
      options: [
        { id: 'natural', zh: '自然光', en: 'Natural lighting', simple: true },
        { id: 'golden_hour', zh: '黄金时刻', en: 'Golden hour', simple: true },
        { id: 'blue_hour', zh: '蓝色时刻', en: 'Blue hour' },
        { id: 'cosmic', zh: '宇宙光照', en: 'Cosmic lighting, otherworldly glow' },
        { id: 'sunlight', zh: '阳光', en: 'Sunlight' },
        { id: 'moonlight', zh: '月光', en: 'Moonlight' },
        { id: 'overcast', zh: '阴天光', en: 'Overcast light' },
        { id: 'diffused', zh: '漫射光', en: 'Diffused light' },
      ],
    },
    {
      category: 'artificial_light',
      name: '人造光照',
      options: [
        { id: 'studio', zh: '影棚光', en: 'Studio lighting', simple: true },
        { id: 'softbox', zh: '柔光箱光', en: 'Softbox lighting' },
        { id: 'ring_light', zh: '环形灯', en: 'Ring light' },
        { id: 'neon', zh: '霓虹灯', en: 'Neon lighting' },
        { id: 'street_light', zh: '街灯', en: 'Street lighting' },
        { id: 'candlelight', zh: '蜡烛光', en: 'Candlelight' },
        { id: 'fairy_lights', zh: '彩灯串', en: 'Fairy lights' },
        // 新增
        { id: 'studio_soft', zh: '柔光箱照明', en: 'Soft studio light', simple: true },
        { id: 'studio_dramatic', zh: '戏剧性布光', en: 'Dramatic studio light' },
        { id: 'spotlight', zh: '聚光灯', en: 'Spotlight' },
        { id: 'jewelry_lighting', zh: '珠宝照明', en: 'Jewelry lighting' },
        { id: 'cinematic', zh: '电影光照', en: 'Cinematic lighting' },
      ],
    },
    {
      category: 'lighting_technique',
      name: '光照技巧',
      options: [
        { id: 'rim_lighting', zh: '轮廓光/逆光', en: 'Rim lighting / Backlighting', simple: true },
        { id: 'side_lighting', zh: '侧光', en: 'Side lighting' },
        { id: 'rembrandt', zh: '伦勃朗光', en: 'Rembrandt lighting' },
        { id: 'butterfly', zh: '蝴蝶光', en: 'Butterfly lighting' },
        { id: 'split', zh: '分割光', en: 'Split lighting' },
        { id: 'chiaroscuro', zh: '明暗对照法', en: 'Chiaroscuro' },
        { id: 'volumetric', zh: '体积光', en: 'Volumetric lighting' },
        { id: 'god_rays', zh: '上帝之光', en: 'God rays' },
        { id: 'lens_flare', zh: '镜头光晕', en: 'Lens flare' },
      ],
    },
    {
      category: 'lighting_intensity',
      name: '光照强度',
      options: [
        { id: 'high_key', zh: '高调照明', en: 'High-key lighting' },
        { id: 'low_key', zh: '低调照明', en: 'Low-key lighting' },
        { id: 'soft_light', zh: '柔光', en: 'Soft light', simple: true },
        { id: 'hard_light', zh: '硬光', en: 'Hard light' },
        { id: 'dramatic', zh: '戏剧光', en: 'Dramatic lighting', simple: true },
        { id: 'moody', zh: '氛围光', en: 'Moody lighting', simple: true },
        // 新增
        { id: 'soft', zh: '柔和光线', en: 'Soft light', simple: true },
        { id: 'bright', zh: '明亮光线', en: 'Bright light' },
        { id: 'warm', zh: '温暖光线', en: 'Warm light' },
        { id: 'night', zh: '夜间光照', en: 'Night lighting' },
        { id: 'dark', zh: '黑暗光照', en: 'Dark lighting, minimal light' },
      ],
    },
  ],
};
