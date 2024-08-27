import React from 'react';

function NavLink({ href, children, isActive, onClick }) {
    return (
        <a
            href={href}
            onClick={onClick}
            className={`hover:text-blue-500 dark:hover:text-primary transition-colors duration-200 ${isActive ? 'dark:text-primary text-blue-500' : ''}`}
        >
            {children}
        </a>
    );
}

export default NavLink;
