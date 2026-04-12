import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { MainLayout } from '../layouts/MainLayout';

// Lazy load (important for performance)
const Counter = lazy(() => import('@features/counter'));
const CustomHook = lazy(() => import('@features/custom-hook-use-fetch'));
const Dropdown = lazy(() => import('@features/dropdown-with-multiselect'));
const DynamicForm = lazy(() => import('@features/dynamic-form'));
const FetchData = lazy(() => import('@features/fetch-data'));
const FormValidation = lazy(() => import('@features/form-validation'));
const Context = lazy(() => import('@features/global-state-with-context'));
const InfiniteScroll = lazy(() => import('@features/infinite-scroll'));
const Modal = lazy(() => import('@features/modal-component'));
const Pagination = lazy(() => import('@features/pagination-for-a-list'));
const Todo = lazy(() => import('@features/to-do'));

const withSuspense = (Component: React.ReactNode) => (
    <Suspense fallback={<div className="p-6">Loading...</div>}>
        {Component}
    </Suspense>
);

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            // ✅ default page
            {
                index: true,
                element: <div className="p-6">Welcome 👋</div>,
            },

            { path: 'counter', element: withSuspense(<Counter />) },
            { path: 'custom-hook', element: withSuspense(<CustomHook />) },
            { path: 'dropdown', element: withSuspense(<Dropdown />) },
            { path: 'dynamic-form', element: withSuspense(<DynamicForm />) },
            { path: 'fetch-data', element: withSuspense(<FetchData />) },
            { path: 'form-validation', element: withSuspense(<FormValidation />) },
            { path: 'context', element: withSuspense(<Context />) },
            { path: 'infinite-scroll', element: withSuspense(<InfiniteScroll />) },
            { path: 'modal', element: withSuspense(<Modal />) },
            { path: 'pagination', element: withSuspense(<Pagination />) },
            { path: 'to-do', element: withSuspense(<Todo />) },
        ],
    },
]);