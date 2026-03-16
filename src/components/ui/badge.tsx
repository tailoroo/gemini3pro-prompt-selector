import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-all duration-200 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-violet-500 to-purple-500 text-white border-transparent shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50",
        secondary: "bg-white/10 text-slate-300 border-white/10 hover:bg-white/15 hover:border-purple-500/30",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "bg-white/[0.06] text-slate-300 border-white/10 hover:bg-purple-500/20 hover:border-purple-500/40 hover:text-white",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
