import React, { useState, useRef, useEffect } from 'react';
import { PAST_EVENTS_BY_YEAR, AVAILABLE_YEARS } from '../data/events';
import './PastEvents.css';

export default function PastEvents() {
  // Default to latest year with events (2026)
  const [selectedYear, setSelectedYear] = useState(AVAILABLE_YEARS[0] || '2026');

  // Events in the active year
  const currentYearEvents = PAST_EVENTS_BY_YEAR[selectedYear] || [];

  // Default to first event in current year
  const [selectedEventId, setSelectedEventId] = useState(
    currentYearEvents[0]?.id || ''
  );

  const timelineTrackRef = useRef(null);

  // When year changes, select the first event of that year
  const handleYearChange = (year) => {
    setSelectedYear(year);
    const eventsForYear = PAST_EVENTS_BY_YEAR[year] || [];
    if (eventsForYear.length > 0) {
      setSelectedEventId(eventsForYear[0].id);
    }
  };

  // Find currently selected event object
  const activeEvent = currentYearEvents.find((e) => e.id === selectedEventId) || currentYearEvents[0];
  const activeIndex = currentYearEvents.findIndex((e) => e.id === selectedEventId);

  // Navigate prev / next in timeline
  const goToPrev = () => {
    if (activeIndex > 0) {
      setSelectedEventId(currentYearEvents[activeIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (activeIndex < currentYearEvents.length - 1) {
      setSelectedEventId(currentYearEvents[activeIndex + 1].id);
    }
  };

  // Auto-scroll timeline node into view on mobile
  useEffect(() => {
    if (!timelineTrackRef.current) return;
    const activeNode = timelineTrackRef.current.querySelector('.timeline-event-node.active');
    if (activeNode) {
      activeNode.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [selectedEventId]);

  return (
    <div className="archive-page">
      <div className="container">
        {/* ==================================================================
            1. EDITORIAL HEADER & YEAR SELECTOR
            ================================================================== */}
        <header className="archive-header-area">
          <div className="archive-meta-tagline">
            Historic Archive // Official Record
          </div>
          <h1 className="archive-main-title">
            Past Events <span className="text-gold">Archive</span>
          </h1>
          <p className="archive-subtext">
            An editorial timeline of official collegiate tournaments, campus gaming activations, publisher partnerships, and LAN showdowns organized by CBIT Esports.
          </p>

          {/* Year Selector */}
          <nav className="archive-year-nav" aria-label="Archive Year Navigation">
            {AVAILABLE_YEARS.map((year) => {
              const count = (PAST_EVENTS_BY_YEAR[year] || []).length;
              return (
                <button
                  key={year}
                  type="button"
                  onClick={() => handleYearChange(year)}
                  className={`archive-year-btn ${selectedYear === year ? 'active' : ''}`}
                  aria-pressed={selectedYear === year}
                >
                  <span>{year}</span>
                  <span className="archive-year-count">({count} {count === 1 ? 'Event' : 'Events'})</span>
                </button>
              );
            })}
          </nav>
        </header>

        {/* ==================================================================
            2. CHRONOLOGICAL TIMELINE TRACK (CAROUSEL)
            ================================================================== */}
        <section className="archive-timeline-section" aria-label={`Timeline for ${selectedYear}`}>
          <div className="archive-timeline-nav-bar">
            <span className="archive-timeline-title">
              Chronological Timeline // {selectedYear}
            </span>
            <div className="archive-timeline-arrows">
              <button
                type="button"
                className="timeline-arrow-btn"
                onClick={goToPrev}
                disabled={activeIndex <= 0}
                aria-label="Previous event in timeline"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                className="timeline-arrow-btn"
                onClick={goToNext}
                disabled={activeIndex >= currentYearEvents.length - 1}
                aria-label="Next event in timeline"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="archive-timeline-track" ref={timelineTrackRef}>
            {currentYearEvents.map((evt) => {
              const isSelected = evt.id === activeEvent?.id;
              return (
                <button
                  key={evt.id}
                  type="button"
                  onClick={() => setSelectedEventId(evt.id)}
                  className={`timeline-event-node ${isSelected ? 'active' : ''}`}
                  aria-pressed={isSelected}
                  aria-label={`${evt.shortDate}: ${evt.title}`}
                >
                  <span className="node-date-badge">{evt.shortDate}</span>
                  <span className="node-dot" aria-hidden="true" />
                  <span className="node-title-label">{evt.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ==================================================================
            3. SELECTED EVENT EDITORIAL DOSSIER (LARGE PHOTOGRAPHY)
            ================================================================== */}
        {activeEvent && (
          <article key={activeEvent.id} className="archive-showcase-panel" aria-labelledby="showcase-event-title">
            {/* Left: Authentic High-Resolution Event Photo */}
            <div className="showcase-media-wrapper">
              <div className="showcase-image-frame">
                <img
                  src={activeEvent.image}
                  alt={`${activeEvent.title} on-campus event photograph`}
                  className="showcase-img"
                  loading="eager"
                />
                <span className="showcase-media-tag">
                  CBIT On-Campus Archive // {activeEvent.year}
                </span>
              </div>
            </div>

            {/* Right: Event Information Dossier */}
            <div className="showcase-info-dossier">
              <div className="showcase-meta-header">
                <span className="showcase-date">{activeEvent.fullDate}</span>
                <span className="showcase-meta-sep" aria-hidden="true">•</span>
                <span className="showcase-category">{activeEvent.category}</span>
              </div>

              <h2 id="showcase-event-title" className="showcase-title">
                {activeEvent.title}
              </h2>

              <div className="showcase-rule" aria-hidden="true" />

              <p className="showcase-desc">
                {activeEvent.description}
              </p>

              {/* Specific Confirmed Metric (e.g. 128 Participants for Monster x BGMI) */}
              {activeEvent.participantCount && (
                <div className="showcase-metric-box">
                  <div className="metric-number">{activeEvent.participantCount}</div>
                  <div className="metric-label">Confirmed Participants</div>
                </div>
              )}

              {/* Official Partner / Brand Logos */}
              {activeEvent.partners && activeEvent.partners.length > 0 && (
                <div className="showcase-partners-group">
                  <div className="partners-heading">Collaborators & Partners</div>
                  <div className="partners-logo-row">
                    {activeEvent.partners.map((partner) => (
                      <div key={partner.name} className="partner-logo-item">
                        {partner.logo ? (
                          <img
                            src={partner.logo}
                            alt={`${partner.name} logo`}
                            className="partner-brand-img"
                            loading="lazy"
                          />
                        ) : (
                          <span className="partner-brand-name">{partner.name}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>
        )}
      </div>
    </div>
  );
}
