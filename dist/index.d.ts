import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import * as tailwind_variants from 'tailwind-variants';
import * as tailwind_variants_dist_config from 'tailwind-variants/dist/config';
import { VariantProps } from 'class-variance-authority';

interface ButtonTextProps {
    text: string;
}

interface ButtonIconProps {
    name: string;
}

declare const buttonVariants: tailwind_variants.TVReturnType<{
    variant: {
        filled: string;
        outlined: string;
        borderless: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    shape: {
        square: string;
        rounded: string;
    };
}, undefined, "flex justify-center items-center gap-xs w-fit disabled:cursor-not-allowed", tailwind_variants_dist_config.TVConfig<{
    variant: {
        filled: string;
        outlined: string;
        borderless: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    shape: {
        square: string;
        rounded: string;
    };
}, {
    variant: {
        filled: string;
        outlined: string;
        borderless: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    shape: {
        square: string;
        rounded: string;
    };
}>, {
    variant: {
        filled: string;
        outlined: string;
        borderless: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    shape: {
        square: string;
        rounded: string;
    };
}, undefined, tailwind_variants.TVReturnType<{
    variant: {
        filled: string;
        outlined: string;
        borderless: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    shape: {
        square: string;
        rounded: string;
    };
}, undefined, "flex justify-center items-center gap-xs w-fit disabled:cursor-not-allowed", tailwind_variants_dist_config.TVConfig<{
    variant: {
        filled: string;
        outlined: string;
        borderless: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    shape: {
        square: string;
        rounded: string;
    };
}, {
    variant: {
        filled: string;
        outlined: string;
        borderless: string;
    };
    size: {
        sm: string;
        md: string;
        lg: string;
    };
    shape: {
        square: string;
        rounded: string;
    };
}>, unknown, unknown, undefined>>;
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    href?: string;
}

declare const Button: {
    Root: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
    Icon: React.FC<ButtonIconProps>;
    Text: ({ text }: ButtonTextProps) => react_jsx_runtime.JSX.Element;
};

export { Button };
