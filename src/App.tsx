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
    <div className="min-h-screen bg-background">
      {/* 顶部固定：提示词预览 */}
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <PromptPreview prompt={prompt} onClear={clearAll} />
          {negativePrompt && (
            <div className="mt-2 rounded-lg border bg-card p-3">
              <h3 className="font-medium text-sm text-muted-foreground mb-1">负面提示词</h3>
              <p className="text-sm font-mono">{negativePrompt}</p>
            </div>
          )}
        </div>
      </div>

      {/* 两栏布局 */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* 左栏：预设选择 */}
          <div className="lg:col-span-4">
            <div className="sticky top-[200px]">
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
