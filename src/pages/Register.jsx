import React, { useState } from 'react';
import { UPCOMING_EVENTS } from '../data/events';
import './Pages.css';

export default function Register() {
  const [selectedEvent, setSelectedEvent] = useState(UPCOMING_EVENTS[0] || null);
  const [formData, setFormData] = useState({
    teamName: '',
    captainName: '',
    captainEmail: '',
    captainRollNumber: '',
    phone: '',
    discordTag: '',
    gameTitle: 'Valorant',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!selectedEvent) {
    return (
      <div className="page-container">
        <section className="page-hero">
          <div className="container">
            <span className="section-badge">Competition Portal</span>
            <h1 className="page-hero-title">Tournament Registration</h1>
            <p className="page-hero-desc">
              Register your team or solo entry for upcoming CBIT Esports tournaments, scrims, and campus LANs.
            </p>
          </div>
        </section>
        <div className="container" style={{ textAlign: 'center', padding: '80px 20px', minHeight: '40vh' }}>
          <div style={{ display: 'inline-block', padding: '32px', backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', border: '1px solid var(--border-card)' }}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="var(--accent-gold)" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              style={{ marginBottom: '16px', display: 'inline-block' }}
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <h2 style={{ fontSize: '24px', color: 'var(--text-primary)', marginBottom: '12px' }}>No Active Events</h2>
            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '400px', margin: '0 auto', lineHeight: '1.6' }}>
              There are currently no tournaments or events open for registration. Check back later or follow our announcements!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <section className="page-hero">
        <div className="container">
          <span className="section-badge">Competition Portal</span>
          <h1 className="page-hero-title">Tournament Registration</h1>
          <p className="page-hero-desc">
            Register your team or solo entry for upcoming CBIT Esports tournaments, scrims, and campus LANs.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="cards-grid-2col" style={{ alignItems: 'start' }}>
          {/* Active Events List */}
          <div>
            <h2 className="section-heading" style={{ fontSize: '22px', marginBottom: '16px' }}>
              Currently Active Brackets
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {UPCOMING_EVENTS.map((evt) => {
                const isSelected = selectedEvent.id === evt.id;
                return (
                  <div
                    key={evt.id}
                    className="content-card"
                    style={{
                      borderColor: isSelected ? 'var(--accent-gold)' : 'var(--border-card)',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      setSelectedEvent(evt);
                      setSubmitted(false);
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                      <span className="tag tag-gold">{evt.category}</span>
                      <span style={{ fontSize: '12px', color: '#10B981', fontWeight: 600 }}>
                        ● {evt.status}
                      </span>
                    </div>
                    <h3 className="content-card-title">{evt.title}</h3>
                    <p className="content-card-desc">{evt.shortDescription}</p>

                    <div style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', gap: '16px', marginTop: '8px' }}>
                      <span><strong>Date:</strong> {evt.date}</span>
                      <span><strong>Format:</strong> {evt.teamSize}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Registration Form / Details */}
          <div className="contact-info-panel">
            <span className="section-badge">Entry Form</span>
            <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '8px' }}>
              Register: {selectedEvent.title}
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Fill in your verified collegiate details. Team rosters will receive bracket verification via Discord.
            </p>

            {submitted ? (
              <div style={{
                padding: '24px',
                backgroundColor: 'var(--accent-gold-subtle)',
                border: '1px solid var(--accent-gold-border)',
                borderRadius: '4px',
                textAlign: 'center'
              }}>
                <span style={{ color: 'var(--accent-gold)', fontSize: '24px', display: 'block', marginBottom: '8px' }}>✓</span>
                <h4 style={{ color: 'var(--text-primary)', marginBottom: '6px' }}>Registration Form Submitted</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                  Thank you, {formData.captainName || 'Player'}. Your roster submission has been queued for verification. Check your email for tournament discord role.
                </p>
                <button
                  type="button"
                  className="btn btn-secondary"
                  style={{ marginTop: '16px' }}
                  onClick={() => setSubmitted(false)}
                >
                  Register Another Entry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Team / Roster Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. CBIT Phoenix"
                    value={formData.teamName}
                    onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
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

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '12px', color: 'var(--text-secondary)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Captain Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.captainName}
                      onChange={(e) => setFormData({ ...formData, captainName: e.target.value })}
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
                      CBIT Roll Number *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 160122733000"
                      value={formData.captainRollNumber}
                      onChange={(e) => setFormData({ ...formData, captainRollNumber: e.target.value })}
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
                      College Email / Contact *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="student@cbit.ac.in"
                      value={formData.captainEmail}
                      onChange={(e) => setFormData({ ...formData, captainEmail: e.target.value })}
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
                      Discord ID / Tag *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="username#0000"
                      value={formData.discordTag}
                      onChange={(e) => setFormData({ ...formData, discordTag: e.target.value })}
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

                <button type="submit" className="btn btn-primary" style={{ marginTop: '8px', width: '100%' }}>
                  Submit Registration
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
