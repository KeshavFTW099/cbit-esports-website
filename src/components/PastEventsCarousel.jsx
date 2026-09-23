import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { PAST_EVENTS } from '../data/events';
import './PastEventsCarousel.css';

const getVisibleCount = () => {
  if (typeof window === 'undefined') return 3;
  const width = window.innerWidth;
  if (width <= 640) return 1;
  if (width <= 1024) return 2;
  return 3;
};

export default function PastEventsCarousel() {
  // Use verified canonical events that have photography
  const events = PAST_EVENTS.filter((evt) => Boolean(evt.image || evt.thumbnail));

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);

  // Touch and drag swipe state
  const [dragStartX, setDragStartX] = useState(null);
  const [dragDeltaX, setDragDeltaX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const autoPlayTimerRef = useRef(null);

  // Responsive visible cards count
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, events.length - visibleCount);
  const safeCurrentIndex = Math.min(currentIndex, maxIndex);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex, setCurrentIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex, setCurrentIndex]);

  // Auto-advance every 4.5 seconds (~4-5s) with pause on hover/interaction
  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    if (isPaused || isDragging) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      return;
    }

    autoPlayTimerRef.current = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isPaused, isDragging, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setIsPaused(true);
    setDragStartX(e.touches[0].clientX);
    setDragDeltaX(0);
  };

  const handleTouchMove = (e) => {
    if (dragStartX === null) return;
    const delta = e.touches[0].clientX - dragStartX;
    setDragDeltaX(delta);
  };

  const handleTouchEnd = () => {
    if (dragDeltaX < -45) {
      nextSlide();
    } else if (dragDeltaX > 45) {
      prevSlide();
    }
    setDragStartX(null);
    setDragDeltaX(0);
    setIsPaused(false);
  };

  // Mouse drag handlers for desktop swipe
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragDeltaX(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || dragStartX === null) return;
    const delta = e.clientX - dragStartX;
    setDragDeltaX(delta);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      if (dragDeltaX < -45) {
        nextSlide();
      } else if (dragDeltaX > 45) {
        prevSlide();
      }
    }
    setIsDragging(false);
    setDragStartX(null);
    setDragDeltaX(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
    setIsPaused(false);
  };

  return (
    <section
      id="past-events-section"
      className="past-events-carousel-section"
      aria-labelledby="past-events-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container">
        {/* Section Header with Title, Subheading and Minimal Controls */}
        <div className="past-events-header-row">
          <div className="past-events-title-wrap">
            <h2 id="past-events-heading" className="past-events-main-heading">
              PAST EVENTS
            </h2>
            <p className="past-events-subheading">
              Official tournaments, campus activations, and esports collaborations by CBIT Esports.
            </p>
          </div>

          {/* Minimal Controls (Desktop Header Controls) */}
          <div className="past-events-nav-controls" aria-label="Carousel navigation">
            <button
              type="button"
              className="carousel-nav-btn prev-btn"
              onClick={prevSlide}
              aria-label="Previous events"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </button>
            <button
              type="button"
              className="carousel-nav-btn next-btn"
              onClick={nextSlide}
              aria-label="Next events"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Viewport Container */}
        <div
          className="carousel-viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          style={{
            cursor: isDragging ? 'grabbing' : 'grab'
          }}
        >
          <div
            className="carousel-track"
            style={{
              '--current-index': safeCurrentIndex,
              transform: `translateX(calc(-1 * ${safeCurrentIndex} * (100% + var(--carousel-gap, 24px)) / var(--visible-count, 3)))`
            }}
          >
            {events.map((evt) => {
              const partnerList = evt.partners && evt.partners.length > 0
                ? evt.partners.map((p) => p.name).join(' • ')
                : evt.category;

              return (
                <article key={evt.id} className="carousel-card-item">
                  <Link
                    to={`/past-events?year=${evt.year}`}
                    className="carousel-card-link"
                    tabIndex={0}
                    aria-label={`${evt.title} - ${evt.date}`}
                  >
                    {/* Event Photography (Dominant visual) */}
                    <div className="carousel-card-media">
                      <img
                        src={evt.image || evt.thumbnail}
                        alt={`${evt.title} photograph`}
                        className="carousel-card-img"
                        loading="lazy"
                        draggable="false"
                      />
                      <div className="carousel-card-overlay" aria-hidden="true" />
                      <span className="carousel-card-date-chip">
                        {evt.shortDate || evt.date}
                      </span>
                    </div>

                    {/* Card Content & Metadata */}
                    <div className="carousel-card-body">
                      {partnerList && (
                        <span className="carousel-card-partner-label">
                          {partnerList}
                        </span>
                      )}
                      <h3 className="carousel-card-title">{evt.title}</h3>
                      <p className="carousel-card-desc">{evt.description}</p>
                      
                      <div className="carousel-card-footer">
                        <span className="carousel-card-action">
                          VIEW ARCHIVE RECORD ↗
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bottom Pagination Dots & Explore All CTA */}
        <div className="carousel-bottom-bar">
          {/* Subtle indicator dots */}
          <div className="carousel-dots-group" role="tablist" aria-label="Slide indicators">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={`dot-${idx}`}
                type="button"
                role="tab"
                aria-selected={idx === safeCurrentIndex}
                aria-label={`Go to slide group ${idx + 1}`}
                className={`carousel-dot ${idx === safeCurrentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>

          {/* CTA: EXPLORE ALL EVENTS → */}
          <Link to="/past-events" className="btn btn-secondary explore-all-btn">
            EXPLORE ALL EVENTS →
          </Link>
        </div>
      </div>
    </section>
  );
}
