import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
    return (
        <div>
            <header style={{ padding: 16, background: '#222', color: 'white' }}>
                My App
            </header>

            <main style={{ padding: 24 }}>
                <Outlet />
            </main>
        </div>
    );
};