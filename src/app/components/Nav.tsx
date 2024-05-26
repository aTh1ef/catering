import React, { useState } from 'react';
import './nav.css';
import { navs } from '../data/data';

interface NavItem {
    id: number;
    name: string;
    target: string;
    active: boolean;
}

export default function Nav() {
    const [navList, setNavList] = useState<NavItem[]>(navs);
    const [open, setOpen] = useState<boolean>(false);
    const [scroll, setScroll] = useState(0);

    const handleToggleMenu = () => {
        setOpen(!open);
    };

    const handleScrollTo = (target: string) => {
        // Implement smooth scroll to the target element
        const element = document.getElementById(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setOpen(false); // Close the mobile menu after clicking on a link
        }
    };

    const handleNavActive = () => {}

    return (
        <nav id="navbar" className={`navbar order-last order-lg-0 ${open ? 'navbar-mobile' : ''}`}>
            <ul>
                {navList.map(nav => (
                    <li key={nav.id}>
                        <a
                            className={`nav-link scrollto ${nav.active ? 'active' : ''}`}
                            onClick={() => handleScrollTo(nav.target)}
                        >
                            {nav.name === 'Home' ? (
                                <i className="bi bi-house-door-fill"></i>
                            ) : (
                                nav.name
                            )}
                        </a>
                    </li>
                ))}
            </ul>
            <i
                className={`mobile-nav-toggle bi ${open ? 'bi-x' : 'bi-list'}`}
                onClick={handleToggleMenu}
            ></i>
        </nav>
    );
}
