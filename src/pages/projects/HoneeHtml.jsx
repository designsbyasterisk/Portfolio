import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

export default function HoneeHtml() {
  useEffect(() => {
    // Set theme attributes on body
    document.body.className = 'theme-brand';
    document.body.setAttribute('data-brand-bg', '#fff3e3');
    document.body.setAttribute('data-brand-text', '#5c3a2a');
    document.body.setAttribute('data-brand-accent', '#d99f0d');
    document.body.setAttribute('data-brand-card-bg', '#fdfbf7');
    document.body.setAttribute('data-brand-border', 'rgba(92, 58, 42, 0.08)');

    document.body.style.setProperty('--brand-bg', '#fff3e3');
    document.body.style.setProperty('--brand-text', '#5c3a2a');
    document.body.style.setProperty('--brand-text-sub', '#8c6a5a');
    document.body.style.setProperty('--brand-accent', '#d99f0d');
    document.body.style.setProperty('--brand-card-bg', '#fdfbf7');
    document.body.style.setProperty('--brand-border', 'rgba(92, 58, 42, 0.08)');
    document.body.style.setProperty('--brand-grid-color', 'rgba(92, 58, 42, 0.035)');
    document.body.style.setProperty('--brand-nav-bg', 'rgba(255, 255, 255, 0.85)');
    document.body.style.setProperty('--brand-nav-border', 'rgba(92, 58, 42, 0.1)');

    window.scrollTo(0, 0);

    return () => {
      // Cleanup styles on unmount if needed
      document.body.className = '';
    };
  }, []);

  const scrollToNarrative = () => {
    const el = document.querySelector('.chapter-narrative');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenFullscreen = (e) => {
    e.preventDefault();
    window.open('/Projects/Honee website/Honee.html', '_blank', 'noreferrer');
  };

  return (
    <>
      {/* Grid blueprint background */}
      <div className="pattern-bg"></div>

      <Navbar />

      <main className="narrative-wrapper">

        {/* Chapter 1: Hero */}
        <section className="story-chapter chapter-hero">
          <div className="chapter-hero-bg" style={{ background: 'linear-gradient(135deg, rgba(217, 159, 13, 0.08) 0%, rgba(217, 159, 13, 0.03) 100%)' }}></div>
          <div className="container hero-content">
            <div className="hero-text-block">
              <span className="label-pill brand-accent-badge" style={{ color: '#d99f0d' }}>CASE STUDY 04 //</span>
              <h1 className="gsap-split-header brand-hero-title" style={{ color: 'var(--brand-text)' }}>HONÉE</h1>
              <p className="brand-hero-subtitle" style={{ maxWidth: '800px', color: 'var(--brand-text-sub)' }}>A honey-inspired brand and e-commerce experience.</p>
            </div>
            <div className="project-meta-bar" style={{ borderColor: 'var(--brand-border)' }}>
              <div className="meta-item">
                <span className="meta-label" style={{ color: 'var(--brand-text-sub)' }}>Category</span>
                <span className="meta-val" style={{ color: 'var(--brand-text)' }}>Branding, E-Commerce UX</span>
              </div>
              <div className="meta-item">
                <span className="meta-label" style={{ color: 'var(--brand-text-sub)' }}>Duration</span>
                <span className="meta-val" style={{ color: 'var(--brand-text)' }}>3 Weeks</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-md)' }}>
              <button className="scroll-indicator-arrow" aria-label="Scroll down" onClick={scrollToNarrative} style={{ color: 'var(--brand-text)' }}>
                <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Chapter 2: The Philosophy */}
        <section className="story-chapter chapter-narrative">
          <div className="container narrative-grid">
            <div className="narrative-content-left">
              <div className="narrative-block">
                <span className="mono brand-accent-color">01 / THE PHILOSOPHY</span>
                <h2 style={{ color: 'var(--brand-text)' }}>Designing with Honey</h2>
                <p style={{ color: 'var(--brand-text-sub)' }}>
                  Since honey is the defining ingredient across the product range, it became the foundation of the brand's design philosophy. Rather than representing honey literally, the project translates its natural qualities such as warmth, fluidity, and softness into a cohesive visual language. These characteristics informed every design decision, from the identity and colour palette to the packaging, photography, and digital experience.
                </p>
              </div>
              <div className="narrative-block" style={{ marginTop: 'var(--space-lg)' }}>
                <span className="mono brand-accent-color">02 / THE DESIGN STYLE</span>
                <h2 style={{ color: 'var(--brand-text)' }}>Translating the Philosophy</h2>
                <p style={{ color: 'var(--brand-text-sub)' }}>
                  The visual system applies the material qualities of honey through a restrained design language. A warm colour palette, generous white space, and elegant typography create an interface that feels calm and approachable. Glossy product photography and fluid compositions reinforce the tactile nature of the products while maintaining clarity and consistency across both packaging and the website.
                </p>
              </div>
            </div>
            <div className="narrative-content-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div className="brand-metric-card" style={{ width: '100%', padding: '0', overflow: 'hidden', border: '1px solid rgba(92,58,42,0.1)', borderRadius: 'var(--radius-md)', boxShadow: '0 15px 35px rgba(0,0,0,0.08)' }}>
                <img src="/Projects/Honee website/honeycomb-drip.jpg" alt="Pure Organic Honeycomb dripping honey" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 3: Ingredient Storytelling (Card Deck) */}
        <section className="story-chapter chapter-deck-pin">
          <div className="deck-grid-container">
            <div className="deck-info-panel">
              <span className="mono brand-accent-color">03 / BRAND STORYTELLING</span>
              <h2 style={{ color: 'var(--brand-text)' }}>Building Trust Through Storytelling</h2>
              <p style={{ color: 'var(--brand-text-sub)' }}>Rather than presenting HONÉE as just another honey based skincare brand, I wanted to communicate the journey behind the ingredient. By introducing the sourcing, harvesting, and transformation of honey throughout the experience, the brand builds authenticity and gives users a deeper understanding of what makes the products unique.</p>
            </div>
            
            <div className="stacked-deck-wrapper">
              {/* Card 1: Hive Sourcing */}
              <div className="deck-card gallery-slide-card" style={{ backgroundColor: 'var(--brand-card-bg)' }}>
                <div className="slide-image-wrapper emberquit-deck-card-content">
                  <div className="emberquit-deck-card-image-wrap">
                    <img src="/Projects/Honee website/src/assets/about/beekeeper-hive.jpg" alt="Honee Hive Sourcing" style={{ borderRadius: 'var(--radius-md)' }} />
                  </div>
                  <div className="emberquit-deck-card-text">
                    <span className="mono brand-accent-color" style={{ fontSize: '0.75rem', display: 'block', marginBottom: 'var(--space-xs)' }}>01 / THE SOURCE</span>
                    <h3 className="clash-h3" style={{ color: 'var(--brand-text)', margin: '0 0 var(--space-xs) 0' }}>Connecting Products to Origin</h3>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: 'var(--brand-text-sub)', margin: '0' }}>
                      Introducing the people and environments behind the ingredient is key for the brand. Showcasing apiaries and beekeepers establishes transparency while creating a stronger emotional connection between the product and its source.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Honeycomb */}
              <div className="deck-card gallery-slide-card" style={{ backgroundColor: 'var(--brand-card-bg)' }}>
                <div className="slide-image-wrapper emberquit-deck-card-content">
                  <div className="emberquit-deck-card-image-wrap">
                    <img src="/Projects/Honee website/src/assets/about/honeycomb.jpg" alt="Honee Honeycomb" style={{ borderRadius: 'var(--radius-md)' }} />
                  </div>
                  <div className="emberquit-deck-card-text">
                    <span className="mono brand-accent-color" style={{ fontSize: '0.75rem', display: 'block', marginBottom: 'var(--space-xs)' }}>02 / THE NECTAR</span>
                    <h3 className="clash-h3" style={{ color: 'var(--brand-text)', margin: '0 0 var(--space-xs) 0' }}>Celebrating the Ingredient</h3>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: 'var(--brand-text-sub)', margin: '0' }}>
                      Instead of treating honey as a functional ingredient, the experience highlights its natural texture, colour, and healing properties. This reinforces honey as the visual and conceptual foundation of the brand.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Handcrafted Extraction */}
              <div className="deck-card gallery-slide-card" style={{ backgroundColor: 'var(--brand-card-bg)' }}>
                <div className="slide-image-wrapper emberquit-deck-card-content">
                  <div className="emberquit-deck-card-image-wrap">
                    <img src="/Projects/Honee website/src/assets/about/honey-craft.jpg" alt="Honee Honey Craft" style={{ borderRadius: 'var(--radius-md)' }} />
                  </div>
                  <div className="emberquit-deck-card-text">
                    <span className="mono brand-accent-color" style={{ fontSize: '0.75rem', display: 'block', marginBottom: 'var(--space-xs)' }}>03 / THE CRAFT</span>
                    <h3 className="clash-h3" style={{ color: 'var(--brand-text)', margin: '0 0 var(--space-xs) 0' }}>Visualising the Making Process</h3>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: 'var(--brand-text-sub)', margin: '0' }}>
                      We focuses on the craftsmanship behind production. Carefully curated imagery and concise storytelling communicate care, quality, and intention, reinforcing the brand's commitment to thoughtful design rather than mass production.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 4: Design System & Moodboard */}
        <section className="story-chapter" style={{ padding: 'var(--space-xl) 0', height: 'auto', overflow: 'visible', display: 'block' }}>
          <div className="container">
            <span className="mono brand-accent-color">04 / DESIGN SYSTEM &amp; MOODBOARD</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', margin: '5px 0 8px 0', color: 'var(--brand-text)' }}>Defining the Visual System</h2>
            <p style={{ color: 'var(--brand-text-sub)', margin: '0 0 var(--space-lg) 0', fontSize: '0.95rem', maxWidth: '800px', lineHeight: '1.6' }}>Every visual element was selected to evoke the warmth and tactile qualities of honey. A palette inspired by natural honey tones, rich textures, editorial typography, and close-up product photography come together to create a visual language that feels comforting, authentic, and contemporary.</p>
            
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 'var(--space-lg)' }}>
              <div style={{ width: '100%', maxWidth: '100%', padding: 'clamp(16px, 4vw, 48px)', background: 'rgba(92, 58, 42, 0.3)', border: '1px solid rgba(92, 58, 42, 0.15)', borderRadius: '24px', boxShadow: '0 30px 60px rgba(0, 0, 0, 0.12), 0 10px 20px rgba(92, 58, 42, 0.05)', display: 'flex', justifyContent: 'center', alignItems: 'center', boxSizing: 'border-box' }}>
                <img src="/Projects/Honee website/honee moodboard.svg?v=3" alt="Honee Brand Moodboard" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 5: Product Gallery Ticker */}
        <section className="story-chapter" style={{ padding: 'var(--space-xl) 0', height: 'auto', display: 'block' }}>
          <div className="container">
            <span className="mono brand-accent-color">05 / Product Gallery</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', margin: '5px 0 8px 0', color: 'var(--brand-text)' }}>Building a Cohesive Product Narrative</h2>
            <p style={{ color: 'var(--brand-text-sub)', margin: '0 0 var(--space-lg) 0', fontSize: '0.95rem', maxWidth: '800px', lineHeight: '1.6' }}>The gallery was designed as a continuation of the brand story with Material-focused photography, controlled lighting, and honey-inspired compositions. This transforms product imagery into a storytelling device, reinforcing the warmth and tactile qualities established throughout the identity.</p>
          </div>

          <div className="gallery-ticker-container" style={{ maxWidth: '1600px', width: '96%', margin: 'var(--space-md) auto 0 auto' }}>
            <div className="gallery-ticker-track">
                {/* Set 1 */}
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/balm-1.webp" alt="Honee Balm Jar" />
                </div>
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/balm-2.webp" alt="Honee Balm Texture close-up" />
                </div>
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/balm-3.webp" alt="Honee Lip Balm Tube packaging" />
                </div>
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/gloss-1.webp" alt="Honee Shine Gloss tube" />
                </div>
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/gloss-2.webp" alt="Honee Nectar Gloss swatch" />
                </div>
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/gloss-3.webp" alt="Honee Shine Gloss style" />
                </div>
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/oil-1.webp" alt="Honee Hydrating Lip Oil bottle" />
                </div>
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/oil-2.webp" alt="Honee Infused Botanical Lip Oil" />
                </div>
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/oil-3.webp" alt="Honee Botanical Oils bottles range" />
                </div>
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/scrub-1.jpg" alt="Honee Crystal Scrub texture close-up" />
                </div>
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/scrub-2.webp" alt="Honee Organic Lip Scrub jar" />
                </div>
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/scrub-3.jpg" alt="Honee Scrub Jar packaging design" />
                </div>

                {/* Set 2 (Duplicate for Seamless Loop) */}
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/balm-1.webp" alt="Honee Balm Jar" />
                </div>
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/balm-2.webp" alt="Honee Balm Texture close-up" />
                </div>
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/balm-3.webp" alt="Honee Lip Balm Tube packaging" />
                </div>
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/gloss-1.webp" alt="Honee Shine Gloss tube" />
                </div>
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/gloss-2.webp" alt="Honee Nectar Gloss swatch" />
                </div>
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/gloss-3.webp" alt="Honee Shine Gloss style" />
                </div>
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/oil-1.webp" alt="Honee Hydrating Lip Oil bottle" />
                </div>
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/oil-2.webp" alt="Honee Infused Botanical Lip Oil" />
                </div>
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/oil-3.webp" alt="Honee Botanical Oils bottles range" />
                </div>
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/scrub-1.jpg" alt="Honee Crystal Scrub texture close-up" />
                </div>
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/scrub-2.webp" alt="Honee Organic Lip Scrub jar" />
                </div>
                <div className="ticker-image-wrapper">
                  <img src="/Projects/Honee website/src/assets/products/scrub-3.jpg" alt="Honee Scrub Jar packaging design" />
                </div>
              </div>
            </div>
        </section>

        {/* Chapter 6: Interactive Prototype */}
        <section className="story-chapter" style={{ padding: 'var(--space-xl) 0 var(--space-2xl) 0', height: 'auto', display: 'block' }}>
          <div className="container" style={{ maxWidth: '1400px', width: '95%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-md)', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
              <div>
                <span className="mono brand-accent-color">06 / Interactive Prototype</span>
                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', margin: '5px 0 8px 0', color: 'var(--brand-text)' }}>The Honée Storefront</h2>
              </div>
              <a href="/Projects/Honee website/Honee.html" onClick={handleOpenFullscreen} target="_blank" rel="noreferrer" className="btn-pop btn-pop-primary desktop-only-btn" style={{ backgroundColor: 'var(--brand-accent)', color: 'white', border: 'none', borderRadius: '50px' }}>Open Fullscreen ↗</a>
            </div>
            
            <div className="ipad-mockup-container" style={{ backgroundImage: "url('/Projects/Honee website/ipad screen for honee.png')" }}>
              <div className="ipad-viewport">
                <iframe src="/Projects/Honee website/Honee.html" title="Honee Storefront Prototype"></iframe>
              </div>
            </div>

            <div className="portrait-only-btn-wrapper">
              <a href="/Projects/Honee website/Honee.html" onClick={handleOpenFullscreen} target="_blank" rel="noreferrer" className="btn-pop btn-pop-primary" style={{ backgroundColor: 'var(--brand-accent)', color: 'white', border: 'none', borderRadius: '50px' }}>Open Fullscreen ↗</a>
            </div>
          </div>
        </section>

      </main>

      {/* Full-Width Project Footer */}
      <Footer prevProject={{ label: 'F1 DASHBOARD', to: '/project-details/f1_dashboard' }} nextProject={{ label: 'EMBERQUIT', to: '/project-details/emberquit' }} />
    </>
  );
}
