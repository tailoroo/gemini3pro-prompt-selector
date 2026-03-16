import { cn } from '@/lib/utils';
import { CATEGORIES } from '@/data';
import type { Category } from '@/data/categories';

interface CategorySidebarProps {
  selectedCategory: string | null;
  onSelect: (categoryId: string) => void;
}

function CategoryItem({
  category,
  isSelected,
  onClick
}: {
  category: Category;
  isSelected: boolean;
  onClick: () => void;
}) {
  const Icon = category.icon;

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200",
        "hover:bg-accent hover:shadow-sm",
        isSelected
          ? "bg-primary text-primary-foreground shadow-md"
          : "bg-card border border-border"
      )}
    >
      <Icon className={cn(
        "h-5 w-5 flex-shrink-0",
        isSelected ? "text-primary-foreground" : "text-muted-foreground"
      )} />
      <div className="flex-1 min-w-0">
        <div className="font-medium truncate">{category.name}</div>
        <div className={cn(
          "text-xs truncate",
          isSelected ? "text-primary-foreground/80" : "text-muted-foreground"
        )}>
          {category.description}
        </div>
      </div>
    </button>
  );
}

export function CategorySidebar({
  selectedCategory,
  onSelect
}: CategorySidebarProps) {
  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold px-1 mb-4">选择分类</h2>
      {CATEGORIES.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          isSelected={selectedCategory === category.id}
          onClick={() => onSelect(category.id)}
        />
      ))}
    </div>
  );
}
