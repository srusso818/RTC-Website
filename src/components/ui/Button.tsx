import React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[var(--color-rtc-blue)] text-slate-950 font-bold hover:bg-[var(--color-rtc-blue-dark)] hover:text-white",
        primary: "bg-[var(--color-rtc-green)] text-[var(--color-rtc-navy-dark)] hover:bg-[#65a322]",
        secondary: "bg-[var(--color-rtc-charcoal)] text-white hover:bg-gray-700",
        outline: "border-2 border-[var(--color-rtc-blue)] text-[var(--color-rtc-blue)] hover:bg-[var(--color-rtc-blue)] hover:text-white",
        ghost: "hover:bg-gray-100 text-gray-700",
        link: "text-[var(--color-rtc-blue)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, href, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={buttonVariants({ variant, size, className })}
        >
          {props.children}
        </Link>
      );
    }

    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
