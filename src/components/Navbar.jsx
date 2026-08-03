import React from 'react';

export default function Navbar({ theme, toggleTheme, isMenuOpen, toggleMenu, isNavScrolled }) {
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
      <nav className={`nav ${isNavScrolled ? 'scrolled' : ''}`} id="nav">
        <a aria-label="Go to home" className="nav__logo" href="#hero" onClick={(e) => handleLinkClick(e, '#hero')}>
          <span class="nav__logo-text">ghaleSir</span>
        </a>
        <div className="nav__actions">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="nav__btn"
            aria-label="Open GitHub repository"
            href="https://github.com/rajeshghale"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="nav__btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            <span>GitHub</span>
          </a>

          {/* Theme Toggle */}
          <button type="button" className="nav__theme-toggle" id="theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme">
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path><path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path><path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path>
              </svg>
            )}
          </button>

          {/* Hamburger Menu Toggle */}
          <button className={`nav__hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
            <span className="nav__hamburger-line"></span>
            <span className="nav__hamburger-line"></span>
            <span className="nav__hamburger-line"></span>
          </button>
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
