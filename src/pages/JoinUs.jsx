import React, { useState } from 'react';
import { RECRUITMENT_DOMAINS } from '../data/clubInfo';
import './Pages.css';

export default function JoinUs() {
  const [selectedDomain, setSelectedDomain] = useState(RECRUITMENT_DOMAINS[0].name);
  const [applied, setApplied] = useState(false);

  return (
    <div className="page-container">
      <section className="page-hero">
        <div className="container">
          <span className="section-badge">Student Recruitment</span>
          <h1 className="page-hero-title">Join CBIT Esports</h1>
          <p className="page-hero-desc">
            Become part of the official collegiate gaming organization at CBIT. We recruit competitive players, tournament directors, broadcast technicians, designers, and community leads.
          </p>
        </div>
      </section>

      <div className="container">
        {/* Recruitment Areas Grid */}
        <div className="section-header">
          <span className="section-badge">Open Wings</span>
          <h2 className="section-heading" style={{ fontSize: '26px' }}>Areas of Involvement</h2>
          <p className="section-subheading">
            Choose the department that matches your passion and skillset.
          </p>
        </div>

        <div className="cards-grid-3col" style={{ marginBottom: '48px' }}>
          {RECRUITMENT_DOMAINS.map((domain) => (
            <div key={domain.id} className="content-card">
              <span className="tag tag-gold" style={{ alignSelf: 'flex-start', marginBottom: '12px' }}>
                Open Domain
              </span>
              <h3 className="content-card-title">{domain.name}</h3>
              <p className="content-card-desc">{domain.description}</p>
              <button
                type="button"
                className="btn btn-secondary"
                style={{ marginTop: 'auto', width: '100%', fontSize: '13px' }}
                onClick={() => {
                  setSelectedDomain(domain.name);
                  const formEl = document.getElementById('application-form-section');
                  if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Select {domain.name.split(' ')[0]}
              </button>
            </div>
          ))}
        </div>

        {/* Application Form */}
        <div id="application-form-section" className="contact-info-panel" style={{ maxWidth: '720px', margin: '0 auto' }}>
          <span className="section-badge">Recruitment Form</span>
          <h3 style={{ fontSize: '22px', color: 'var(--text-primary)', marginBottom: '8px' }}>
            Submit Your Application
          </h3>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
            Current CBIT students from all branches and academic years are eligible to apply.
          </p>

          {applied ? (
            <div style={{
              padding: '24px',
              backgroundColor: 'var(--accent-gold-subtle)',
              border: '1px solid var(--accent-gold-border)',
              borderRadius: '4px',
              textAlign: 'center'
            }}>
              <span style={{ color: 'var(--accent-gold)', fontSize: '24px', display: 'block', marginBottom: '8px' }}>✓</span>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '6px' }}>Application Submitted</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Your interest in the {selectedDomain} wing has been received. Our core team will reach out via email/Discord for the induction interview.
              </p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setApplied(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Target Wing / Domain *
                </label>
                <select
                  value={selectedDomain}
                  onChange={(e) => setSelectedDomain(e.target.value)}
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
                  {RECRUITMENT_DOMAINS.map((d) => (
                    <option key={d.id} value={d.name}>{d.name}</option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
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
                    Roll Number & Branch *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 160122733001 (CSE 3/4)"
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
                    College Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="student@cbit.ac.in"
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
                    Discord Handle *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="discord_tag"
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

              <div>
                <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Portfolio / In-game Rank / Experience *
                </label>
                <textarea
                  rows="3"
                  required
                  placeholder="Share your in-game rank, competitive history, portfolio link (Behance/Drive/GitHub), or past event experience..."
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
                Submit Club Application
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
