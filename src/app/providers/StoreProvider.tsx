import { Provider } from 'react-redux'
import { store } from '@/app/store'
import { type ReactNode } from 'react'

type Props = {
    children: ReactNode
}

export const StoreProvider = ({ children }: Props) => {
    return <Provider store={store}>{children}</Provider>
}