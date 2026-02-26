import * as React from "react"
import clsx from "clsx"
import { useDropdown } from "./Dropdown"

function DropdownMenu({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    const { open, setOpen, triggerRef, menuRef } = useDropdown()
    const [style, setStyle] = React.useState<React.CSSProperties>({})
    const itemsRef = React.useRef<HTMLButtonElement[]>([])
    const [activeIndex, setActiveIndex] = React.useState(0)

    // Position menu relative to trigger
    React.useLayoutEffect(() => {
        if (!open || !triggerRef.current || !menuRef.current) return

        const trigger = triggerRef.current.getBoundingClientRect()
        const menu = menuRef.current.getBoundingClientRect()

        let top = trigger.bottom + window.scrollY + 6
        let left = trigger.left + window.scrollX

        if (left + menu.width > window.innerWidth) {
            left = trigger.right + window.scrollX - menu.width
        }

        setStyle({ top, left })
    }, [open])

    // Outside click
    React.useEffect(() => {
        function onMouseDown(e: MouseEvent) {
            const target = e.target as Node
            if (
                menuRef.current?.contains(target) ||
                triggerRef.current?.contains(target)
            )
                return
            setOpen(false)
        }

        if (open) document.addEventListener("mousedown", onMouseDown)
        return () => document.removeEventListener("mousedown", onMouseDown)
    }, [open, setOpen, triggerRef, menuRef])

    // Keyboard navigation
    React.useEffect(() => {
        if (!open) return

        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") setOpen(false)

            if (e.key === "ArrowDown") {
                e.preventDefault()
                setActiveIndex((i) => (i + 1) % itemsRef.current.length)
            }

            if (e.key === "ArrowUp") {
                e.preventDefault()
                setActiveIndex((i) =>
                    i === 0 ? itemsRef.current.length - 1 : i - 1
                )
            }

            if (e.key === "Enter") {
                e.preventDefault()
                itemsRef.current[activeIndex]?.click()
            }
        }

        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [open, activeIndex, setOpen])

    // Focus active item
    React.useEffect(() => {
        itemsRef.current[activeIndex]?.focus()
    }, [activeIndex])

    if (!open) return null

    return (
        <div
            ref={menuRef}
            role="menu"
            style={style}
            className={clsx(
                "fixed z-50 min-w-[10rem] max-w-sm md:max-w-2xl rounded-md border bg-white shadow-lg p-1",
                className
            )}
        >
            {React.Children.map(children, (child, index) =>
                React.isValidElement(child)
                    ? React.cloneElement(child as any, {
                        ref: (el: HTMLButtonElement) =>
                            (itemsRef.current[index] = el),
                    })
                    : child
            )}
        </div>
    )
}

export default DropdownMenu 
