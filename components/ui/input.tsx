import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  variant?: "default" | "modern" | "gradient"
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, startIcon, endIcon, variant = "default", ...props }, ref) => {
    const baseStyles = "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    
    const variants = {
      default: baseStyles,
      modern: "input-modern",
      gradient: "relative h-12 w-full rounded-xl border-0 bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-sm px-4 py-3 text-sm ring-0 ring-offset-0 placeholder:text-muted-foreground/60 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:shadow-lg transition-all duration-200"
    }

    if (startIcon || endIcon) {
      return (
        <div className="relative flex items-center">
          {startIcon && (
            <div className="absolute left-3 z-10 text-muted-foreground">
              {startIcon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              variant === "default" ? baseStyles : variants[variant],
              startIcon && "pl-10",
              endIcon && "pr-10",
              className
            )}
            ref={ref}
            {...props}
          />
          {endIcon && (
            <div className="absolute right-3 z-10 text-muted-foreground">
              {endIcon}
            </div>
          )}
        </div>
      )
    }

    return (
      <input
        type={type}
        className={cn(
          variant === "default" ? baseStyles : variants[variant],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
