import type { Dimension } from '@/types';

export const timeDimension: Dimension = {
  key: 'time',
  name: '时间段',
  nameEn: 'Time of Day',
  required: false,
  multiSelect: true,
  mode: 'advanced',
  categories: [
    {
      category: 'time',
      name: '时间段',
      options: [
        { id: 'dawn', zh: '黎明', en: 'Dawn, early morning' },
        { id: 'sunrise', zh: '日出', en: 'Sunrise' },
        { id: 'morning', zh: '上午', en: 'Morning' },
        { id: 'noon', zh: '正午', en: 'Noon, midday' },
        { id: 'afternoon', zh: '下午', en: 'Afternoon' },
        { id: 'sunset', zh: '日落', en: 'Sunset' },
        { id: 'dusk', zh: '黄昏', en: 'Dusk, twilight' },
        { id: 'evening', zh: '傍晚', en: 'Evening' },
        { id: 'night', zh: '夜晚', en: 'Night, nighttime' },
        { id: 'midnight', zh: '深夜', en: 'Midnight, late night' },
      ],
    },
  ],
};
