import * as React from "react"
import clsx from "clsx"

type CheckboxProps = {
    label?: React.ReactNode
} & React.ComponentPropsWithRef<"input">

function Checkbox({
    label,
    className,
    disabled,
    ref,
    ...props
}: CheckboxProps) {
    return (
        <label
            className={clsx(
                "inline-flex items-center gap-2 text-sm",
                disabled && "opacity-50 cursor-not-allowed"
            )}
        >
            <input
                ref={ref}
                type="checkbox"
                disabled={disabled}
                className={clsx(
                    "h-4 w-4 rounded border-gray-300 text-blue-600",
                    "focus:ring-2 focus:ring-blue-500",
                    className
                )}
                {...props}
            />
            {label && <span>{label}</span>}
        </label>
    )
}

export default Checkbox
