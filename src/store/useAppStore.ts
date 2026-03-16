import { create } from 'zustand';
import type { UserSelection } from '@/types';
import { getPresetById, getSubPresetById } from '@/data';

// 初始选择状态
const initialSelection: UserSelection = {
  style: [],
  view: [],
  subject: [],
  quality: [],
  lighting: [],
  color: [],
  industry: [],
  mood: [],
  clothing: [],
  weather: [],
  time: [],
  material: [],
  effects: [],
  camera: [],
  negative: [],
  customText: '',
};

interface AppStore {
  // 状态
  selectedCategory: string | null;
  selectedPreset: string | null;
  selectedSubPreset: string | null;
  selection: UserSelection;

  // Actions
  setCategory: (categoryId: string | null) => void;
  setPreset: (presetId: string) => void;
  setSubPreset: (subPresetId: string) => void;
  toggleOption: (dimension: string, optionId: string) => void;
  setCustomText: (text: string) => void;
  clearAll: () => void;
}

export const useAppStore = create<AppStore>((set, get) => ({
  // 初始状态
  selectedCategory: null,
  selectedPreset: null,
  selectedSubPreset: null,
  selection: initialSelection,

  // 设置分类
  setCategory: (categoryId) => set({
    selectedCategory: categoryId,
    selectedPreset: null,
    selectedSubPreset: null,
    selection: initialSelection,
  }),

  // 设置预设（自动应用预设配置）
  setPreset: (presetId) => {
    const { selectedCategory } = get();
    if (!selectedCategory) return;

    const preset = getPresetById(selectedCategory, presetId);
    if (!preset) return;

    set({
      selectedPreset: presetId,
      selectedSubPreset: null,
      selection: {
        ...initialSelection,
        ...preset.defaultSelection,
      },
    });
  },

  // 设置三级细分
  setSubPreset: (subPresetId) => {
    const { selectedCategory, selectedPreset } = get();
    if (!selectedCategory || !selectedPreset) return;

    const subPreset = getSubPresetById(selectedCategory, selectedPreset, subPresetId);
    if (!subPreset) return;

    // 先应用预设的默认配置，再应用三级细分的配置
    const preset = getPresetById(selectedCategory, selectedPreset);
    const baseSelection = preset?.defaultSelection || {};

    set({
      selectedSubPreset: subPresetId,
      selection: {
        ...initialSelection,
        ...baseSelection,
        ...subPreset.selection,
      },
    });
  },

  // 切换选项（用于微调）
  toggleOption: (dimension, optionId) =>
    set((state) => {
      const current = state.selection[dimension as keyof UserSelection];
      if (!Array.isArray(current)) return state;

      const exists = current.includes(optionId);

      return {
        selection: {
          ...state.selection,
          [dimension]: exists
            ? current.filter(id => id !== optionId)
            : [...current, optionId]
        }
      };
    }),

  // 设置自定义文本
  setCustomText: (text) =>
    set((state) => ({
      selection: { ...state.selection, customText: text }
    })),

  // 清空所有
  clearAll: () => set({
    selectedCategory: null,
    selectedPreset: null,
    selectedSubPreset: null,
    selection: initialSelection,
  }),
}));

// 选择器 hooks（优化性能）
export const useSelectedCategory = () => useAppStore((state) => state.selectedCategory);
export const useSelectedPreset = () => useAppStore((state) => state.selectedPreset);
export const useSelectedSubPreset = () => useAppStore((state) => state.selectedSubPreset);
export const useSelection = () => useAppStore((state) => state.selection);
