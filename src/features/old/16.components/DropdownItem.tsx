import * as React from "react"
import clsx from "clsx"
import { useDropdown } from "./Dropdown"

const DropdownItem = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(function DropdownItem(
    { className, onClick, ...props },
    ref
) {
    const { setOpen } = useDropdown()

    return (
        <button
            ref={ref}
            role="menuitem"
            type="button"
            onClick={(e) => {
                onClick?.(e)
                setOpen(false)
            }}
            className={clsx(
                "flex w-full items-center rounded px-3 py-2 text-sm text-left",
                "hover:bg-gray-100 focus:bg-gray-100 focus:outline-none",
                className
            )}
            {...props}
        />
    )
})

export default DropdownItem 