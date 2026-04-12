import { Outlet } from 'react-router-dom';
import Sidebar from '@/components/Sidebar';

export const MainLayout = () => {
    return (
        <div className="min-h-screen flex bg-gray-50">
            <aside className="w-64 bg-gray-900 text-white p-4">
                <Sidebar />
            </aside>

            <main className="flex-1 p-6">
                <Outlet />
            </main>
        </div>
    );
};