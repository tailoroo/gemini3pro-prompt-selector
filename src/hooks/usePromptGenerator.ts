import { useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useAppStore } from '@/store/useAppStore';
import { buildPrompt, buildNegativePrompt } from '@/lib/promptBuilder';
import { getPresetById, getSubPresetById } from '@/data';

export function usePromptGenerator() {
  // 使用 useShallow 避免每次返回新对象导致无限循环
  const { selection, selectedCategory, selectedPreset, selectedSubPreset } = useAppStore(
    useShallow((state) => ({
      selection: state.selection,
      selectedCategory: state.selectedCategory,
      selectedPreset: state.selectedPreset,
      selectedSubPreset: state.selectedSubPreset,
    }))
  );

  const prompt = useMemo(() => {
    const basePrompt = buildPrompt(selection);

    // 构建预设路径
    const presetParts: string[] = [];

    if (selectedPreset && selectedCategory) {
      const preset = getPresetById(selectedCategory, selectedPreset);
      if (preset) {
        presetParts.push(preset.name);
      }

      if (selectedSubPreset) {
        const subPreset = getSubPresetById(selectedCategory, selectedPreset, selectedSubPreset);
        if (subPreset) {
          presetParts.push(subPreset.name);
        }
      }
    }

    // 将预设路径放在提示词最前面
    if (presetParts.length > 0) {
      const presetPath = presetParts.join(',');
      return basePrompt ? `${presetPath},${basePrompt}` : presetPath;
    }

    return basePrompt;
  }, [selection, selectedCategory, selectedPreset, selectedSubPreset]);

  const negativePrompt = useMemo(() => {
    return buildNegativePrompt(selection);
  }, [selection]);

  return { prompt, negativePrompt };
}
