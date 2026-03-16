import { PromptPreview } from './components/PromptPreview'
import { PresetSidebar } from './components/PresetSidebar'
import { DimensionPanel } from './components/DimensionPanel'
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
    toggleOption,
    clearAll
  } = useAppStore()

  const { prompt, negativePrompt } = usePromptGenerator()

  const handleSelectCategory = (categoryId: string) => {
    if (selectedCategory === categoryId) {
      // 如果点击已选中的分类，收起它
      setCategory(null)
    } else {
      setCategory(categoryId)
    }
  }

  const handleSelectPreset = (presetId: string) => {
    if (selectedPreset === presetId) {
      // 如果点击已展开的预设，收起它
      setPreset('')
    } else {
      setPreset(presetId)
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
          <PromptPreview prompt={prompt} onClear={clearAll} />
          {negativePrompt && (
            <div className="mt-3 rounded-xl bg-white/[0.08] backdrop-blur-xl border border-white/10 p-3 transition-all duration-300 hover:border-purple-500/30">
              <h3 className="font-medium text-sm text-slate-400 mb-1">负面提示词</h3>
              <p className="text-sm font-mono text-slate-300">{negativePrompt}</p>
            </div>
          )}
        </div>
      </div>

      {/* 两栏布局 */}
      <div className="max-w-7xl mx-auto px-4 py-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* 左栏：预设选择 */}
          <div className="lg:col-span-4">
            <div className="sticky top-[200px]">
              <PresetSidebar
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
