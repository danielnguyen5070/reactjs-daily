import '@shared/styles/globals.css';

import ReactDOM from 'react-dom/client';
import { App } from './App';
import { AppProviders } from './providers';

async function enableMocking() {
    if (import.meta.env.DEV && import.meta.env.VITE_ENABLE_MSW === 'true') {
        const { worker } = await import('@/mocks/browser')
        await worker.start({
            onUnhandledRequest: 'bypass',
        })
    }
}

enableMocking().then(() => {
    ReactDOM.createRoot(document.getElementById('root')!).render(
        <AppProviders>
            <App />
        </AppProviders>,
    )
})