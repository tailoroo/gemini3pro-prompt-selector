import type { UserSelection } from '@/types';

// 三级细分选项
export interface SubPreset {
  id: string;
  name: string;
  selection: Partial<UserSelection>;
}

// 二级预设
export interface Preset {
  id: string;
  name: string;
  description: string;
  subPresets: SubPreset[];
  defaultSelection: Partial<UserSelection>;
}

// 按分类组织的预设
export interface PresetsByCategory {
  [categoryId: string]: Preset[];
}

// ==================== 人像摄影预设 ====================
const portraitPresets: Preset[] = [
  {
    id: 'professional',
    name: '专业人像',
    description: '影棚专业拍摄，高端商业人像',
    subPresets: [
      {
        id: 'id_photo',
        name: '证件照',
        selection: {
          style: ['realistic'],
          view: ['front'],
          lighting: ['studio_soft'],
          quality: ['8k', 'sharp'],
          camera: ['portrait_lens'],
        },
      },
      {
        id: 'business_photo',
        name: '形象照',
        selection: {
          style: ['professional'],
          view: ['half_body'],
          lighting: ['studio_soft'],
          quality: ['8k', 'sharp'],
          mood: ['confident'],
        },
      },
      {
        id: 'artistic_portrait',
        name: '艺术写真',
        selection: {
          style: ['artistic'],
          view: ['close_up'],
          lighting: ['dramatic'],
          quality: ['8k'],
          effects: ['bokeh'],
        },
      },
    ],
    defaultSelection: {
      style: ['realistic'],
      view: ['half_body'],
      lighting: ['studio_soft'],
      quality: ['8k', 'sharp'],
    },
  },
  {
    id: 'natural',
    name: '自然人像',
    description: '自然光线下的人像摄影',
    subPresets: [
      {
        id: 'outdoor_portrait',
        name: '户外人像',
        selection: {
          style: ['natural'],
          view: ['half_body'],
          lighting: ['natural'],
          weather: ['sunny'],
          quality: ['8k'],
          effects: ['bokeh'],
        },
      },
      {
        id: 'lifestyle',
        name: '生活照',
        selection: {
          style: ['casual'],
          view: ['full_body'],
          lighting: ['natural'],
          mood: ['relaxed'],
          quality: ['hd'],
        },
      },
      {
        id: 'travel_photo',
        name: '旅行照',
        selection: {
          style: ['documentary'],
          view: ['environmental'],
          lighting: ['natural'],
          mood: ['joyful'],
          quality: ['hd'],
        },
      },
    ],
    defaultSelection: {
      style: ['natural'],
      lighting: ['natural'],
      quality: ['hd'],
    },
  },
  {
    id: 'fashion',
    name: '时尚人像',
    description: '时尚杂志风格人像',
    subPresets: [
      {
        id: 'magazine',
        name: '杂志风',
        selection: {
          style: ['fashion'],
          view: ['full_body'],
          lighting: ['studio_dramatic'],
          quality: ['8k', 'sharp'],
          mood: ['elegant'],
        },
      },
      {
        id: 'runway',
        name: 'T台风',
        selection: {
          style: ['high_fashion'],
          view: ['full_body'],
          lighting: ['spotlight'],
          quality: ['8k'],
          mood: ['confident'],
        },
      },
      {
        id: 'brand_ad',
        name: '品牌广告',
        selection: {
          style: ['commercial'],
          view: ['half_body'],
          lighting: ['studio_soft'],
          quality: ['8k', 'sharp'],
          mood: ['professional'],
        },
      },
    ],
    defaultSelection: {
      style: ['fashion'],
      quality: ['8k'],
      mood: ['elegant'],
    },
  },
  {
    id: 'street',
    name: '街头人像',
    description: '街头环境背景的人像',
    subPresets: [
      {
        id: 'street_snap',
        name: '街拍',
        selection: {
          style: ['street'],
          view: ['full_body'],
          lighting: ['natural'],
          mood: ['candid'],
          quality: ['hd'],
        },
      },
      {
        id: 'environmental_portrait',
        name: '环境人像',
        selection: {
          style: ['documentary'],
          view: ['environmental'],
          lighting: ['natural'],
          quality: ['hd'],
        },
      },
      {
        id: 'candid',
        name: '抓拍',
        selection: {
          style: ['candid'],
          view: ['half_body'],
          lighting: ['natural'],
          mood: ['natural'],
          quality: ['hd'],
        },
      },
    ],
    defaultSelection: {
      style: ['street'],
      lighting: ['natural'],
      quality: ['hd'],
    },
  },
  {
    id: 'retro',
    name: '复古人像',
    description: '复古怀旧效果',
    subPresets: [
      {
        id: 'vintage_photo',
        name: '老照片',
        selection: {
          style: ['vintage'],
          view: ['half_body'],
          color: ['sepia'],
          quality: ['film_grain'],
          effects: ['vintage'],
        },
      },
      {
        id: 'film_look',
        name: '胶片感',
        selection: {
          style: ['film'],
          view: ['half_body'],
          color: ['warm'],
          quality: ['film_grain'],
        },
      },
      {
        id: 'nostalgic',
        name: '怀旧风',
        selection: {
          style: ['nostalgic'],
          view: ['full_body'],
          color: ['muted'],
          quality: ['film_grain'],
          mood: ['melancholic'],
        },
      },
    ],
    defaultSelection: {
      style: ['vintage'],
      color: ['warm'],
      quality: ['film_grain'],
    },
  },
  {
    id: 'business',
    name: '商务人像',
    description: '商务正式风格',
    subPresets: [
      {
        id: 'professional_headshot',
        name: '职业照',
        selection: {
          style: ['professional'],
          view: ['headshot'],
          lighting: ['studio_soft'],
          quality: ['8k', 'sharp'],
          mood: ['confident'],
        },
      },
      {
        id: 'team_photo',
        name: '团队照',
        selection: {
          style: ['corporate'],
          view: ['group'],
          lighting: ['studio_soft'],
          quality: ['8k'],
          mood: ['professional'],
        },
      },
      {
        id: 'corporate',
        name: '企业宣传',
        selection: {
          style: ['corporate'],
          view: ['environmental'],
          lighting: ['natural'],
          quality: ['8k'],
          mood: ['professional'],
        },
      },
    ],
    defaultSelection: {
      style: ['professional'],
      lighting: ['studio_soft'],
      quality: ['8k'],
    },
  },
  {
    id: 'artistic_portrait',
    name: '艺术人像',
    description: '艺术创意表达',
    subPresets: [
      {
        id: 'creative_portrait',
        name: '创意人像',
        selection: {
          style: ['artistic'],
          view: ['close_up'],
          lighting: ['dramatic'],
          quality: ['8k'],
          effects: ['creative'],
        },
      },
      {
        id: 'conceptual',
        name: '概念摄影',
        selection: {
          style: ['conceptual'],
          view: ['artistic'],
          lighting: ['dramatic'],
          quality: ['8k'],
          effects: ['surreal'],
        },
      },
      {
        id: 'surreal_portrait',
        name: '超现实',
        selection: {
          style: ['surreal'],
          view: ['artistic'],
          lighting: ['dramatic'],
          quality: ['8k'],
          effects: ['surreal', 'fantasy'],
        },
      },
    ],
    defaultSelection: {
      style: ['artistic'],
      lighting: ['dramatic'],
      quality: ['8k'],
    },
  },
  {
    id: 'wedding',
    name: '婚纱人像',
    description: '浪漫温馨风格',
    subPresets: [
      {
        id: 'wedding_photo',
        name: '婚纱照',
        selection: {
          style: ['romantic'],
          view: ['full_body'],
          lighting: ['soft'],
          quality: ['8k'],
          mood: ['romantic'],
          effects: ['bokeh'],
        },
      },
      {
        id: 'couple_photo',
        name: '情侣照',
        selection: {
          style: ['romantic'],
          view: ['couple'],
          lighting: ['golden_hour'],
          quality: ['8k'],
          mood: ['romantic'],
        },
      },
      {
        id: 'family_photo',
        name: '家庭照',
        selection: {
          style: ['warm'],
          view: ['group'],
          lighting: ['natural'],
          quality: ['8k'],
          mood: ['warm'],
        },
      },
    ],
    defaultSelection: {
      style: ['romantic'],
      lighting: ['soft'],
      quality: ['8k'],
      mood: ['romantic'],
    },
  },
  {
    id: 'children',
    name: '儿童人像',
    description: '儿童摄影风格',
    subPresets: [
      {
        id: 'baby_photo',
        name: '宝宝照',
        selection: {
          style: ['soft'],
          view: ['close_up'],
          lighting: ['soft'],
          quality: ['8k'],
          mood: ['innocent'],
          color: ['pastel'],
        },
      },
      {
        id: 'kids_portrait',
        name: '儿童写真',
        selection: {
          style: ['playful'],
          view: ['half_body'],
          lighting: ['natural'],
          quality: ['hd'],
          mood: ['joyful'],
        },
      },
      {
        id: 'family_portrait',
        name: '亲子照',
        selection: {
          style: ['warm'],
          view: ['group'],
          lighting: ['natural'],
          quality: ['hd'],
          mood: ['warm'],
        },
      },
    ],
    defaultSelection: {
      style: ['soft'],
      lighting: ['soft'],
      quality: ['hd'],
      mood: ['joyful'],
    },
  },
  {
    id: 'pet',
    name: '宠物人像',
    description: '宠物摄影',
    subPresets: [
      {
        id: 'pet_portrait',
        name: '宠物写真',
        selection: {
          style: ['natural'],
          view: ['close_up'],
          lighting: ['natural'],
          quality: ['8k'],
          mood: ['cute'],
        },
      },
      {
        id: 'cute_pet',
        name: '萌宠',
        selection: {
          style: ['cute'],
          view: ['close_up'],
          lighting: ['soft'],
          quality: ['hd'],
          mood: ['playful'],
        },
      },
      {
        id: 'animal_portrait',
        name: '动物肖像',
        selection: {
          style: ['portrait'],
          view: ['close_up'],
          lighting: ['studio_soft'],
          quality: ['8k', 'sharp'],
        },
      },
    ],
    defaultSelection: {
      style: ['natural'],
      view: ['close_up'],
      lighting: ['natural'],
      quality: ['hd'],
    },
  },
  {
    id: 'fitness',
    name: '健身人像',
    description: '运动健身主题',
    subPresets: [
      {
        id: 'sports_style',
        name: '运动风',
        selection: {
          style: ['athletic'],
          view: ['full_body'],
          lighting: ['dramatic'],
          quality: ['8k', 'sharp'],
          mood: ['energetic'],
        },
      },
      {
        id: 'muscle_show',
        name: '肌肉展示',
        selection: {
          style: ['athletic'],
          view: ['half_body'],
          lighting: ['studio_dramatic'],
          quality: ['8k', 'sharp'],
          mood: ['confident'],
        },
      },
      {
        id: 'fitness_photo',
        name: '健身照',
        selection: {
          style: ['fitness'],
          view: ['full_body'],
          lighting: ['dramatic'],
          quality: ['8k'],
          mood: ['energetic'],
        },
      },
    ],
    defaultSelection: {
      style: ['athletic'],
      lighting: ['dramatic'],
      quality: ['8k'],
      mood: ['energetic'],
    },
  },
  {
    id: 'cosplay',
    name: 'Cosplay',
    description: '角色扮演摄影',
    subPresets: [
      {
        id: 'anime_character',
        name: '动漫角色',
        selection: {
          style: ['anime'],
          view: ['full_body'],
          lighting: ['studio_soft'],
          quality: ['8k'],
          effects: ['anime_style'],
        },
      },
      {
        id: 'game_character',
        name: '游戏角色',
        selection: {
          style: ['fantasy'],
          view: ['full_body'],
          lighting: ['dramatic'],
          quality: ['8k'],
          effects: ['fantasy'],
        },
      },
      {
        id: 'movie_character',
        name: '电影角色',
        selection: {
          style: ['cinematic'],
          view: ['half_body'],
          lighting: ['cinematic'],
          quality: ['8k'],
          effects: ['cinematic'],
        },
      },
    ],
    defaultSelection: {
      style: ['fantasy'],
      quality: ['8k'],
    },
  },
];

// ==================== 产品摄影预设 ====================
const productPresets: Preset[] = [
  {
    id: 'ecommerce',
    name: '电商产品',
    description: '标准电商展示',
    subPresets: [
      {
        id: 'white_background',
        name: '白底图',
        selection: {
          style: ['clean'],
          view: ['product'],
          lighting: ['studio_soft'],
          quality: ['8k', 'sharp'],
          color: ['neutral'],
        },
      },
      {
        id: 'lifestyle_scene',
        name: '场景图',
        selection: {
          style: ['lifestyle'],
          view: ['product_environment'],
          lighting: ['natural'],
          quality: ['8k'],
        },
      },
      {
        id: 'detail_shot',
        name: '详情页图',
        selection: {
          style: ['detailed'],
          view: ['macro'],
          lighting: ['studio_soft'],
          quality: ['8k', 'sharp'],
        },
      },
    ],
    defaultSelection: {
      style: ['clean'],
      lighting: ['studio_soft'],
      quality: ['8k'],
    },
  },
  {
    id: 'luxury',
    name: '奢侈品',
    description: '高端奢华感',
    subPresets: [
      {
        id: 'jewelry',
        name: '珠宝',
        selection: {
          style: ['luxury'],
          view: ['macro'],
          lighting: ['jewelry_lighting'],
          quality: ['8k', 'sharp'],
          effects: ['sparkle'],
        },
      },
      {
        id: 'watch',
        name: '手表',
        selection: {
          style: ['luxury'],
          view: ['macro'],
          lighting: ['studio_dramatic'],
          quality: ['8k', 'sharp'],
          effects: ['reflection'],
        },
      },
      {
        id: 'designer_bag',
        name: '名牌包',
        selection: {
          style: ['luxury'],
          view: ['product'],
          lighting: ['studio_soft'],
          quality: ['8k', 'sharp'],
          mood: ['elegant'],
        },
      },
    ],
    defaultSelection: {
      style: ['luxury'],
      lighting: ['studio_soft'],
      quality: ['8k'],
    },
  },
  {
    id: 'electronics',
    name: '电子产品',
    description: '科技感展示',
    subPresets: [
      {
        id: 'smartphone',
        name: '手机',
        selection: {
          style: ['tech'],
          view: ['product'],
          lighting: ['studio_soft'],
          quality: ['8k', 'sharp'],
          effects: ['screen_glow'],
        },
      },
      {
        id: 'computer',
        name: '电脑',
        selection: {
          style: ['tech'],
          view: ['product_environment'],
          lighting: ['studio_soft'],
          quality: ['8k'],
          effects: ['screen_glow'],
        },
      },
      {
        id: 'accessories',
        name: '数码配件',
        selection: {
          style: ['minimal'],
          view: ['product'],
          lighting: ['studio_soft'],
          quality: ['8k', 'sharp'],
        },
      },
    ],
    defaultSelection: {
      style: ['tech'],
      lighting: ['studio_soft'],
      quality: ['8k'],
    },
  },
  {
    id: 'food',
    name: '食品摄影',
    description: '美食诱惑',
    subPresets: [
      {
        id: 'dish',
        name: '菜品',
        selection: {
          style: ['food_photography'],
          view: ['top_down'],
          lighting: ['natural'],
          quality: ['8k'],
          mood: ['appetizing'],
        },
      },
      {
        id: 'beverage',
        name: '饮料',
        selection: {
          style: ['food_photography'],
          view: ['product'],
          lighting: ['studio_soft'],
          quality: ['8k'],
          effects: ['condensation'],
        },
      },
      {
        id: 'snacks',
        name: '零食',
        selection: {
          style: ['bright'],
          view: ['product'],
          lighting: ['bright'],
          quality: ['hd'],
          color: ['vibrant'],
        },
      },
    ],
    defaultSelection: {
      style: ['food_photography'],
      lighting: ['natural'],
      quality: ['8k'],
    },
  },
  {
    id: 'cosmetics',
    name: '化妆品',
    description: '美妆产品',
    subPresets: [
      {
        id: 'skincare',
        name: '护肤品',
        selection: {
          style: ['clean'],
          view: ['product'],
          lighting: ['studio_soft'],
          quality: ['8k', 'sharp'],
          color: ['soft'],
        },
      },
      {
        id: 'makeup',
        name: '彩妆',
        selection: {
          style: ['beauty'],
          view: ['product'],
          lighting: ['studio_soft'],
          quality: ['8k'],
          color: ['vibrant'],
        },
      },
      {
        id: 'perfume',
        name: '香水',
        selection: {
          style: ['elegant'],
          view: ['product'],
          lighting: ['studio_dramatic'],
          quality: ['8k'],
          effects: ['glass_reflection'],
        },
      },
    ],
    defaultSelection: {
      style: ['clean'],
      lighting: ['studio_soft'],
      quality: ['8k'],
    },
  },
  {
    id: 'clothing',
    name: '服装鞋帽',
    description: '服装展示',
    subPresets: [
      {
        id: 'flat_lay',
        name: '平铺',
        selection: {
          style: ['fashion'],
          view: ['flat_lay'],
          lighting: ['studio_soft'],
          quality: ['hd'],
        },
      },
      {
        id: 'model_wearing',
        name: '模特穿着',
        selection: {
          style: ['fashion'],
          view: ['full_body'],
          lighting: ['studio_soft'],
          quality: ['8k'],
        },
      },
      {
        id: 'detail',
        name: '细节图',
        selection: {
          style: ['detailed'],
          view: ['macro'],
          lighting: ['studio_soft'],
          quality: ['8k', 'sharp'],
        },
      },
    ],
    defaultSelection: {
      style: ['fashion'],
      lighting: ['studio_soft'],
      quality: ['hd'],
    },
  },
  {
    id: 'home_goods',
    name: '家居用品',
    description: '家居场景',
    subPresets: [
      {
        id: 'furniture',
        name: '家具',
        selection: {
          style: ['interior'],
          view: ['product_environment'],
          lighting: ['natural'],
          quality: ['8k'],
        },
      },
      {
        id: 'textile',
        name: '家纺',
        selection: {
          style: ['cozy'],
          view: ['product'],
          lighting: ['soft'],
          quality: ['hd'],
          mood: ['warm'],
        },
      },
      {
        id: 'decor',
        name: '装饰品',
        selection: {
          style: ['lifestyle'],
          view: ['product_environment'],
          lighting: ['natural'],
          quality: ['hd'],
        },
      },
    ],
    defaultSelection: {
      style: ['interior'],
      lighting: ['natural'],
      quality: ['hd'],
    },
  },
  {
    id: 'wine_beverage',
    name: '美酒饮品',
    description: '酒水饮品',
    subPresets: [
      {
        id: 'wine',
        name: '葡萄酒',
        selection: {
          style: ['elegant'],
          view: ['product'],
          lighting: ['studio_dramatic'],
          quality: ['8k'],
          mood: ['sophisticated'],
        },
      },
      {
        id: 'spirits',
        name: '烈酒',
        selection: {
          style: ['luxury'],
          view: ['product'],
          lighting: ['studio_dramatic'],
          quality: ['8k'],
          effects: ['glass_reflection'],
        },
      },
      {
        id: 'coffee',
        name: '咖啡',
        selection: {
          style: ['cozy'],
          view: ['product_environment'],
          lighting: ['warm'],
          quality: ['hd'],
          mood: ['warm'],
        },
      },
    ],
    defaultSelection: {
      style: ['elegant'],
      lighting: ['studio_dramatic'],
      quality: ['8k'],
    },
  },
  {
    id: 'medical',
    name: '医疗器械',
    description: '专业医疗',
    subPresets: [
      {
        id: 'equipment',
        name: '设备',
        selection: {
          style: ['professional'],
          view: ['product'],
          lighting: ['studio_soft'],
          quality: ['8k', 'sharp'],
          mood: ['clinical'],
        },
      },
      {
        id: 'consumables',
        name: '耗材',
        selection: {
          style: ['clean'],
          view: ['product'],
          lighting: ['studio_soft'],
          quality: ['hd'],
          color: ['neutral'],
        },
      },
      {
        id: 'pharmaceutical',
        name: '药品',
        selection: {
          style: ['professional'],
          view: ['product'],
          lighting: ['studio_soft'],
          quality: ['hd'],
          mood: ['clinical'],
        },
      },
    ],
    defaultSelection: {
      style: ['professional'],
      lighting: ['studio_soft'],
      quality: ['hd'],
    },
  },
  {
    id: 'industrial',
    name: '工业产品',
    description: '工业展示',
    subPresets: [
      {
        id: 'machinery',
        name: '机械',
        selection: {
          style: ['industrial'],
          view: ['product'],
          lighting: ['studio_soft'],
          quality: ['8k'],
          mood: ['powerful'],
        },
      },
      {
        id: 'parts',
        name: '零件',
        selection: {
          style: ['detailed'],
          view: ['macro'],
          lighting: ['studio_soft'],
          quality: ['8k', 'sharp'],
        },
      },
      {
        id: 'equipment',
        name: '设备',
        selection: {
          style: ['industrial'],
          view: ['product_environment'],
          lighting: ['studio_soft'],
          quality: ['8k'],
        },
      },
    ],
    defaultSelection: {
      style: ['industrial'],
      lighting: ['studio_soft'],
      quality: ['8k'],
    },
  },
];

// ==================== 风景建筑预设 ====================
const landscapePresets: Preset[] = [
  {
    id: 'nature',
    name: '自然风景',
    description: '大自然风光',
    subPresets: [
      {
        id: 'mountain',
        name: '山脉',
        selection: {
          style: ['landscape'],
          view: ['wide'],
          lighting: ['golden_hour'],
          quality: ['8k'],
          effects: ['hdr'],
        },
      },
      {
        id: 'forest',
        name: '森林',
        selection: {
          style: ['nature'],
          view: ['wide'],
          lighting: ['natural'],
          quality: ['8k'],
          mood: ['peaceful'],
        },
      },
      {
        id: 'grassland',
        name: '草原',
        selection: {
          style: ['landscape'],
          view: ['wide'],
          lighting: ['golden_hour'],
          quality: ['8k'],
          mood: ['serene'],
        },
      },
      {
        id: 'desert',
        name: '沙漠',
        selection: {
          style: ['landscape'],
          view: ['wide'],
          lighting: ['golden_hour'],
          quality: ['8k'],
          color: ['warm'],
        },
      },
    ],
    defaultSelection: {
      style: ['landscape'],
      view: ['wide'],
      lighting: ['golden_hour'],
      quality: ['8k'],
    },
  },
  {
    id: 'cityscape',
    name: '城市景观',
    description: '城市风貌',
    subPresets: [
      {
        id: 'skyline',
        name: '天际线',
        selection: {
          style: ['urban'],
          view: ['wide'],
          lighting: ['blue_hour'],
          quality: ['8k'],
          effects: ['long_exposure'],
        },
      },
      {
        id: 'street_scene',
        name: '街景',
        selection: {
          style: ['street'],
          view: ['eye_level'],
          lighting: ['natural'],
          quality: ['hd'],
          mood: ['urban'],
        },
      },
      {
        id: 'landmark',
        name: '地标',
        selection: {
          style: ['travel'],
          view: ['wide'],
          lighting: ['golden_hour'],
          quality: ['8k'],
        },
      },
    ],
    defaultSelection: {
      style: ['urban'],
      view: ['wide'],
      quality: ['8k'],
    },
  },
  {
    id: 'architecture',
    name: '建筑摄影',
    description: '建筑美学',
    subPresets: [
      {
        id: 'exterior',
        name: '外观',
        selection: {
          style: ['architectural'],
          view: ['wide'],
          lighting: ['golden_hour'],
          quality: ['8k', 'sharp'],
          effects: ['hdr'],
        },
      },
      {
        id: 'architectural_detail',
        name: '细节',
        selection: {
          style: ['architectural'],
          view: ['detail'],
          lighting: ['natural'],
          quality: ['8k', 'sharp'],
        },
      },
      {
        id: 'abstract_architecture',
        name: '抽象',
        selection: {
          style: ['abstract'],
          view: ['artistic'],
          lighting: ['dramatic'],
          quality: ['8k'],
        },
      },
    ],
    defaultSelection: {
      style: ['architectural'],
      view: ['wide'],
      quality: ['8k'],
    },
  },
  {
    id: 'interior',
    name: '室内设计',
    description: '室内空间',
    subPresets: [
      {
        id: 'residential',
        name: '住宅',
        selection: {
          style: ['interior'],
          view: ['wide'],
          lighting: ['natural'],
          quality: ['8k'],
          mood: ['cozy'],
        },
      },
      {
        id: 'commercial_interior',
        name: '商业',
        selection: {
          style: ['interior'],
          view: ['wide'],
          lighting: ['studio_soft'],
          quality: ['8k'],
          mood: ['professional'],
        },
      },
      {
        id: 'hotel',
        name: '酒店',
        selection: {
          style: ['luxury'],
          view: ['wide'],
          lighting: ['warm'],
          quality: ['8k'],
          mood: ['elegant'],
        },
      },
    ],
    defaultSelection: {
      style: ['interior'],
      view: ['wide'],
      lighting: ['natural'],
      quality: ['8k'],
    },
  },
  {
    id: 'night',
    name: '夜景摄影',
    description: '夜景效果',
    subPresets: [
      {
        id: 'city_night',
        name: '城市夜景',
        selection: {
          style: ['night'],
          view: ['wide'],
          lighting: ['night'],
          quality: ['8k'],
          effects: ['long_exposure'],
        },
      },
      {
        id: 'starry_sky',
        name: '星空',
        selection: {
          style: ['astrophotography'],
          view: ['wide'],
          lighting: ['night'],
          quality: ['8k'],
          effects: ['star_trail'],
        },
      },
      {
        id: 'light_trail',
        name: '光轨',
        selection: {
          style: ['night'],
          view: ['wide'],
          lighting: ['night'],
          quality: ['8k'],
          effects: ['light_trail'],
        },
      },
    ],
    defaultSelection: {
      style: ['night'],
      lighting: ['night'],
      quality: ['8k'],
    },
  },
  {
    id: 'seascape',
    name: '海景摄影',
    description: '海边风景',
    subPresets: [
      {
        id: 'beach',
        name: '海滩',
        selection: {
          style: ['landscape'],
          view: ['wide'],
          lighting: ['golden_hour'],
          quality: ['8k'],
          mood: ['peaceful'],
        },
      },
      {
        id: 'sunrise_sunset',
        name: '日出日落',
        selection: {
          style: ['landscape'],
          view: ['wide'],
          lighting: ['golden_hour'],
          quality: ['8k'],
          color: ['warm'],
        },
      },
      {
        id: 'waves',
        name: '海浪',
        selection: {
          style: ['action'],
          view: ['wide'],
          lighting: ['natural'],
          quality: ['8k'],
          effects: ['freeze_motion'],
        },
      },
    ],
    defaultSelection: {
      style: ['landscape'],
      view: ['wide'],
      lighting: ['golden_hour'],
      quality: ['8k'],
    },
  },
  {
    id: 'aerial',
    name: '航拍视角',
    description: '航拍视角',
    subPresets: [
      {
        id: 'drone',
        name: '无人机',
        selection: {
          style: ['aerial'],
          view: ['bird_eye'],
          quality: ['8k'],
          effects: ['hdr'],
        },
      },
      {
        id: 'overhead',
        name: '俯瞰',
        selection: {
          style: ['aerial'],
          view: ['bird_eye'],
          quality: ['8k'],
        },
      },
      {
        id: 'panorama',
        name: '全景',
        selection: {
          style: ['panorama'],
          view: ['wide'],
          quality: ['8k'],
          effects: ['hdr'],
        },
      },
    ],
    defaultSelection: {
      style: ['aerial'],
      view: ['bird_eye'],
      quality: ['8k'],
    },
  },
  {
    id: 'seasons',
    name: '四季风景',
    description: '季节主题',
    subPresets: [
      {
        id: 'spring',
        name: '春',
        selection: {
          style: ['nature'],
          view: ['wide'],
          lighting: ['natural'],
          quality: ['8k'],
          color: ['fresh'],
          mood: ['fresh'],
        },
      },
      {
        id: 'summer',
        name: '夏',
        selection: {
          style: ['nature'],
          view: ['wide'],
          lighting: ['bright'],
          quality: ['8k'],
          color: ['vibrant'],
        },
      },
      {
        id: 'autumn',
        name: '秋',
        selection: {
          style: ['nature'],
          view: ['wide'],
          lighting: ['golden_hour'],
          quality: ['8k'],
          color: ['warm'],
          mood: ['nostalgic'],
        },
      },
      {
        id: 'winter',
        name: '冬',
        selection: {
          style: ['nature'],
          view: ['wide'],
          lighting: ['soft'],
          quality: ['8k'],
          color: ['cool'],
          mood: ['serene'],
        },
      },
    ],
    defaultSelection: {
      style: ['nature'],
      view: ['wide'],
      lighting: ['natural'],
      quality: ['8k'],
    },
  },
];

// ==================== 艺术创作预设 ====================
const artPresets: Preset[] = [
  {
    id: 'oil_painting',
    name: '油画风格',
    description: '油画效果',
    subPresets: [
      {
        id: 'classical_oil',
        name: '古典',
        selection: {
          style: ['oil_painting', 'classical'],
          quality: ['masterpiece'],
          effects: ['oil_texture'],
        },
      },
      {
        id: 'impressionist',
        name: '印象',
        selection: {
          style: ['impressionist'],
          quality: ['masterpiece'],
          effects: ['brush_strokes'],
        },
      },
      {
        id: 'modern_oil',
        name: '现代',
        selection: {
          style: ['oil_painting', 'modern'],
          quality: ['masterpiece'],
          color: ['vibrant'],
        },
      },
    ],
    defaultSelection: {
      style: ['oil_painting'],
      quality: ['masterpiece'],
    },
  },
  {
    id: 'watercolor',
    name: '水彩画',
    description: '水彩效果',
    subPresets: [
      {
        id: 'realistic_watercolor',
        name: '写实',
        selection: {
          style: ['watercolor', 'realistic'],
          quality: ['masterpiece'],
          effects: ['watercolor_bleed'],
        },
      },
      {
        id: 'abstract_watercolor',
        name: '抽象',
        selection: {
          style: ['watercolor', 'abstract'],
          quality: ['masterpiece'],
          effects: ['watercolor_splash'],
        },
      },
      {
        id: 'illustration',
        name: '插画',
        selection: {
          style: ['watercolor', 'illustration'],
          quality: ['masterpiece'],
          color: ['soft'],
        },
      },
    ],
    defaultSelection: {
      style: ['watercolor'],
      quality: ['masterpiece'],
    },
  },
  {
    id: 'anime',
    name: '动漫风格',
    description: '动漫角色',
    subPresets: [
      {
        id: 'japanese_anime',
        name: '日式',
        selection: {
          style: ['anime', 'japanese'],
          quality: ['8k'],
          effects: ['cel_shading'],
          color: ['vibrant'],
        },
      },
      {
        id: 'american_cartoon',
        name: '美式',
        selection: {
          style: ['cartoon', 'american'],
          quality: ['hd'],
          effects: ['bold_lines'],
        },
      },
      {
        id: 'korean_webtoon',
        name: '韩式',
        selection: {
          style: ['webtoon', 'korean'],
          quality: ['hd'],
          effects: ['soft_shading'],
        },
      },
    ],
    defaultSelection: {
      style: ['anime'],
      quality: ['hd'],
    },
  },
  {
    id: 'cyberpunk',
    name: '赛博朋克',
    description: '科幻未来',
    subPresets: [
      {
        id: 'neon_cyber',
        name: '霓虹',
        selection: {
          style: ['cyberpunk'],
          lighting: ['neon'],
          quality: ['8k'],
          effects: ['neon_glow'],
          color: ['neon'],
        },
      },
      {
        id: 'future_city',
        name: '未来城市',
        selection: {
          style: ['cyberpunk', 'sci_fi'],
          view: ['wide'],
          quality: ['8k'],
          effects: ['holographic'],
          lighting: ['neon'],
        },
      },
      {
        id: 'cyborg',
        name: '机械改造',
        selection: {
          style: ['cyberpunk'],
          quality: ['8k'],
          effects: ['mechanical'],
          lighting: ['neon'],
        },
      },
    ],
    defaultSelection: {
      style: ['cyberpunk'],
      quality: ['8k'],
      effects: ['neon_glow'],
    },
  },
  {
    id: 'steampunk',
    name: '蒸汽朋克',
    description: '复古科幻',
    subPresets: [
      {
        id: 'victorian_steam',
        name: '维多利亚',
        selection: {
          style: ['steampunk', 'victorian'],
          quality: ['8k'],
          effects: ['brass_gears'],
          color: ['sepia'],
        },
      },
      {
        id: 'mechanical_steam',
        name: '机械',
        selection: {
          style: ['steampunk'],
          quality: ['8k'],
          effects: ['gears', 'steam'],
        },
      },
      {
        id: 'industrial_steam',
        name: '工业',
        selection: {
          style: ['steampunk', 'industrial'],
          quality: ['8k'],
          effects: ['steam', 'metallic'],
        },
      },
    ],
    defaultSelection: {
      style: ['steampunk'],
      quality: ['8k'],
      effects: ['gears'],
    },
  },
  {
    id: 'concept_art',
    name: '概念艺术',
    description: '概念设计',
    subPresets: [
      {
        id: 'game_concept',
        name: '游戏概念',
        selection: {
          style: ['concept_art'],
          quality: ['masterpiece'],
          effects: ['digital_painting'],
        },
      },
      {
        id: 'movie_concept',
        name: '电影概念',
        selection: {
          style: ['concept_art', 'cinematic'],
          quality: ['masterpiece'],
          effects: ['matte_painting'],
        },
      },
    ],
    defaultSelection: {
      style: ['concept_art'],
      quality: ['masterpiece'],
    },
  },
  {
    id: 'pixel_art',
    name: '像素艺术',
    description: '像素风格',
    subPresets: [
      {
        id: 'eight_bit',
        name: '8-bit',
        selection: {
          style: ['pixel_art'],
          quality: ['pixelated'],
          effects: ['8bit'],
        },
      },
      {
        id: 'sixteen_bit',
        name: '16-bit',
        selection: {
          style: ['pixel_art'],
          quality: ['pixelated'],
          effects: ['16bit'],
        },
      },
      {
        id: 'modern_pixel',
        name: '现代像素',
        selection: {
          style: ['pixel_art'],
          quality: ['hd'],
          effects: ['hd_pixel'],
        },
      },
    ],
    defaultSelection: {
      style: ['pixel_art'],
      effects: ['8bit'],
    },
  },
  {
    id: 'low_poly',
    name: '低多边形',
    description: '3D几何',
    subPresets: [
      {
        id: 'low_poly_3d',
        name: 'Low Poly',
        selection: {
          style: ['low_poly'],
          quality: ['hd'],
          effects: ['geometric'],
        },
      },
      {
        id: 'geometric_abstract',
        name: '几何',
        selection: {
          style: ['geometric'],
          quality: ['hd'],
          effects: ['polygon'],
        },
      },
      {
        id: 'abstract_3d',
        name: '抽象',
        selection: {
          style: ['low_poly', 'abstract'],
          quality: ['hd'],
        },
      },
    ],
    defaultSelection: {
      style: ['low_poly'],
      quality: ['hd'],
    },
  },
  {
    id: 'chinese_style',
    name: '中国风',
    description: '中国传统',
    subPresets: [
      {
        id: 'guofeng',
        name: '国风',
        selection: {
          style: ['chinese'],
          quality: ['masterpiece'],
          effects: ['ink_wash'],
        },
      },
      {
        id: 'dunhuang',
        name: '敦煌',
        selection: {
          style: ['dunhuang'],
          quality: ['masterpiece'],
          color: ['gold', 'red'],
        },
      },
      {
        id: 'ink_wash',
        name: '水墨',
        selection: {
          style: ['ink_wash'],
          quality: ['masterpiece'],
          effects: ['ink_wash'],
          color: ['monochrome'],
        },
      },
      {
        id: 'gongbi',
        name: '工笔',
        selection: {
          style: ['gongbi'],
          quality: ['masterpiece'],
          effects: ['fine_lines'],
        },
      },
    ],
    defaultSelection: {
      style: ['chinese'],
      quality: ['masterpiece'],
    },
  },
  {
    id: 'guochao',
    name: '国潮风',
    description: '国潮风格',
    subPresets: [
      {
        id: 'modern_chinese',
        name: '现代国风',
        selection: {
          style: ['guochao'],
          quality: ['hd'],
          color: ['vibrant'],
          effects: ['chinese_elements'],
        },
      },
      {
        id: 'trendy_design',
        name: '潮流设计',
        selection: {
          style: ['guochao', 'trendy'],
          quality: ['hd'],
          color: ['bold'],
        },
      },
    ],
    defaultSelection: {
      style: ['guochao'],
      quality: ['hd'],
      color: ['vibrant'],
    },
  },
];

// ==================== 商业应用预设 ====================
const commercialPresets: Preset[] = [
  {
    id: 'social_media',
    name: '社交媒体',
    description: '社交平台',
    subPresets: [
      {
        id: 'instagram',
        name: 'Instagram',
        selection: {
          style: ['lifestyle'],
          view: ['square'],
          quality: ['hd'],
          color: ['vibrant'],
          effects: ['instagram_filter'],
        },
      },
      {
        id: 'xiaohongshu',
        name: '小红书',
        selection: {
          style: ['lifestyle'],
          view: ['vertical'],
          quality: ['hd'],
          color: ['soft'],
          mood: ['aesthetic'],
        },
      },
      {
        id: 'moments',
        name: '朋友圈',
        selection: {
          style: ['casual'],
          quality: ['hd'],
          mood: ['relaxed'],
        },
      },
    ],
    defaultSelection: {
      style: ['lifestyle'],
      quality: ['hd'],
    },
  },
  {
    id: 'advertising',
    name: '广告宣传',
    description: '商业广告',
    subPresets: [
      {
        id: 'poster',
        name: '海报',
        selection: {
          style: ['commercial'],
          quality: ['8k'],
          effects: ['eye_catching'],
          color: ['vibrant'],
        },
      },
      {
        id: 'outdoor_ad',
        name: '户外',
        selection: {
          style: ['commercial'],
          view: ['wide'],
          quality: ['8k'],
          effects: ['bold'],
        },
      },
      {
        id: 'magazine_ad',
        name: '杂志广告',
        selection: {
          style: ['editorial'],
          quality: ['8k'],
          mood: ['elegant'],
        },
      },
    ],
    defaultSelection: {
      style: ['commercial'],
      quality: ['8k'],
    },
  },
  {
    id: 'book_cover',
    name: '书籍封面',
    description: '出版物',
    subPresets: [
      {
        id: 'novel_cover',
        name: '小说',
        selection: {
          style: ['artistic'],
          quality: ['8k'],
          effects: ['illustration'],
        },
      },
      {
        id: 'textbook_cover',
        name: '教材',
        selection: {
          style: ['clean'],
          quality: ['hd'],
          color: ['professional'],
        },
      },
      {
        id: 'magazine_cover',
        name: '杂志封面',
        selection: {
          style: ['editorial'],
          quality: ['8k'],
          mood: ['sophisticated'],
        },
      },
    ],
    defaultSelection: {
      style: ['artistic'],
      quality: ['8k'],
    },
  },
  {
    id: 'music_album',
    name: '音乐专辑',
    description: '音乐视觉',
    subPresets: [
      {
        id: 'pop_album',
        name: '流行',
        selection: {
          style: ['pop'],
          quality: ['8k'],
          color: ['vibrant'],
          effects: ['trendy'],
        },
      },
      {
        id: 'rock_album',
        name: '摇滚',
        selection: {
          style: ['rock'],
          quality: ['8k'],
          effects: ['grunge'],
          mood: ['edgy'],
        },
      },
      {
        id: 'electronic_album',
        name: '电子',
        selection: {
          style: ['electronic'],
          quality: ['8k'],
          effects: ['neon'],
          color: ['neon'],
        },
      },
    ],
    defaultSelection: {
      style: ['artistic'],
      quality: ['8k'],
    },
  },
  {
    id: 'video_thumbnail',
    name: '视频封面',
    description: '视频缩略图',
    subPresets: [
      {
        id: 'youtube_thumbnail',
        name: 'YouTube',
        selection: {
          style: ['thumbnail'],
          quality: ['hd'],
          effects: ['eye_catching'],
          color: ['vibrant'],
        },
      },
      {
        id: 'bilibili_thumbnail',
        name: 'B站',
        selection: {
          style: ['anime'],
          quality: ['hd'],
          effects: ['anime_style'],
        },
      },
      {
        id: 'douyin_thumbnail',
        name: '抖音',
        selection: {
          style: ['trendy'],
          quality: ['hd'],
          effects: ['vertical_format'],
        },
      },
    ],
    defaultSelection: {
      style: ['thumbnail'],
      quality: ['hd'],
    },
  },
  {
    id: 'brand_visual',
    name: '品牌视觉',
    description: '品牌形象',
    subPresets: [
      {
        id: 'logo_background',
        name: 'Logo背景',
        selection: {
          style: ['minimal'],
          quality: ['8k'],
          effects: ['clean'],
          color: ['brand'],
        },
      },
      {
        id: 'brand_promo',
        name: '品牌宣传',
        selection: {
          style: ['commercial'],
          quality: ['8k'],
          mood: ['professional'],
        },
      },
    ],
    defaultSelection: {
      style: ['minimal'],
      quality: ['8k'],
    },
  },
  {
    id: 'ecommerce_poster',
    name: '电商海报',
    description: '电商促销',
    subPresets: [
      {
        id: 'sale_poster',
        name: '大促',
        selection: {
          style: ['promotional'],
          quality: ['8k'],
          color: ['red'],
          effects: ['festive'],
          mood: ['exciting'],
        },
      },
      {
        id: 'festival_poster',
        name: '节日',
        selection: {
          style: ['festive'],
          quality: ['8k'],
          effects: ['celebration'],
        },
      },
      {
        id: 'event_poster',
        name: '活动',
        selection: {
          style: ['promotional'],
          quality: ['8k'],
          effects: ['eye_catching'],
        },
      },
    ],
    defaultSelection: {
      style: ['promotional'],
      quality: ['8k'],
    },
  },
  {
    id: 'ppt_image',
    name: 'PPT配图',
    description: '演示配图',
    subPresets: [
      {
        id: 'business_ppt',
        name: '商务',
        selection: {
          style: ['professional'],
          quality: ['hd'],
          color: ['corporate'],
          mood: ['professional'],
        },
      },
      {
        id: 'tech_ppt',
        name: '科技',
        selection: {
          style: ['tech'],
          quality: ['hd'],
          color: ['blue'],
          effects: ['modern'],
        },
      },
      {
        id: 'education_ppt',
        name: '教育',
        selection: {
          style: ['educational'],
          quality: ['hd'],
          color: ['friendly'],
          mood: ['approachable'],
        },
      },
    ],
    defaultSelection: {
      style: ['professional'],
      quality: ['hd'],
    },
  },
];

// ==================== 特效场景预设 ====================
const effectsPresets: Preset[] = [
  {
    id: 'dreamy',
    name: '梦幻氛围',
    description: '梦幻效果',
    subPresets: [
      {
        id: 'fairy_tale',
        name: '仙气',
        selection: {
          style: ['fantasy'],
          quality: ['8k'],
          effects: ['ethereal', 'soft_glow'],
          color: ['pastel'],
          mood: ['dreamy'],
        },
      },
      {
        id: 'aesthetic',
        name: '唯美',
        selection: {
          style: ['aesthetic'],
          quality: ['8k'],
          effects: ['soft_focus'],
          color: ['soft'],
          mood: ['romantic'],
        },
      },
      {
        id: 'ethereal',
        name: '空灵',
        selection: {
          style: ['fantasy'],
          quality: ['8k'],
          effects: ['mist', 'glow'],
          color: ['light'],
          mood: ['mystical'],
        },
      },
    ],
    defaultSelection: {
      style: ['fantasy'],
      quality: ['8k'],
      effects: ['soft_glow'],
      mood: ['dreamy'],
    },
  },
  {
    id: 'horror',
    name: '恐怖氛围',
    description: '恐怖效果',
    subPresets: [
      {
        id: 'scary',
        name: '惊悚',
        selection: {
          style: ['horror'],
          quality: ['8k'],
          effects: ['dark', 'creepy'],
          lighting: ['dark'],
          mood: ['scary'],
        },
      },
      {
        id: 'dark_atmosphere',
        name: '黑暗',
        selection: {
          style: ['horror'],
          quality: ['8k'],
          effects: ['shadows'],
          lighting: ['low_key'],
          color: ['dark'],
        },
      },
      {
        id: 'eerie',
        name: '诡异',
        selection: {
          style: ['horror'],
          quality: ['8k'],
          effects: ['fog', 'mysterious'],
          mood: ['unsettling'],
        },
      },
    ],
    defaultSelection: {
      style: ['horror'],
      quality: ['8k'],
      effects: ['dark'],
      lighting: ['dark'],
    },
  },
  {
    id: 'epic',
    name: '史诗场景',
    description: '史诗效果',
    subPresets: [
      {
        id: 'war_scene',
        name: '战争',
        selection: {
          style: ['epic'],
          view: ['wide'],
          quality: ['8k'],
          effects: ['battle', 'dramatic'],
          mood: ['intense'],
        },
      },
      {
        id: 'disaster',
        name: '灾难',
        selection: {
          style: ['epic'],
          view: ['wide'],
          quality: ['8k'],
          effects: ['destruction'],
          mood: ['dramatic'],
        },
      },
      {
        id: 'grand',
        name: '宏大',
        selection: {
          style: ['epic'],
          view: ['wide'],
          quality: ['8k'],
          effects: ['cinematic'],
          mood: ['awe_inspiring'],
        },
      },
    ],
    defaultSelection: {
      style: ['epic'],
      view: ['wide'],
      quality: ['8k'],
      effects: ['cinematic'],
    },
  },
  {
    id: 'sci_fi_scene',
    name: '科幻场景',
    description: '科幻场景',
    subPresets: [
      {
        id: 'space',
        name: '太空',
        selection: {
          style: ['sci_fi'],
          view: ['wide'],
          quality: ['8k'],
          effects: ['space', 'stars'],
          lighting: ['cosmic'],
        },
      },
      {
        id: 'alien_world',
        name: '外星',
        selection: {
          style: ['sci_fi'],
          view: ['wide'],
          quality: ['8k'],
          effects: ['alien'],
          color: ['unusual'],
        },
      },
      {
        id: 'future_scene',
        name: '未来',
        selection: {
          style: ['sci_fi'],
          view: ['wide'],
          quality: ['8k'],
          effects: ['futuristic'],
          lighting: ['neon'],
        },
      },
    ],
    defaultSelection: {
      style: ['sci_fi'],
      view: ['wide'],
      quality: ['8k'],
      effects: ['futuristic'],
    },
  },
  {
    id: 'retro_effects',
    name: '复古怀旧',
    description: '复古效果',
    subPresets: [
      {
        id: 'eighties',
        name: '80年代',
        selection: {
          style: ['retro'],
          quality: ['hd'],
          effects: ['synthwave'],
          color: ['neon', 'purple'],
        },
      },
      {
        id: 'nineties',
        name: '90年代',
        selection: {
          style: ['retro'],
          quality: ['hd'],
          effects: ['vhs'],
          color: ['warm'],
        },
      },
      {
        id: 'film_effect',
        name: '胶片',
        selection: {
          style: ['film'],
          quality: ['film_grain'],
          effects: ['film_grain'],
          color: ['warm'],
        },
      },
    ],
    defaultSelection: {
      style: ['retro'],
      quality: ['hd'],
      effects: ['vintage'],
    },
  },
  {
    id: 'holiday',
    name: '节日主题',
    description: '节日氛围',
    subPresets: [
      {
        id: 'chinese_new_year',
        name: '春节',
        selection: {
          style: ['festive'],
          quality: ['8k'],
          effects: ['celebration'],
          color: ['red', 'gold'],
          mood: ['joyful'],
        },
      },
      {
        id: 'christmas',
        name: '圣诞',
        selection: {
          style: ['festive'],
          quality: ['8k'],
          effects: ['christmas'],
          color: ['red', 'green'],
          mood: ['warm'],
        },
      },
      {
        id: 'halloween',
        name: '万圣',
        selection: {
          style: ['spooky'],
          quality: ['8k'],
          effects: ['halloween'],
          color: ['orange', 'black'],
          mood: ['playful'],
        },
      },
    ],
    defaultSelection: {
      style: ['festive'],
      quality: ['8k'],
      effects: ['celebration'],
      mood: ['joyful'],
    },
  },
];

// 完整预设数据
export const PRESETS: PresetsByCategory = {
  portrait: portraitPresets,
  product: productPresets,
  landscape: landscapePresets,
  art: artPresets,
  commercial: commercialPresets,
  effects: effectsPresets,
};

// 获取分类下的预设
export function getPresetsByCategory(categoryId: string): Preset[] {
  return PRESETS[categoryId] || [];
}

// 根据 ID 获取预设
export function getPresetById(categoryId: string, presetId: string): Preset | undefined {
  const presets = PRESETS[categoryId];
  return presets?.find(p => p.id === presetId);
}

// 根据 presetId 获取所属的 categoryId
export function getCategoryByPresetId(presetId: string): string | null {
  for (const categoryId of Object.keys(PRESETS)) {
    const presets = PRESETS[categoryId];
    if (presets?.some(p => p.id === presetId)) {
      return categoryId;
    }
  }
  return null;
}

// 根据 ID 获取三级细分
export function getSubPresetById(
  categoryId: string,
  presetId: string,
  subPresetId: string
): SubPreset | undefined {
  const preset = getPresetById(categoryId, presetId);
  return preset?.subPresets.find(s => s.id === subPresetId);
}

// 根据 subPresetId 获取所属的 categoryId 和 presetId
export function getCategoryAndPresetBySubPresetId(subPresetId: string): { categoryId: string; presetId: string } | null {
  for (const categoryId of Object.keys(PRESETS)) {
    const presets = PRESETS[categoryId];
    if (presets) {
      for (const preset of presets) {
        if (preset.subPresets?.some(s => s.id === subPresetId)) {
          return { categoryId, presetId: preset.id };
        }
      }
    }
  }
  return null;
}
