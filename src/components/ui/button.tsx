import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 transform hover:-translate-y-0.5 active:translate-y-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground hover:shadow-glow hover:scale-105",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:shadow-lg",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg",
        secondary:
          "bg-gradient-mint text-foreground hover:shadow-card hover:scale-105",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-xl",
        link: "text-primary underline-offset-4 hover:underline transform-none",
        premium: "bg-gradient-lavender text-primary-foreground hover:shadow-floating hover:scale-105 font-semibold",
        cart: "bg-success text-success-foreground hover:bg-success/90 hover:shadow-card hover:scale-105",
        hero: "bg-gradient-button text-primary-foreground hover:shadow-floating hover:scale-105 font-semibold border-2 border-transparent hover:border-coral",
        coral: "bg-coral text-primary-foreground hover:bg-coral/90 hover:shadow-product hover:scale-105",
        mint: "bg-mint text-foreground hover:bg-mint/90 hover:shadow-card hover:scale-105",
        lavender: "bg-lavender text-foreground hover:bg-lavender/90 hover:shadow-card hover:scale-105",
        lemon: "bg-lemon text-foreground hover:bg-lemon/90 hover:shadow-card hover:scale-105"
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-lg px-4",
        lg: "h-13 rounded-xl px-10 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
