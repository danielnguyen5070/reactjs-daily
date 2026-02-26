import * as React from "react"
import clsx from "clsx"

type SelectProps = {
    error?: string
} & React.ComponentPropsWithRef<"select">

function Select({
    error,
    className,
    disabled,
    ref,
    children,
    ...props
}: SelectProps) {
    return (
        <select
            ref={ref}
            disabled={disabled}
            aria-invalid={!!error}
            className={clsx(
                "w-full h-10 rounded-md border px-3 text-sm",
                "focus:outline-none focus:ring-2",
                disabled && "cursor-not-allowed opacity-50",
                error
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-500",
                className
            )}
            {...props}
        >
            {children}
        </select>
    )
}

export default Select
