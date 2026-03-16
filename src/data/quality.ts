import type { Dimension } from '@/types';

export const qualityDimension: Dimension = {
  key: 'quality',
  name: '画质',
  nameEn: 'Quality',
  required: true,
  multiSelect: true,
  mode: 'both',
  categories: [
    {
      category: 'resolution',
      name: '分辨率',
      options: [
        { id: '8k', zh: '8K分辨率', en: '8K resolution', simple: true },
        { id: '4k', zh: '4K超高清', en: '4K UHD', simple: true },
        { id: 'uhd', zh: '超高清', en: 'Ultra-high definition' },
        { id: 'high_res', zh: '高分辨率', en: 'High resolution', simple: true },
        { id: 'sharp', zh: '清晰对焦', en: 'Sharp focus', simple: true },
        { id: 'hyper_detailed', zh: '超细节化', en: 'Hyper-detailed' },
        { id: 'fine_details', zh: '精细细节', en: 'Fine details' },
        // 新增
        { id: 'hd', zh: '高清', en: 'HD', simple: true },
        { id: 'masterpiece', zh: '杰作级别', en: 'Masterpiece' },
        { id: 'pixelated', zh: '像素化', en: 'Pixelated' },
      ],
    },
    {
      category: 'photo_tech',
      name: '摄影技术',
      options: [
        { id: 'raw_photo', zh: '原始照片', en: 'RAW photo' },
        { id: 'dslr', zh: '单反画质', en: 'DSLR quality', simple: true },
        { id: 'shallow_dof', zh: '浅景深', en: 'Shallow depth of field' },
        { id: 'bokeh', zh: '散景/光斑', en: 'Bokeh' },
        { id: 'long_exposure', zh: '长曝光', en: 'Long exposure' },
        { id: 'hdr', zh: '高动态范围', en: 'High dynamic range (HDR)' },
        { id: 'motion_blur', zh: '动态模糊', en: 'Motion blur' },
        { id: 'tilt_shift', zh: '移轴效果', en: 'Tilt-shift' },
        // 新增
        { id: 'film_grain', zh: '胶片颗粒', en: 'Film grain' },
      ],
    },
    {
      category: 'texture',
      name: '纹理',
      options: [
        { id: 'skin_pores', zh: '细腻皮肤毛孔', en: 'Detailed skin pores' },
        { id: 'natural_skin', zh: '自然皮肤瑕疵', en: 'Natural skin imperfections' },
        { id: 'fabric', zh: '织物纹理', en: 'Fabric weave visible' },
        { id: 'scratched_metal', zh: '刮痕金属', en: 'Scratched metal surface' },
        { id: 'wet_asphalt', zh: '湿润沥青反光', en: 'Wet asphalt reflection' },
        { id: 'rough', zh: '粗糙纹理', en: 'Rough texture' },
        { id: 'smooth', zh: '光滑表面', en: 'Smooth finish' },
        { id: 'glossy', zh: '光泽表面', en: 'Glossy surface' },
        { id: 'matte', zh: '哑光表面', en: 'Matte finish' },
      ],
    },
  ],
};
