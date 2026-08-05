import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function HoneeTemp() {
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

      {/* Header navigation (Floating Island Navbar) */}
      <header className="floating-header">
        <div className="container nav-wrapper" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '50px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link to="/" className="logo" style={{ display: 'inline-flex', alignItems: 'center', width: '32px', height: '32px', justifyContent: 'center', transform: 'translateY(2%)' }}>
              <svg width="28" height="28" viewBox="0 0 1514 1287" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible", display: "block" }}>
                <style dangerouslySetInnerHTML={{ __html: `
                  @keyframes kf_Frame_8_transform_0 {
                    0% {
                      transform: translate(757px, 643.5px) rotate(0deg) translate(-757px, -643.5px);
                    }
                    100% {
                      transform: translate(757px, 643.5px) rotate(360deg) translate(-757px, -643.5px);
                    }
                  }
                  .asterisk-spin-group {
                    transform-origin: 0 0;
                    animation: kf_Frame_8_transform_0 1.2s linear infinite;
                    animation-play-state: paused !important;
                  }
                  .logo:hover .asterisk-spin-group,
                  a:hover .asterisk-spin-group,
                  svg:hover .asterisk-spin-group {
                    animation-play-state: running !important;
                  }
                ` }} />
                <g className="asterisk-spin-group" fill="#0A1128">
                  <path d="M559.56 757.221C564.269 748.959 558.296 738.691 548.786 738.7L4.99175 739.189C3.07642 739.191 1.88359 737.112 2.85193 735.459L114.747 544.504C115.192 543.746 116.004 543.279 116.883 543.279L676.027 542.775C679.584 542.772 682.866 540.862 684.628 537.772L989.929 2.06869C990.369 1.29605 991.19 0.818692 992.079 0.817891L1208.75 0.622788C1210.64 0.621087 1211.83 2.64816 1210.92 4.30033L923.126 524.155C918.552 532.416 924.532 542.551 933.975 542.543L1508.13 542.026C1510.05 542.024 1511.24 544.122 1510.26 545.774L1396.16 736.732C1395.72 737.48 1394.91 737.938 1394.04 737.939L810.314 738.464C806.713 738.468 803.397 740.424 801.653 743.575L503.544 1282.07C503.108 1282.85 502.279 1283.34 501.378 1283.34L263.863 1283.56C261.961 1283.56 260.767 1281.5 261.709 1279.85L559.56 757.221Z" fill="#0A1128" fillOpacity="1" />
                  <path d="M673.578 180.373C673.862 180.786 674.014 181.274 674.015 181.775L674.325 526.123C674.327 528.565 669.797 527.516L314.603 4.19047C313.487 2.54628 314.664 0.323334 316.651 0.321545L548.26 0.11299C549.076 0.112255 549.84 0.513721 550.303 1.18629L673.578 180.373Z" fill="#0A1128" fillOpacity="1" />
                  <path d="M815.897 1106C815.613 1105.59 815.461 1105.1 815.46 1104.6L815.15 760.248C815.148 757.806 818.307 756.834 819.678 758.854L1174.87 1282.18C1175.99 1283.82 1174.81 1286.05 1172.82 1286.05L941.215 1286.26C940.399 1286.26 939.635 1285.86 939.172 1285.18L815.897 1106Z" fill="#0A1128" fillOpacity="1" />
                </g>
              </svg>
            </Link>
            <span className="label-pill" style={{ fontSize: '0.65rem', padding: '4px 10px', margin: '0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '24px', backgroundColor: 'rgba(92,58,42,0.05)', border: '1px solid rgba(92,58,42,0.1)', color: 'var(--brand-text)', borderRadius: '6px' }}>HONÉE</span>
          </div>
          
          <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
            <Link to="/resume" className="font-display" style={{ fontSize: '0.9rem', margin: '0', display: 'inline-flex', alignItems: 'center', color: 'var(--brand-text)', textDecoration: 'none' }}>ABOUT ME</Link>
          </nav>
        </div>
      </header>

      <main className="narrative-wrapper">

        {/* Chapter 1: Hero */}
        <section className="story-chapter chapter-hero">
          <div className="chapter-hero-bg" style={{ background: 'linear-gradient(135deg, rgba(217, 159, 13, 0.08) 0%, rgba(217, 159, 13, 0.03) 100%)' }}></div>
          <div className="container hero-content">
            <div className="hero-text-block">
              <span className="label-pill brand-accent-badge" style={{ color: '#d99f0d' }}>PROJECT 04 //</span>
              <h1 className="gsap-split-header brand-hero-title" style={{ color: 'var(--brand-text)' }}>HONÉE</h1>
              <p className="brand-hero-subtitle" style={{ maxWidth: '800px', color: 'var(--brand-text-sub)' }}>A honey-inspired brand and e-commerce experience.</p>
            </div>
            <div className="project-meta-bar" style={{ borderColor: 'var(--brand-border)' }}>
              <div className="meta-item">
                <span className="meta-label" style={{ color: 'var(--brand-text-sub)' }}>Category</span>
                <span className="meta-val" style={{ color: 'var(--brand-text)' }}>Brand Identity • UI/UX Design</span>
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
                  <div className="emberquit-deck-card-image-wrap" style={{ backgroundColor: '#fff3e3', borderColor: 'rgba(92,58,42,0.1)' }}>
                    <img src="/Projects/Honee website/src/assets/about/beekeeper-hive.jpg" alt="Honee Hive Sourcing" style={{ borderRadius: 'var(--radius-md)' }} />
                  </div>
                  <div className="emberquit-deck-card-text">
                    <span className="mono brand-accent-color" style={{ fontSize: '0.75rem', display: 'block', marginBottom: 'var(--space-xs)' }}>01 / THE SOURCE</span>
                    <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-text)', margin: '0 0 var(--space-xs) 0', fontSize: '1.4rem', fontWeight: '700' }}>Connecting Products to Origin</h3>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: 'var(--brand-text-sub)', margin: '0' }}>
                      Introducing the people and environments behind the ingredient is key for the brand. Showcasing apiaries and beekeepers establishes transparency while creating a stronger emotional connection between the product and its source.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Honeycomb */}
              <div className="deck-card gallery-slide-card" style={{ backgroundColor: 'var(--brand-card-bg)' }}>
                <div className="slide-image-wrapper emberquit-deck-card-content">
                  <div className="emberquit-deck-card-image-wrap" style={{ backgroundColor: '#fff3e3', borderColor: 'rgba(92,58,42,0.1)' }}>
                    <img src="/Projects/Honee website/src/assets/about/honeycomb.jpg" alt="Honee Honeycomb" style={{ borderRadius: 'var(--radius-md)' }} />
                  </div>
                  <div className="emberquit-deck-card-text">
                    <span className="mono brand-accent-color" style={{ fontSize: '0.75rem', display: 'block', marginBottom: 'var(--space-xs)' }}>02 / THE NECTAR</span>
                    <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-text)', margin: '0 0 var(--space-xs) 0', fontSize: '1.4rem', fontWeight: '700' }}>Celebrating the Ingredient</h3>
                    <p style={{ fontSize: '0.85rem', lineHeight: '1.5', color: 'var(--brand-text-sub)', margin: '0' }}>
                      Instead of treating honey as a functional ingredient, the experience highlights its natural texture, colour, and healing properties. This reinforces honey as the visual and conceptual foundation of the brand.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Handcrafted Extraction */}
              <div className="deck-card gallery-slide-card" style={{ backgroundColor: 'var(--brand-card-bg)' }}>
                <div className="slide-image-wrapper emberquit-deck-card-content">
                  <div className="emberquit-deck-card-image-wrap" style={{ backgroundColor: '#fff3e3', borderColor: 'rgba(92,58,42,0.1)' }}>
                    <img src="/Projects/Honee website/src/assets/about/honey-craft.jpg" alt="Honee Honey Craft" style={{ borderRadius: 'var(--radius-md)' }} />
                  </div>
                  <div className="emberquit-deck-card-text">
                    <span className="mono brand-accent-color" style={{ fontSize: '0.75rem', display: 'block', marginBottom: 'var(--space-xs)' }}>03 / THE CRAFT</span>
                    <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--brand-text)', margin: '0 0 var(--space-xs) 0', fontSize: '1.4rem', fontWeight: '700' }}>Visualising the Making Process</h3>
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
              <a href="/Projects/Honee website/Honee.html" onClick={handleOpenFullscreen} target="_blank" rel="noreferrer" className="btn-pop btn-pop-primary" style={{ backgroundColor: 'var(--brand-accent)', color: 'white', border: 'none', borderRadius: '50px' }}>Open Fullscreen ↗</a>
            </div>
            
            <div className="ipad-mockup-container" style={{ backgroundImage: "url('/Projects/Honee website/ipad screen for honee.png')" }}>
              <div className="ipad-viewport">
                <iframe src="/Projects/Honee website/Honee.html" title="Honee Storefront Prototype"></iframe>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Full-Width Project Footer (Matching Resume Page) */}
      <footer className="no-print project-site-footer">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
          <span className="mono" style={{ fontSize: '0.75rem', color: '#0a1128', letterSpacing: '0.05em' }}>© 2026 SHREYA KULKARNI. ALL RIGHTS RESERVED.</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link to="/project-details/f1_dashboard" className="mono" style={{ fontSize: '0.75rem', color: '#0a1128', textDecoration: 'none', fontWeight: '600' }}>← F1 DASHBOARD</Link>
            <span className="mono" style={{ fontSize: '0.75rem', color: '#0a1128', opacity: 0.3 }}>|</span>
            <Link to="/project-details/emberquit" className="mono" style={{ fontSize: '0.75rem', color: '#0a1128', textDecoration: 'none', fontWeight: '600' }}>EMBERQUIT →</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
