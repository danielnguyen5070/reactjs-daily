import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { MainLayout } from '../layouts/MainLayout';
import { AuthLayout } from '../layouts/AuthLayout';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { ProtectedRoute } from './ProtectedRoute';

import { RootErrorBoundary } from './RootErrorBoundary';
import { NotFoundPage } from './NotFoundPage';
import { Loader } from '@/shared/components/Loader/Loader';

const LoginPage = lazy(() => import('@features/auth/ui/LoginPage'));
const DashboardHome = lazy(() => import('@features/dashboard/ui/DashboardHome'));
const UsersPage = lazy(() => import('@/features/users/ui/UsersPage'));

const suspense = (node: React.ReactNode) => (
    <Suspense fallback={<Loader />}>{node}</Suspense>
);

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <RootErrorBoundary />,
        children: [
            // index route ("/")
            {
                index: true,
                element: suspense(<DashboardHome />),
            },
            {
                element: <AuthLayout />,
                children: [
                    {
                        path: 'login',
                        element: suspense(<LoginPage />),
                    },
                ],
            },
            {
                element: (
                    <ProtectedRoute>
                        <DashboardLayout />
                    </ProtectedRoute>
                ),
                children: [
                    {
                        path: 'dashboard',
                        element: suspense(<DashboardHome />),
                    },
                    {
                        path: 'users',
                        element: suspense(<UsersPage />),
                    },
                ],
            },

            // 404 fallback
            {
                path: '*',
                element: <NotFoundPage />,
            },
        ],
    },
]);