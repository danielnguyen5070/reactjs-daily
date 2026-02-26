import * as React from "react"
import clsx from "clsx"

const ALERT_VARIANTS = {
    info: "bg-blue-50 text-blue-800 border-blue-200",
    success: "bg-green-50 text-green-800 border-green-200",
    warning: "bg-yellow-50 text-yellow-800 border-yellow-200",
    error: "bg-red-50 text-red-800 border-red-200",
} as const

type AlertProps = {
    variant?: keyof typeof ALERT_VARIANTS
} & React.HTMLAttributes<HTMLDivElement>

function Alert({
    variant = "info",
    className,
    children,
    ...props
}: AlertProps) {
    return (
        <div
            role="alert"
            className={clsx(
                "rounded-md border px-4 py-3 text-sm",
                ALERT_VARIANTS[variant],
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export default Alert
