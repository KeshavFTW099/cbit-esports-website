import React from 'react';
import { Link } from 'react-router-dom';
import './CurrentSpotlight.css';

/**
 * CurrentSpotlight component
 * 
 * Supports both:
 * 1. Active Live Event State (when active === true && event is provided)
 * 2. Intentional Editorial Empty State (when active === false || !event)
 * 
 * @param {Object} props
 * @param {boolean} [props.active=false] - Whether an event is currently live
 * @param {Object} [props.event=null] - The active event data object
 */
export default function CurrentSpotlight({ active = false, event = null }) {
  const isLive = Boolean(active && event);

  return (
    <section className="current-spotlight-section" aria-labelledby="spotlight-heading">
      <div className="container">
        {/* Editorial Section Header with Thin Divider Treatment */}
        <div className="spotlight-editorial-header">
          <div className="spotlight-title-group">
            <span className="spotlight-index-label" aria-hidden="true">01</span>
            <span className="spotlight-divider-line" aria-hidden="true"></span>
            <h2 id="spotlight-heading" className="spotlight-heading-text">
              CURRENT SPOTLIGHT
            </h2>
          </div>
        </div>

        {isLive ? (
          /* ================================================================
             FUTURE LIVE STATE (active: true)
             Displays active tournament bracket, dates, media, and CTAs
             ================================================================ */
          <div className="spotlight-live-card">
            <div className="spotlight-live-media">
              {event.video ? (
                <video
                  src={event.video}
                  className="spotlight-live-media-element"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={event.featuredImage || event.image}
                  alt={event.title || event.name}
                  className="spotlight-live-media-element"
                  loading="lazy"
                />
              )}
              {event.status && (
                <div className="spotlight-status-badge">
                  <span className="spotlight-live-pulse" aria-hidden="true"></span>
                  {event.status}
                </div>
              )}
            </div>

            <div className="spotlight-live-body">
              <div className="spotlight-live-meta">
                {event.category && <span className="tag tag-gold">{event.category}</span>}
                {event.date && <span className="spotlight-live-date">{event.date}</span>}
              </div>

              <h3 className="spotlight-live-title">{event.title || event.name}</h3>
              <p className="spotlight-live-desc">{event.shortDescription || event.description}</p>

              <div className="spotlight-live-actions">
                <Link to="/register" className="btn btn-primary">
                  Register For Event
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <Link to={event.detailsUrl || "/past-events"} className="btn btn-secondary">
                  View Full Details
                </Link>
              </div>
            </div>
          </div>
        ) : (
          /* ================================================================
             CURRENT EDITORIAL EMPTY STATE (active: false)
             Polished, intentional, human-designed with past events gateway
             ================================================================ */
          <div className="spotlight-editorial-container">
            {/* Subtle authentic background watermark (Strictly ONE identity element) */}
            <div className="spotlight-identity-watermark" aria-hidden="true">
              <img
                src="/logo-transparent.png"
                alt=""
                className="spotlight-watermark-img"
                width="340"
                height="340"
              />
            </div>

            <div className="spotlight-editorial-content">
              {/* Left Column: Primary Status & Editorial Tone */}
              <div className="spotlight-statement-block">
                <div className="spotlight-status-indicator-row">
                  <span className="spotlight-idle-dot" aria-hidden="true"></span>
                  <span className="spotlight-status-caption">SEASON STATUS</span>
                </div>
                
                <h3 className="spotlight-statement-main">
                  No events currently.
                </h3>
                
                <p className="spotlight-statement-sub">
                  Stay tuned.
                </p>
              </div>

              {/* Right Column: Editorial Past Events Discovery Gateway */}
              <div className="spotlight-gateway-block">
                <div className="spotlight-gateway-inner">
                  <span className="spotlight-gateway-eyebrow">COLLEGIATE ARCHIVE</span>
                  
                  <Link
                    to="/past-events"
                    className="spotlight-gateway-cta"
                    aria-label="Explore past events and official tournament archive"
                  >
                    <span className="gateway-cta-label">EXPLORE PAST EVENTS</span>
                    <span className="gateway-cta-arrow" aria-hidden="true">→</span>
                  </Link>

                  <p className="spotlight-gateway-note">
                    Browse verified tournament brackets, campus LAN highlights, and brand activations from 2025 to 2026.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
