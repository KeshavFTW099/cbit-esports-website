import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

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
      <div className="header-container">
        {/* Brand Logo & Name - positioned comfortably toward the left */}
        <Link to="/" className="header-brand" aria-label="CBIT Esports Home">
          <img
            src="/logo.png"
            alt="CBIT Esports Crest"
            className="header-logo-img"
            width="38"
            height="38"
          />
          <span className="header-brand-text">
            CBIT <span className="brand-accent">ESPORTS</span>
          </span>
        </Link>

        {/* Desktop Navigation - on the right */}
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
                    {link.label}
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
              width="24"
              height="24"
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
              width="24"
              height="24"
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

      {/* Mobile Navigation Drawer */}
      <div
        className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-drawer-content">
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
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mobile-drawer-footer">
            <p className="mobile-institution-tag">
              Chaitanya Bharathi Institute of Technology, Hyderabad
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
