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
          {/* 网页标题 */}
          <h1 className="text-2xl font-bold text-center mb-4 bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            IMG提示词工程网
          </h1>

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

      {/* 页脚 */}
      <footer className="relative z-10 border-t border-white/10 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/tailoroo/gemini3pro-prompt-selector"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a
                href="mailto:hjh01237@outlook.com"
                className="hover:text-purple-400 transition-colors flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hjh01237@outlook.com
              </a>
            </div>
            <div className="text-slate-600">
              © 2026 IMG提示词工程网
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
