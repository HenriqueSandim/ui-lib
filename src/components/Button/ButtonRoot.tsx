import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const buttonVariants = tv({
  base: "flex justify-center items-center gap-xs w-fit disabled:cursor-not-allowed",
  variants: {
    variant: {
      filled:
        "bg-brand-500 text-neuter-50 hover:bg-brand-400 hover:border-brand-400 transition-colors duration-300 ease-in-out border-2 border-brand-500 focus:border-brand-600 active:border-brand-600 active:bg-brand-600 disabled:opacity-50",
      outlined:
        "bg-neuter-transparent text-brand-500 hover:bg-brand-100 transition-colors duration-300 ease-in-out border-2 border-brand-500 focus:border-brand-600 active:border-brand-600 active:bg-brand-200 disabled:opacity-50",
      borderless:
        "bg-neuter-transparent text-brand-500 hover:bg-brand-100 transition-colors duration-300 ease-in-out focus:border-2 focus:border-brand-600 active:bg-brand-200 active:text-brand-600 disabled:opacity-50",
    },
    size: {
      sm: "h-10 px-2 text-sm font-bold",
      md: "h-12 px-3 text-md font-bold",
      lg: "h-14 px-4 text-lg font-bold",
    },
    shape: {
      square: "rounded-md",
      rounded: "rounded-full",
    },
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const ButtonRoot = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      href,
      variant = "filled",
      size = "lg",
      shape = "square",
      ...props
    },
    ref
  ) => {
    if (href) {
      return (
        <a
          href={href}
          className={twMerge(
            buttonVariants({ variant, size, shape, className })
          )}
        >
          {children}
        </a>
      );
    }
    return (
      <button
        className={twMerge(buttonVariants({ variant, size, shape, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export { ButtonRoot, buttonVariants };
