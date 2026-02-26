import * as React from "react"
import clsx from "clsx"

type InputBaseProps = React.ComponentPropsWithRef<"input">

function InputBase({
    className,
    disabled,
    ref,
    ...props
}: InputBaseProps) {
    return (
        <input
            ref={ref}
            disabled={disabled}
            className={clsx(
                "w-full h-10 rounded-md border border-gray-400 px-3 text-sm transition",
                "focus:outline-none focus:ring-1 focus:ring-blue-500",
                disabled && "cursor-not-allowed opacity-50",
                className
            )}
            {...props}
        />
    )
}

export default InputBase
