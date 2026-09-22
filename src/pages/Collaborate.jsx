import React, { useState } from 'react';
import { CLUB_DETAILS } from '../data/clubInfo';
import './Pages.css';

export default function Collaborate() {
  const [sent, setSent] = useState(false);

  const collaborationTypes = [
    {
      title: 'Technology & Hardware Brands',
      desc: 'Showcase gaming rigs, peripherals, monitors, and products directly to hundreds of passionate collegiate gamers and tech enthusiasts through experience zones and on-campus testing.'
    },
    {
      title: 'Esports Organizations & Publishers',
      desc: 'Host collegiate qualifiers, scout grassroots competitive talent, and run official campus activations under authorized competitive formats.'
    },
    {
      title: 'Event Organizers & Fest Committees',
      desc: 'Integrate full-scale LAN tournaments, live commentary, and competitive brackets into your technical, cultural, or inter-college fests.'
    },
    {
      title: 'Gaming Lounges & Venues',
      desc: 'Partner for offline viewing parties, bootcamp bootcamps, and local LAN tournaments with verified student footfall in Hyderabad.'
    },
    {
      title: 'Collegiate Esports Clubs',
      desc: 'Organize inter-college exhibition matches, dual-hosted scrim seasons, and cross-campus varsity invitationals.'
    }
  ];

  return (
    <div className="page-container">
      <section className="page-hero">
        <div className="container">
          <span className="section-badge">Partnership & Outreach</span>
          <h1 className="page-hero-title">Collaborate with CBIT Esports</h1>
          <p className="page-hero-desc">
            We partner with industry-leading brands, collegiate organizations, and venues to build professional esports infrastructure and memorable experiences at CBIT Hyderabad.
          </p>
        </div>
      </section>

      <div className="container">
        {/* Why Collaborate */}
        <div className="section-header">
          <span className="section-badge">Engagement Models</span>
          <h2 className="section-heading" style={{ fontSize: '26px' }}>How We Can Work Together</h2>
          <p className="section-subheading">
            CBIT Esports offers tailored collaboration avenues designed for genuine collegiate engagement and brand credibility.
          </p>
        </div>

        <div className="cards-grid-3col" style={{ marginBottom: '48px' }}>
          {collaborationTypes.map((item, idx) => (
            <div key={idx} className="content-card">
              <span className="tag tag-gold" style={{ alignSelf: 'flex-start', marginBottom: '12px' }}>
                0{idx + 1}
              </span>
              <h3 className="content-card-title">{item.title}</h3>
              <p className="content-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Corporate / Partner Inquiry Form */}
        <div className="contact-info-panel" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <span className="section-badge">Direct Proposal</span>
          <h3 style={{ fontSize: '22px', color: 'var(--text-primary)', marginBottom: '8px' }}>
            Let's Collaborate
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Share your proposal or event brief with our corporate liaison and club coordinators.
          </p>

          {sent ? (
            <div style={{
              padding: '24px',
              backgroundColor: 'var(--accent-gold-subtle)',
              border: '1px solid var(--accent-gold-border)',
              borderRadius: '4px',
              textAlign: 'center'
            }}>
              <span style={{ color: 'var(--accent-gold)', fontSize: '24px', display: 'block', marginBottom: '8px' }}>✓</span>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '6px' }}>Proposal Received</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Thank you for reaching out to CBIT Esports. Our outreach coordinator will respond to your organization within 2 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Organization / Brand Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Brand / Organization"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-card)',
                      borderRadius: '4px',
                      color: 'var(--text-primary)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-card)',
                      borderRadius: '4px',
                      color: 'var(--text-primary)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="partner@company.com"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-card)',
                      borderRadius: '4px',
                      color: 'var(--text-primary)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Collaboration Type *
                  </label>
                  <select
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-card)',
                      borderRadius: '4px',
                      color: 'var(--text-primary)',
                      fontSize: '14px',
                      outline: 'none'
                    }}
                  >
                    <option>Sponsorship & Brand Showcase</option>
                    <option>Tournament Partnership</option>
                    <option>Hardware / Experience Zone</option>
                    <option>College Fest Collaboration</option>
                    <option>Other Institutional Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Proposal Details / Scope *
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Outline your proposed event, expected timeline, scope of collaboration, or deliverable expectations..."
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    backgroundColor: 'var(--bg-primary)',
                    border: '1px solid var(--border-card)',
                    borderRadius: '4px',
                    color: 'var(--text-primary)',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                Let's Collaborate
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
