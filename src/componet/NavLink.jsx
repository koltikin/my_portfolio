import React from 'react';

function NavLink({ href, children, isActive, onClick }) {
    return (
        <a
            href={href}
            onClick={onClick}
            className={`hover:text-primary_light text-xl  transition-colors duration-200 ${isActive ? 'text-primary_light' : ''}`}
        >
            {children}
        </a>
    );
}

export default NavLink;
