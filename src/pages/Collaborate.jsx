import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  COLLABORATION_METRICS, 
  COLLABORATION_OPPORTUNITIES, 
  PARTNERSHIP_MODELS, 
  CAPABILITIES,
  COLLABORATION_PROCESS,
  COLLABORATION_FAQ
} from '../data/collaborationData';
import './Pages.css';
import './Collaborate.css';

export default function Collaborate() {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success, error
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate network request
    setTimeout(() => {
      // Assuming success. For actual backend, handle try/catch.
      setFormState('success');
    }, 1500);
  };

  const toggleFaq = (index) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  return (
    <div className="page-container collaborate-page">
      {/* 1. HERO */}
      <section className="page-hero">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span className="section-badge">Partnerships</span>
          <h1 className="page-hero-title">Build With CBIT Esports</h1>
          <p className="page-hero-desc" style={{ margin: '0 auto 32px auto' }}>
            Partner with a growing collegiate esports community to create meaningful gaming experiences, campus activations, tournaments, content and student engagement.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#inquiry-form" className="btn btn-primary">Start a Conversation</a>
            <a href="#partnership-deck" className="btn btn-secondary">View Partnership Deck</a>
          </div>
        </div>
      </section>

      <div className="container">
        
        {/* 2. WHY CBIT ESPORTS (Metrics) */}
        <section className="collab-section">
          <div className="section-header centered">
            <span className="section-badge">Community Impact</span>
            <h2 className="section-heading">Why CBIT Esports</h2>
          </div>
          <div className="metrics-grid">
            {COLLABORATION_METRICS.map((metric, idx) => (
              <div key={idx} className="metric-card">
                <span className="metric-value">{metric.value}</span>
                <span className="metric-label">{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 3. WHAT WE CAN BUILD TOGETHER */}
        <section className="collab-section">
          <div className="section-header">
            <span className="section-badge">Collaboration</span>
            <h2 className="section-heading" style={{ fontSize: '26px' }}>What We Can Build Together</h2>
          </div>
          <div className="cards-grid-3col">
            {COLLABORATION_OPPORTUNITIES.map((item, idx) => (
              <div key={idx} className="content-card">
                <span className="tag tag-gold" style={{ alignSelf: 'flex-start', marginBottom: '12px' }}>
                  0{idx + 1}
                </span>
                <h3 className="content-card-title">{item.title}</h3>
                <p className="content-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. PARTNERSHIP MODELS */}
        <section className="collab-section section-alt-box">
          <div className="section-header">
            <h2 className="section-heading" style={{ fontSize: '24px' }}>Partnership Models</h2>
            <p className="section-subheading">Flexible collaboration structures to align with your objectives.</p>
          </div>
          <div className="models-grid">
            {PARTNERSHIP_MODELS.map((model, idx) => (
              <div key={idx} className="model-item">
                <h4 className="model-title">{model.title}</h4>
                <p className="model-desc">{model.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. WHAT WE CAN DELIVER */}
        <section className="collab-section">
          <div className="section-header">
            <h2 className="section-heading" style={{ fontSize: '24px' }}>What We Can Deliver</h2>
            <p className="section-subheading">Depending on the scope of the collaboration, we can provide:</p>
          </div>
          <div className="capabilities-cloud">
            {CAPABILITIES.map((cap, idx) => (
              <span key={idx} className="capability-tag">{cap}</span>
            ))}
          </div>
        </section>

        {/* 6. HOW COLLABORATION WORKS */}
        <section className="collab-section">
          <div className="section-header centered">
            <h2 className="section-heading" style={{ fontSize: '24px' }}>How Collaboration Works</h2>
          </div>
          <div className="process-timeline">
            {COLLABORATION_PROCESS.map((step, idx) => (
              <div key={idx} className="process-step">
                <div className="process-marker">{step.step}</div>
                <h4 className="process-title">{step.title}</h4>
                <p className="process-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7 & 12. PAST EVENTS & CURRENT EVENTS CTA */}
        <section className="collab-section">
          <div className="events-cta-row">
            <div className="event-cta-box">
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>See What We've Done</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '16px' }}>Explore our archive of past tournaments and activations.</p>
              <Link to="/past-events" className="btn btn-secondary" style={{ alignSelf: 'flex-start' }}>Explore Past Events →</Link>
            </div>
            <div className="event-cta-box">
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '8px' }}>Looking to participate instead?</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '16px' }}>Check out our upcoming collegiate tournaments.</p>
              <Link to="/register" className="btn btn-secondary" style={{ alignSelf: 'flex-start' }}>View Current Events →</Link>
            </div>
          </div>
        </section>

        {/* 8. PARTNERSHIP DECK */}
        <section id="partnership-deck" className="collab-section">
          <div className="deck-cta-panel">
            <div className="deck-cta-content">
              <h3 className="deck-cta-title">Want the Full Picture?</h3>
              <p className="deck-cta-desc">
                Explore our partnership deck for an overview of CBIT Esports, our community, outreach, previous collaborations and potential partnership opportunities.
              </p>
            </div>
            <div className="deck-cta-action">
              <a href="#" onClick={(e) => { e.preventDefault(); alert("The general partnership deck is currently being updated. Please contact us directly using the form below."); }} className="btn btn-primary">
                Download Partnership Deck
              </a>
            </div>
          </div>
        </section>

        {/* 9 & 10. COLLABORATION INQUIRY FORM */}
        <section id="inquiry-form" className="collab-section">
          <div className="contact-info-panel" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-badge">Direct Proposal</span>
            <h3 style={{ fontSize: '24px', color: 'var(--text-primary)', marginBottom: '8px' }}>
              Let's Collaborate
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '32px' }}>
              Share your proposal or campaign brief with our corporate liaison.
            </p>

            {formState === 'success' ? (
              <div className="form-feedback-box success">
                <span className="feedback-icon">✓</span>
                <h4 className="feedback-title">Thanks for reaching out to CBIT Esports.</h4>
                <p className="feedback-desc">
                  We've received your inquiry and will get back to you soon.
                </p>
                <button type="button" className="btn btn-secondary" style={{ marginTop: '16px' }} onClick={() => setFormState('idle')}>Submit Another Inquiry</button>
              </div>
            ) : formState === 'error' ? (
               <div className="form-feedback-box error">
                <span className="feedback-icon" style={{ color: '#ef4444' }}>!</span>
                <h4 className="feedback-title">Submission Failed</h4>
                <p className="feedback-desc">
                  Something went wrong while submitting your inquiry. Please try again or contact us directly.
                </p>
                <button type="button" className="btn btn-secondary" style={{ marginTop: '16px' }} onClick={() => setFormState('idle')}>Try Again</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="collab-form">
                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Organization / Brand Name *</label>
                    <input type="text" required placeholder="e.g. Brand / Organization" disabled={formState === 'submitting'} />
                  </div>
                  <div className="form-group">
                    <label>Contact Person Name *</label>
                    <input type="text" required placeholder="Full Name" disabled={formState === 'submitting'} />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Official Email *</label>
                    <input type="email" required placeholder="partner@company.com" disabled={formState === 'submitting'} />
                  </div>
                  <div className="form-group">
                    <label>Phone / WhatsApp (Optional)</label>
                    <input type="tel" placeholder="+91 00000 00000" disabled={formState === 'submitting'} />
                  </div>
                </div>

                <div className="form-grid-2">
                  <div className="form-group">
                    <label>Organization Website (Optional)</label>
                    <input type="url" placeholder="https://company.com" disabled={formState === 'submitting'} />
                  </div>
                  <div className="form-group">
                    <label>Collaboration Interest *</label>
                    <select required disabled={formState === 'submitting'}>
                      <option value="">Select an interest...</option>
                      <option value="Sponsorship">Sponsorship</option>
                      <option value="Campus Activation">Campus Activation</option>
                      <option value="Tournament Partnership">Tournament Partnership</option>
                      <option value="Product / Hardware Partnership">Product / Hardware Partnership</option>
                      <option value="Content & Media">Content & Media</option>
                      <option value="College Fest Collaboration">College Fest Collaboration</option>
                      <option value="Community Partnership">Community Partnership</option>
                      <option value="Custom Collaboration">Custom Collaboration</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Preferred Timeline *</label>
                  <select required disabled={formState === 'submitting'}>
                    <option value="">Select timeline...</option>
                    <option value="ASAP">ASAP</option>
                    <option value="Within 1 Month">Within 1 Month</option>
                    <option value="1–3 Months">1–3 Months</option>
                    <option value="3–6 Months">3–6 Months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Proposal Details / Scope *</label>
                  <textarea
                    rows="5"
                    required
                    placeholder="Outline your proposed event, expected timeline, scope of collaboration, or deliverable expectations..."
                    disabled={formState === 'submitting'}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Upload Proposal / Campaign Brief (Optional)</label>
                  <input type="file" accept=".pdf,.pptx,.docx" disabled={formState === 'submitting'} className="file-input" />
                  <span className="file-hint">Allowed formats: PDF, PPTX, DOCX. Max size: 10 MB.</span>
                </div>

                <button type="submit" className="btn btn-primary submit-btn" disabled={formState === 'submitting'}>
                  {formState === 'submitting' ? 'Submitting...' : 'Let\'s Collaborate'}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* 11. FAQ */}
        <section className="collab-section">
          <div className="section-header centered">
            <h2 className="section-heading" style={{ fontSize: '24px' }}>Frequently Asked Questions</h2>
          </div>
          <div className="faq-container">
            {COLLABORATION_FAQ.map((faq, idx) => (
              <div key={idx} className={`faq-item ${openFaqIndex === idx ? 'open' : ''}`}>
                <button className="faq-question" onClick={() => toggleFaq(idx)}>
                  {faq.q}
                  <span className="faq-icon">{openFaqIndex === idx ? '−' : '+'}</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 13. FINAL CTA */}
        <section className="collab-section" style={{ textAlign: 'center', paddingBottom: '40px' }}>
          <h2 className="section-heading" style={{ fontSize: '32px', marginBottom: '16px' }}>Have an idea? Let's build it.</h2>
          <p className="section-subheading" style={{ maxWidth: '600px', margin: '0 auto 32px auto' }}>
            Whether you're looking to activate a product, sponsor a tournament, engage students or explore something completely new, we'd love to hear from you.
          </p>
          <a href="#inquiry-form" className="btn btn-primary" style={{ padding: '14px 32px', fontSize: '16px' }}>Start a Conversation</a>
        </section>

      </div>
    </div>
  );
}
