import React, { useRef, useEffect } from 'react';

export default function Navbar({ isMenuOpen, toggleMenu }) {
  const navRef = useRef(null);

  // Directly toggle .scrolled class on the DOM — zero React re-renders
  useEffect(() => {
    const onScroll = () => {
      if (navRef.current) {
        navRef.current.classList.toggle('scrolled', window.scrollY > 20);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const menuLinks = [
    { label: 'About', href: '#hero', section: 'hero' },
    { label: 'Projects', href: '#projects', section: 'projects' },
    { label: 'Contacts', href: '#contact', section: 'contact' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (isMenuOpen) {
      toggleMenu();
    }
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav ref={navRef} className="nav" id="nav">
        <div className="nav__container">
          <a aria-label="Go to home" className="nav__logo" href="#hero" onClick={(e) => handleLinkClick(e, '#hero')}>
            <span className="nav__logo-text">ghaleSir</span>
          </a>
          <div className="nav__actions">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="nav__btn nav__github-btn"
              aria-label="Open GitHub repository"
              href="https://github.com/rajeshghale"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="nav__btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              <span>GitHub</span>
            </a>

            {/* Hamburger Menu Toggle */}
            <button className={`nav__hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
              <span className="nav__hamburger-line"></span>
              <span className="nav__hamburger-line"></span>
              <span className="nav__hamburger-line"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen Menu Overlay */}
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} id="menu-overlay">
        <div className="menu-overlay__bg" onClick={toggleMenu}></div>
        <div className="menu-overlay__content">
          {menuLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="menu-overlay__link"
              data-section={link.section}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <div className="menu-overlay__divider"></div>
          <a href="#contact" className="menu-overlay__cta" onClick={(e) => handleLinkClick(e, '#contact')}>
            Let's Work
          </a>
        </div>
      </div>
    </>
  );
}
