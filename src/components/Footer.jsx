import React from 'react';
import { Link } from 'react-router-dom';
import { CLUB_DETAILS } from '../data/clubInfo';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-main-grid">
          {/* Brand & Purpose Column */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="footer-brand-logo">
              <img
                src="/logo.png"
                alt="CBIT Esports Emblem"
                width="38"
                height="38"
                className="footer-logo-img"
              />
              <span className="footer-brand-name">
                CBIT <span className="brand-accent">ESPORTS</span>
              </span>
            </Link>
            <p className="footer-description">
              The official esports and competitive gaming club of Chaitanya Bharathi Institute of Technology, Hyderabad.
            </p>
            <div className="footer-meta-tag">
              <span className="footer-dot"></span>
              <span>CBIT Gandipet, Hyderabad</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              <li><Link to="/register" className="footer-link">Register for Events</Link></li>
              <li><Link to="/past-events" className="footer-link">Past Events Archive</Link></li>
              <li><Link to="/join-us" className="footer-link">Join Us & Recruitment</Link></li>
              <li><Link to="/collaborate" className="footer-link">Collaborate With Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact & Team</Link></li>
            </ul>
          </div>

          {/* Connect & Institutional Info */}
          <div className="footer-col">
            <h4 className="footer-col-title">Connect</h4>
            <ul className="footer-nav-list">
              <li>
                <a
                  href={CLUB_DETAILS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Instagram ↗
                </a>
              </li>
              <li>
                <a
                  href={CLUB_DETAILS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a
                  href={CLUB_DETAILS.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Discord Server ↗
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CLUB_DETAILS.email}`}
                  className="footer-link"
                >
                  {CLUB_DETAILS.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright & College Attribution */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {currentYear} {CLUB_DETAILS.name}. All rights reserved.
          </p>
          <p className="footer-attribution">
            Chaitanya Bharathi Institute of Technology (Autonomous), Hyderabad - 500075
          </p>
        </div>
      </div>
    </footer>
  );
}
