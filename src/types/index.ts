// 单个选项
interface PromptOption {
  id: string;
  zh: string;
  en: string;
  desc?: string;
  effect?: string;
  simple?: boolean;  // 是否在简单模式显示
}

// 子分类
interface SubCategory {
  category: string;
  name: string;
  options: PromptOption[];
}

// 维度定义
interface Dimension {
  key: string;           // dimension key (style, view, etc.)
  name: string;          // 中文名称
  nameEn: string;        // 英文名称
  required: boolean;     // 是否必选
  multiSelect: boolean;  // 是否多选
  mode: 'simple' | 'advanced' | 'both';
  categories: SubCategory[];
}

// 用户选择状态（简化版，只保留中文）
interface UserSelection {
  style: string[];
  view: string[];
  subject: string[];
  quality: string[];
  lighting: string[];
  color: string[];
  industry?: string[];
  mood?: string[];
  clothing?: string[];
  weather?: string[];
  time?: string[];
  material?: string[];
  effects?: string[];
  camera?: string[];
  negative?: string[];
  customText?: string;
}

// 应用状态（简化版）
interface AppState {
  selectedCategory: string | null;     // 一级分类
  selectedPreset: string | null;       // 二级预设
  selectedSubPreset: string | null;    // 三级细分
  selection: UserSelection;            // 当前选中的所有选项
}

// 模板
interface Template {
  id: string;
  name: string;
  nameEn: string;
  desc: string;
  category?: string;
  selection: Partial<UserSelection>;
}

export type { PromptOption, SubCategory, Dimension, UserSelection, AppState, Template };
