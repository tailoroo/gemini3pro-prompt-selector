import type { Dimension } from '@/types';

export const viewDimension: Dimension = {
  key: 'view',
  name: '视角',
  nameEn: 'View',
  required: false,
  multiSelect: true,
  mode: 'both',
  categories: [
    {
      category: 'camera_angle',
      name: '拍摄角度',
      options: [
        { id: 'eye_level', zh: '平视', en: 'Eye-level view', effect: '中性、自然的视角', simple: true },
        { id: 'birds_eye', zh: '鸟瞰/俯视', en: 'Bird\'s-eye view', effect: '展示空间关系和布局', simple: true },
        { id: 'worms_eye', zh: '虫眼视/低角度', en: 'Worm\'s-eye view', effect: '使主体显得威严或强大' },
        { id: 'high_angle', zh: '高角度', en: 'High angle', effect: '使主体显得脆弱或展示全貌' },
        { id: 'dutch_angle', zh: '倾斜角度', en: 'Dutch angle', effect: '创造不安或动态感' },
        { id: 'over_shoulder', zh: '过肩镜头', en: 'Over-the-shoulder', effect: '创造亲密感' },
        { id: 'profile', zh: '侧面镜头', en: 'Profile shot', effect: '经典肖像角度' },
        { id: 'three_quarter', zh: '四分之三视角', en: 'Three-quarter view', effect: '最讨好的肖像角度', simple: true },
        { id: 'aerial', zh: '航拍/无人机', en: 'Aerial view', effect: '宏观场景展示' },
        // 新增：人像视角
        { id: 'front', zh: '正面视角', en: 'Front view', simple: true },
        { id: 'half_body', zh: '半身照', en: 'Half body', simple: true },
        { id: 'full_body', zh: '全身照', en: 'Full body', simple: true },
        { id: 'close_up', zh: '特写', en: 'Close up', simple: true },
        { id: 'headshot', zh: '头像照', en: 'Headshot', simple: true },
        { id: 'group', zh: '合照', en: 'Group shot' },
        { id: 'couple', zh: '双人照', en: 'Couple shot' },
        { id: 'environmental', zh: '环境人像', en: 'Environmental portrait' },
        // 新增：产品视角
        { id: 'product', zh: '产品视角', en: 'Product view', simple: true },
        { id: 'top_down', zh: '俯视', en: 'Top down view' },
        { id: 'flat_lay', zh: '平铺视角', en: 'Flat lay' },
        { id: 'product_environment', zh: '产品场景', en: 'Product in environment' },
        // 新增：其他视角
        { id: 'wide', zh: '广角视野', en: 'Wide view', simple: true },
        { id: 'detail', zh: '细节视角', en: 'Detail view' },
        { id: 'artistic', zh: '艺术视角', en: 'Artistic view' },
        { id: 'bird_eye', zh: '鸟眼视角', en: 'Bird eye view' },
        // 更多视角
        { id: 'square', zh: '方形构图', en: 'Square format' },
        { id: 'vertical', zh: '竖版构图', en: 'Vertical format' },
      ],
    },
    {
      category: 'lens_type',
      name: '镜头焦距',
      options: [
        { id: 'extreme_closeup', zh: '极端特写', en: 'Extreme close-up' },
        { id: 'closeup', zh: '特写', en: 'Close-up', simple: true },
        { id: 'medium_shot', zh: '中景', en: 'Medium shot' },
        { id: 'wide_angle', zh: '广角', en: 'Wide angle', simple: true },
        { id: 'ultra_wide', zh: '超广角', en: 'Ultra-wide' },
        { id: 'fisheye', zh: '鱼眼', en: 'Fisheye' },
        { id: 'macro', zh: '微距', en: 'Macro lens', simple: true },
        { id: 'telephoto', zh: '长焦', en: 'Telephoto' },
        // 新增
        { id: 'portrait_lens', zh: '人像镜头', en: 'Portrait lens' },
      ],
    },
    {
      category: 'composition',
      name: '构图技巧',
      options: [
        { id: 'rule_of_thirds', zh: '三分法', en: 'Rule of thirds', simple: true },
        { id: 'symmetrical', zh: '对称构图', en: 'Symmetrical composition', simple: true },
        { id: 'asymmetric', zh: '非对称构图', en: 'Asymmetric composition' },
        { id: 'leading_lines', zh: '引导线', en: 'Leading lines' },
        { id: 'negative_space', zh: '负空间', en: 'Negative space' },
        { id: 'framing', zh: '框式构图', en: 'Framing' },
        { id: 'diagonal', zh: '对角线构图', en: 'Diagonal composition' },
        { id: 'radial', zh: '辐射对称', en: 'Radial symmetry' },
      ],
    },
  ],
};
