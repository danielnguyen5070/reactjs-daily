import { RouterProvider } from 'react-router-dom';
import { router } from './routeConfig';

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};