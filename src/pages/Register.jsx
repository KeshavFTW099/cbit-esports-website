import React, { useState } from 'react';
import { UPCOMING_EVENTS } from '../data/events';
import './Pages.css';

export default function Register() {
  const [selectedEvent, setSelectedEvent] = useState(UPCOMING_EVENTS[0] || null);

  if (!selectedEvent) {
    return (
      <div className="page-container">
        <section className="page-hero">
          <div className="container">
            <span className="section-badge">Competition & Event Portal</span>
            <h1 className="page-hero-title">Event Registration</h1>
            <p className="page-hero-desc">
              Register your spot for upcoming CBIT Esports tournaments, collegiate campus events, and LANs.
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
              There are currently no events open for registration. Check back later or follow our announcements!
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Google Form embed URL
  const googleFormEmbedUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdr2t4LMTAmyB0S2xZp5SmWsOznhNP5QRbwvS-jTB7KQj4W-g/viewform?embedded=true";
  const googleFormDirectUrl = selectedEvent.googleFormUrl || "https://forms.gle/FcG3U6qVcoLPXHeL6";

  return (
    <div className="page-container">
      <section className="page-hero">
        <div className="container">
          <span className="section-badge">Event Portal</span>
          <h1 className="page-hero-title">Official Event Registration</h1>
          <p className="page-hero-desc">
            Register your attendance for active events, campus LANs, and collegiate esports activations at CBIT & MGIT.
          </p>
        </div>
      </section>

      <div className="container">
        <div className="cards-grid-2col" style={{ alignItems: 'start' }}>
          
          {/* Left Column: Event Card Details */}
          <div>
            <h2 className="section-heading" style={{ fontSize: '22px', marginBottom: '16px' }}>
              Active Events
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
                      boxShadow: isSelected ? '0 0 16px rgba(242, 181, 68, 0.15)' : 'none',
                      cursor: 'pointer',
                    }}
                    onClick={() => setSelectedEvent(evt)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span className="tag tag-gold">{evt.category}</span>
                      <span style={{ fontSize: '12px', color: '#10B981', fontWeight: 700, letterSpacing: '0.05em' }}>
                        ● {evt.status}
                      </span>
                    </div>

                    {evt.thumbnail && (
                      <div style={{
                        width: '100%',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        marginBottom: '16px',
                        border: '1px solid var(--border-card)',
                        maxHeight: '340px'
                      }}>
                        <img 
                          src={evt.thumbnail} 
                          alt={evt.title} 
                          style={{
                            width: '100%',
                            height: '100%',
                            maxHeight: '340px',
                            objectFit: 'cover',
                            display: 'block'
                          }}
                        />
                      </div>
                    )}

                    {/* Event Banner Details */}
                    <div style={{
                      backgroundColor: 'rgba(242, 181, 68, 0.08)',
                      border: '1px solid var(--accent-gold-border)',
                      borderRadius: '6px',
                      padding: '12px 14px',
                      marginBottom: '16px',
                      fontSize: '13px',
                      color: 'var(--text-primary)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px'
                    }}>
                      <div>🔥 <strong>ENTRY:</strong> <span style={{ color: 'var(--accent-gold)', fontWeight: 700 }}>{evt.fee}</span></div>
                      <div>📅 <strong>Dates:</strong> {evt.date}</div>
                      <div>📍 <strong>Location:</strong> {evt.location}</div>
                      <div>🎓 <strong>Eligibility:</strong> {evt.eligibility}</div>
                    </div>

                    <p className="content-card-desc" style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text-secondary)', whitespace: 'pre-line' }}>
                      {evt.description}
                    </p>

                    <div style={{ marginTop: '16px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <a 
                        href={googleFormDirectUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
                      >
                        Open Form in Google Forms ↗
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Embedded Google Form */}
          <div className="contact-info-panel" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <div>
                <span className="section-badge">Registration Form</span>
                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginTop: '4px' }}>
                  {selectedEvent.title}
                </h3>
              </div>
              <a 
                href={googleFormDirectUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ fontSize: '12px', color: 'var(--accent-gold)', fontWeight: 600, textDecoration: 'underline' }}
              >
                Open in new tab ↗
              </a>
            </div>

            {/* Embedded Responsive Google Form Container */}
            <div style={{
              position: 'relative',
              width: '100%',
              minHeight: '750px',
              backgroundColor: '#ffffff',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
            }}>
              <iframe
                src={googleFormEmbedUrl}
                title="BMSD Event Registration Google Form"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                style={{
                  width: '100%',
                  height: '800px',
                  border: 'none',
                  display: 'block'
                }}
              >
                Loading form...
              </iframe>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
