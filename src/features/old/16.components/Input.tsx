import FormField from './FormField'
import InputBase from './InputBase'

type InputProps = {
    label?: string
    hint?: string
    error?: string
    fullWidth?: boolean
} & React.ComponentPropsWithRef<"input">

function Input({ label, hint, error, fullWidth, ...props }: InputProps) {
    return (
        <FormField
            label={label}
            hint={hint}
            error={error}
            fullWidth={fullWidth}
        >
            <InputBase {...props} />
        </FormField>
    )
}

export default Input
