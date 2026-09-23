import React from 'react';
import { CLUB_DETAILS } from '../data/clubInfo';
import './Pages.css';

export default function JoinUs() {
  return (
    <div className="page-container join-us-page">
      <section className="page-hero">
        <div className="container">
          <span className="section-badge">Student Recruitment</span>
          <h1 className="page-hero-title">Join CBIT Esports</h1>
          <p className="page-hero-desc">
            Official student recruitment and team induction portal for Chaitanya Bharathi Institute of Technology.
          </p>
        </div>
      </section>

      <div className="container">
        <section className="no-openings-section" aria-labelledby="no-openings-title">
          <div className="no-openings-panel">
            <span className="no-openings-kicker">JOIN THE TEAM</span>
            <h2 id="no-openings-title" className="no-openings-title">NO CURRENT OPENINGS</h2>
            <div className="no-openings-divider" aria-hidden="true" />
            <p className="no-openings-lead">There are no open positions at the moment.</p>
            <p className="no-openings-body">
              New opportunities will be announced here as they become available. For the latest updates and announcements, follow @cbitesports on Instagram.
            </p>
            <div className="no-openings-action">
              <a
                href={CLUB_DETAILS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="no-openings-btn"
                aria-label="Follow @cbitesports on Instagram"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="instagram-icon">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>FOLLOW @CBITESPORTS →</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
