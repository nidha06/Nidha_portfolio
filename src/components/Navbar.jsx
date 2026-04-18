import React, { useState, useEffect } from "react";

function Navbar() {
    const [isNavScrolled, setIsNavScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsNavScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }, [menuOpen]);

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setMenuOpen(false);
    };

    const links = [
        { label: 'Home', id: '#home' },
        { label: 'About', id: '#about' },
        { label: 'Skills', id: '#skills' },
        { label: 'Projects', id: '#projects' },
        { label: 'Contact', id: '#contact' },
    ];

    return (
        <>
            <nav className={`nav ${isNavScrolled ? 'scrolled' : ''}`}>
                <div className="nav-content">
                    <div className="logo">DEV.PORTFOLIO</div>

                    {/* Desktop links */}
                    <div className="nav-links">
                        {links.map(link => (
                            <a
                                key={link.id}
                                href={link.id}
                                className="nav-link"
                                onClick={(e) => handleSmoothScroll(e, link.id)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Hamburger */}
                    <button
                        className={`hamburger ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Mobile drawer */}
            <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
                {links.map(link => (
                    <a
                        key={link.id}
                        href={link.id}
                        className="nav-link"
                        onClick={(e) => handleSmoothScroll(e, link.id)}
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </>
    );
}

export default Navbar;