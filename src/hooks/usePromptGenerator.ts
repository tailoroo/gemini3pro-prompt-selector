import { useMemo } from 'react';
import { useSelection } from '@/store/useAppStore';
import { buildPrompt, buildNegativePrompt } from '@/lib/promptBuilder';

export function usePromptGenerator() {
  const selection = useSelection();

  const prompt = useMemo(() => {
    return buildPrompt(selection);
  }, [selection]);

  const negativePrompt = useMemo(() => {
    return buildNegativePrompt(selection);
  }, [selection]);

  return { prompt, negativePrompt };
}
