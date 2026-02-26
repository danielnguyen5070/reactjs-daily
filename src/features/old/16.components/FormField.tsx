import * as React from "react"
import clsx from "clsx"

type FormFieldProps = {
    label?: string
    hint?: string
    error?: string
    required?: boolean
    fullWidth?: boolean
    children: React.ReactElement<
        React.HTMLAttributes<HTMLElement>
    >
}

function FormField({
    label,
    hint,
    error,
    required,
    fullWidth = true,
    children,
}: FormFieldProps) {
    const fieldId = React.useId()
    const describedBy =
        error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined

    return (
        <div className="block">
            <div
                className={clsx(
                    "flex flex-col gap-1",
                    fullWidth ? "w-full" : "inline-flex"
                )}
            >
                {label && (
                    <label
                        htmlFor={fieldId}
                        className="text-sm font-medium text-gray-700"
                    >
                        {label}
                        {required && <span className="ml-1 text-red-600">*</span>}
                    </label>
                )}

                {React.cloneElement(children, {
                    id: fieldId,
                    "aria-invalid": !!error,
                    "aria-describedby": describedBy,
                })}

                {hint && !error && (
                    <p id={`${fieldId}-hint`} className="text-xs text-gray-500">
                        {hint}
                    </p>
                )}

                {error && (
                    <p
                        id={`${fieldId}-error`}
                        className="text-xs text-red-600"
                        role="alert"
                    >
                        {error}
                    </p>
                )}
            </div>
        </div>
    )
}

export default FormField
