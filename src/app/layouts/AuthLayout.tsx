import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
    return (
        <div
            style={{
                display: 'flex',
                height: '100vh',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#f5f5f5',
            }}
        >
            <div style={{ width: 400 }}>
                <Outlet />
            </div>
        </div>
    );
};