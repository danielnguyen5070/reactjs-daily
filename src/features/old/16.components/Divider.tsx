import * as React from "react"
import clsx from "clsx"

type DividerProps = {
    orientation?: "horizontal" | "vertical"
    spacing?: "sm" | "md" | "lg"
} & React.HTMLAttributes<HTMLDivElement>

const SPACING = {
    sm: "my-2",
    md: "my-4",
    lg: "my-6",
}

function Divider({
    orientation = "horizontal",
    spacing = "md",
    className,
    ...props
}: DividerProps) {
    if (orientation === "vertical") {
        return (
            <div
                role="separator"
                aria-orientation="vertical"
                className={clsx(
                    "mx-3 w-px self-stretch bg-gray-200",
                    className
                )}
                {...props}
            />
        )
    }

    return (
        <div
            role="separator"
            aria-orientation="horizontal"
            className={clsx(
                "h-px w-full bg-gray-200",
                SPACING[spacing],
                className
            )}
            {...props}
        />
    )
}

export default Divider
