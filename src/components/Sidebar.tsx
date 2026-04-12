import React from 'react';
import { NavLink } from 'react-router-dom';

const menuItems = [
    {
        label: "counter",
        path: "/counter",
    },
    {
        label: "custom-hook",
        path: "/custom-hook",
    },
    {
        label: "dropdown",
        path: "/dropdown",
    },
    {
        label: "dynamic-form",
        path: "/dynamic-form",
    },
    {
        label: "fetch-data",
        path: "/fetch-data",
    },
    {
        label: "form-validation",
        path: "/form-validation",
    },
    {
        label: "context",
        path: "/context",
    },
    {
        label: "infinite-scroll",
        path: "/infinite-scroll",
    },
    {
        label: "modal",
        path: "/modal",
    },
    {
        label: "pagination",
        path: "/pagination",
    },
    {
        label: "to-do",
        path: "/to-do",
    },
];

const Sidebar = () => {
    return (
        <>
            <div
                className={`overflow-auto fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white z-40 transform transition-transform duration-300 ease-in-out`}
            >
                {/* Main nav */}
                <nav className="p-4 space-y-2 mt-12">
                    {menuItems.map((menu, index) => (
                        <div key={index}>
                            <NavLink
                                to={menu.path}
                                className={({ isActive }) =>
                                    `block my-1 p-2 rounded-r border-l-4 transition-all duration-300 ease-in-out ${isActive
                                        ? 'border-blue-500 bg-gray-800 text-blue-200'
                                        : 'border-transparent hover:bg-gray-800 hover:border-blue-500'
                                    }`
                                }
                                end
                            >
                                {menu.label}
                            </NavLink>
                        </div>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
