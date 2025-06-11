import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const pillVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[36px] text-sm font-medium ring-offset-background transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-white text-black",
  {
    variants: {
      variant: {
        active: "bg-white text-black",
        inactive:
          "bg-transparent text-white border border-white cursor-pointer transition-colors duration-200 hover:bg-white hover:text-black hover:border-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "active",
      size: "default",
    },
  }
)

export interface PillProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof pillVariants> {
  asChild?: boolean
}

const Pill = React.forwardRef<HTMLButtonElement, PillProps>(
  ({ className, size, variant = "active", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(pillVariants({ size, variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Pill.displayName = "Pill"

export { Pill, pillVariants }