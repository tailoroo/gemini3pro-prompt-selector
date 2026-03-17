import { useState, useMemo, useCallback } from 'react'
import { PromptPreview } from './components/PromptPreview'
import { PresetSidebar } from './components/PresetSidebar'
import { DimensionPanel } from './components/DimensionPanel'
import { ChatPanel } from './components/ChatPanel'
import { useAppStore } from './store/useAppStore'
import { usePromptGenerator } from './hooks/usePromptGenerator'

export default function App() {
  const {
    selectedCategory,
    selectedPreset,
    selectedSubPreset,
    selection,
    setCategory,
    setPreset,
    setSubPreset,
    toggleOption
  } = useAppStore()

  const { prompt, negativePrompt } = usePromptGenerator()

  // AI 优化状态
  const [optimizedPrompt, setOptimizedPrompt] = useState<string | null>(null)
  const [aiInput, setAiInput] = useState('') // AI 输入框内容

  // 实际显示的提示词（优先使用优化后的）
  const displayPrompt = optimizedPrompt || prompt

  // 星星位置在挂载时固定，避免每次渲染重新随机
  const stars = useMemo(() =>
    [...Array(15)].map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 3,
    })),
    []
  )

  const handleApplyPrompt = useCallback((newPrompt: string) => {
    setOptimizedPrompt(newPrompt)
  }, [])

  const handleRestoreOriginal = useCallback(() => {
    setOptimizedPrompt(null)
  }, [])

  const handleSendToAI = useCallback(() => {
    setAiInput(prompt)
  }, [prompt])

  const handleSelectCategory = useCallback((categoryId: string) => {
    if (!categoryId || selectedCategory === categoryId) {
      setCategory(null)
    } else {
      setCategory(categoryId)
    }
  }, [selectedCategory, setCategory])

  const handleSelectPreset = useCallback((presetId: string, categoryId?: string) => {
    if (selectedPreset === presetId) {
      setPreset('')
    } else {
      setPreset(presetId, categoryId)
    }
  }, [selectedPreset, setPreset])

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* 背景效果 */}
      <div className="grid-bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="stars">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`
            }}
          />
        ))}
      </div>

      {/* 内容区域 */}
      <div className="sticky top-0 z-20 bg-black/30 backdrop-blur-xl border-b border-white/10 px-4 py-4">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* 左右两栏布局：提示词预览 + AI 优化 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* 左栏：提示词预览 */}
            <PromptPreview
              prompt={displayPrompt}
              isOptimized={!!optimizedPrompt}
              onRestoreOriginal={handleRestoreOriginal}
              onSendToAI={handleSendToAI}
            />

            {/* 右栏：AI 优化面板 */}
            <ChatPanel
              currentPrompt={prompt}
              onApplyPrompt={handleApplyPrompt}
              inputValue={aiInput}
              onInputChange={setAiInput}
            />
          </div>

          {/* 负面提示词 */}
          {negativePrompt && (
            <div className="mt-3 rounded-xl bg-white/[0.08] backdrop-blur-xl border border-white/10 p-3 transition-all duration-300 hover:border-purple-500/30">
              <h3 className="font-medium text-sm text-slate-400 mb-1">负面提示词</h3>
              <p className="text-sm font-mono text-slate-300">{negativePrompt}</p>
            </div>
          )}
        </div>
      </div>

      {/* 两栏布局：预设选择 + 维度选择 */}
      <div className="max-w-7xl mx-auto px-4 py-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* 左栏：预设选择 */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[340px]">
              <PresetSidebar
                selectedCategory={selectedCategory}
                selectedPreset={selectedPreset}
                selectedSubPreset={selectedSubPreset}
                onSelectCategory={handleSelectCategory}
                onSelectPreset={handleSelectPreset}
                onSelectSubPreset={setSubPreset}
              />
            </div>
          </div>

          {/* 右栏：维度选择 */}
          <div className="lg:col-span-8">
            <DimensionPanel
              selection={selection}
              onToggleOption={toggleOption}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
