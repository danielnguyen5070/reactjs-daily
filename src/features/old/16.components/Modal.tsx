import * as React from "react"
import clsx from "clsx"

type ModalProps = {
    open: boolean
    onClose: () => void
    title?: string
    children: React.ReactNode
}

function Modal({ open, onClose, title, children }: ModalProps) {
    const modalRef = React.useRef<HTMLDivElement>(null)
    const lastActiveElement = React.useRef<HTMLElement | null>(null)

    // handle focus + scroll lock
    React.useEffect(() => {
        if (!open) return

        lastActiveElement.current = document.activeElement as HTMLElement
        document.body.style.overflow = "hidden"
        modalRef.current?.focus()

        return () => {
            document.body.style.overflow = ""
            lastActiveElement.current?.focus()
        }
    }, [open])

    // handle ESC
    React.useEffect(() => {
        if (!open) return

        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Escape") onClose()
        }

        window.addEventListener("keydown", onKeyDown)
        return () => window.removeEventListener("keydown", onKeyDown)
    }, [open, onClose])

    if (!open) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
        >
            {/* backdrop */}
            <div
                className="absolute inset-0 bg-black/40"
                onClick={onClose}
            />

            {/* modal */}
            <div
                ref={modalRef}
                tabIndex={-1}  // required to allow focus
                className={clsx(
                    "relative z-10 w-full max-w-md rounded-md bg-white p-6 shadow-lg",
                    "focus:outline-none"
                )}
            >
                {title && (
                    <h2 className="mb-4 text-lg font-semibold">
                        {title}
                    </h2>
                )}

                {children}
            </div>
        </div>
    )
}

export default Modal
