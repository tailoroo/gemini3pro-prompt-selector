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

// ==================== 人像写真 ====================
const portraitPresets: Preset[] = [
  {
    id: 'natural_light',
    name: '自然光人像',
    description: '利用自然光线，捕捉真实情感与氛围',
    subPresets: [
      {
        id: 'golden_hour_portrait',
        name: '黄金时刻',
        selection: {
          time: ['sunset'],
          lighting: ['golden_hour'],
          weather: ['sunny'],
          mood: ['romantic'],
          view: ['three_quarter'],
          style: ['natural'],
        },
      },
      {
        id: 'morning_fresh',
        name: '清晨活力',
        selection: {
          time: ['morning'],
          lighting: ['natural'],
          weather: ['spring'],
          mood: ['fresh'],
          view: ['half_body'],
          style: ['lifestyle'],
        },
      },
      {
        id: 'rainy_mood',
        name: '雨天情绪',
        selection: {
          weather: ['rainy'],
          time: ['evening'],
          lighting: ['street_light'],
          mood: ['melancholic'],
          view: ['environmental'],
          style: ['documentary'],
        },
      },
    ],
    defaultSelection: {
      time: ['afternoon'],
      lighting: ['natural'],
      weather: ['sunny'],
      mood: ['peaceful'],
      view: ['half_body'],
      style: ['natural'],
    },
  },
  {
    id: 'studio_pro',
    name: '影棚专业',
    description: '专业布光系统，高品质商业人像',
    subPresets: [
      {
        id: 'id_photo',
        name: '证件照',
        selection: {
          lighting: ['studio_soft'],
          view: ['front'],
          style: ['realistic'],
          quality: ['sharp'],
          negative: ['deformed'],
        },
      },
      {
        id: 'business_headshot',
        name: '商务头像',
        selection: {
          lighting: ['butterfly'],
          view: ['headshot'],
          style: ['professional'],
          mood: ['confident'],
          quality: ['8k'],
        },
      },
      {
        id: 'dramatic_studio',
        name: '戏剧影棚',
        selection: {
          lighting: ['rembrandt'],
          view: ['close_up'],
          style: ['artistic'],
          mood: ['dramatic'],
          color: ['dark'],
        },
      },
    ],
    defaultSelection: {
      lighting: ['studio_soft'],
      view: ['half_body'],
      style: ['professional'],
      quality: ['8k'],
    },
  },
  {
    id: 'fashion_editorial',
    name: '时尚大片',
    description: '杂志级时尚摄影，展现时装与个性',
    subPresets: [
      {
        id: 'magazine_cover',
        name: '杂志封面',
        selection: {
          style: ['high_fashion'],
          lighting: ['studio_dramatic'],
          mood: ['edgy'],
          color: ['bold'],
          view: ['full_body'],
          clothing: ['evening_gown'],
        },
      },
      {
        id: 'street_fashion',
        name: '街头时尚',
        selection: {
          style: ['street'],
          clothing: ['streetwear'],
          weather: ['cloudy'],
          time: ['afternoon'],
          view: ['full_body'],
          mood: ['urban'],
        },
      },
      {
        id: 'minimalist_fashion',
        name: '极简时尚',
        selection: {
          style: ['minimalism'],
          color: ['neutral'],
          lighting: ['high_key'],
          clothing: ['minimalist'],
          view: ['half_body'],
          mood: ['elegant'],
        },
      },
    ],
    defaultSelection: {
      style: ['fashion'],
      lighting: ['cinematic'],
      view: ['full_body'],
      mood: ['edgy'],
    },
  },
  {
    id: 'outdoor_lifestyle',
    name: '户外生活',
    description: '真实生活场景，捕捉自然状态',
    subPresets: [
      {
        id: 'beach_vacation',
        name: '海边度假',
        selection: {
          weather: ['sunny'],
          time: ['noon'],
          view: ['full_body'],
          clothing: ['casual'],
          mood: ['happy'],
          color: ['vibrant'],
        },
      },
      {
        id: 'autumn_forest_walk',
        name: '秋林漫步',
        selection: {
          weather: ['autumn'],
          time: ['afternoon'],
          lighting: ['diffused'],
          clothing: ['casual'],
          mood: ['nostalgic'],
          color: ['earth'],
        },
      },
      {
        id: 'winter_coat',
        name: '冬日外套',
        selection: {
          weather: ['snowy'],
          time: ['morning'],
          clothing: ['trench_coat'],
          mood: ['serene'],
          color: ['cool'],
          style: ['lifestyle'],
        },
      },
    ],
    defaultSelection: {
      weather: ['sunny'],
      time: ['afternoon'],
      style: ['lifestyle'],
      mood: ['happy'],
    },
  },
  {
    id: 'art_portrait',
    name: '艺术写真',
    description: '融合艺术概念，创造独特视觉叙事',
    subPresets: [
      {
        id: 'film_grain_portrait',
        name: '胶片质感',
        selection: {
          style: ['film'],
          camera: ['kodak_portra'],
          effects: ['film_grain'],
          color: ['sepia'],
          mood: ['nostalgic'],
          view: ['environmental'],
        },
      },
      {
        id: 'conceptual_double',
        name: '概念叠影',
        selection: {
          style: ['conceptual'],
          effects: ['double_exposure'],
          color: ['cool'],
          mood: ['mysterious'],
          view: ['close_up'],
        },
      },
      {
        id: 'neon_light_portrait',
        name: '霓虹光绘',
        selection: {
          time: ['night'],
          lighting: ['neon'],
          effects: ['light_leak'],
          color: ['neon'],
          mood: ['ethereal'],
          style: ['artistic'],
        },
      },
    ],
    defaultSelection: {
      style: ['artistic'],
      effects: ['soft_focus'],
      mood: ['mysterious'],
    },
  },
  {
    id: 'wedding_love',
    name: '婚纱情侣',
    description: '浪漫爱情故事，记录最美时刻',
    subPresets: [
      {
        id: 'outdoor_wedding',
        name: '户外婚礼',
        selection: {
          weather: ['spring'],
          time: ['sunset'],
          lighting: ['golden_hour'],
          clothing: ['evening_gown'],
          mood: ['romantic'],
          view: ['couple'],
        },
      },
      {
        id: 'indoor_wedding',
        name: '室内婚礼',
        selection: {
          lighting: ['soft_light'],
          color: ['pastels'],
          clothing: ['evening_gown'],
          mood: ['warm'],
          view: ['couple'],
          effects: ['soft_glow'],
        },
      },
      {
        id: 'pre_wedding_autumn',
        name: '秋日婚前',
        selection: {
          weather: ['autumn'],
          time: ['sunset'],
          lighting: ['golden_hour'],
          clothing: ['elegant'],
          mood: ['romantic'],
          color: ['earth'],
        },
      },
    ],
    defaultSelection: {
      mood: ['romantic'],
      lighting: ['soft_light'],
      color: ['pastels'],
      view: ['couple'],
    },
  },
  {
    id: 'portrait_special',
    name: '特殊题材',
    description: '儿童、老人、运动等特定人群写真',
    subPresets: [
      {
        id: 'kids_play',
        name: '儿童嬉戏',
        selection: {
          mood: ['happy'],
          weather: ['sunny'],
          time: ['morning'],
          color: ['vibrant'],
          style: ['candid'],
          view: ['full_body'],
        },
      },
      {
        id: 'elder_wisdom',
        name: '老人智慧',
        selection: {
          style: ['documentary'],
          lighting: ['natural'],
          mood: ['peaceful'],
          view: ['close_up'],
          color: ['warm'],
        },
      },
      {
        id: 'fitness_power',
        name: '运动健身',
        selection: {
          style: ['athletic'],
          mood: ['powerful'],
          lighting: ['dramatic'],
          view: ['full_body'],
          color: ['vibrant'],
          time: ['morning'],
        },
      },
    ],
    defaultSelection: {
      style: ['natural'],
      lighting: ['natural'],
      mood: ['happy'],
    },
  },
];

// ==================== 产品摄影 ====================
const productPresets: Preset[] = [
  {
    id: 'ecommerce_basic',
    name: '电商标准',
    description: '干净专业，满足电商平台展示需求',
    subPresets: [
      {
        id: 'white_bg_clean',
        name: '白底标准',
        selection: {
          color: ['light'],
          lighting: ['studio_soft'],
          quality: ['sharp'],
          view: ['product'],
          style: ['clean'],
        },
      },
      {
        id: 'lifestyle_context',
        name: '生活场景',
        selection: {
          style: ['lifestyle'],
          lighting: ['natural'],
          mood: ['appetizing'],
          color: ['warm'],
          view: ['product_environment'],
        },
      },
      {
        id: 'detail_macro',
        name: '细节特写',
        selection: {
          view: ['macro'],
          lighting: ['softbox'],
          quality: ['hyper_detailed'],
          effects: ['bokeh'],
          style: ['detailed'],
        },
      },
    ],
    defaultSelection: {
      lighting: ['studio_soft'],
      quality: ['sharp'],
      view: ['product'],
      style: ['clean'],
    },
  },
  {
    id: 'luxury_premium',
    name: '奢侈品高端',
    description: '极致精工与奢华质感的高端展示',
    subPresets: [
      {
        id: 'jewelry_gold',
        name: '金饰珠宝',
        selection: {
          lighting: ['jewelry_lighting'],
          material: ['metallic'],
          color: ['gold'],
          quality: ['hyper_detailed'],
          view: ['macro'],
          style: ['luxury'],
        },
      },
      {
        id: 'watch_precision',
        name: '精工腕表',
        selection: {
          lighting: ['studio_dramatic'],
          material: ['metal'],
          quality: ['fine_details'],
          view: ['close_up'],
          color: ['metallic'],
          style: ['luxury'],
        },
      },
      {
        id: 'glass_perfume',
        name: '香水瓶',
        selection: {
          material: ['glass'],
          lighting: ['rim_lighting'],
          color: ['jewel'],
          view: ['product'],
          effects: ['reflection'],
          style: ['luxury'],
        },
      },
    ],
    defaultSelection: {
      style: ['luxury'],
      lighting: ['studio_dramatic'],
      quality: ['hyper_detailed'],
      color: ['gold'],
    },
  },
  {
    id: 'tech_products',
    name: '科技产品',
    description: '冷酷科技感，展现高科技质感',
    subPresets: [
      {
        id: 'smartphone_clean',
        name: '手机平板',
        selection: {
          style: ['tech'],
          color: ['cool'],
          lighting: ['studio_soft'],
          view: ['product'],
          effects: ['screen_glow'],
          material: ['glass'],
        },
      },
      {
        id: 'audio_device',
        name: '音频设备',
        selection: {
          lighting: ['rim_lighting'],
          material: ['metal'],
          color: ['dark'],
          view: ['detail'],
          mood: ['powerful'],
          style: ['tech'],
        },
      },
      {
        id: 'gaming_gear',
        name: '游戏装备',
        selection: {
          style: ['cyberpunk'],
          color: ['neon'],
          lighting: ['neon'],
          effects: ['neon_glow'],
          view: ['product'],
          mood: ['edgy'],
        },
      },
    ],
    defaultSelection: {
      style: ['tech'],
      color: ['cool'],
      lighting: ['cinematic'],
    },
  },
  {
    id: 'cosmetics_beauty',
    name: '美妆护肤',
    description: '精致细腻，展现美妆产品魅力',
    subPresets: [
      {
        id: 'skincare_clean',
        name: '护肤品',
        selection: {
          color: ['pastels'],
          lighting: ['soft_light'],
          material: ['glass'],
          view: ['product'],
          style: ['clean'],
          mood: ['fresh'],
        },
      },
      {
        id: 'makeup_bold',
        name: '彩妆大胆',
        selection: {
          color: ['vibrant'],
          lighting: ['high_key'],
          mood: ['confident'],
          view: ['close_up'],
          effects: ['bokeh'],
          style: ['fashion'],
        },
      },
      {
        id: 'candle_cozy',
        name: '香薰蜡烛',
        selection: {
          lighting: ['candlelight'],
          color: ['warm'],
          material: ['ceramic'],
          mood: ['cozy'],
          time: ['evening'],
          style: ['cozy'],
        },
      },
    ],
    defaultSelection: {
      lighting: ['soft_light'],
      color: ['pastels'],
      style: ['clean'],
    },
  },
  {
    id: 'food_drink_product',
    name: '食品饮料',
    description: '勾起食欲，展现美食诱人的视觉魅力',
    subPresets: [
      {
        id: 'hero_dish',
        name: '美食主图',
        selection: {
          lighting: ['natural'],
          mood: ['appetizing'],
          time: ['noon'],
          view: ['top_down'],
          color: ['vibrant'],
          style: ['food_photography'],
        },
      },
      {
        id: 'coffee_morning',
        name: '精品咖啡',
        selection: {
          lighting: ['warm'],
          color: ['earth'],
          mood: ['cozy'],
          time: ['morning'],
          material: ['ceramic'],
          style: ['lifestyle'],
        },
      },
      {
        id: 'cocktail_night',
        name: '夜间鸡尾酒',
        selection: {
          time: ['night'],
          lighting: ['neon'],
          material: ['glass'],
          color: ['vibrant'],
          mood: ['exciting'],
          style: ['night'],
        },
      },
    ],
    defaultSelection: {
      lighting: ['natural'],
      mood: ['appetizing'],
      style: ['food_photography'],
    },
  },
  {
    id: 'clothing_display',
    name: '服装展示',
    description: '多种形式展现服装的设计与质感',
    subPresets: [
      {
        id: 'flat_lay_minimal',
        name: '平铺展示',
        selection: {
          view: ['flat_lay'],
          color: ['neutral'],
          lighting: ['studio_soft'],
          style: ['minimal'],
          quality: ['sharp'],
        },
      },
      {
        id: 'model_editorial',
        name: '模特大片',
        selection: {
          clothing: ['formal'],
          style: ['fashion'],
          lighting: ['cinematic'],
          view: ['full_body'],
          mood: ['elegant'],
          color: ['earth'],
        },
      },
      {
        id: 'street_style_clothing',
        name: '街头风格',
        selection: {
          clothing: ['streetwear'],
          style: ['street'],
          weather: ['cloudy'],
          time: ['afternoon'],
          view: ['full_body'],
          mood: ['urban'],
        },
      },
    ],
    defaultSelection: {
      view: ['full_body'],
      style: ['fashion'],
      lighting: ['natural'],
    },
  },
  {
    id: 'home_goods',
    name: '家居生活',
    description: '温馨自然，展现家居产品的生活美学',
    subPresets: [
      {
        id: 'nordic_furniture',
        name: '北欧家具',
        selection: {
          style: ['minimalism'],
          color: ['neutral'],
          lighting: ['natural'],
          material: ['wood'],
          mood: ['peaceful'],
          view: ['product_environment'],
        },
      },
      {
        id: 'cozy_textiles',
        name: '家纺软装',
        selection: {
          material: ['velvet'],
          color: ['warm'],
          lighting: ['soft_light'],
          mood: ['cozy'],
          style: ['cozy'],
          time: ['evening'],
        },
      },
      {
        id: 'kitchen_lifestyle',
        name: '厨房场景',
        selection: {
          style: ['lifestyle'],
          lighting: ['natural'],
          color: ['fresh'],
          time: ['morning'],
          mood: ['warm'],
          material: ['ceramic'],
        },
      },
    ],
    defaultSelection: {
      style: ['lifestyle'],
      lighting: ['natural'],
      color: ['warm'],
      material: ['wood'],
    },
  },
];

// ==================== 风景自然 ====================
const landscapePresets: Preset[] = [
  {
    id: 'mountain_grand',
    name: '山川壮阔',
    description: '雄伟山脉，展现大自然的磅礴气势',
    subPresets: [
      {
        id: 'misty_mountain_morning',
        name: '云海晨雾',
        selection: {
          time: ['dawn'],
          weather: ['foggy'],
          lighting: ['god_rays'],
          mood: ['ethereal'],
          subject: ['mountains'],
          color: ['muted'],
        },
      },
      {
        id: 'golden_peak',
        name: '金色山峰',
        selection: {
          time: ['sunset'],
          weather: ['sunny'],
          lighting: ['golden_hour'],
          color: ['warm'],
          subject: ['mountains'],
          mood: ['epic'],
        },
      },
      {
        id: 'snow_mountain',
        name: '雪山圣洁',
        selection: {
          weather: ['snowy'],
          time: ['morning'],
          color: ['cool'],
          subject: ['mountains'],
          mood: ['awe_inspiring'],
          style: ['landscape'],
        },
      },
    ],
    defaultSelection: {
      subject: ['mountains'],
      lighting: ['natural'],
      mood: ['epic'],
      style: ['landscape'],
    },
  },
  {
    id: 'forest_secret',
    name: '森林秘境',
    description: '光影交织的森林，神秘而宁静',
    subPresets: [
      {
        id: 'morning_rays_forest',
        name: '晨光穿林',
        selection: {
          time: ['morning'],
          lighting: ['god_rays'],
          weather: ['sunny'],
          color: ['fresh'],
          subject: ['forest'],
          mood: ['peaceful'],
        },
      },
      {
        id: 'rainy_forest',
        name: '雨后森林',
        selection: {
          weather: ['rainy'],
          color: ['forest_green'],
          mood: ['serene'],
          lighting: ['diffused'],
          subject: ['forest'],
          effects: ['mist'],
        },
      },
      {
        id: 'night_forest',
        name: '深夜密林',
        selection: {
          time: ['night'],
          lighting: ['moonlight'],
          mood: ['mysterious'],
          color: ['cool'],
          subject: ['forest'],
          effects: ['fog'],
        },
      },
    ],
    defaultSelection: {
      subject: ['forest'],
      lighting: ['natural'],
      mood: ['peaceful'],
    },
  },
  {
    id: 'ocean_coast',
    name: '海洋海岸',
    description: '辽阔海景，从平静到波澜壮阔',
    subPresets: [
      {
        id: 'sunrise_ocean',
        name: '日出海面',
        selection: {
          time: ['sunrise'],
          weather: ['sunny'],
          color: ['vibrant'],
          mood: ['awe_inspiring'],
          subject: ['seascape'],
          lighting: ['golden_hour'],
        },
      },
      {
        id: 'storm_waves',
        name: '暴风骇浪',
        selection: {
          weather: ['stormy'],
          time: ['dusk'],
          mood: ['dramatic'],
          color: ['dark'],
          subject: ['seascape'],
          effects: ['dramatic'],
        },
      },
      {
        id: 'tropical_clear',
        name: '热带海湾',
        selection: {
          weather: ['sunny'],
          color: ['teal'],
          time: ['noon'],
          subject: ['seascape'],
          mood: ['happy'],
          style: ['nature'],
        },
      },
    ],
    defaultSelection: {
      subject: ['seascape'],
      lighting: ['natural'],
      mood: ['peaceful'],
    },
  },
  {
    id: 'desert_vast',
    name: '沙漠荒原',
    description: '无垠沙漠，孤独而壮美',
    subPresets: [
      {
        id: 'golden_dunes',
        name: '金色沙丘',
        selection: {
          time: ['sunset'],
          color: ['warm'],
          weather: ['sunny'],
          subject: ['desert'],
          mood: ['ethereal'],
          style: ['landscape'],
        },
      },
      {
        id: 'starry_desert',
        name: '星空沙漠',
        selection: {
          time: ['midnight'],
          lighting: ['moonlight'],
          effects: ['stars'],
          mood: ['awe_inspiring'],
          subject: ['desert'],
          color: ['cool'],
        },
      },
      {
        id: 'sandstorm',
        name: '沙尘飞扬',
        selection: {
          weather: ['windy'],
          color: ['muted'],
          mood: ['dramatic'],
          subject: ['desert'],
          effects: ['fog'],
          time: ['afternoon'],
        },
      },
    ],
    defaultSelection: {
      subject: ['desert'],
      time: ['sunset'],
      color: ['warm'],
    },
  },
  {
    id: 'seasons_change',
    name: '四季更迭',
    description: '四季轮转，感受自然色彩的变化',
    subPresets: [
      {
        id: 'cherry_spring',
        name: '樱花春日',
        selection: {
          weather: ['spring'],
          color: ['pastels'],
          mood: ['romantic'],
          time: ['morning'],
          subject: ['flowers'],
          lighting: ['natural'],
        },
      },
      {
        id: 'autumn_leaves',
        name: '秋叶金红',
        selection: {
          weather: ['autumn'],
          color: ['earth'],
          time: ['afternoon'],
          mood: ['nostalgic'],
          subject: ['forest'],
          lighting: ['sunlight'],
        },
      },
      {
        id: 'winter_silence',
        name: '冬日寂静',
        selection: {
          weather: ['snowy'],
          color: ['cool'],
          mood: ['peaceful'],
          time: ['morning'],
          subject: ['landscape'],
          lighting: ['diffused'],
        },
      },
    ],
    defaultSelection: {
      style: ['nature'],
      lighting: ['natural'],
      mood: ['peaceful'],
    },
  },
  {
    id: 'night_sky',
    name: '夜空星辰',
    description: '仰望星河，感受宇宙的浩瀚与神秘',
    subPresets: [
      {
        id: 'milky_way',
        name: '银河之夜',
        selection: {
          time: ['midnight'],
          effects: ['stars'],
          lighting: ['moonlight'],
          mood: ['ethereal'],
          subject: ['landscape'],
          color: ['cool'],
        },
      },
      {
        id: 'aurora_borealis',
        name: '极光绚烂',
        selection: {
          time: ['night'],
          effects: ['star_trail'],
          color: ['vibrant'],
          mood: ['awe_inspiring'],
          subject: ['landscape'],
          weather: ['winter'],
        },
      },
      {
        id: 'city_light_trail',
        name: '城市光轨',
        selection: {
          time: ['night'],
          lighting: ['cinematic'],
          color: ['warm'],
          subject: ['cityscape'],
          mood: ['exciting'],
          effects: ['light_trail'],
        },
      },
    ],
    defaultSelection: {
      time: ['night'],
      lighting: ['moonlight'],
      effects: ['stars'],
      mood: ['ethereal'],
    },
  },
];

// ==================== 建筑空间 ====================
const architecturePresets: Preset[] = [
  {
    id: 'modern_building',
    name: '现代建筑',
    description: '简洁线条与现代材料，展现当代建筑美学',
    subPresets: [
      {
        id: 'minimal_exterior',
        name: '极简外观',
        selection: {
          style: ['minimalism'],
          color: ['cool'],
          time: ['noon'],
          lighting: ['sunlight'],
          subject: ['exterior'],
          material: ['glass'],
        },
      },
      {
        id: 'glass_curtain_wall',
        name: '玻璃幕墙',
        selection: {
          material: ['glass'],
          color: ['blue'],
          time: ['afternoon'],
          effects: ['reflection'],
          subject: ['exterior'],
          style: ['architectural'],
        },
      },
      {
        id: 'night_illumination',
        name: '夜间灯光',
        selection: {
          time: ['night'],
          effects: ['light_trail'],
          color: ['warm'],
          subject: ['exterior'],
          lighting: ['cinematic'],
          style: ['night'],
        },
      },
    ],
    defaultSelection: {
      style: ['architectural'],
      lighting: ['natural'],
      subject: ['exterior'],
    },
  },
  {
    id: 'classic_building',
    name: '古典建筑',
    description: '历史沉淀，展现建筑的岁月与文化',
    subPresets: [
      {
        id: 'european_palace',
        name: '欧式宫殿',
        selection: {
          style: ['classical'],
          color: ['gold'],
          time: ['afternoon'],
          lighting: ['sunlight'],
          subject: ['exterior'],
          material: ['marble'],
        },
      },
      {
        id: 'ancient_ruins',
        name: '古代遗址',
        selection: {
          style: ['documentary'],
          material: ['stone'],
          color: ['muted'],
          time: ['noon'],
          subject: ['exterior'],
          mood: ['nostalgic'],
        },
      },
      {
        id: 'industrial_heritage',
        name: '工业遗址',
        selection: {
          style: ['industrial'],
          material: ['rust'],
          color: ['muted'],
          mood: ['nostalgic'],
          subject: ['exterior'],
          effects: ['grunge'],
        },
      },
    ],
    defaultSelection: {
      style: ['classical'],
      lighting: ['natural'],
      subject: ['exterior'],
    },
  },
  {
    id: 'interior_design',
    name: '室内空间',
    description: '精心设计的室内环境，光影与材质的融合',
    subPresets: [
      {
        id: 'nordic_minimal_interior',
        name: '北欧极简',
        selection: {
          style: ['minimalism'],
          color: ['neutral'],
          lighting: ['natural'],
          material: ['wood'],
          subject: ['interior'],
          mood: ['peaceful'],
        },
      },
      {
        id: 'luxury_hotel_interior',
        name: '奢华酒店',
        selection: {
          style: ['luxury'],
          lighting: ['warm'],
          color: ['gold'],
          material: ['marble'],
          subject: ['interior'],
          mood: ['sophisticated'],
        },
      },
      {
        id: 'industrial_office',
        name: '工业风办公',
        selection: {
          style: ['industrial'],
          material: ['concrete'],
          color: ['cool'],
          lighting: ['dramatic'],
          subject: ['interior'],
          mood: ['powerful'],
        },
      },
    ],
    defaultSelection: {
      style: ['interior'],
      lighting: ['natural'],
      subject: ['interior'],
    },
  },
  {
    id: 'aerial_architecture',
    name: '航拍视角',
    description: '俯瞰城市与大地，独特的鸟瞰视角',
    subPresets: [
      {
        id: 'city_dusk_aerial',
        name: '都市黄昏',
        selection: {
          view: ['aerial'],
          time: ['dusk'],
          color: ['warm'],
          subject: ['cityscape'],
          mood: ['epic'],
          lighting: ['golden_hour'],
        },
      },
      {
        id: 'nature_top_aerial',
        name: '自然俯瞰',
        selection: {
          view: ['aerial'],
          weather: ['sunny'],
          color: ['vibrant'],
          subject: ['landscape'],
          mood: ['awe_inspiring'],
          time: ['morning'],
        },
      },
      {
        id: 'night_city_aerial',
        name: '夜城鸟瞰',
        selection: {
          view: ['aerial'],
          time: ['night'],
          effects: ['light_trail'],
          color: ['warm'],
          subject: ['cityscape'],
          mood: ['exciting'],
        },
      },
    ],
    defaultSelection: {
      view: ['aerial'],
      time: ['dusk'],
      subject: ['cityscape'],
    },
  },
];

// ==================== 动漫二次元 ====================
const animePresets: Preset[] = [
  {
    id: 'japanese_anime',
    name: '日系动漫',
    description: '经典日本动漫风格，清新细腻',
    subPresets: [
      {
        id: 'school_anime',
        name: '校园少女',
        selection: {
          style: ['anime'],
          mood: ['innocent'],
          color: ['pastels'],
          weather: ['spring'],
          clothing: ['casual'],
          effects: ['sparkle'],
        },
      },
      {
        id: 'battle_hero_anime',
        name: '战斗英雄',
        selection: {
          style: ['anime'],
          mood: ['intense'],
          effects: ['battle'],
          color: ['vibrant'],
          view: ['action'],
          lighting: ['dramatic'],
        },
      },
      {
        id: 'cozy_daily_anime',
        name: '日常生活',
        selection: {
          style: ['anime'],
          mood: ['cozy'],
          time: ['afternoon'],
          weather: ['sunny'],
          color: ['warm'],
          effects: ['soft_glow'],
        },
      },
    ],
    defaultSelection: {
      style: ['anime'],
      color: ['vibrant'],
      mood: ['energetic'],
    },
  },
  {
    id: 'fantasy_adventure',
    name: '奇幻冒险',
    description: '魔法与奇幻世界，天马行空的想象',
    subPresets: [
      {
        id: 'magic_world',
        name: '魔法世界',
        selection: {
          style: ['fantasy'],
          effects: ['sparkle', 'particle_effects'],
          color: ['vibrant'],
          mood: ['whimsical'],
          lighting: ['volumetric'],
        },
      },
      {
        id: 'dark_fantasy',
        name: '暗黑奇幻',
        selection: {
          style: ['horror'],
          effects: ['dark'],
          color: ['dark'],
          mood: ['ominous'],
          time: ['midnight'],
          lighting: ['dramatic'],
        },
      },
      {
        id: 'xianxia_fairy',
        name: '仙侠飞天',
        selection: {
          style: ['fantasy'],
          effects: ['glow'],
          color: ['vibrant'],
          mood: ['ethereal'],
          clothing: ['hanfu'],
          lighting: ['god_rays'],
        },
      },
    ],
    defaultSelection: {
      style: ['fantasy'],
      effects: ['sparkle'],
      color: ['vibrant'],
    },
  },
  {
    id: 'cyberpunk_anime',
    name: '赛博朋克',
    description: '未来都市霓虹，高科技低生活',
    subPresets: [
      {
        id: 'neon_city_anime',
        name: '霓虹都市',
        selection: {
          style: ['cyberpunk'],
          lighting: ['neon'],
          color: ['neon'],
          time: ['night'],
          effects: ['neon', 'glitch'],
        },
      },
      {
        id: 'android_girl',
        name: '机械少女',
        selection: {
          style: ['cyberpunk'],
          effects: ['glitch', 'holographic'],
          color: ['cool'],
          mood: ['edgy'],
          material: ['metal'],
        },
      },
      {
        id: 'hacker_digital',
        name: '黑客数字',
        selection: {
          style: ['cyberpunk'],
          color: ['green'],
          mood: ['intense'],
          effects: ['scan_lines', 'chromatic'],
          time: ['night'],
        },
      },
    ],
    defaultSelection: {
      style: ['cyberpunk'],
      lighting: ['neon'],
      color: ['neon'],
      time: ['night'],
    },
  },
  {
    id: 'chibi_cute',
    name: 'Q版萌系',
    description: '可爱Q版风格，圆润可爱',
    subPresets: [
      {
        id: 'super_cute_chibi',
        name: '超萌角色',
        selection: {
          style: ['chibi'],
          color: ['vibrant'],
          mood: ['cute'],
          effects: ['sparkle', 'bokeh_overlay'],
          view: ['full_body'],
        },
      },
      {
        id: 'chibi_animal',
        name: '动物Q版',
        selection: {
          style: ['chibi'],
          color: ['pastels'],
          mood: ['innocent'],
          effects: ['soft_glow'],
          clothing: ['casual'],
          subject: ['pets'],
        },
      },
      {
        id: 'chibi_holiday',
        name: '节日Q版',
        selection: {
          style: ['chibi'],
          color: ['red'],
          mood: ['festive'],
          effects: ['celebration', 'sparkle'],
          weather: ['winter'],
        },
      },
    ],
    defaultSelection: {
      style: ['chibi'],
      color: ['pastels'],
      mood: ['cute'],
    },
  },
  {
    id: 'beautiful_character',
    name: '美型角色',
    description: '精致五官与独特气质的角色设计',
    subPresets: [
      {
        id: 'cool_beauty_char',
        name: '清冷美人',
        selection: {
          style: ['illustration'],
          color: ['cool'],
          mood: ['mysterious'],
          lighting: ['rim_lighting'],
          effects: ['soft_focus'],
          view: ['close_up'],
        },
      },
      {
        id: 'warm_smile_char',
        name: '温暖笑颜',
        selection: {
          style: ['anime'],
          color: ['warm'],
          mood: ['joyful'],
          lighting: ['natural'],
          weather: ['summer'],
          view: ['half_body'],
        },
      },
      {
        id: 'mysterious_night_char',
        name: '神秘暗夜',
        selection: {
          style: ['illustration'],
          color: ['purple'],
          mood: ['mystical'],
          time: ['night'],
          effects: ['glow'],
          lighting: ['moonlight'],
        },
      },
    ],
    defaultSelection: {
      style: ['illustration'],
      color: ['cool'],
      mood: ['mysterious'],
    },
  },
];

// ==================== 国风东方 ====================
const guofengPresets: Preset[] = [
  {
    id: 'ink_landscape',
    name: '水墨山水',
    description: '传统水墨技法，意境深远',
    subPresets: [
      {
        id: 'splash_ink',
        name: '泼墨山水',
        selection: {
          style: ['ink_wash'],
          color: ['monochromatic'],
          mood: ['peaceful'],
          subject: ['mountains'],
          effects: ['ink_wash'],
          view: ['wide'],
        },
      },
      {
        id: 'fine_birds',
        name: '工笔花鸟',
        selection: {
          style: ['gongbi'],
          color: ['earth'],
          mood: ['serene'],
          subject: ['birds'],
          effects: ['fine_lines'],
          view: ['detail'],
        },
      },
      {
        id: 'empty_space_landscape',
        name: '留白意境',
        selection: {
          style: ['shan_shui'],
          color: ['monochromatic'],
          mood: ['ethereal'],
          subject: ['landscape'],
          effects: ['mist'],
          view: ['wide_angle'],
        },
      },
    ],
    defaultSelection: {
      style: ['ink_wash'],
      color: ['monochromatic'],
      mood: ['peaceful'],
    },
  },
  {
    id: 'hanfu_portrait',
    name: '汉服人像',
    description: '汉服古风，传统服饰与现代审美融合',
    subPresets: [
      {
        id: 'classical_lady',
        name: '古典仕女',
        selection: {
          clothing: ['hanfu'],
          style: ['guofeng'],
          lighting: ['natural'],
          color: ['pastels'],
          weather: ['spring'],
          view: ['full_body'],
        },
      },
      {
        id: 'wuxia_hero',
        name: '武侠侠客',
        selection: {
          clothing: ['hanfu'],
          style: ['fantasy'],
          mood: ['intense'],
          time: ['dusk'],
          effects: ['cinematic'],
          view: ['full_body'],
        },
      },
      {
        id: 'festival_dress_hanfu',
        name: '节日盛装',
        selection: {
          clothing: ['hanfu'],
          weather: ['spring'],
          color: ['vibrant'],
          mood: ['festive'],
          effects: ['particle_effects'],
          time: ['evening'],
        },
      },
    ],
    defaultSelection: {
      clothing: ['hanfu'],
      style: ['guofeng'],
      mood: ['elegant'],
    },
  },
  {
    id: 'dunhuang_art',
    name: '敦煌飞天',
    description: '千年壁画，华美神秘的敦煌艺术',
    subPresets: [
      {
        id: 'mural_style',
        name: '壁画风格',
        selection: {
          style: ['dunhuang'],
          color: ['earth'],
          mood: ['mysterious'],
          effects: ['chinese_elements'],
          material: ['stone'],
          view: ['wide'],
        },
      },
      {
        id: 'flying_apsara',
        name: '飞天仙女',
        selection: {
          style: ['dunhuang'],
          effects: ['glow', 'particle_effects'],
          color: ['gold'],
          mood: ['ethereal'],
          view: ['full_body'],
        },
      },
      {
        id: 'cave_art',
        name: '洞窟艺术',
        selection: {
          style: ['dunhuang'],
          color: ['warm'],
          time: ['night'],
          lighting: ['candlelight'],
          mood: ['mystical'],
          material: ['stone'],
        },
      },
    ],
    defaultSelection: {
      style: ['dunhuang'],
      color: ['earth'],
      mood: ['mysterious'],
    },
  },
  {
    id: 'guochao_modern',
    name: '现代国潮',
    description: '传统文化与现代潮流融合，中国风新表达',
    subPresets: [
      {
        id: 'guochao_street',
        name: '国潮街头',
        selection: {
          style: ['guochao'],
          color: ['bold'],
          mood: ['urban'],
          time: ['night'],
          lighting: ['neon'],
          clothing: ['streetwear'],
        },
      },
      {
        id: 'guochao_sport',
        name: '国潮运动',
        selection: {
          style: ['guochao'],
          color: ['vibrant'],
          mood: ['energetic'],
          clothing: ['sporty'],
          time: ['afternoon'],
          weather: ['sunny'],
        },
      },
      {
        id: 'cyber_china_style',
        name: '数字中国',
        selection: {
          style: ['cyber_china'],
          color: ['neon'],
          effects: ['holographic', 'chinese_elements'],
          time: ['night'],
          mood: ['intense'],
        },
      },
    ],
    defaultSelection: {
      style: ['guochao'],
      color: ['vibrant'],
      mood: ['urban'],
    },
  },
  {
    id: 'palace_style',
    name: '宫廷古风',
    description: '金碧辉煌，皇家气派的宫廷美学',
    subPresets: [
      {
        id: 'forbidden_city',
        name: '故宫金碧',
        selection: {
          style: ['palace'],
          color: ['gold'],
          lighting: ['sunlight'],
          time: ['morning'],
          subject: ['exterior'],
          mood: ['epic'],
        },
      },
      {
        id: 'night_palace',
        name: '暗夜宫廷',
        selection: {
          style: ['palace'],
          time: ['night'],
          lighting: ['candlelight'],
          mood: ['mysterious'],
          color: ['dark'],
          effects: ['fog'],
        },
      },
      {
        id: 'palace_lady',
        name: '宫廷丽人',
        selection: {
          style: ['palace'],
          clothing: ['hanfu'],
          color: ['red'],
          lighting: ['soft_light'],
          mood: ['elegant'],
          view: ['full_body'],
        },
      },
    ],
    defaultSelection: {
      style: ['palace'],
      color: ['gold'],
      mood: ['epic'],
    },
  },
  {
    id: 'folk_art',
    name: '民俗风情',
    description: '民间传统艺术，烟火气与节日氛围',
    subPresets: [
      {
        id: 'lantern_night',
        name: '灯笼夜色',
        selection: {
          style: ['folk_art'],
          color: ['red'],
          mood: ['festive'],
          time: ['evening'],
          lighting: ['fairy_lights'],
          weather: ['winter'],
        },
      },
      {
        id: 'paper_cutting_art',
        name: '剪纸艺术',
        selection: {
          style: ['folk_art', 'flat_design'],
          color: ['red'],
          mood: ['festive'],
          effects: ['geometric'],
          view: ['flat_lay'],
        },
      },
      {
        id: 'market_candid',
        name: '民间市集',
        selection: {
          style: ['documentary'],
          color: ['warm'],
          mood: ['natural'],
          time: ['morning'],
          weather: ['sunny'],
          effects: ['film_grain'],
        },
      },
    ],
    defaultSelection: {
      style: ['folk_art'],
      color: ['warm'],
      mood: ['festive'],
    },
  },
];

// ==================== 艺术插画 ====================
const artPresets: Preset[] = [
  {
    id: 'oil_painting_art',
    name: '油画艺术',
    description: '厚重笔触与丰富色彩，经典油画技法',
    subPresets: [
      {
        id: 'classical_realism_oil',
        name: '古典写实',
        selection: {
          style: ['oil_painting'],
          lighting: ['chiaroscuro'],
          mood: ['dramatic'],
          quality: ['masterpiece'],
          color: ['warm'],
          effects: ['oil_texture'],
        },
      },
      {
        id: 'impressionist_light',
        name: '印象派光影',
        selection: {
          style: ['impressionism'],
          color: ['vibrant'],
          lighting: ['sunlight'],
          mood: ['happy'],
          effects: ['brush_strokes'],
          weather: ['sunny'],
        },
      },
      {
        id: 'expressionist_soul',
        name: '表现主义',
        selection: {
          style: ['expressionism'],
          color: ['bold'],
          mood: ['intense'],
          effects: ['oil_texture'],
          view: ['close_up'],
          lighting: ['dramatic'],
        },
      },
    ],
    defaultSelection: {
      style: ['oil_painting'],
      quality: ['masterpiece'],
      mood: ['dramatic'],
    },
  },
  {
    id: 'watercolor_art',
    name: '水彩插画',
    description: '透明色层，柔和渐变的水彩美学',
    subPresets: [
      {
        id: 'soft_botanical',
        name: '柔美植物',
        selection: {
          style: ['watercolor'],
          color: ['pastels'],
          mood: ['peaceful'],
          effects: ['watercolor_bleed'],
          subject: ['flowers'],
          lighting: ['natural'],
        },
      },
      {
        id: 'landscape_watercolor',
        name: '风景水彩',
        selection: {
          style: ['watercolor'],
          color: ['fresh'],
          mood: ['serene'],
          effects: ['watercolor_splash'],
          subject: ['landscape'],
          weather: ['spring'],
        },
      },
      {
        id: 'abstract_watercolor',
        name: '抽象水彩',
        selection: {
          style: ['watercolor', 'abstract'],
          color: ['vibrant'],
          mood: ['whimsical'],
          effects: ['watercolor_bleed'],
          view: ['artistic'],
        },
      },
    ],
    defaultSelection: {
      style: ['watercolor'],
      color: ['pastels'],
      mood: ['peaceful'],
    },
  },
  {
    id: 'concept_design',
    name: '概念设计',
    description: '游戏与电影级别的概念艺术创作',
    subPresets: [
      {
        id: 'game_concept_art',
        name: '游戏概念',
        selection: {
          style: ['concept_art'],
          mood: ['epic'],
          effects: ['cinematic'],
          color: ['vibrant'],
          quality: ['hyper_detailed'],
          lighting: ['dramatic'],
        },
      },
      {
        id: 'movie_sci_fi_concept',
        name: '电影科幻',
        selection: {
          style: ['cinematic'],
          lighting: ['dramatic'],
          effects: ['volumetric'],
          color: ['dark'],
          mood: ['intense'],
          quality: ['masterpiece'],
        },
      },
      {
        id: 'fantasy_world_concept',
        name: '奇幻世界',
        selection: {
          style: ['fantasy'],
          effects: ['particle_effects'],
          color: ['vibrant'],
          mood: ['awe_inspiring'],
          lighting: ['volumetric'],
          quality: ['hyper_detailed'],
        },
      },
    ],
    defaultSelection: {
      style: ['concept_art'],
      quality: ['hyper_detailed'],
      mood: ['epic'],
    },
  },
  {
    id: 'digital_art',
    name: '数字艺术',
    description: '数字媒介创作，3D、像素与故障艺术',
    subPresets: [
      {
        id: 'three_d_render',
        name: '3D渲染',
        selection: {
          style: ['3d_render'],
          lighting: ['cinematic'],
          quality: ['hyper_detailed'],
          effects: ['bokeh'],
          color: ['vibrant'],
        },
      },
      {
        id: 'pixel_8bit_art',
        name: '像素风格',
        selection: {
          style: ['pixel_art'],
          effects: ['8bit'],
          color: ['vibrant'],
          mood: ['playful'],
          view: ['wide_angle'],
        },
      },
      {
        id: 'glitch_vibe',
        name: '故障艺术',
        selection: {
          style: ['glitch_art'],
          effects: ['glitch', 'chromatic'],
          color: ['neon'],
          mood: ['edgy'],
        },
      },
    ],
    defaultSelection: {
      style: ['digital_illustration'],
      quality: ['hyper_detailed'],
    },
  },
  {
    id: 'surrealism_art',
    name: '超现实主义',
    description: '梦境与现实的交织，超越逻辑的视觉体验',
    subPresets: [
      {
        id: 'dreamscape',
        name: '梦境漂浮',
        selection: {
          style: ['surrealism'],
          effects: ['ethereal', 'double_exposure'],
          color: ['pastels'],
          mood: ['dreamy'],
          lighting: ['soft_light'],
        },
      },
      {
        id: 'impossible_space',
        name: '矛盾空间',
        selection: {
          style: ['surrealism'],
          effects: ['surreal'],
          mood: ['mysterious'],
          color: ['unusual'],
          view: ['wide_angle'],
          quality: ['hyper_detailed'],
        },
      },
      {
        id: 'dali_inspired',
        name: '超现实幻境',
        selection: {
          style: ['surrealism'],
          effects: ['creative', 'soft_focus'],
          color: ['vibrant'],
          mood: ['intense'],
          lighting: ['dramatic'],
        },
      },
    ],
    defaultSelection: {
      style: ['surrealism'],
      mood: ['dreamy'],
      effects: ['ethereal'],
    },
  },
  {
    id: 'illustration_style',
    name: '插画风格',
    description: '多元插画风格，从扁平到细腻',
    subPresets: [
      {
        id: 'flat_vector',
        name: '扁平插画',
        selection: {
          style: ['flat_design'],
          color: ['vibrant'],
          mood: ['playful'],
          effects: ['clean'],
          quality: ['sharp'],
        },
      },
      {
        id: 'cel_shading_anime',
        name: '赛璐珞动画',
        selection: {
          style: ['anime'],
          effects: ['cel_shading', 'bold_lines'],
          color: ['vibrant'],
          mood: ['energetic'],
        },
      },
      {
        id: 'detailed_fantasy_illus',
        name: '细腻奇幻',
        selection: {
          style: ['digital_illustration'],
          color: ['vibrant'],
          mood: ['whimsical'],
          quality: ['fine_details'],
          effects: ['soft_shading'],
          lighting: ['volumetric'],
        },
      },
    ],
    defaultSelection: {
      style: ['illustration'],
      color: ['vibrant'],
      mood: ['playful'],
    },
  },
];

// ==================== 商业应用 ====================
const commercialPresets: Preset[] = [
  {
    id: 'social_media',
    name: '社交平台',
    description: '针对各社交平台风格优化的视觉内容',
    subPresets: [
      {
        id: 'instagram_aesthetic',
        name: 'Instagram风',
        selection: {
          style: ['aesthetic'],
          color: ['pastels'],
          lighting: ['natural'],
          mood: ['fresh'],
          view: ['square'],
          effects: ['instagram_filter'],
        },
      },
      {
        id: 'xiaohongshu_life',
        name: '小红书风',
        selection: {
          style: ['lifestyle'],
          color: ['warm'],
          lighting: ['natural'],
          mood: ['cozy'],
          time: ['morning'],
          effects: ['soft_glow'],
        },
      },
      {
        id: 'douyin_trendy',
        name: '抖音封面',
        selection: {
          style: ['trendy'],
          color: ['vibrant'],
          mood: ['exciting'],
          effects: ['eye_catching', 'bold'],
          view: ['vertical'],
        },
      },
    ],
    defaultSelection: {
      style: ['lifestyle'],
      color: ['vibrant'],
      mood: ['fresh'],
    },
  },
  {
    id: 'advertising_poster',
    name: '广告海报',
    description: '高冲击力的商业广告视觉设计',
    subPresets: [
      {
        id: 'product_hero_ad',
        name: '产品大片',
        selection: {
          style: ['commercial'],
          lighting: ['cinematic'],
          quality: ['8k'],
          color: ['bold'],
          effects: ['bokeh'],
          view: ['product'],
        },
      },
      {
        id: 'festival_sale_ad',
        name: '节日促销',
        selection: {
          effects: ['celebration', 'festive'],
          color: ['red'],
          mood: ['festive'],
          time: ['evening'],
          lighting: ['warm'],
        },
      },
      {
        id: 'brand_story_ad',
        name: '品牌故事',
        selection: {
          style: ['lifestyle'],
          mood: ['warm', 'approachable'],
          color: ['earth'],
          lighting: ['natural'],
          time: ['afternoon'],
        },
      },
    ],
    defaultSelection: {
      style: ['commercial'],
      quality: ['8k'],
      lighting: ['cinematic'],
    },
  },
  {
    id: 'book_cover',
    name: '书籍封面',
    description: '抓人眼球，匹配内容气质的封面设计',
    subPresets: [
      {
        id: 'mystery_thriller',
        name: '悬疑推理',
        selection: {
          style: ['cinematic'],
          color: ['dark'],
          mood: ['mysterious'],
          effects: ['fog'],
          lighting: ['dramatic'],
          view: ['wide'],
        },
      },
      {
        id: 'romance_novel',
        name: '爱情故事',
        selection: {
          color: ['pastels'],
          mood: ['romantic'],
          lighting: ['soft_light'],
          effects: ['soft_focus'],
          weather: ['spring'],
          view: ['wide'],
        },
      },
      {
        id: 'sci_fi_novel',
        name: '科幻小说',
        selection: {
          style: ['sci_fi'],
          color: ['cool'],
          effects: ['futuristic', 'space'],
          mood: ['awe_inspiring'],
          lighting: ['cinematic'],
        },
      },
    ],
    defaultSelection: {
      quality: ['sharp'],
      view: ['wide'],
    },
  },
  {
    id: 'video_thumbnail',
    name: '视频缩略图',
    description: '吸引点击的视频封面与缩略图',
    subPresets: [
      {
        id: 'knowledge_thumbnail',
        name: '知识科普',
        selection: {
          style: ['clean'],
          color: ['blue'],
          mood: ['approachable'],
          effects: ['illustration'],
          view: ['wide'],
          quality: ['sharp'],
        },
      },
      {
        id: 'gaming_thumbnail',
        name: '游戏实况',
        selection: {
          style: ['cyberpunk'],
          color: ['neon'],
          effects: ['neon_glow', 'glitch'],
          mood: ['exciting'],
          view: ['wide'],
        },
      },
      {
        id: 'lifestyle_vlog',
        name: '生活Vlog',
        selection: {
          style: ['lifestyle'],
          color: ['warm'],
          mood: ['happy'],
          lighting: ['natural'],
          time: ['morning'],
          view: ['wide'],
        },
      },
    ],
    defaultSelection: {
      quality: ['sharp'],
      view: ['wide'],
      mood: ['exciting'],
    },
  },
  {
    id: 'ppt_design',
    name: 'PPT配图',
    description: '专业简洁，匹配演示场景的配图',
    subPresets: [
      {
        id: 'business_clean_ppt',
        name: '商务简约',
        selection: {
          style: ['minimal'],
          color: ['corporate'],
          mood: ['professional'],
          quality: ['sharp'],
          view: ['wide'],
          effects: ['clean'],
        },
      },
      {
        id: 'tech_futuristic_ppt',
        name: '科技感',
        selection: {
          style: ['tech'],
          color: ['cool'],
          effects: ['futuristic', 'holographic'],
          view: ['wide'],
          mood: ['powerful'],
        },
      },
      {
        id: 'education_friendly_ppt',
        name: '教育配图',
        selection: {
          style: ['illustration'],
          color: ['vibrant', 'friendly'],
          mood: ['approachable'],
          effects: ['clean'],
          view: ['wide'],
        },
      },
    ],
    defaultSelection: {
      style: ['clean'],
      quality: ['sharp'],
      view: ['wide'],
    },
  },
  {
    id: 'music_album',
    name: '音乐视觉',
    description: '唱片封面与音乐视觉艺术设计',
    subPresets: [
      {
        id: 'pop_album_cover',
        name: '流行唱片',
        selection: {
          style: ['aesthetic'],
          color: ['vibrant'],
          mood: ['energetic'],
          lighting: ['studio_dramatic'],
          effects: ['sparkle'],
          view: ['square'],
        },
      },
      {
        id: 'electronic_album_cover',
        name: '电子音乐',
        selection: {
          style: ['cyberpunk'],
          effects: ['synthwave', 'holographic'],
          color: ['neon'],
          time: ['night'],
          mood: ['intense'],
        },
      },
      {
        id: 'acoustic_album_cover',
        name: '民谣专辑',
        selection: {
          style: ['film'],
          effects: ['film_grain'],
          color: ['muted'],
          mood: ['nostalgic'],
          weather: ['autumn'],
          time: ['dusk'],
        },
      },
    ],
    defaultSelection: {
      view: ['square'],
      quality: ['sharp'],
      mood: ['energetic'],
    },
  },
];

// ==================== 特效场景 ====================
const effectsPresets: Preset[] = [
  {
    id: 'dreamy_fairy',
    name: '梦幻仙境',
    description: '如梦似幻的奇妙世界',
    subPresets: [
      {
        id: 'fairy_forest_dreamy',
        name: '仙境森林',
        selection: {
          effects: ['ethereal', 'soft_glow'],
          lighting: ['god_rays'],
          color: ['pastels'],
          mood: ['ethereal'],
          weather: ['foggy'],
        },
      },
      {
        id: 'fairy_lights_night',
        name: '梦幻光影',
        selection: {
          time: ['night'],
          lighting: ['fairy_lights', 'moonlight'],
          color: ['vibrant'],
          mood: ['dreamy'],
          effects: ['bokeh_overlay'],
        },
      },
      {
        id: 'crystal_world',
        name: '水晶世界',
        selection: {
          material: ['glass'],
          effects: ['holographic', 'prism'],
          color: ['vibrant'],
          mood: ['whimsical'],
          lighting: ['cinematic'],
        },
      },
    ],
    defaultSelection: {
      effects: ['ethereal'],
      color: ['pastels'],
      mood: ['dreamy'],
    },
  },
  {
    id: 'horror_dark',
    name: '恐怖黑暗',
    description: '令人不安的黑暗氛围与恐怖视觉',
    subPresets: [
      {
        id: 'haunted_ruins',
        name: '废墟惊魂',
        selection: {
          effects: ['dark', 'creepy'],
          weather: ['foggy'],
          time: ['midnight'],
          mood: ['horror'],
          color: ['dark'],
        },
      },
      {
        id: 'dark_storm_night',
        name: '暗夜风暴',
        selection: {
          effects: ['shadows'],
          time: ['night'],
          lighting: ['moonlight'],
          mood: ['ominous'],
          color: ['charcoal'],
          weather: ['stormy'],
        },
      },
      {
        id: 'supernatural',
        name: '灵异诡异',
        selection: {
          effects: ['creepy', 'fog'],
          time: ['midnight'],
          lighting: ['moonlight'],
          mood: ['scary'],
          color: ['dark'],
        },
      },
    ],
    defaultSelection: {
      effects: ['dark'],
      mood: ['mysterious'],
      time: ['night'],
    },
  },
  {
    id: 'epic_grand',
    name: '史诗壮观',
    description: '震撼人心的宏大史诗场景',
    subPresets: [
      {
        id: 'god_descending',
        name: '神明降临',
        selection: {
          effects: ['volumetric', 'particle_effects'],
          lighting: ['god_rays'],
          mood: ['epic'],
          weather: ['stormy'],
          color: ['gold'],
        },
      },
      {
        id: 'apocalypse_scene',
        name: '末日灾变',
        selection: {
          effects: ['destruction', 'dramatic'],
          weather: ['stormy'],
          color: ['dark'],
          mood: ['intense'],
          time: ['dusk'],
        },
      },
      {
        id: 'epic_battle',
        name: '史诗战役',
        selection: {
          effects: ['battle'],
          lighting: ['dramatic'],
          mood: ['epic'],
          time: ['dusk'],
          weather: ['stormy'],
          color: ['muted'],
        },
      },
    ],
    defaultSelection: {
      effects: ['cinematic'],
      mood: ['epic'],
      lighting: ['dramatic'],
    },
  },
  {
    id: 'sci_fi_future',
    name: '科幻未来',
    description: '探索未来世界与宇宙的无限想象',
    subPresets: [
      {
        id: 'space_travel',
        name: '太空漫游',
        selection: {
          effects: ['space', 'stars'],
          color: ['cool'],
          mood: ['awe_inspiring'],
          time: ['night'],
          lighting: ['cosmic'],
        },
      },
      {
        id: 'alien_world',
        name: '外星世界',
        selection: {
          effects: ['alien', 'futuristic'],
          color: ['unusual'],
          lighting: ['neon'],
          mood: ['mysterious'],
          time: ['night'],
        },
      },
      {
        id: 'cyber_dystopia',
        name: '赛博反乌托邦',
        selection: {
          effects: ['neon', 'glitch'],
          time: ['night'],
          color: ['neon'],
          style: ['cyberpunk'],
          lighting: ['neon'],
        },
      },
    ],
    defaultSelection: {
      effects: ['space'],
      color: ['cool'],
      mood: ['awe_inspiring'],
    },
  },
  {
    id: 'retro_era',
    name: '复古年代',
    description: '穿越时光，重现不同年代的视觉记忆',
    subPresets: [
      {
        id: 'eighties_synthwave',
        name: '80年代霓虹',
        selection: {
          effects: ['synthwave', 'scan_lines'],
          color: ['neon'],
          style: ['retro'],
          lighting: ['neon'],
          time: ['night'],
        },
      },
      {
        id: 'nineties_film',
        name: '90年代胶片',
        selection: {
          effects: ['vhs', 'film_grain'],
          color: ['muted'],
          style: ['vintage'],
          time: ['afternoon'],
          camera: ['kodak_portra'],
        },
      },
      {
        id: 'old_shanghai',
        name: '民国老上海',
        selection: {
          style: ['vintage'],
          color: ['sepia'],
          time: ['evening'],
          mood: ['nostalgic'],
          effects: ['sepia'],
          camera: ['polaroid'],
        },
      },
    ],
    defaultSelection: {
      style: ['vintage'],
      color: ['sepia'],
      mood: ['nostalgic'],
    },
  },
  {
    id: 'festival_celebration',
    name: '节日庆典',
    description: '喜庆热闹的节日氛围与庆典场景',
    subPresets: [
      {
        id: 'chinese_new_year',
        name: '春节烟火',
        selection: {
          effects: ['celebration', 'star_trail'],
          color: ['red'],
          mood: ['festive'],
          time: ['night'],
          weather: ['winter'],
        },
      },
      {
        id: 'christmas_snow',
        name: '圣诞雪景',
        selection: {
          effects: ['christmas'],
          weather: ['snowy'],
          color: ['cool'],
          mood: ['cozy'],
          time: ['evening'],
          lighting: ['fairy_lights'],
        },
      },
      {
        id: 'halloween_spooky',
        name: '万圣节',
        selection: {
          effects: ['halloween', 'dark'],
          color: ['dark'],
          mood: ['spooky'],
          time: ['night'],
          weather: ['foggy'],
        },
      },
    ],
    defaultSelection: {
      effects: ['celebration'],
      mood: ['festive'],
      color: ['vibrant'],
    },
  },
];

// ==================== 导出 ====================
export const PRESETS: PresetsByCategory = {
  portrait: portraitPresets,
  product: productPresets,
  landscape: landscapePresets,
  architecture: architecturePresets,
  anime: animePresets,
  guofeng: guofengPresets,
  art: artPresets,
  commercial: commercialPresets,
  effects: effectsPresets,
};

export function getPresetsByCategory(categoryId: string): Preset[] {
  return PRESETS[categoryId] || [];
}

export function getPresetById(categoryId: string, presetId: string): Preset | undefined {
  return getPresetsByCategory(categoryId).find(p => p.id === presetId);
}

export function getSubPresetById(
  categoryId: string,
  presetId: string,
  subPresetId: string
): SubPreset | undefined {
  return getPresetById(categoryId, presetId)?.subPresets.find(s => s.id === subPresetId);
}

export function getCategoryByPresetId(presetId: string): string | undefined {
  for (const [categoryId, presets] of Object.entries(PRESETS)) {
    if (presets.some(p => p.id === presetId)) return categoryId;
  }
  return undefined;
}

export function getCategoryAndPresetBySubPresetId(
  subPresetId: string
): { categoryId: string; preset: Preset } | undefined {
  for (const [categoryId, presets] of Object.entries(PRESETS)) {
    for (const preset of presets) {
      if (preset.subPresets.some(s => s.id === subPresetId)) {
        return { categoryId, preset };
      }
    }
  }
  return undefined;
}
