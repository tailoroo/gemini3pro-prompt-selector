import { useMemo } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { useAppStore } from '@/store/useAppStore';
import { buildPrompt, buildNegativePrompt } from '@/lib/promptBuilder';
import { getPresetById, getSubPresetById } from '@/data';

export function usePromptGenerator() {
  const { selection, selectedCategory, selectedPreset, selectedSubPreset } = useAppStore(
    useShallow((state) => ({
      selection: state.selection,
      selectedCategory: state.selectedCategory,
      selectedPreset: state.selectedPreset,
      selectedSubPreset: state.selectedSubPreset,
    }))
  );

  // 合并为单个 useMemo，selection 变化时只触发一次计算
  const { prompt, negativePrompt } = useMemo(() => {
    const basePrompt = buildPrompt(selection);
    const negativePrompt = buildNegativePrompt(selection);

    const presetParts: string[] = [];

    if (selectedPreset && selectedCategory) {
      const preset = getPresetById(selectedCategory, selectedPreset);
      if (preset) presetParts.push(preset.name);

      if (selectedSubPreset) {
        const subPreset = getSubPresetById(selectedCategory, selectedPreset, selectedSubPreset);
        if (subPreset) presetParts.push(subPreset.name);
      }
    }

    let prompt: string;
    if (presetParts.length > 0) {
      const presetPath = presetParts.join(',');
      prompt = basePrompt ? `${presetPath},${basePrompt}` : presetPath;
    } else {
      prompt = basePrompt;
    }

    return { prompt, negativePrompt };
  }, [selection, selectedCategory, selectedPreset, selectedSubPreset]);

  return { prompt, negativePrompt };
}
