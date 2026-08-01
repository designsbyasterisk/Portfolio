import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../styles/resume.css';

export default function ResumeHtml() {
  return (
    <>
      {/* Technical Midnight Navy Blueprint Grid Background */}
      <div className="pattern-bg"></div>

      {/* Navigation Header */}
      <Navbar />

      {/* Main Container */}
      <main className="container" style={{ paddingTop: '130px', maxWidth: '1200px' }}>
        
        {/* Header Panel (Bento Card) */}
        <section className="resume-header bento-card reveal" style={{ padding: 'var(--space-lg)', position: 'relative', overflow: 'hidden', marginBottom: 'var(--space-md)' }}>
          <div style={{ position: 'relative', zIndex: '2', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
            <div>
              <h1 className="font-display gsap-split-flip" style={{ marginBottom: '4px', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Shreya Kulkarni</h1>
              <p className="font-display" style={{ color: 'var(--accent-text)', fontSize: '1.25rem', fontWeight: '600', marginBottom: '0', transition: 'color var(--transition-slow)' }}>Product Designer</p>
            </div>
            <a href="/Shreya Kulkarni Product Designer Portfolio.pdf" target="_blank" rel="noopener noreferrer" className="btn-pop btn-pop-primary magnetic no-print" style={{ boxShadow: '0 10px 30px var(--accent-glow)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              DOWNLOAD PDF
            </a>
          </div>
        </section>

        {/* Grid layout container */}
        <div className="resume-layout-grid">
          
          {/* Profile Photo Card (Only on Web) */}
          <div className="profile-photo-container no-print" style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Blue Circle */}
            <div className="decorative-shape shape-circle" style={{ position: 'absolute', top: '-16px', right: '-16px', width: '32px', height: '32px', backgroundColor: '#2a65d4', borderRadius: '50%', zIndex: '10' }}></div>
            {/* Orange Triangle */}
            <div className="decorative-shape shape-triangle" style={{ position: 'absolute', bottom: '-8px', left: '-8px', width: '0', height: '0', borderLeft: '16px solid transparent', borderRight: '16px solid transparent', borderBottom: '32px solid #fd7903', zIndex: '20', transform: 'rotate(-15deg)' }}></div>
            
            <div className="bento-card" style={{ padding: '0', overflow: 'hidden', borderRadius: 'var(--bento-radius)', position: 'relative', flex: '1 1 100%', height: '100%', width: '100%', minHeight: '100%' }}>
              <img src="/Me.jpg" alt="Shreya Kulkarni" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
            </div>
          </div>

          {/* About & Contact (Bento Card) */}
          <div id="about" className="bento-card reveal" style={{ padding: 'var(--space-lg) 20px', height: '100%', boxSizing: 'border-box' }}>
            <h2 className="resume-section-title font-display">About Me</h2>
            <p style={{ fontSize: '0.95rem', marginBottom: 'var(--space-md)' }}>
              I am a Product Designer who wants to promote unconventional design thinking by pushing the boundaries of problem solving and articulating compelling narratives through concepts.
            </p>
            
            <h3 className="font-display" style={{ fontSize: '0.9rem', marginBottom: 'var(--space-sm)', borderBottom: '1px solid rgba(10,17,40,0.06)', paddingBottom: '4px' }}>My Details</h3>
            <ul className="contact-list">
              <li className="contact-item" style={{ whiteSpace: 'nowrap' }}>
                <span className="contact-icon-wrapper" style={{ borderColor: 'rgba(143, 107, 0, 0.15)', backgroundColor: 'rgba(143, 107, 0, 0.04)' }}><svg aria-hidden="true" className="ios-icon" style={{ color: '#8F6B00' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg></span>
                <span>Bengaluru, India.</span>
              </li>
              <li className="contact-item">
                <span className="contact-icon-wrapper" style={{ borderColor: 'rgba(194, 62, 0, 0.15)', backgroundColor: 'rgba(194, 62, 0, 0.04)', marginTop: '2px' }}><svg aria-hidden="true" className="ios-icon" style={{ color: '#C23E00' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path><path d="M21.5 12v6"></path></svg></span>
                <span>Woxsen University<br /><span className="contact-sub" style={{ fontSize: '0.8rem', color: 'var(--text-sub)', whiteSpace: 'nowrap' }}>(B.Des Hons. 2021 - 2025)</span></span>
              </li>
              <li className="contact-item" style={{ whiteSpace: 'nowrap' }}>
                <span className="contact-icon-wrapper" style={{ borderColor: 'rgba(42, 101, 212, 0.15)', backgroundColor: 'rgba(42, 101, 212, 0.04)' }}><svg aria-hidden="true" className="ios-icon" style={{ color: 'var(--color-blue)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6 -6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span>
                <span>+91 9108968004</span>
              </li>
              <li className="contact-item" style={{ whiteSpace: 'nowrap' }}>
                <span className="contact-icon-wrapper" style={{ borderColor: 'rgba(143, 107, 0, 0.15)', backgroundColor: 'rgba(143, 107, 0, 0.04)' }}><svg aria-hidden="true" className="ios-icon" style={{ color: '#8F6B00' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></span>
                <a href="mailto:designsbyasterisk@gmail.com" className="btn-ghost" style={{ fontWeight: '500', whiteSpace: 'nowrap' }}>designsbyasterisk@gmail.com</a>
              </li>
              <li className="contact-item" style={{ whiteSpace: 'nowrap' }}>
                <span className="contact-icon-wrapper" style={{ borderColor: 'rgba(194, 62, 0, 0.15)', backgroundColor: 'rgba(194, 62, 0, 0.04)' }}><svg aria-hidden="true" className="ios-icon" style={{ color: '#C23E00' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></span>
                <a href="https://linkedin.com/in/shreyakulkarni01" target="_blank" rel="noreferrer" className="btn-ghost" style={{ fontWeight: '500', whiteSpace: 'nowrap' }}>shreyakulkarni01</a>
              </li>
            </ul>
          </div>

          {/* Skills & Software (Bento Card) */}
          <div id="skills" className="bento-card reveal" style={{ padding: 'var(--space-lg) 20px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <h2 className="resume-section-title font-display" style={{ marginBottom: 'var(--space-xs)' }}>Skills &amp; Software</h2>
            
            <div className="skills-content-wrapper">
              <div className="skills-group">
                <h3 className="font-display" style={{ fontSize: '0.9rem', marginBottom: 'var(--space-xs)', borderBottom: '1px solid rgba(10,17,40,0.06)', paddingBottom: '4px', textTransform: 'uppercase' }}>Core Skills</h3>
                <div className="skills-print-container" style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)', marginBottom: 'var(--space-md)' }}>
                  <span className="pill-tag pill-blue">User Experience (UX) Design</span>
                  <span className="pill-tag pill-blue">User Research &amp; Insights</span>
                  <span className="pill-tag pill-blue">Systems Thinking</span>
                  <span className="pill-tag pill-blue">Service Design</span>
                  <span className="pill-tag pill-blue">Prototyping (Digital &amp; Physical)</span>
                </div>
              </div>

              <div className="software-group">
                <h3 className="font-display" style={{ fontSize: '0.9rem', marginBottom: 'var(--space-xs)', borderBottom: '1px solid rgba(10,17,40,0.06)', paddingBottom: '4px', textTransform: 'uppercase' }}>Software</h3>
                <div className="software-print-container" style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-xs)' }}>
                  <span className="pill-tag pill-orange">Figma</span>
                  <span className="pill-tag pill-orange">Adobe/Affinity</span>
                  <span className="pill-tag pill-orange">Blender</span>
                  <span className="pill-tag pill-orange">Framer</span>
                  <span className="pill-tag pill-orange">Shapes XR</span>
                  <span className="pill-tag pill-orange">Antigravity</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Timeline (Bento Card) */}
          <div id="experience" className="bento-card reveal" style={{ padding: 'var(--space-lg)', height: '100%', boxSizing: 'border-box' }}>
            <h2 className="resume-section-title font-display">Experience</h2>
            
            <div className="timeline-list" style={{ borderLeft: '2px dashed rgba(10, 17, 40, 0.25)' }}>
              {/* Job 1 */}
              <div className="timeline-item">
                <div className="timeline-marker" style={{ border: '2px solid #C23E00', backgroundColor: 'var(--bg-canvas)', borderRadius: '50%' }}></div>
                <div className="timeline-meta">
                  <span className="timeline-company" style={{ color: 'var(--text-main) !important', backgroundColor: 'rgba(253, 121, 3, 0.1)', padding: '3px 8px', borderRadius: '6px', fontSize: '0.82rem', border: '1px solid rgba(253, 121, 3, 0.18)', display: 'inline-block', verticalAlign: 'middle' }}>The Karmhaus Design Studio</span>
                  <span className="timeline-date">Sept 2025 - Present</span>
                </div>
                <div className="timeline-role">Founding Designer</div>
                <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>
                  Led Product design projects for clients including T-Works, T-Hub, CARE India, and Packfora, alongside in-house consumer electronics projects. Managed end-to-end design, client relationships, and prototyping workflows.
                </p>
              </div>

              {/* Job 2 */}
              <div className="timeline-item">
                <div className="timeline-marker" style={{ border: '2px solid var(--color-blue)', backgroundColor: 'var(--bg-canvas)', borderRadius: '50%' }}></div>
                <div className="timeline-meta">
                  <span className="timeline-company" style={{ color: 'var(--text-main) !important', backgroundColor: 'rgba(42, 101, 212, 0.1)', padding: '3px 8px', borderRadius: '6px', fontSize: '0.82rem', border: '1px solid rgba(42, 101, 212, 0.18)', display: 'inline-block', verticalAlign: 'middle' }}>Social Innovation Studio</span>
                  <span className="timeline-date">May 2025 - July 2025</span>
                </div>
                <div className="timeline-role">System Design Intern</div>
                <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>
                  Worked on system design projects with Youth4Jobs and the Karnataka Government, focusing on accessibility and social impact. Applied systems thinking, service design, and curriculum development.
                </p>
              </div>

              {/* Job 3 */}
              <div className="timeline-item">
                <div className="timeline-marker" style={{ border: '2px solid #8F6B00', backgroundColor: 'var(--bg-canvas)', borderRadius: '50%' }}></div>
                <div className="timeline-meta">
                  <span className="timeline-company" style={{ color: 'var(--text-main) !important', backgroundColor: 'rgba(255, 210, 0, 0.18)', padding: '3px 8px', borderRadius: '6px', fontSize: '0.82rem', border: '1px solid rgba(255, 210, 0, 0.3)', display: 'inline-block', verticalAlign: 'middle' }}>Teslon Technologies</span>
                  <span className="timeline-date">May 2024 - July 2024</span>
                </div>
                <div className="timeline-role">Design Intern</div>
                <p style={{ fontSize: '0.9rem', marginTop: '4px' }}>
                  Designed UX and industrial solutions for healthcare clients like Manipal Hospitals, NIMHANS, and Narayana Health. Focused on user-centred design, 3D modeling, and prototyping.
                </p>
              </div>
            </div>
          </div>

          {/* Certificates (Bento Card) */}
          <div id="certificates" className="bento-card reveal" style={{ padding: 'var(--space-lg)', height: '100%', boxSizing: 'border-box' }}>
            <h2 className="resume-section-title font-display" style={{ marginTop: '10px' }}>Certificates</h2>
            
            <div className="timeline-list" style={{ borderLeft: '2px dashed rgba(10, 17, 40, 0.25)' }}>
              {/* Cert 1 */}
              <div className="timeline-item">
                <div className="timeline-marker" style={{ border: '2px solid #C23E00', backgroundColor: 'var(--bg-canvas)', borderRadius: '50%' }}></div>
                <div className="timeline-meta">
                  <span className="timeline-company" style={{ color: 'var(--text-main) !important', backgroundColor: 'rgba(253, 121, 3, 0.1)', padding: '3px 8px', borderRadius: '6px', fontSize: '0.82rem', border: '1px solid rgba(253, 121, 3, 0.18)', display: 'inline-block', verticalAlign: 'middle' }}>Woxsen University</span>
                  <span className="timeline-date">October 2025</span>
                </div>
                <div className="timeline-role" style={{ fontSize: '1rem' }}>Dean’s List - (B.des.2021-2025)</div>
              </div>

              {/* Cert 2 */}
              <div className="timeline-item">
                <div className="timeline-marker" style={{ border: '2px solid var(--color-blue)', backgroundColor: 'var(--bg-canvas)', borderRadius: '50%' }}></div>
                <div className="timeline-meta">
                  <span className="timeline-company" style={{ color: 'var(--text-main) !important', backgroundColor: 'rgba(42, 101, 212, 0.1)', padding: '3px 8px', borderRadius: '6px', fontSize: '0.82rem', border: '1px solid rgba(42, 101, 212, 0.18)', display: 'inline-block', verticalAlign: 'middle' }}>DigITS, WoU and Bradford Uni, UK.</span>
                  <span className="timeline-date">December 2024</span>
                </div>
                <div className="timeline-role" style={{ fontSize: '1rem' }}>Research Paper Presentation</div>
              </div>

              {/* Cert 3 */}
              <div className="timeline-item">
                <div className="timeline-marker" style={{ border: '2px solid #8F6B00', backgroundColor: 'var(--bg-canvas)', borderRadius: '50%' }}></div>
                <div className="timeline-meta">
                  <span className="timeline-company" style={{ color: 'var(--text-main) !important', backgroundColor: 'rgba(255, 210, 0, 0.18)', padding: '3px 8px', borderRadius: '6px', fontSize: '0.82rem', border: '1px solid rgba(255, 210, 0, 0.3)', display: 'inline-block', verticalAlign: 'middle' }}>IBM</span>
                  <span className="timeline-date">January 2024</span>
                </div>
                <div className="timeline-role" style={{ fontSize: '1rem' }}>Creative and Critical Thinking</div>
              </div>

              {/* Cert 4 */}
              <div className="timeline-item">
                <div className="timeline-marker" style={{ border: '2px solid #C23E00', backgroundColor: 'var(--bg-canvas)', borderRadius: '50%' }}></div>
                <div className="timeline-meta">
                  <span className="timeline-company" style={{ color: 'var(--text-main) !important', backgroundColor: 'rgba(253, 121, 3, 0.1)', padding: '3px 8px', borderRadius: '6px', fontSize: '0.82rem', border: '1px solid rgba(253, 121, 3, 0.18)', display: 'inline-block', verticalAlign: 'middle' }}>California Institute of the Arts</span>
                  <span className="timeline-date">November 2023</span>
                </div>
                <div className="timeline-role" style={{ fontSize: '1rem' }}>User Experience Design</div>
              </div>

              {/* Cert 5 */}
              <div className="timeline-item">
                <div className="timeline-marker" style={{ border: '2px solid var(--color-blue)', backgroundColor: 'var(--bg-canvas)', borderRadius: '50%' }}></div>
                <div className="timeline-meta">
                  <span className="timeline-company" style={{ color: 'var(--text-main) !important', backgroundColor: 'rgba(42, 101, 212, 0.1)', padding: '3px 8px', borderRadius: '6px', fontSize: '0.82rem', border: '1px solid rgba(42, 101, 212, 0.18)', display: 'inline-block', verticalAlign: 'middle' }}>California Institute of the Arts</span>
                  <span className="timeline-date">November 2023</span>
                </div>
                <div className="timeline-role" style={{ fontSize: '1rem' }}>User Interface Design</div>
              </div>
            </div>
          </div>

          {/* Go to Portfolio Link (Bento Card - Hidden on Print) */}
          <div className="no-print" id="portfolio-link-wrap" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Link to="/" className="bento-card reveal" id="portfolio-link" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: 'var(--space-lg)', textDecoration: 'none', height: '100%', flex: '1 1 100%', boxSizing: 'border-box' }}>
              <span className="mono" style={{ color: 'var(--accent-text)', fontSize: '0.85rem', letterSpacing: '0.1em', display: 'block', marginBottom: 'var(--space-xs)' }}>EXPLORE PROJECTS</span>
              <h2 className="font-display" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', marginBottom: '24px', color: 'var(--text-main)', fontWeight: '800', textTransform: 'uppercase' }}>GO TO PORTFOLIO</h2>
              <span className="arrow-icon" style={{ fontSize: '2.5rem', display: 'block', color: 'var(--text-main)', lineHeight: '1', transition: 'transform var(--transition-normal)' }}>↗</span>
            </Link>
          </div>
          
        </div>

        {/* Print Only Footer Link */}
        <div className="print-only-footer">
          <span>Visit my portfolio &nbsp;•&nbsp; <strong>www.designsbyasterisk.com</strong></span>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
