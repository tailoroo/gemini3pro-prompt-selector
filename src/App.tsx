import { useState } from 'react'
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

  // 实际显示的提示词（优先使用优化后的）
  const displayPrompt = optimizedPrompt || prompt

  // 应用 AI 优化的提示词
  const handleApplyPrompt = (newPrompt: string) => {
    setOptimizedPrompt(newPrompt)
  }

  // 恢复原始提示词
  const handleRestoreOriginal = () => {
    setOptimizedPrompt(null)
  }

  const handleSelectCategory = (categoryId: string) => {
    if (!categoryId || selectedCategory === categoryId) {
      // 如果传入空字符串或点击已选中的分类，收起它
      setCategory(null)
    } else {
      setCategory(categoryId)
    }
  }

  const handleSelectPreset = (presetId: string, categoryId?: string) => {
    if (selectedPreset === presetId) {
      // 如果点击已展开的预设，收起它
      setPreset('')
    } else {
      setPreset(presetId, categoryId)
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* 背景效果 */}
      <div className="grid-bg" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="stars">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
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
            />

            {/* 右栏：AI 优化面板 */}
            <ChatPanel
              currentPrompt={prompt}
              onApplyPrompt={handleApplyPrompt}
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
