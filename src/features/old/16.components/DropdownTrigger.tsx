import * as React from "react"
import { useDropdown } from "./Dropdown"

function DropdownTrigger({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    const { open, setOpen, triggerRef } = useDropdown()

    return (
        <button
            ref={triggerRef}
            type="button"
            aria-haspopup="menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className={className}
        >
            {children}
        </button>
    )
}

export default DropdownTrigger