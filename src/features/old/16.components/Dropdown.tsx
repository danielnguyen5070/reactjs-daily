import * as React from "react"

type DropdownContextType = {
    open: boolean
    setOpen: (v: boolean) => void
    triggerRef: React.RefObject<HTMLButtonElement | null>
    menuRef: React.RefObject<HTMLDivElement | null>
}

const DropdownContext = React.createContext<DropdownContextType | null>(null)

export function Dropdown({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = React.useState(false)
    const triggerRef = React.useRef<HTMLButtonElement | null>(null)
    const menuRef = React.useRef<HTMLDivElement | null>(null)

    return (
        <DropdownContext.Provider
            value={{ open, setOpen, triggerRef, menuRef }}
        >
            {children}
        </DropdownContext.Provider>
    )
}

export function useDropdown() {
    const ctx = React.useContext(DropdownContext)
    if (!ctx) {
        throw new Error("Dropdown components must be used inside <Dropdown>")
    }
    return ctx
}
