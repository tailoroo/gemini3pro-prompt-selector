import type { Dimension } from '@/types';

export const cameraDimension: Dimension = {
  key: 'camera',
  name: '相机/设备',
  nameEn: 'Camera',
  required: false,
  multiSelect: true,
  mode: 'advanced',
  categories: [
    {
      category: 'camera_model',
      name: '相机品牌',
      options: [
        { id: 'canon', zh: '佳能', en: 'Canon' },
        { id: 'nikon', zh: '尼康', en: 'Nikon' },
        { id: 'sony', zh: '索尼', en: 'Sony' },
        { id: 'fuji', zh: '富士', en: 'Fujifilm' },
        { id: 'leica', zh: '徕卡', en: 'Leica' },
        { id: 'hasselblad', zh: '哈苏', en: 'Hasselblad' },
        { id: 'pentax', zh: '宾得', en: 'Pentax' },
        { id: 'panasonic', zh: '松下', en: 'Panasonic' },
      ],
    },
    {
      category: 'lens_spec',
      name: '镜头规格',
      options: [
        { id: '35mm', zh: '35mm镜头', en: '35mm lens' },
        { id: '50mm', zh: '50mm镜头', en: '50mm lens' },
        { id: '85mm', zh: '85mm人像镜头', en: '85mm portrait lens' },
        { id: '24mm', zh: '24mm广角', en: '24mm wide angle' },
        { id: '70_200mm', zh: '70-200mm长焦', en: '70-200mm telephoto' },
        { id: 'f1_4', zh: 'f/1.4大光圈', en: 'f/1.4 aperture' },
        { id: 'f1_8', zh: 'f/1.8光圈', en: 'f/1.8 aperture' },
        { id: 'f2_8', zh: 'f/2.8光圈', en: 'f/2.8 aperture' },
      ],
    },
    {
      category: 'film_type',
      name: '胶片类型',
      options: [
        { id: 'kodak_portra', zh: 'Kodak Portra', en: 'Kodak Portra 400' },
        { id: 'fuji_velvia', zh: 'Fuji Velvia', en: 'Fujifilm Velvia' },
        { id: 'ilford_hp5', zh: 'Ilford HP5', en: 'Ilford HP5 Plus' },
        { id: 'cinestill', zh: 'CineStill', en: 'CineStill 800T' },
        { id: 'polaroid', zh: '宝丽来', en: 'Polaroid, instant film' },
        { id: 'kodachrome', zh: 'Kodachrome', en: 'Kodachrome' },
      ],
    },
  ],
};
