import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CLUB_DETAILS, WHAT_WE_DO } from '../data/clubInfo';
import CurrentSpotlight from '../components/CurrentSpotlight';
import './Home.css';

export default function Home() {

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div className="home-page">
      {/* ====================================================================
          1. HERO SECTION
          Two-column desktop layout with introductory video, mobile vertical stack
          ==================================================================== */}
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero-grid">
            {/* Left Column: Title, Description, CTAs */}
            <div className="hero-text-col">
              {/* Institutional Affiliation & Dual Branding (No background box) */}
              <div className="hero-affiliation-block" aria-label="CBIT and CBIT Esports Affiliation">
                {/* Horizontal Logos Row */}
                <div className="affiliation-logos-row">
                  <img
                    src="/cbit-college-logo.png"
                    alt="Chaitanya Bharathi Institute of Technology (CBIT)"
                    className="affiliation-logo college-logo"
                    width="62"
                    height="62"
                    loading="eager"
                  />
                  <span className="affiliation-divider" aria-hidden="true">×</span>
                  <img
                    src="/logo-transparent.png"
                    alt="CBIT Esports"
                    className="affiliation-logo esports-logo"
                    width="58"
                    height="58"
                    loading="eager"
                  />
                </div>
              </div>

              <h1 id="hero-title" className="hero-title">
                CBIT <span className="text-gold">ESPORTS</span>
              </h1>

              <p className="hero-description">
                The official esports and competitive gaming organization of CBIT Hyderabad.
              </p>

              {/* CTAs */}
              <div className="hero-actions">
                <Link to="/register" className="btn btn-primary">
                  Register For Events
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <a href="#past-events-section" className="btn btn-secondary">
                  Explore Events
                </a>
              </div>
            </div>

            {/* Right Column: Introductory Video */}
            <div className="hero-video-col">
              <div className="hero-video-container">
                <video
                  ref={videoRef}
                  className="hero-video-player"
                  poster="/hero-poster.jpg"
                  preload="metadata"
                  playsInline
                  muted={isMuted}
                  autoPlay
                  loop
                  aria-label="CBIT Esports introductory induction video"
                >
                  <source src="/cbit-induction-web.mp4" type="video/mp4" media="(min-width: 769px)" />
                  <source src="/cbit-induction-mobile.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Subtle video playback controls */}
                <div className="hero-video-controls" aria-label="Video controls">
                  <button
                    type="button"
                    className="hero-video-ctrl-btn"
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  >
                    {isPlaying ? (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                      </svg>
                    ) : (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    )}
                  </button>
                  <button
                    type="button"
                    className="hero-video-ctrl-btn"
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                  >
                    {isMuted ? (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <line x1="23" y1="9" x2="17" y2="15" />
                        <line x1="17" y1="9" x2="23" y2="15" />
                      </svg>
                    ) : (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          2. CURRENT SPOTLIGHT
          Editorial empty state with direct Past Events gateway
          ==================================================================== */}
      <CurrentSpotlight active={false} />

      {/* ====================================================================
          3. ABOUT CBIT ESPORTS
          Concise, human, straightforward, no AI fluff, authentic collegiate identity
          ==================================================================== */}
      <section className="section" aria-labelledby="about-heading">
        <div className="container">
          <div className="about-grid">
            <div className="about-text-column">
              <span className="section-badge">About Us</span>
              <h2 id="about-heading" className="section-heading">
                Built for Competitors. <br />Driven by Community.
              </h2>
              <p className="about-paragraph">
                {CLUB_DETAILS.longBio}
              </p>
              <p className="about-paragraph">
                Whether you are an aspiring tournament player looking to test your aim, a student caster, an event coordinator managing live tournament brackets, or an avid gaming fan, CBIT Esports is your home on campus.
              </p>

              <div className="about-pillars-mini">
                <div className="pillar-item">
                  <span className="pillar-number">01</span>
                  <div className="pillar-info">
                    <strong>Collegiate Esports</strong>
                    <p>Structured inter-college tournaments and scrim circuits.</p>
                  </div>
                </div>
                <div className="pillar-item">
                  <span className="pillar-number">02</span>
                  <div className="pillar-info">
                    <strong>Campus LAN Culture</strong>
                    <p>High-refresh physical gaming setups and viewing stages.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-identity-card">
              <div className="identity-inner">
                <div className="identity-header">
                  <span className="identity-label">Affiliation</span>
                  <span className="identity-badge">Student Body</span>
                </div>
                <h4 className="identity-college-name">
                  Chaitanya Bharathi Institute of Technology
                </h4>
                <p className="identity-address">
                  Gandipet, Hyderabad, Telangana 500075
                </p>
                <div className="identity-divider"></div>
                <div className="identity-stats-row">
                  <div className="id-stat">
                    <span className="id-stat-num">2023</span>
                    <span className="id-stat-lbl">Established</span>
                  </div>
                  <div className="id-stat">
                    <span className="id-stat-num">Official</span>
                    <span className="id-stat-lbl">Club Status</span>
                  </div>
                  <div className="id-stat">
                    <span className="id-stat-num">Hyderabad</span>
                    <span className="id-stat-lbl">Location</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          4. WHAT WE DO
          Typographic, minimal, 4 areas: Tournaments, Events, Community, Collaborations
          ==================================================================== */}
      <section className="section section-alt" aria-labelledby="what-we-do-heading">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">Core Pillars</span>
            <h2 id="what-we-do-heading" className="section-heading">What We Do</h2>
            <p className="section-subheading">
              Four fundamental focus areas shaping collegiate esports culture at CBIT.
            </p>
          </div>

          <div className="pillars-grid">
            {WHAT_WE_DO.map((pillar) => (
              <div key={pillar.badge} className="pillar-card">
                <div className="pillar-badge-num">{pillar.badge}</div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================
          5. PAST EVENTS (EDITORIAL ARCHIVE PREVIEW)
          Condensed spotlight linking directly to /past-events
          ==================================================================== */}
      <section id="past-events-section" className="section" aria-labelledby="past-events-heading">
        <div className="container">
          <div className="section-header-row">
            <div>
              <span className="section-badge">Historic Archive</span>
              <h2 id="past-events-heading" className="section-heading">Past Events</h2>
              <p className="section-subheading">
                A track record of official collegiate tournaments, campus gaming activations, and publisher partnerships.
              </p>
            </div>
            <Link to="/past-events" className="btn btn-secondary view-all-btn">
              View Full Archive
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          {/* Editorial Archive Spotlight */}
          <div className="archive-spotlight-card">
            <div className="archive-spotlight-header">
              <span className="archive-spotlight-year">2026 Archive Highlight</span>
              <span className="archive-spotlight-status">Verified Event Record</span>
            </div>

            <div className="archive-spotlight-grid">
              <div className="archive-spotlight-media">
                <img
                  src="/events/monster-bgmi-2026.jpg"
                  alt="Monster × BGMI Campus Gaming Activation at CBIT"
                  className="archive-spotlight-img"
                  loading="lazy"
                />
                <span className="archive-spotlight-chip">08–10 APR 2026</span>
              </div>

              <div className="archive-spotlight-content">
                <div className="archive-spotlight-meta">
                  <span className="spotlight-date">08–10 APR 2026</span>
                  <span className="spotlight-sep">•</span>
                  <span className="spotlight-cat">Campus Gaming Activation</span>
                </div>

                <h3 className="archive-spotlight-title">Monster × BGMI</h3>

                <p className="archive-spotlight-desc">
                  A 3-day esports activation conducted at CBIT in collaboration with Monster Energy and BGMI. The first two days focused on student engagement and Monster Energy product distribution, while the third day featured a competitive BGMI tournament with live match screening for the campus audience.
                </p>

                <div className="archive-spotlight-metrics">
                  <div className="spotlight-metric-item">
                    <span className="spotlight-metric-val">128</span>
                    <span className="spotlight-metric-lbl">Participants</span>
                  </div>
                  <div className="spotlight-metric-item">
                    <span className="spotlight-metric-val">3 Days</span>
                    <span className="spotlight-metric-lbl">Campus Activation</span>
                  </div>
                  <div className="spotlight-metric-item">
                    <span className="spotlight-metric-val">Collab</span>
                    <span className="spotlight-metric-lbl">Monster × BGMI</span>
                  </div>
                </div>

                <div className="archive-spotlight-actions">
                  <Link to="/past-events" className="btn btn-primary">
                    Explore Timeline & All Events
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-view-all-wrapper">
            <Link to="/past-events" className="btn btn-secondary mobile-view-all-btn">
              Explore Full Archive (2025–2026)
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================
          6. PARTNERS / COLLABORATIONS
          Gateway to the dedicated Collaborate page
          ==================================================================== */}
      <section className="section section-alt" aria-labelledby="partners-heading">
        <div className="container">
          <div className="section-header centered">
            <span className="section-badge">Partnerships</span>
            <h2 id="partners-heading" className="section-heading">Build With CBIT Esports</h2>
            <p className="section-subheading text-center" style={{ maxWidth: '640px', margin: '0 auto 32px auto' }}>
              We collaborate with hardware manufacturers, endemic gaming brands, and student organizations to execute premier campus gaming events and reach an engaged collegiate audience.
            </p>
          </div>

          <div className="partner-cta-row" style={{ marginBottom: '32px', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '40px 24px' }}>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '28px', fontWeight: '800', color: 'var(--accent-gold)' }}>7K+</span>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: '600' }}>Students</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '28px', fontWeight: '800', color: 'var(--accent-gold)' }}>6K+</span>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: '600' }}>Event Footfall</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: '28px', fontWeight: '800', color: 'var(--accent-gold)' }}>2.5K+</span>
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: '600' }}>Social Presence</span>
              </div>
            </div>
            
            <p className="partner-cta-text" style={{ marginBottom: '24px', fontSize: '16px' }}>
              Interested in organizing a campus tournament, sponsoring our next LAN, or activating your product?
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Link to="/collaborate" className="btn btn-primary">
                Explore Partnership Opportunities
              </Link>
              <Link to="/register" className="btn btn-secondary">
                View Current Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ====================================================================
          7. JOIN US CTA
          Clean, strong, uncluttered invitation to join CBIT Esports
          ==================================================================== */}
      <section className="section join-section" aria-labelledby="join-heading">
        <div className="container">
          <div className="join-cta-card">
            <span className="section-badge">Student Opportunities</span>
            <h2 id="join-heading" className="join-cta-heading">
              Want to Be Part of <br />CBIT Esports?
            </h2>
            <p className="join-cta-desc">
              Whether you compete on the virtual stage, manage live tournament operations, design graphics, create content, or build collegiate gaming communities — there is a place for you.
            </p>
            <div className="join-cta-actions">
              <Link to="/join-us" className="btn btn-primary join-btn">
                Apply to Join
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
