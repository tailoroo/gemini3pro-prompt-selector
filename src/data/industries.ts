import type { Dimension } from '@/types';

export const industryDimension: Dimension = {
  key: 'industry',
  name: '行业',
  nameEn: 'Industry',
  required: false,
  multiSelect: false,
  mode: 'advanced',
  categories: [
    {
      category: 'industry',
      name: '行业分类',
      options: [
        { id: 'product_photo', zh: '产品摄影', en: 'Product photography', desc: '电商产品展示' },
        { id: 'advertising', zh: '广告摄影', en: 'Advertising photography', desc: '品牌宣传' },
        { id: 'lifestyle', zh: '生活方式摄影', en: 'Lifestyle photography', desc: '情境化品牌形象' },
        { id: 'editorial', zh: '编辑摄影', en: 'Editorial photography', desc: '杂志、新闻配图' },
        { id: 'architecture', zh: '建筑摄影', en: 'Architectural photography', desc: '建筑外观和室内' },
        { id: 'interior', zh: '室内设计', en: 'Interior design', desc: '空间布局和装饰' },
        { id: 'food', zh: '食品摄影', en: 'Food photography', desc: '菜品、餐厅展示' },
        { id: 'fashion', zh: '时尚摄影', en: 'Fashion photography', desc: '服装、模特拍摄' },
        { id: 'portrait', zh: '人像摄影', en: 'Portrait photography', desc: '个人肖像拍摄' },
        { id: 'wedding', zh: '婚礼摄影', en: 'Wedding photography', desc: '婚礼纪实' },
        { id: 'real_estate', zh: '房地产可视化', en: 'Real estate visualization', desc: '房产销售视觉' },
        { id: 'concept_art', zh: '概念艺术', en: 'Concept art', desc: '游戏、影视概念' },
        { id: 'character_design', zh: '角色设计', en: 'Character design', desc: '人物形象创作' },
        { id: 'social_media', zh: '社交媒体内容', en: 'Social media content', desc: 'Instagram、小红书等' },
        { id: 'thumbnail', zh: '视频封面', en: 'YouTube thumbnails', desc: '视频缩略图' },
        { id: 'book_cover', zh: '书籍封面', en: 'Book covers', desc: '出版物设计' },
        { id: 'album_art', zh: '专辑封面', en: 'Album art', desc: '音乐视觉' },
        { id: 'medical', zh: '医学插画', en: 'Medical illustration', desc: '健康教育材料' },
        { id: 'scientific', zh: '科学可视化', en: 'Scientific visualization', desc: '数据、概念展示' },
      ],
    },
  ],
};
