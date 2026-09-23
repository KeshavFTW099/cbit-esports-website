import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setIsMenuOpen(false);
  }

  // Close menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/register', label: 'Register' },
    { to: '/past-events', label: 'Past Events' },
    { to: '/join-us', label: 'Join Us' },
    { to: '/collaborate', label: 'Collaborate With Us' },
    { to: '/contact', label: 'Contact Us' },
  ];

  return (
    <header className="site-header" role="banner">
      {/* Floating physical navigation panel */}
      <div className="header-floating-panel">
        <div className="header-container">
          {/* Brand Logo & Name */}
          <Link to="/" className="header-brand" aria-label="CBIT Esports Home">
            <img
              src="/logo.png"
              alt="CBIT Esports Crest"
              className="header-logo-img"
              width="36"
              height="36"
            />
            <span className="header-brand-text">
              CBIT <span className="brand-accent">ESPORTS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <li key={link.to} className="nav-item">
                    <Link
                      to={link.to}
                      className={`nav-link ${isActive ? 'active' : ''}`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <span className="nav-link-text">{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Expanding Drawer Panel */}
        <div
          className={`mobile-panel-dropdown ${isMenuOpen ? 'open' : ''}`}
          aria-hidden={!isMenuOpen}
        >
          <ul className="mobile-nav-list">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <li key={link.to} className="mobile-nav-item">
                  <Link
                    to={link.to}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{link.label}</span>
                    <span className="mobile-nav-arrow" aria-hidden="true">→</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mobile-panel-footer">
            <p className="mobile-institution-tag">
              Chaitanya Bharathi Institute of Technology, Hyderabad
            </p>
          </div>
        </div>
      </div>

      {/* Dimmed backdrop for mobile menu outside clicks */}
      {isMenuOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
