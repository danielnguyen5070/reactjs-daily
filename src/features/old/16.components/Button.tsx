import React from 'react'
import clsx from 'clsx'

const BUTTON_SIZES = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6 text-base'
} as const

const BUTTON_VARIANTS = {
    primary:
        "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary:
        "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400",
    danger:
        "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    ghost:
        "bg-transparent text-gray-900 hover:bg-gray-100 focus:ring-gray-300",
} as const

type ButtonProps = {
    loading?: boolean,
    fullWidth?: boolean,
    size?: keyof typeof BUTTON_SIZES,
    variant?: keyof typeof BUTTON_VARIANTS
} & React.ComponentPropsWithoutRef<'button'>

const Button = ({
    loading = false,
    fullWidth = false,
    size = 'md',
    variant = 'primary',
    children,
    className,
    disabled,
    type = "button",
    ...props
}: ButtonProps) => {
    return (
        <button
            type={type}
            disabled={loading || disabled}
            aria-busy={loading}
            className={clsx(
                "inline-flex items-center justify-center gap-2 rounded-md font-medium",
                "cursor-pointer transition focus:outline-none focus:ring-2 focus:ring-offset-2",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                loading && "pointer-events-none",
                BUTTON_SIZES[size],
                BUTTON_VARIANTS[variant],
                fullWidth && "w-full",
                className
            )}
            {...props}
        >
            {loading && (
                <span
                    aria-hidden
                    className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                />
            )}
            {children}
        </button>
    )
}

export default Button