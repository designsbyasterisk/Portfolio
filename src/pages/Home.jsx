import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import ProjectFilter from '../components/ProjectFilter';
import { useMagnetic } from '../hooks/useMagnetic';

gsap.registerPlugin(ScrollTrigger);

const GREETINGS = ["HI THERE!", "WELCOME!"];

export default function Home() {
  useMagnetic('.magnetic');

  const [greetingIndex, setGreetingIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentProjectNum, setCurrentProjectNum] = useState("00");
  const [currentProjectDesc, setCurrentProjectDesc] = useState("FEATURED PROJECTS");

  const scrollContainerRef = useRef(null);
  const scrollWrapperRef = useRef(null);
  const heroGreetingRef = useRef(null);

  // Greeting rotator interval
  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % GREETINGS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // GSAP Entrance & ScrollTrigger Setup
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Entrance Timeline
      gsap.timeline()
        .from(".hero-card", { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" })
        .from(".hero-text", { y: 20, opacity: 0, duration: 0.5, ease: "power3.out" }, "-=0.3");

      // GSAP Horizontal Scroll Showcase
      const wrapper = scrollWrapperRef.current;
      const container = scrollContainerRef.current;

      if (wrapper && container) {
        const getEndScroll = () => {
          const lastPanel = wrapper.querySelector('.horizontal-scroll-panel:last-child');
          if (!lastPanel) return wrapper.scrollWidth - window.innerWidth;
          const lastPanelCenter = lastPanel.offsetLeft + (lastPanel.offsetWidth / 2);
          const viewportCenter = window.innerWidth / 2;
          return Math.max(0, lastPanelCenter - viewportCenter);
        };

        const mm = gsap.matchMedia();
        mm.add("(min-width: 769px)", () => {
          const scrollTween = gsap.to(wrapper, {
            x: () => -getEndScroll(),
            ease: "none",
            scrollTrigger: {
              trigger: container,
              pin: true,
              scrub: 1,
              start: "top top",
              end: () => "+=" + getEndScroll(),
              invalidateOnRefresh: true,
              anticipatePin: 1
            }
          });

          // Track active panel indicator
          const panels = wrapper.querySelectorAll('.horizontal-scroll-panel[data-project-num]');
          panels.forEach((panel) => {
            const num = panel.dataset.projectNum;
            const desc = panel.dataset.projectDesc;
            if (num && desc) {
              ScrollTrigger.create({
                trigger: panel,
                containerAnimation: scrollTween,
                start: "left 75%",
                end: "right 25%",
                onEnter: () => {
                  setCurrentProjectNum(num);
                  setCurrentProjectDesc(desc);
                },
                onEnterBack: () => {
                  setCurrentProjectNum(num);
                  setCurrentProjectDesc(desc);
                }
              });
            }
          });
        });
      }
    });

    return () => ctx.revert();
  }, []);

  const categories = ["All", "Mobile App", "Disaster System", "Web App", "E-Commerce"];

  const filteredProjects = projectsData.filter((p) => {
    const matchesCategory = activeCategory === "All" || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main style={{ paddingTop: '130px', position: 'relative', overflow: 'hidden' }}>
      {/* Hero Section */}
      <section className="container" style={{ minHeight: 'calc(100vh - 160px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: 'var(--space-lg)' }}>
        <div className="bento-grid">
          <div className="bento-card hero-card col-12" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textStyle: 'left', padding: '80px 60px', minHeight: '420px' }}>
            <h1 className="custom-entrance-h1" style={{ marginBottom: 'var(--space-sm)', fontSize: 'clamp(2.2rem, 4.8vw, 3.8rem)' }}>
              <span ref={heroGreetingRef} id="hero-greeting" style={{ color: 'var(--accent-text)', display: 'inline-block', transition: 'all 0.3s ease' }}>
                {GREETINGS[greetingIndex]}
              </span>
              <br />
              <span className="nowrap-desktop">I AM SHREYA KULKARNI</span>
            </h1>
            <p className="text-lead hero-text" style={{ maxWidth: '620px', marginBottom: 'var(--space-md)' }}>
              A Product Designer who applies product thinking to promote unconventional design solutions by pushing the boundaries of problem solving and articulating compelling narratives.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-sm)', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-pop btn-pop-primary magnetic">
                VIEW WORKS
              </a>
              <a href="mailto:designsbyasterisk@gmail.com" className="btn-pop btn-pop-secondary magnetic">
                SAY HELLO
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div style={{ display: 'flex', justifySelf: 'center', justifyContent: 'center', marginTop: 'var(--space-md)' }}>
          <button
            className="scroll-indicator-arrow magnetic"
            aria-label="Scroll to projects"
            onClick={() => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </button>
        </div>
      </section>

      {/* Section 01: Featured Projects */}
      <section id="projects" style={{ marginBottom: 'var(--space-xl)' }}>
        <div className="container">
          <div className="showcase-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
            <div>
              <span className="mono">SECTION 01 // FEATURED PROJECTS</span>
            </div>
          </div>

          {/* Interactive Tag Filter & Search */}
          <ProjectFilter
            categories={categories}
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        {/* GSAP Horizontal Scroll Showcase */}
        <div ref={scrollContainerRef} className="horizontal-scroll-container">
          <div className="horizontal-progress-tracker">
            <div className="project-indicator-text">
              PROJECT <span>{currentProjectNum}</span> / 04
            </div>
            <div className="project-indicator-bar-wrapper">
              <div
                id="project-progress-bar"
                style={{ width: `${(parseInt(currentProjectNum, 10) / 4) * 100}%` }}
              />
            </div>
            <div id="current-project-desc">{currentProjectDesc}</div>
          </div>

          <div ref={scrollWrapperRef} className="horizontal-scroll-wrapper">
            {/* Panel 1: Intro Panel */}
            <div className="horizontal-scroll-panel" style={{ color: 'var(--bg-canvas)' }}>
              <div className="label-pill" style={{ marginBottom: 'var(--space-sm)', backgroundColor: 'var(--accent)', color: 'var(--accent-contrast)' }}>
                <span>PRODUCT &amp; SYSTEMS DESIGN</span>
              </div>
              <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: 'var(--space-md)' }}>
                Featured Projects
              </h2>
            </div>

            {/* Render Filtered Projects */}
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="horizontal-scroll-panel"
                data-project-num={project.num}
                data-project-desc={`${project.title}: ${project.subtitle}`}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 02: Work History */}
      <section id="experience-summary" className="container" style={{ marginBottom: 'var(--space-xl)' }}>
        <div className="showcase-header">
          <span className="mono">SECTION 02 // WORK HISTORY</span>
        </div>

        <div className="bento-card" style={{ padding: 'var(--space-xl) var(--space-lg)', textAlign: 'center' }}>
          <p className="text-lead" style={{ maxWidth: '680px', margin: '0 auto var(--space-md) auto', lineHeight: 1.7 }}>
            As a Product Designer, I enjoy solving complex problems through systems thinking, research, and interaction design. My experience as the Founding Designer at The Karmhaus has strengthened my ability to build thoughtful products across both digital and physical touchpoints.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-sm)', flexWrap: 'wrap', marginBottom: 'var(--space-md)' }}>
            <span className="label-pill" style={{ fontSize: '0.88rem', textTransform: 'none', fontWeight: 600 }}>
              The Karmhaus (Founding Designer) &nbsp;&nbsp; September 2025 - Present
            </span>
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-md)' }}>
            <Link to="/resume" className="btn-pop btn-pop-primary magnetic" style={{ fontSize: '1.05rem', padding: '14px 28px' }}>
              VIEW DETAILED RESUME
            </Link>
          </div>
        </div>
      </section>

      {/* Section 03: CTA Say Hello */}
      <section className="container" style={{ marginBottom: 'var(--space-xl)' }}>
        <div className="bento-card cta-bento-card" style={{ padding: 'var(--space-xl) var(--space-lg)' }}>
          <div className="cta-grid">
            <div className="cta-content">
              <h2 className="font-display" style={{ marginBottom: 'var(--space-xs)', fontSize: 'clamp(1.5rem, 3.2vw, 2.5rem)', whiteSpace: 'nowrap' }}>
                Have a project in mind?
              </h2>
              <p style={{ fontSize: '1.05rem', marginBottom: 0, maxWidth: '680px' }}>
                I am currently open to consulting, contract work, and full-time Product Design roles. Let's make something playful and <span style={{ whiteSpace: 'nowrap' }}>high-impact together.</span>
              </p>
            </div>
            <div className="cta-action">
              <a href="mailto:designsbyasterisk@gmail.com" className="btn-pop btn-pop-primary magnetic" style={{ fontSize: '1.15rem', padding: '18px 36px' }}>
                SAY HELLO
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
