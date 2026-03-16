import type { Dimension } from '@/types';

export const negativeDimension: Dimension = {
  key: 'negative',
  name: '负面提示词',
  nameEn: 'Negative',
  required: false,
  multiSelect: true,
  mode: 'advanced',
  categories: [
    {
      category: 'negative',
      name: '负面提示词',
      options: [
        { id: 'deformed', zh: '解剖错误', en: 'deformed eyes, extra fingers, mutated hands, bad anatomy' },
        { id: 'cartoon', zh: '排除卡通', en: 'cartoon, 3d render, illustration, painting' },
        { id: 'blurry', zh: '质量问题', en: 'blurry, low quality, distorted, watermark' },
        { id: 'plastic', zh: '不自然', en: 'plastic look, unnatural symmetry, over-smoothed' },
        { id: 'text', zh: '排除文字', en: 'text, words, signature, captions, watermark' },
        { id: 'oversaturated', zh: '过度饱和', en: 'oversaturated, harsh lighting' },
        { id: 'pixelated', zh: '像素化', en: 'pixelated, low resolution' },
        { id: 'distorted', zh: '扭曲变形', en: 'distorted proportions, warped features' },
      ],
    },
  ],
};
