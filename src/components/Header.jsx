import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AVAILABLE_YEARS } from '../data/events';
import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobilePastEventsOpen, setIsMobilePastEventsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  }

  // Close menus on Escape key press or click outside
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/register', label: 'Register' },
    { to: '/past-events', label: 'Past Events', isDropdown: true },
    { to: '/join-us', label: 'Join Us' },
    { to: '/collaborate', label: 'Collaborate With Us' },
    { to: '/contact', label: 'Contact Us' },
  ];

  const isPastEventsActive = location.pathname.startsWith('/past-events');

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
                if (link.isDropdown) {
                  return (
                    <li
                      key={link.to}
                      className="nav-item nav-item-dropdown"
                      ref={dropdownRef}
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <div className="dropdown-trigger-wrapper">
                        <Link
                          to={link.to}
                          className={`nav-link ${isPastEventsActive ? 'active' : ''}`}
                          aria-current={isPastEventsActive ? 'page' : undefined}
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <span className="nav-link-text">{link.label}</span>
                          <span
                            className={`dropdown-caret ${isDropdownOpen ? 'open' : ''}`}
                            aria-hidden="true"
                          >
                            ▾
                          </span>
                        </Link>
                      </div>

                      {/* Clean Minimal Year Dropdown Menu */}
                      <div
                        className={`nav-dropdown-menu ${isDropdownOpen ? 'open' : ''}`}
                        role="menu"
                        aria-label="Past Events Archive Years"
                      >
                        <ul className="dropdown-year-list">
                          {AVAILABLE_YEARS.map((yr) => {
                            const isYearActive = location.pathname === `/past-events/${yr}`;
                            return (
                              <li key={yr} role="none">
                                <Link
                                  to={`/past-events/${yr}`}
                                  className={`dropdown-year-link ${isYearActive ? 'active' : ''}`}
                                  role="menuitem"
                                  onClick={() => setIsDropdownOpen(false)}
                                >
                                  <span className="dropdown-year-num">{yr}</span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </li>
                  );
                }

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
              if (link.isDropdown) {
                return (
                  <li key={link.to} className="mobile-nav-item mobile-nav-dropdown-item">
                    <button
                      type="button"
                      className={`mobile-nav-link mobile-dropdown-trigger ${isPastEventsActive ? 'active' : ''}`}
                      onClick={() => setIsMobilePastEventsOpen(!isMobilePastEventsOpen)}
                      aria-expanded={isMobilePastEventsOpen}
                      aria-label="Toggle Past Events Archive Years"
                    >
                      <span>{link.label}</span>
                      <span className={`mobile-caret ${isMobilePastEventsOpen ? 'open' : ''}`}>▾</span>
                    </button>

                    {/* Mobile Sub-Years List: Strictly year numbers with indentation & vertical line */}
                    {isMobilePastEventsOpen && (
                      <ul className="mobile-sub-years-list" aria-label="Past Events Archive Years">
                        {AVAILABLE_YEARS.map((yr) => {
                          const isYrActive = location.pathname === `/past-events/${yr}`;
                          return (
                            <li key={yr} className="mobile-sub-year-item">
                              <Link
                                to={`/past-events/${yr}`}
                                className={`mobile-sub-year-link ${isYrActive ? 'active' : ''}`}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {yr}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              }

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
