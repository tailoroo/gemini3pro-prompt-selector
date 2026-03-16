import type { Dimension } from '@/types';

export const weatherDimension: Dimension = {
  key: 'weather',
  name: '天气/季节',
  nameEn: 'Weather',
  required: false,
  multiSelect: true,
  mode: 'advanced',
  categories: [
    {
      category: 'weather_condition',
      name: '天气状况',
      options: [
        { id: 'sunny', zh: '晴天', en: 'Sunny, clear sky' },
        { id: 'cloudy', zh: '多云', en: 'Cloudy, overcast' },
        { id: 'rainy', zh: '雨天', en: 'Rainy, raining' },
        { id: 'stormy', zh: '暴风雨', en: 'Stormy, thunderstorm' },
        { id: 'snowy', zh: '雪天', en: 'Snowy, snowing' },
        { id: 'foggy', zh: '雾天', en: 'Foggy, misty' },
        { id: 'windy', zh: '大风', en: 'Windy' },
        { id: 'hazy', zh: '雾霾', en: 'Hazy, smoggy' },
      ],
    },
    {
      category: 'season',
      name: '季节',
      options: [
        { id: 'spring', zh: '春天', en: 'Spring season' },
        { id: 'summer', zh: '夏天', en: 'Summer season' },
        { id: 'autumn', zh: '秋天', en: 'Autumn, fall season' },
        { id: 'winter', zh: '冬天', en: 'Winter season' },
      ],
    },
  ],
};
