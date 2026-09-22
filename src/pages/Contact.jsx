import React from 'react';
import { CLUB_DETAILS, TEAM_MEMBERS } from '../data/clubInfo';
import './Pages.css';

export default function Contact() {
  return (
    <div className="page-container">
      <section className="page-hero">
        <div className="container">
          <span className="section-badge">Get in Touch</span>
          <h1 className="page-hero-title">Contact & Leadership</h1>
          <p className="page-hero-desc">
            Connect directly with the CBIT Esports coordination team, student leads, and official communication channels.
          </p>
        </div>
      </section>

      <div className="container">
        {/* Official Channels */}
        <div className="cards-grid-2col" style={{ marginBottom: '64px', alignItems: 'start' }}>
          <div className="contact-info-panel">
            <span className="section-badge">Direct Communication</span>
            <h2 style={{ fontSize: '22px', color: 'var(--text-primary)', marginBottom: '8px' }}>
              Official Club Handles
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
              For official notices, event queries, and collegiate communication.
            </p>

            <div className="contact-row">
              <span className="contact-row-label">Campus</span>
              <span className="contact-row-val">
                {CLUB_DETAILS.collegeName}
                <br />
                <span style={{ color: 'var(--text-muted)', fontSize: '13px' }}>
                  {CLUB_DETAILS.location}
                </span>
              </span>
            </div>

            <div className="contact-row">
              <span className="contact-row-label">Email</span>
              <span className="contact-row-val">
                <a href={`mailto:${CLUB_DETAILS.email}`}>{CLUB_DETAILS.email}</a>
              </span>
            </div>

            <div className="contact-row">
              <span className="contact-row-label">Instagram</span>
              <span className="contact-row-val">
                <a href={CLUB_DETAILS.instagram} target="_blank" rel="noopener noreferrer">
                  @cbitesports ↗
                </a>
              </span>
            </div>

            <div className="contact-row">
              <span className="contact-row-label">LinkedIn</span>
              <span className="contact-row-val">
                <a href={CLUB_DETAILS.linkedin} target="_blank" rel="noopener noreferrer">
                  CBIT Esports Official ↗
                </a>
              </span>
            </div>

            <div className="contact-row">
              <span className="contact-row-label">Discord</span>
              <span className="contact-row-val">
                <a href={CLUB_DETAILS.discord} target="_blank" rel="noopener noreferrer">
                  Join Campus Server ↗
                </a>
              </span>
            </div>
          </div>

          <div className="content-card" style={{ height: '100%', justifyContent: 'center' }}>
            <span className="section-badge">Campus Inquiries</span>
            <h3 className="content-card-title">Visiting CBIT Campus</h3>
            <p className="content-card-desc">
              CBIT Esports operations and physical LAN tournaments take place on the Chaitanya Bharathi Institute of Technology campus in Gandipet, Hyderabad.
            </p>
            <div style={{
              backgroundColor: 'var(--bg-primary)',
              padding: '16px',
              borderRadius: '4px',
              border: '1px solid var(--border-card)',
              fontSize: '13px',
              color: 'var(--text-secondary)'
            }}>
              <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '4px' }}>
                Office / Hub:
              </strong>
              Student Activity Center / Indoor Sports Complex, CBIT Gandipet, Hyderabad 500075.
            </div>
          </div>
        </div>

        {/* Team Leadership Section (Faithful placeholders as specified) */}
        <div>
          <div className="section-header">
            <span className="section-badge">Core Committee</span>
            <h2 className="section-heading" style={{ fontSize: '26px' }}>Club Leadership</h2>
            <p className="section-subheading">
              Student coordinators and operational leads for the current academic session.
            </p>
          </div>

          <div className="cards-grid-2col">
            {TEAM_MEMBERS.map((member, idx) => (
              <div key={idx} className="content-card" style={{ flexDirection: 'row', gap: '16px', alignItems: 'center' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '4px',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1px solid var(--border-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  flexShrink: 0
                }}>
                  0{idx + 1}
                </div>
                <div style={{ flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span className="tag tag-gold" style={{ fontSize: '11px', padding: '2px 6px' }}>
                      {member.status}
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                      {member.domain}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '16px', color: 'var(--text-primary)', marginBottom: '2px' }}>
                    {member.name}
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
