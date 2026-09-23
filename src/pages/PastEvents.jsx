import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PAST_EVENTS_BY_YEAR, AVAILABLE_YEARS } from '../data/events';
import './PastEvents.css';

/**
 * EventPhotoCarousel
 * Subtle photographic slideshow with auto-play, 650ms crossfade,
 * hover pause on desktop, touch swipe with 5s pause on mobile,
 * and strict prefers-reduced-motion compliance.
 */
function EventPhotoCarousel({
  images = [],
  title = '',
  shortDate = '',
  year = '',
  isMobile = false
}) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  const interactionTimeoutRef = useRef(null);
  const touchStartXRef = useRef(null);
  const totalPhotos = images.length;

  // Listen for prefers-reduced-motion changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handler = (e) => setReducedMotion(e.matches);
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handler);
      return () => mediaQuery.removeListener(handler);
    }
  }, []);

  // Clean up interaction timer on unmount
  useEffect(() => {
    return () => {
      if (interactionTimeoutRef.current) {
        clearTimeout(interactionTimeoutRef.current);
      }
    };
  }, []);

  const triggerManualInteraction = (targetIndex) => {
    setPhotoIndex(targetIndex);
    setIsInteracting(true);
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    // Resume autoplay after ~5 seconds of no interaction
    interactionTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 5000);
  };

  const prevPhoto = (e) => {
    if (e) e.stopPropagation();
    if (totalPhotos <= 1) return;
    const prevIdx = photoIndex > 0 ? photoIndex - 1 : totalPhotos - 1;
    triggerManualInteraction(prevIdx);
  };

  const nextPhoto = (e, manual = false) => {
    if (e) e.stopPropagation();
    if (totalPhotos <= 1) return;
    const nextIdx = photoIndex < totalPhotos - 1 ? photoIndex + 1 : 0;
    if (manual) {
      triggerManualInteraction(nextIdx);
    } else {
      setPhotoIndex(nextIdx);
    }
  };

  // Autoplay: Advance every 4 seconds (4000ms) with smooth 650ms crossfade
  useEffect(() => {
    if (totalPhotos <= 1 || reducedMotion || isHovered || isInteracting) {
      return;
    }

    const interval = setInterval(() => {
      setPhotoIndex((prev) => (prev < totalPhotos - 1 ? prev + 1 : 0));
    }, 4000);

    return () => clearInterval(interval);
  }, [totalPhotos, reducedMotion, isHovered, isInteracting]);

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    setIsInteracting(true);
    if (interactionTimeoutRef.current) {
      clearTimeout(interactionTimeoutRef.current);
    }
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped left -> next
        const nextIdx = photoIndex < totalPhotos - 1 ? photoIndex + 1 : 0;
        setPhotoIndex(nextIdx);
      } else {
        // Swiped right -> prev
        const prevIdx = photoIndex > 0 ? photoIndex - 1 : totalPhotos - 1;
        setPhotoIndex(prevIdx);
      }
    }
    touchStartXRef.current = null;

    // Resume autoplay after ~5 seconds of no interaction
    interactionTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 5000);
  };

  if (totalPhotos === 0) return null;

  // Mobile layout variant
  if (isMobile) {
    return (
      <div
        className="mobile-photo-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="mobile-photo-slides-track">
          {images.map((imgUrl, idx) => (
            <img
              key={imgUrl}
              src={imgUrl}
              alt={`${title} event photo ${idx + 1}`}
              className={`mobile-photo-slide ${photoIndex === idx ? 'active' : ''}`}
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          ))}
        </div>
        <div className="mobile-photo-tag">
          <span>{String(photoIndex + 1).padStart(2, '0')} / {String(totalPhotos).padStart(2, '0')}</span>
        </div>
      </div>
    );
  }

  // Desktop showcase layout
  return (
    <div
      className="showcase-carousel-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="showcase-carousel-media">
        {images.map((imgUrl, idx) => (
          <img
            key={imgUrl}
            src={imgUrl}
            alt={`${title} authentic event photograph ${idx + 1}`}
            className={`showcase-carousel-slide ${photoIndex === idx ? 'active' : ''}`}
            loading={idx === 0 ? 'eager' : 'lazy'}
          />
        ))}

        {/* Small Counter: 01 / 05 */}
        <div className="carousel-counter-tag">
          <span>{String(photoIndex + 1).padStart(2, '0')} / {String(totalPhotos).padStart(2, '0')}</span>
        </div>

        {/* Subtle Prev / Next Controls if multiple photos */}
        {totalPhotos > 1 && (
          <div className="carousel-nav-controls">
            <button
              type="button"
              onClick={prevPhoto}
              className="carousel-ctrl-btn prev"
              aria-label="Previous photograph"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={(e) => nextPhoto(e, true)}
              className="carousel-ctrl-btn next"
              aria-label="Next photograph"
            >
              ›
            </button>
          </div>
        )}
      </div>

      {/* Photo indicators strip */}
      {totalPhotos > 1 && (
        <div className="carousel-indicators-strip">
          {images.map((imgUrl, i) => (
            <button
              key={imgUrl}
              type="button"
              onClick={() => triggerManualInteraction(i)}
              className={`carousel-dot-btn ${photoIndex === i ? 'active' : ''}`}
              aria-label={`Jump to photograph ${i + 1}`}
            />
          ))}
        </div>
      )}

      <div className="showcase-photo-caption-bar">
        <span>CBIT On-Campus Documentation • Photo {photoIndex + 1} of {totalPhotos}</span>
        <span>{shortDate} {year}</span>
      </div>
    </div>
  );
}

export default function PastEvents() {
  const { year: routeYear } = useParams();
  const navigate = useNavigate();

  // Validate year parameter from route, default to 2026
  const activeYear = routeYear && AVAILABLE_YEARS.includes(routeYear) ? routeYear : '2026';
  const currentYearEvents = PAST_EVENTS_BY_YEAR[activeYear] || [];

  const [prevYear, setPrevYear] = useState(activeYear);
  const [selectedEventId, setSelectedEventId] = useState(currentYearEvents[0]?.id || '');

  // Sync selected event when year changes
  if (prevYear !== activeYear) {
    setPrevYear(activeYear);
    setSelectedEventId(currentYearEvents[0]?.id || '');
  }

  // Active event object
  const activeEvent = currentYearEvents.find((e) => e.id === selectedEventId) || currentYearEvents[0];

  const handleYearSelect = (yr) => {
    navigate(`/past-events/${yr}`);
  };

  const hasShowcaseImages = Boolean(activeEvent?.images && activeEvent.images.length > 0);

  return (
    <div className="archive-page">
      <div className="container">
        {/* ==================================================================
            1. HERO / INTRO
            Clean typography, generous whitespace, understated documentary feel
            ================================================================== */}
        <header className="archive-intro-header">
          <span className="archive-intro-kicker">PAST EVENTS</span>
          <h1 className="archive-intro-title">THE CBIT ESPORTS ARCHIVE</h1>
          <p className="archive-intro-desc">
            A verified chronological record of official collegiate tournaments, campus activations, publisher partnerships, and competitive showdowns organized by CBIT Esports.
          </p>

          {/* ================================================================
              2. YEAR SELECTOR
              Editorial archive selector: warm gold active text + subtle underline
              ================================================================ */}
          <nav className="archive-year-selector" aria-label="Archive Year Selector">
            <div className="archive-year-track">
              {AVAILABLE_YEARS.map((yr) => {
                const isSelected = activeYear === yr;
                return (
                  <button
                    key={yr}
                    type="button"
                    onClick={() => handleYearSelect(yr)}
                    className={`archive-year-tab ${isSelected ? 'active' : ''}`}
                    aria-current={isSelected ? 'true' : undefined}
                  >
                    <span className="archive-year-text">{yr}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        </header>

        {/* ==================================================================
            EMPTY ARCHIVE STATE (Years with no supplied event data)
            ================================================================== */}
        {currentYearEvents.length === 0 ? (
          <section className="archive-empty-section" aria-live="polite">
            <div className="archive-empty-panel">
              <span className="archive-empty-eyebrow">ARCHIVE {activeYear}</span>
              <h2 className="archive-empty-title">NO EVENTS ARCHIVED</h2>
              <p className="archive-empty-text">
                More events from this year will appear here as the archive grows. No official tournament records or verified documentation are currently registered for {activeYear}.
              </p>
              <div className="archive-empty-actions">
                <button
                  type="button"
                  onClick={() => handleYearSelect('2026')}
                  className="btn btn-primary"
                >
                  Explore 2026 Archive →
                </button>
                <button
                  type="button"
                  onClick={() => handleYearSelect('2025')}
                  className="btn btn-secondary"
                >
                  Explore 2025 Archive
                </button>
              </div>
            </div>
          </section>
        ) : (
          /* ================================================================
              3. MAIN EDITORIAL ROADMAP (DESKTOP & MOBILE)
              ================================================================ */
          <div className="archive-editorial-grid">
            {/* --------------------------------------------------------------
               DESKTOP LEFT: ROADMAP TIMELINE (~30-35% width)
               -------------------------------------------------------------- */}
            <aside className="archive-timeline-sidebar" aria-label={`Event Timeline for ${activeYear}`}>
              <div className="timeline-sidebar-header">
                <span className="sidebar-year-label">{activeYear}</span>
                <span className="sidebar-caption">CHRONOLOGICAL TIMELINE</span>
              </div>

              <div className="timeline-spine-track">
                {/* Thin vertical timeline line */}
                <div className="timeline-spine-line" aria-hidden="true" />

                <div className="timeline-nodes-container" role="tablist" aria-orientation="vertical">
                  {currentYearEvents.map((evt) => {
                    const isSelected = activeEvent?.id === evt.id;
                    return (
                      <button
                        key={evt.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setSelectedEventId(evt.id)}
                        className={`timeline-node-item ${isSelected ? 'active' : ''}`}
                      >
                        {/* Node circle with understated subtle pulse */}
                        <div className="timeline-node-dot-wrapper" aria-hidden="true">
                          <span className={`timeline-node-circle ${isSelected ? 'active' : ''}`} />
                        </div>

                        {/* Node Date & Title */}
                        <div className="timeline-node-body">
                          <span className="timeline-node-date">{evt.shortDate}</span>
                          <h3 className="timeline-node-heading">{evt.title}</h3>
                          <span className="timeline-node-cat">{evt.category}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* --------------------------------------------------------------
               DESKTOP RIGHT: LARGE EVENT SHOWCASE (~65-70% width)
               Magazine-style feature presentation with large authentic photo
               -------------------------------------------------------------- */}
            <main className="archive-showcase-container" aria-live="polite">
              {activeEvent && (
                <article className="event-showcase-feature">
                  {/* Event Title & Meta */}
                  <div className="showcase-header">
                    <h2 className="showcase-event-title">{activeEvent.title}</h2>
                    <div className="showcase-meta-line">
                      <span className="showcase-date">{activeEvent.fullDate || activeEvent.date}</span>
                      <span className="showcase-dot" aria-hidden="true">•</span>
                      <span className="showcase-category">{activeEvent.category}</span>
                    </div>
                  </div>

                  {/* Photo Carousel or Clean No-Image State */}
                  {hasShowcaseImages ? (
                    <EventPhotoCarousel
                      key={activeEvent.id}
                      images={activeEvent.images}
                      title={activeEvent.title}
                      shortDate={activeEvent.shortDate}
                      year={activeEvent.year}
                      isMobile={false}
                    />
                  ) : (
                    /* Clean media placeholder when no photo is archived locally */
                    <div className="showcase-placeholder-wrapper">
                      <div className="showcase-placeholder-card">
                        <div className="showcase-placeholder-badge">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                          <span>VERIFIED HIGHLIGHT ARCHIVE</span>
                        </div>
                        <h3 className="showcase-placeholder-title">Archived Story Documentation Available</h3>
                        <p className="showcase-placeholder-desc">
                          Event photography, competitive story reels, and campus moments are archived directly on the official CBIT Esports Instagram highlights.
                        </p>
                        {activeEvent.actionUrl && (
                          <a
                            href={activeEvent.actionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="showcase-placeholder-cta"
                          >
                            <span>VIEW EVENT HIGHLIGHTS →</span>
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Description (2-3 short, authentic sentences) */}
                  <div className="showcase-description-block">
                    <p className="showcase-description-text">{activeEvent.description}</p>
                  </div>

                  {/* Participation Metric if Verified */}
                  {activeEvent.participantCount && (
                    <div className="showcase-metric-block">
                      <span className="metric-eyebrow">PARTICIPATION</span>
                      <span className="metric-value">{activeEvent.participantCount} PARTICIPANTS</span>
                    </div>
                  )}

                  {/* Partners / Collaborators */}
                  {activeEvent.partners && activeEvent.partners.length > 0 && (
                    <div className="showcase-partners-block">
                      <span className="partners-eyebrow">PARTNERS & COLLABORATORS</span>
                      <div className="partners-chips-row">
                        {activeEvent.partners.map((partner) => (
                          <div key={partner.name} className="showcase-partner-chip">
                            {partner.logo && (
                              <img
                                src={partner.logo}
                                alt={partner.name}
                                className="partner-logo-mini"
                                width="20"
                                height="20"
                              />
                            )}
                            <span className="partner-name-text">{partner.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Event Action: Clear destination-specific CTA */}
                  {activeEvent.actionUrl && (
                    <div className="showcase-action-block">
                      <a
                        href={activeEvent.actionUrl}
                        target={activeEvent.actionUrl.startsWith('http') ? '_blank' : undefined}
                        rel={activeEvent.actionUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="showcase-action-btn"
                      >
                        <span>{activeEvent.actionLabel || 'VIEW PHOTO GALLERY →'}</span>
                      </a>
                    </div>
                  )}
                </article>
              )}
            </main>

            {/* --------------------------------------------------------------
               MOBILE VERTICAL STREAM (Revealed on screens <= 960px)
               Chronological roadmap with timeline line on left & large photos
               -------------------------------------------------------------- */}
            <div className="archive-mobile-timeline-stream">
              <div className="mobile-timeline-spine-line" aria-hidden="true" />

              <div className="mobile-events-stream-list">
                {currentYearEvents.map((evt) => {
                  const hasPhotos = Boolean(evt.images && evt.images.length > 0);

                  return (
                    <article key={evt.id} className="mobile-timeline-entry">
                      {/* Node dot on the left line */}
                      <div className="mobile-node-dot-anchor" aria-hidden="true">
                        <span className="mobile-node-circle" />
                      </div>

                      {/* Entry Card */}
                      <div className="mobile-entry-card">
                        <div className="mobile-entry-date-line">
                          <span className="mobile-entry-date">{evt.shortDate}</span>
                          <span className="mobile-entry-cat">{evt.category}</span>
                        </div>

                        <h3 className="mobile-entry-title">{evt.title}</h3>

                        {/* Event Photo Carousel or Clean Placeholder */}
                        {hasPhotos ? (
                          <EventPhotoCarousel
                            key={evt.id}
                            images={evt.images}
                            title={evt.title}
                            shortDate={evt.shortDate}
                            year={evt.year}
                            isMobile={true}
                          />
                        ) : (
                          <div className="mobile-placeholder-box">
                            <span className="mobile-placeholder-badge">OFFICIAL HIGHLIGHTS</span>
                            <span className="mobile-placeholder-text">Story & Match Documentation on Instagram</span>
                          </div>
                        )}

                        <p className="mobile-entry-description">{evt.description}</p>

                        {/* Verified Participants */}
                        {evt.participantCount && (
                          <div className="mobile-entry-metric">
                            <strong>{evt.participantCount}</strong> Participants Verified
                          </div>
                        )}

                        {/* Partners */}
                        {evt.partners && evt.partners.length > 0 && (
                          <div className="mobile-partners-chips">
                            {evt.partners.map((p) => (
                              <span key={p.name} className="mobile-partner-pill">
                                {p.name}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Media Action */}
                        {evt.actionUrl && (
                          <div className="mobile-entry-action-wrap">
                            <a
                              href={evt.actionUrl}
                              target={evt.actionUrl.startsWith('http') ? '_blank' : undefined}
                              rel={evt.actionUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="mobile-entry-action-btn"
                            >
                              <span>{evt.actionLabel || 'VIEW PHOTO GALLERY →'}</span>
                            </a>
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
