import { Outlet, NavLink } from 'react-router-dom';
import { navigation } from '../routes/navigation';

export const DashboardLayout = () => {
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <aside
                style={{
                    width: 200,
                    background: '#333',
                    color: 'white',
                    padding: 16,
                }}
            >
                <nav>
                    {navigation.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            style={({ isActive }) => ({
                                display: 'block',
                                padding: '12px 16px',
                                color: isActive ? '#38bdf8' : 'white',
                                textDecoration: 'none',
                            })}
                        >
                            {item.label}
                        </NavLink>
                    ))}
                </nav>
            </aside>

            <main style={{ flex: 1, padding: 24 }}>
                <Outlet />
            </main>
        </div>
    );
};