import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function EmberquitTemp() {
  // Theme lifecycle
  useEffect(() => {
    document.body.className = 'theme-brand';
    document.body.setAttribute('data-brand-bg', '#CFD8E4');
    document.body.setAttribute('data-brand-text', '#0E1629');
    document.body.setAttribute('data-brand-text-sub', '#2C374E');
    document.body.setAttribute('data-brand-accent', '#1E63F3');
    document.body.setAttribute('data-brand-card-bg', '#ffffff');
    document.body.setAttribute('data-brand-border', 'rgba(14, 22, 41, 0.08)');

    document.body.style.setProperty('--brand-bg', '#CFD8E4');
    document.body.style.setProperty('--brand-text', '#0E1629');
    document.body.style.setProperty('--brand-text-sub', '#2C374E');
    document.body.style.setProperty('--brand-accent', '#1E63F3');
    document.body.style.setProperty('--brand-card-bg', '#ffffff');
    document.body.style.setProperty('--brand-border', 'rgba(14, 22, 41, 0.08)');
    document.body.style.setProperty('--brand-grid-color', 'rgba(14, 22, 41, 0.08)');
    document.body.style.setProperty('--brand-sketch-fill', '#ffffff');
    document.body.style.setProperty('--brand-moodboard-bg', 'rgba(14, 22, 41, 0.03)');
    document.body.style.setProperty('--brand-moodboard-border', 'rgba(14, 22, 41, 0.08)');
    document.body.style.setProperty('--brand-nav-bg', 'rgba(255, 255, 255, 0.85)');
    document.body.style.setProperty('--brand-nav-border', 'rgba(14, 22, 41, 0.08)');

    window.scrollTo(0, 0);

    return () => {
      document.body.className = '';
    };
  }, []);

  // Fagerstrom Quiz State
  const quizQuestions = [
    { text: "How soon after waking do you smoke your first cigarette?", options: ["Within 5 min", "6-30 min", "31-60 min", "After 60 min"], scores: [3, 2, 1, 0] },
    { text: "Do you find it difficult to refrain in forbidden areas?", options: ["Yes", "No"], scores: [1, 0] },
    { text: "Which cigarette would you hate most to give up?", options: ["First one in morning", "Any other"], scores: [1, 0] },
    { text: "How many cigarettes a day do you smoke?", options: ["10 or less", "11-20", "21-30", "31 or more"], scores: [0, 1, 2, 3] },
    { text: "Do you smoke more in morning than rest of day?", options: ["Yes", "No"], scores: [1, 0] },
    { text: "Do you smoke if you are ill in bed most of the day?", options: ["Yes", "No"], scores: [1, 0] }
  ];
  const [currentQIdx, setCurrentQIdx] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleQuizAnswer = (score) => {
    const nextScore = totalScore + score;
    setTotalScore(nextScore);
    if (currentQIdx + 1 < quizQuestions.length) {
      setCurrentQIdx(currentQIdx + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQIdx(0);
    setTotalScore(0);
    setQuizFinished(false);
  };

  // Taper Simulator State
  const [dailyCigs, setDailyCigs] = useState(20);
  const [dependenceBracket, setDependenceBracket] = useState(2); // 1: Low, 2: Med, 3: High

  // Heatmap State
  const [activeTrigger, setActiveTrigger] = useState('stress');

  // Craving Triggers App Dialog State
  const [activeCravingTriggers, setActiveCravingTriggers] = useState(['Stress']);

  const toggleCravingTrigger = (name) => {
    if (activeCravingTriggers.includes(name)) {
      setActiveCravingTriggers(activeCravingTriggers.filter(t => t !== name));
    } else {
      setActiveCravingTriggers([...activeCravingTriggers, name]);
    }
  };

  // Box Breathing State
  const [isBreathing, setIsBreathing] = useState(false);
  const [breathText, setBreathText] = useState('Ready');

  useEffect(() => {
    let timer;
    if (isBreathing) {
      const phases = ["Inhale...", "Hold...", "Exhale...", "Hold..."];
      let idx = 0;
      setBreathText(phases[0]);
      timer = setInterval(() => {
        idx = (idx + 1) % 4;
        setBreathText(phases[idx]);
      }, 4000);
    } else {
      setBreathText('Ready');
    }
    return () => clearInterval(timer);
  }, [isBreathing]);

  // Copy Toast State
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const copyHexDS = (hex) => {
    navigator.clipboard.writeText(hex);
    setToastMessage(`Copied: ${hex}`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  const scrollToNarrative = () => {
    const el = document.querySelector('.chapter-narrative');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenFullscreen = (e) => {
    e.preventDefault();
    window.open('/Projects/emberquit.html', '_blank', 'noreferrer');
  };

  // SVG Curve calculation
  const factorMap = { 1: 0.25, 2: 0.55, 3: 0.9 };
  const factor = factorMap[dependenceBracket] || 0.55;
  const startY = 100 - (dailyCigs * 2);
  const cpX = 100;
  const cpY = startY + (100 - startY) * factor;
  const pathD = `M 20,${startY} Q ${cpX},${cpY} 190,100`;
  const areaD = `M 20,${startY} Q ${cpX},${cpY} 190,100 L 190,100 L 20,100 Z`;

  return (
    <>
      <div className="pattern-bg"></div>

      {/* Floating Header */}
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
                <g className="asterisk-spin-group" fill="#0E1629">
                  <path d="M559.56 757.221C564.269 748.959 558.296 738.691 548.786 738.7L4.99175 739.189C3.07642 739.191 1.88359 737.112 2.85193 735.459L114.747 544.504C115.192 543.746 116.004 543.279 116.883 543.279L676.027 542.775C679.584 542.772 682.866 540.862 684.628 537.772L989.929 2.06869C990.369 1.29605 991.19 0.818692 992.079 0.817891L1208.75 0.622788C1210.64 0.621087 1211.83 2.64816 1210.92 4.30033L923.126 524.155C918.552 532.416 924.532 542.551 933.975 542.543L1508.13 542.026C1510.05 542.024 1511.24 544.122 1510.26 545.774L1396.16 736.732C1395.72 737.48 1394.91 737.938 1394.04 737.939L810.314 738.464C806.713 738.468 803.397 740.424 801.653 743.575L503.544 1282.07C503.108 1282.85 502.279 1283.34 501.378 1283.34L263.863 1283.56C261.961 1283.56 260.767 1281.5 261.709 1279.85L559.56 757.221Z" fill="#0E1629" fillOpacity="1" />
                  <path d="M673.578 180.373C673.862 180.786 674.014 181.274 674.015 181.775L674.325 526.123C674.327 528.565 669.797 527.516L314.603 4.19047C313.487 2.54628 314.664 0.323334 316.651 0.321545L548.26 0.11299C549.076 0.112255 549.84 0.513721 550.303 1.18629L673.578 180.373Z" fill="#0E1629" fillOpacity="1" />
                  <path d="M815.897 1106C815.613 1105.59 815.461 1105.1 815.46 1104.6L815.15 760.248C815.148 757.806 818.307 756.834 819.678 758.854L1174.87 1282.18C1175.99 1283.82 1174.81 1286.05 1172.82 1286.05L941.215 1286.26C940.399 1286.26 939.635 1285.86 939.172 1285.18L815.897 1106Z" fill="#0E1629" fillOpacity="1" />
                </g>
              </svg>
            </Link>
            <span className="label-pill" style={{ fontSize: '0.65rem', padding: '4px 10px', margin: '0', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', height: '24px', backgroundColor: 'var(--brand-moodboard-bg, rgba(255,255,255,0.05))', border: '1px solid var(--brand-border, rgba(255,255,255,0.1))', color: 'var(--brand-text)', borderRadius: '6px' }}>EMBERQUIT</span>
          </div>
          
          <nav style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)' }}>
            <Link to="/resume" className="font-display" style={{ fontSize: '0.9rem', margin: '0', display: 'inline-flex', alignItems: 'center', color: 'var(--brand-text)', textDecoration: 'none' }}>ABOUT ME</Link>
          </nav>
        </div>
      </header>

      {/* Main Scroll Narrative */}
      <main className="narrative-wrapper">

        {/* Chapter 1: The Hook (Hero) */}
        <section className="story-chapter chapter-hero">
          <div className="chapter-hero-bg" style={{ background: 'linear-gradient(135deg, rgba(30, 99, 243, 0.08) 0%, rgba(30, 99, 243, 0.03) 100%)' }}></div>
          <div className="container hero-content">
            <div className="hero-text-block">
              <span className="label-pill brand-accent-badge">CASE STUDY 01 //</span>
              <h1 className="gsap-split-header brand-hero-title">EMBERQUIT</h1>
              <p className="brand-hero-subtitle">Nicotine Habits Cessation Companion</p>
            </div>
            <div className="project-meta-bar">
              <div className="meta-item">
                <span className="meta-label">Category</span>
                <span className="meta-val">Mobile UI/UX</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Duration</span>
                <span className="meta-val">4 Weeks</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-md)' }}>
              <button className="scroll-indicator-arrow" aria-label="Scroll down" onClick={scrollToNarrative}>
                <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* Chapter 2: The Context & Story */}
        <section className="story-chapter chapter-narrative">
          <div className="container narrative-grid">
            <div className="narrative-content-left">
              <div className="narrative-block">
                <span className="mono brand-accent-color">01 / THE CONTEXT</span>
                <h2>Replacing Shame with Growth</h2>
                <p>
                  Most quit-smoking apps are built on panic. They feature ticking stopwatches, red warnings, and financial penalties that trigger guilt the moment a user slips. When design uses negative reinforcement, it creates friction, leading to app abandonment during a relapse.
                </p>
              </div>
              <div className="narrative-block" style={{ marginTop: 'var(--space-lg)' }}>
                <span className="mono brand-accent-color">02 / THE PROBLEM &amp; SOLUTION</span>
                <h2>A Path Forward</h2>
                <p>
                  Nicotine addiction operates on a tight physiological and psychological loop. Standard apps treat cessation as an instantaneous milestone, triggering alarm states and shame cycles on relapses. Emberquit shifts this paradigm by designing a gradual, automated reduction path that accommodates behavioral slip-ups and translates progress through gamified milestones.
                </p>
              </div>
            </div>
            <div className="narrative-content-right">
              <div className="brand-metric-card emberquit-metric-card">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '4px' }}>
                  <h4 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: '1.15rem', fontWeight: '500', color: 'var(--brand-text)', margin: '0', lineHeight: '1.2' }}>Clinical Cessation Reality</h4>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.82rem', color: 'var(--brand-text-sub, #2C374E)', margin: '0', lineHeight: '1.45' }}>
                    Contrast of user outcomes based on design and behavioral cessation systems.
                  </p>
                </div>

                <div className="layered-stats-container">
                  <div className="layered-card layered-card-success">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', fontWeight: '700', color: '#1e63f3', textTransform: 'uppercase', letterSpacing: '0.08em', backgroundColor: 'rgba(30, 99, 243, 0.08)', padding: '3px 8px', borderRadius: '12px', whiteSpace: 'nowrap' }}>Recommended Path</span>
                      <span style={{ fontFamily: "'Clash Display', sans-serif", fontSize: '1.35rem', fontWeight: '500', color: '#1e63f3', lineHeight: '1', whiteSpace: 'nowrap' }}>3.8x Success</span>
                    </div>
                    <h5 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: '0.95rem', fontWeight: '500', color: 'var(--brand-text)', margin: '0 0 4px 0', lineHeight: '1.2' }}>Gradual Reduction Protocol</h5>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.76rem', color: 'var(--brand-text-sub)', margin: '0', lineHeight: '1.45' }}>
                      Step-down scheduling prevents severe receptor shock, increasing cessation completion rates.
                    </p>
                  </div>

                  <div className="layered-card layered-card-fail">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', fontWeight: '700', color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.08em', backgroundColor: 'rgba(239, 68, 68, 0.08)', padding: '3px 8px', borderRadius: '12px', whiteSpace: 'nowrap' }}>Standard Cessation</span>
                      <span style={{ fontFamily: "'Clash Display', sans-serif", fontSize: '1.35rem', fontWeight: '500', color: '#ef4444', lineHeight: '1', whiteSpace: 'nowrap' }}>95% Failure</span>
                    </div>
                    <h5 style={{ fontFamily: "'Clash Display', sans-serif", fontSize: '0.95rem', fontWeight: '500', color: 'var(--brand-text)', margin: '0 0 4px 0', lineHeight: '1.2' }}>Abrupt Nicotine Cutoff</h5>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.76rem', color: 'var(--brand-text-sub)', margin: '0', lineHeight: '1.45' }}>
                      Abrupt, willpower-alone quit methods fail due to intense craving spikes and withdrawal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 3: The Science & Habits */}
        <section className="story-chapter chapter-deck-pin" id="science-cessation-pin">
          <div className="deck-grid-container">
            <div className="deck-info-panel">
              <span className="mono brand-accent-color" style={{ color: '#64748b !important' }}>03 / THE SCIENCE &amp; DATA</span>
              <h2 style={{ color: '#000000 !important' }}>Habit Cessation Systems</h2>
              <p style={{ color: '#3b486b !important' }}>Quitting is not a single decision; it is a complex user journey. By converting clinical diagnostics into conversational flows and visualizing progress based on behavioral insights, we alleviate a major user pain point, building trust and long-term retention.</p>
            </div>
            
            <div className="stacked-deck-wrapper">
              {/* Card 1: Fagerström Quiz Widget */}
              <div className="deck-card gallery-slide-card">
                <div className="slide-image-wrapper emberquit-deck-card-content">
                  <div className="emberquit-deck-card-image-wrap" id="fagerstrom-quiz-widget" style={{ padding: 'var(--space-sm)', backgroundColor: '#E2EBF4', width: '100%', height: '100%', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative', boxSizing: 'border-box' }}>
                    <div className="mini-phone-frame" style={{ width: '210px', height: '370px', backgroundColor: '#ffffff', border: '4px solid #CAD3E2', borderRadius: '24px', padding: '14px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', fontFamily: "'Montserrat', sans-serif", boxShadow: '0 10px 30px rgba(14, 22, 41, 0.1)', position: 'relative', overflow: 'hidden', boxSizing: 'border-box' }}>
                      {!quizFinished ? (
                        <div id="quiz-question-container" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '6px' }}>
                          <div id="quiz-progress" style={{ fontSize: '0.62rem', color: 'var(--brand-text-sub, #2C374E)', fontFamily: 'monospace' }}>QUESTION {currentQIdx + 1} / 6</div>
                          <div id="quiz-question-text" style={{ fontSize: '0.76rem', fontWeight: 500, color: 'var(--brand-text)', lineHeight: '1.3', fontFamily: "'Clash Display', sans-serif" }}>{quizQuestions[currentQIdx].text}</div>
                          <div id="quiz-options-container" style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '6px' }}>
                            {quizQuestions[currentQIdx].options.map((opt, idx) => (
                              <button
                                key={idx}
                                onClick={() => handleQuizAnswer(quizQuestions[currentQIdx].scores[idx])}
                                style={{ width: '100%', padding: '7px 9px', fontSize: '0.65rem', textAlign: 'left', border: '1px solid rgba(14, 22, 41, 0.15)', borderRadius: '8px', backgroundColor: 'rgba(14, 22, 41, 0.04)', color: '#0E1629', fontFamily: "'Montserrat', sans-serif", cursor: 'pointer' }}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div id="quiz-result-container" style={{ display: 'flex', flexGrow: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', gap: '10px' }}>
                          <span className="mono brand-accent-color" style={{ fontSize: '0.6rem', padding: '2px 8px', backgroundColor: 'rgba(30, 99, 243, 0.1)', color: '#1E63F3', border: '1px solid rgba(30, 99, 243, 0.2)', borderRadius: '6px' }}>DEPENDENCE REPORT</span>
                          <h4 id="quiz-result-bracket" style={{ fontSize: '0.85rem', color: 'var(--brand-text)', margin: 0, fontFamily: "'Clash Display', sans-serif", fontWeight: '500' }}>
                            {totalScore >= 7 ? 'HIGH DEPENDENCE' : totalScore >= 4 ? 'MEDIUM DEPENDENCE' : 'LOW DEPENDENCE'}
                          </h4>
                          <div id="quiz-result-score" style={{ fontSize: '2rem', fontFamily: "'Clash Display', sans-serif", fontWeight: '500', color: '#1E63F3', lineHeight: 1 }}>{totalScore}/10</div>
                          <p style={{ fontSize: '0.62rem', color: 'var(--brand-text-sub, #2C374E)', margin: 0, lineHeight: '1.3' }}>Taper plan generated below.</p>
                          <button onClick={resetQuiz} style={{ padding: '4px 8px', fontSize: '0.6rem', borderRadius: '4px', border: '1px solid rgba(14, 22, 41, 0.15)', backgroundColor: 'rgba(14, 22, 41, 0.04)', color: 'var(--brand-text-sub, #2C374E)', cursor: 'pointer', marginTop: '6px', fontFamily: "'Montserrat', sans-serif" }}>Restart Test</button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="emberquit-deck-card-text">
                    <span className="mono brand-accent-color" style={{ fontSize: '0.72rem', display: 'block', marginBottom: '4px' }}>01 / THE ASSESSMENT</span>
                    <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: '500', color: 'var(--brand-text)', margin: '0 0 6px 0', fontSize: '1.3rem' }}>Conversational Trust</h3>
                    <p style={{ fontSize: '0.81rem', lineHeight: '1.45', color: 'var(--text-sub)', margin: '0 0 8px 0' }}>
                      The Fagerström Test for Nicotine Dependence (FTND) is the global clinical standard for measuring nicotine addiction. It asks six key questions, ranging from morning habits to behavioral choices. 
                    </p>
                    <p style={{ fontSize: '0.81rem', lineHeight: '1.45', color: 'var(--text-sub)', margin: '0' }}>
                      I redesigned this diagnostic tool into a conversational onboarding flow. By presenting only one Fagerström question per screen and using tactile, single-click buttons, we reduce cognitive load, build immediate user trust, and guarantee cleaner self-reported data.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Taper Simulator SVG Graph */}
              <div className="deck-card gallery-slide-card">
                <div className="slide-image-wrapper emberquit-deck-card-content">
                  <div className="emberquit-deck-card-image-wrap" id="taper-simulator-widget" style={{ padding: 'var(--space-sm)', backgroundColor: '#E2EBF4', width: '100%', height: '100%', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 'var(--space-sm)', fontFamily: "'Montserrat', sans-serif", boxSizing: 'border-box' }}>
                    <div style={{ width: '100%', maxWidth: '240px', height: '180px', backgroundColor: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid #CAD3E2', padding: '10px', boxSizing: 'border-box', position: 'relative' }}>
                      <svg id="taper-svg" viewBox="0 0 200 125" style={{ width: '100%', height: '100%', overflow: 'visible', marginTop: '8px' }}>
                        <line x1="20" y1="20" x2="190" y2="20" stroke="#F1F5F9" strokeWidth="1"></line>
                        <line x1="20" y1="60" x2="190" y2="60" stroke="#F1F5F9" strokeWidth="1"></line>
                        <line x1="105" y1="10" x2="105" y2="100" stroke="#F1F5F9" strokeWidth="1"></line>
                        <line x1="190" y1="10" x2="190" y2="100" stroke="#F1F5F9" strokeWidth="1"></line>

                        <line x1="20" y1="10" x2="20" y2="100" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"></line>
                        <line x1="20" y1="100" x2="190" y2="100" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"></line>
                        
                        <text x="12" y="22" fontFamily="'Montserrat', sans-serif" fontSize="7px" fill="#64748b" textAnchor="end" fontWeight="600">40</text>
                        <text x="12" y="62" fontFamily="'Montserrat', sans-serif" fontSize="7px" fill="#64748b" textAnchor="end" fontWeight="600">20</text>
                        <text x="12" y="102" fontFamily="'Montserrat', sans-serif" fontSize="7px" fill="#64748b" textAnchor="end" fontWeight="600">0</text>

                        <text x="20" y="112" fontFamily="'Montserrat', sans-serif" fontSize="7px" fill="#64748b" textAnchor="middle" fontWeight="600">Day 0</text>
                        <text x="105" y="112" fontFamily="'Montserrat', sans-serif" fontSize="7px" fill="#64748b" textAnchor="middle" fontWeight="600">Day 7</text>
                        <text x="190" y="112" fontFamily="'Montserrat', sans-serif" fontSize="7px" fill="#64748b" textAnchor="middle" fontWeight="600">Day 15</text>

                        <line x1="20" y1="30" x2="20" y2="100" stroke="#ef4444" strokeDasharray="3,3" strokeWidth="1.5"></line>
                        <path id="taper-curve-path" d={pathD} fill="none" stroke="#1E63F3" strokeWidth="2.5" strokeLinecap="round"></path>
                        <path id="taper-area-path" d={areaD} fill="rgba(30, 99, 243, 0.04)"></path>
                        <circle id="taper-start-point" cx="20" cy={startY} r="4" fill="#ffffff" stroke="#1E63F3" strokeWidth="1.5"></circle>
                        <circle id="taper-end-point" cx="190" cy="100" r="4" fill="#ffffff" stroke="#1E63F3" strokeWidth="1.5"></circle>
                      </svg>
                    </div>
                    <div style={{ width: '100%', maxWidth: '240px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontSize: '0.68rem', color: 'var(--brand-text-sub, #2C374E)' }}>Daily Cigarettes</span>
                        <span id="lbl-taper-cigs" style={{ fontSize: '0.7rem', fontFamily: 'monospace', fontWeight: '700', color: '#1E63F3' }}>{dailyCigs} / day</span>
                      </div>
                      <input type="range" id="slider-taper-cigs" min="5" max="40" value={dailyCigs} onChange={(e) => setDailyCigs(parseInt(e.target.value))} style={{ width: '100%' }} />
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2px' }}>
                        <span style={{ fontSize: '0.68rem', color: 'var(--brand-text-sub, #2C374E)' }}>Dependence</span>
                        <div style={{ display: 'flex', gap: '4px' }}>
                          {[1, 2, 3].map((factorVal) => (
                            <button
                              key={factorVal}
                              onClick={() => setDependenceBracket(factorVal)}
                              style={{
                                padding: '2px 6px',
                                fontSize: '0.58rem',
                                borderRadius: '4px',
                                border: '1px solid rgba(14, 22, 41, 0.15)',
                                backgroundColor: dependenceBracket === factorVal ? '#1E63F3' : 'rgba(14, 22, 41, 0.04)',
                                color: dependenceBracket === factorVal ? '#ffffff' : 'var(--brand-text-sub, #2C374E)',
                                cursor: 'pointer',
                                fontFamily: "'Montserrat', sans-serif"
                              }}
                            >
                              {factorVal === 1 ? 'Low' : factorVal === 2 ? 'Med' : 'High'}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="emberquit-deck-card-text">
                    <span className="mono brand-accent-color" style={{ fontSize: '0.72rem', display: 'block', marginBottom: '4px' }}>02 / THE PLAN</span>
                    <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: '500', color: 'var(--brand-text)', margin: '0 0 6px 0', fontSize: '1.3rem' }}>The Tapering Engine</h3>
                    <p style={{ fontSize: '0.81rem', lineHeight: '1.45', color: 'var(--text-sub)', margin: '0 0 8px 0' }}>
                      Behind the scenes, the Fagerström score (0 to 10) groups the user into a dependence bracket (Low, Medium, or High). This score dynamically calculates a personalized reduction schedule, charting a gradual tapering curve down to zero.
                    </p>
                    <p style={{ fontSize: '0.81rem', lineHeight: '1.45', color: 'var(--text-sub)', margin: '0' }}>
                      The narrative shows the user a visual timeline of their personalized reduction path before they start. Showing a clear, manageable path forward removes the psychological barrier of quitting suddenly and sets realistic expectations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Heatmap Grid */}
              <div className="deck-card gallery-slide-card">
                <div className="slide-image-wrapper emberquit-deck-card-content">
                  <div className="emberquit-deck-card-image-wrap" id="heatmap-grid-widget" style={{ padding: 'var(--space-sm)', backgroundColor: '#E2EBF4', width: '100%', height: '100%', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '8px', fontFamily: "'Montserrat', sans-serif", boxSizing: 'border-box' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%', maxWidth: '240px', backgroundColor: '#ffffff', borderRadius: 'var(--radius-md)', border: '1px solid #CAD3E2', padding: '8px', boxSizing: 'border-box' }}>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center', width: '100%' }}>
                        {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                          <span key={day} style={{ fontSize: '0.5rem', fontWeight: '700', color: 'var(--brand-text-sub)', fontFamily: "'Montserrat', sans-serif", opacity: '0.7' }}>{day}</span>
                        ))}
                      </div>
                      <div id="heatmap-grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', width: '100%' }}>
                        {Array.from({ length: 35 }).map((_, idx) => {
                          const opacitiesMap = {
                            stress: [
                              0.1, 0.25, 0.85, 0.95, 0.3, 0.8, 0.15,
                              0.2, 0.45, 0.9, 0.75, 0.15, 0.85, 0.9,
                              0.15, 0.35, 0.8, 0.95, 0.4, 0.2, 0.7,
                              0.3, 0.85, 0.9, 0.6, 0.25, 0.9, 0.85,
                              0.15, 0.25, 0.75, 0.9, 0.35, 0.8, 0.1
                            ],
                            coffee: [
                              0.95, 0.85, 0.7, 0.3, 0.2, 0.1, 0.15,
                              0.9, 0.95, 0.8, 0.4, 0.15, 0.2, 0.1,
                              0.85, 0.9, 0.75, 0.25, 0.1, 0.15, 0.2,
                              0.95, 0.8, 0.85, 0.35, 0.2, 0.1, 0.15,
                              0.9, 0.85, 0.65, 0.3, 0.15, 0.2, 0.1
                            ],
                            social: [
                              0.1, 0.15, 0.2, 0.3, 0.85, 0.95, 0.9,
                              0.15, 0.1, 0.2, 0.25, 0.9, 0.95, 0.85,
                              0.2, 0.15, 0.1, 0.35, 0.8, 0.9, 0.95,
                              0.1, 0.2, 0.15, 0.3, 0.85, 0.95, 0.9,
                              0.15, 0.1, 0.25, 0.4, 0.9, 0.85, 0.95
                            ],
                            boredom: [
                              0.2, 0.75, 0.1, 0.85, 0.15, 0.3, 0.9,
                              0.8, 0.15, 0.9, 0.2, 0.7, 0.1, 0.4,
                              0.15, 0.85, 0.3, 0.1, 0.95, 0.6, 0.2,
                              0.7, 0.2, 0.1, 0.8, 0.25, 0.85, 0.15,
                              0.3, 0.9, 0.2, 0.65, 0.1, 0.4, 0.85
                            ]
                          };
                          const opacities = opacitiesMap[activeTrigger] || opacitiesMap.stress;
                          const opacity = opacities[idx % opacities.length];
                          return (
                            <div
                              key={idx}
                              style={{
                                aspectRatio: '1',
                                borderRadius: '3px',
                                backgroundColor: `rgba(30, 99, 243, ${opacity * 0.95})`,
                                border: '1px solid rgba(14, 22, 41, 0.06)',
                                boxShadow: opacity > 0.7 ? '0 0 6px rgba(30, 99, 243, 0.3)' : 'none'
                              }}
                            ></div>
                          );
                        })}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'nowrap', justifyContent: 'center', width: '100%', maxWidth: '250px' }}>
                      {['stress', 'coffee', 'social', 'boredom'].map((trig) => (
                        <button
                          key={trig}
                          onClick={() => setActiveTrigger(trig)}
                          style={{
                            padding: '3px 6px',
                            fontSize: '0.6rem',
                            borderRadius: '6px',
                            border: activeTrigger === trig ? '1px solid rgba(30, 99, 243, 0.2)' : '1px solid rgba(14, 22, 41, 0.15)',
                            backgroundColor: activeTrigger === trig ? 'rgba(30, 99, 243, 0.1)' : 'rgba(14, 22, 41, 0.04)',
                            color: activeTrigger === trig ? '#1E63F3' : 'var(--brand-text-sub, #2C374E)',
                            cursor: 'pointer',
                            fontFamily: "'Montserrat', sans-serif",
                            textTransform: 'capitalize',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {trig}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="emberquit-deck-card-text">
                    <span className="mono brand-accent-color" style={{ fontSize: '0.72rem', display: 'block', marginBottom: '4px' }}>03 / THE REFLECTION</span>
                    <h3 style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: '500', color: 'var(--brand-text)', margin: '0 0 6px 0', fontSize: '1.3rem' }}>Mapping Patterns</h3>
                    <p style={{ fontSize: '0.81rem', lineHeight: '1.45', color: 'var(--text-sub)', margin: '0 0 8px 0' }}>
                      When a user logs a cigarette, they select their trigger (e.g., Stress, Coffee, Social). The app aggregates this data to create a personal behavioral heatmap.
                    </p>
                    <p style={{ fontSize: '0.81rem', lineHeight: '1.45', color: 'var(--text-sub)', margin: '0' }}>
                      By shifting the framing from "days clean" to "behavioral patterns," the user gains insight into why they smoke. Emberquit proves that empathetic design, scientific structure, and non-judgmental tracking create a healthier path to habit change.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 4: Design System Guide (Pixel-Perfect replica of emberquit html version.html) */}
        <section className="story-chapter" style={{ padding: 'var(--space-xl) 0', height: 'auto', overflow: 'visible', display: 'block' }}>
          <div className="container">
            <span className="mono brand-accent-color">04 / VISUAL GUIDE</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', margin: '5px 0 8px 0' }}>Design System</h2>
            <p style={{ color: 'var(--text-sub)', margin: '0 0 var(--space-lg) 0', fontSize: '0.95rem' }}>Visual tokens, interactive material specimens, and design guidelines.</p>
            
            <div className="design-system-container">
              <div className="ds-grid">
                
                {/* COLUMN 1 */}
                <div className="ds-column">
                  
                  {/* Card 1: Typography */}
                  <div className="ds-card">
                    <div className="ds-section-title">Typography</div>
                    <div className="ds-font-specimen quicksand">
                      <div className="ds-specimen-label">Display font (Headers, Milestones)</div>
                      <div className="ds-font-preview-large">Emberquit</div>
                      <div className="ds-font-meta">Quicksand Bold — 2.8rem (h1) / 1.8rem (h2)</div>
                      <p className="ds-font-desc">Friendly, rounded, and empathetic. Softens medical tracking and celebrates user milestones.</p>
                    </div>
                    <div className="ds-font-specimen inter">
                      <div className="ds-specimen-label">System font (Body, Stats, Logs)</div>
                      <div className="ds-font-preview-large">Clean Log</div>
                      <div className="ds-font-meta">Inter Medium — 0.98rem (Body) / 0.75rem (Muted)</div>
                      <p className="ds-font-desc">Highly legible, neutral, and structured. Handles time-logging and data variables clearly.</p>
                    </div>
                    <div className="ds-font-specimen space-mono">
                      <div className="ds-specimen-label">Technical font (Milestones, Codes)</div>
                      <div className="ds-font-preview-large" style={{ fontFamily: "'Space Mono', monospace", fontSize: '24px', fontWeight: '700' }}>STREAK 12d</div>
                      <div className="ds-font-meta">Space Mono Bold — 0.75rem (Label/Pill)</div>
                      <p className="ds-font-desc">Monospaced and precise. Highlights structured stats and technical blueprint tags.</p>
                    </div>
                  </div>

                  {/* Card 2: Inputs */}
                  <div className="ds-card">
                    <div className="ds-section-title">Inputs</div>
                    <div className="ds-inputs-group">
                      <div>
                        <div className="ds-label-tag">Normal Input</div>
                        <input type="text" className="ds-input-field" placeholder="Enter trigger name..." defaultValue="Afternoon break" />
                      </div>
                      <div>
                        <div className="ds-label-tag">Active Input</div>
                        <input type="text" className="ds-input-field active" placeholder="Enter trigger name..." defaultValue="Commuting stress" />
                      </div>
                      <div>
                        <div className="ds-label-tag">Error Input</div>
                        <input type="text" className="ds-input-field error" placeholder="Enter trigger name..." defaultValue="invalid_char%$#" />
                        <span className="ds-error-msg">⚠️ Invalid characters detected. Please use alphabets.</span>
                      </div>
                      <div>
                        <div className="ds-label-tag">Input with Label</div>
                        <div className="ds-input-with-label">
                          <span className="ds-input-label-inner">TRIGGER NAME</span>
                          <input type="text" className="ds-input-field-nested" defaultValue="Boredom triggers" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Button States (iPad Portrait Only) */}
                  <div className="ds-card ds-card-ipad-button-states">
                    <div className="ds-section-title">Button States</div>
                    <div className="ds-buttons-layout">
                      <div className="ds-btn-state-grid">
                        <div></div>
                        <div className="ds-btn-header">Normal</div>
                        <div className="ds-btn-header">Hover</div>
                        <div className="ds-btn-header">Clicked</div>
                        
                        <div className="ds-btn-row-label">Primary</div>
                        <div><button className="ds-btn-state ds-btn-primary">I beat it</button></div>
                        <div><button className="ds-btn-state ds-btn-primary hover">I beat it</button></div>
                        <div><button className="ds-btn-state ds-btn-primary active">I beat it</button></div>

                        <div className="ds-btn-row-label">Outline</div>
                        <div><button className="ds-btn-state ds-btn-outline">i smoked</button></div>
                        <div><button className="ds-btn-state ds-btn-outline hover">i smoked</button></div>
                        <div><button className="ds-btn-state ds-btn-outline active">i smoked</button></div>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Monthly Heatmap */}
                  <div className="ds-card">
                    <div>
                      <div className="ds-section-title">Monthly Heatmap</div>
                      <div className="ds-specimen-label" style={{ marginBottom: '12px' }}>Calendar Heatmap Log (Monthly Progress)</div>
                      <div className="ds-calendar-card">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                          <span style={{ fontSize: '13px', fontWeight: '700', color: '#475569', cursor: 'pointer' }}>&lt;</span>
                          <span className="ds-calendar-header-title" style={{ margin: 0, fontSize: '14px', fontWeight: '700', color: '#0f172a', fontFamily: "'Quicksand', sans-serif" }}>July 2026</span>
                          <span style={{ fontSize: '13px', fontWeight: '700', color: '#475569', cursor: 'pointer' }}>&gt;</span>
                        </div>
                        <div className="ds-calendar-week-grid">
                          <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                        </div>
                        <div className="ds-calendar-day-grid">
                          <div className="ds-cal-empty"></div><div className="ds-cal-empty"></div><div className="ds-cal-empty"></div>
                          <div className="ds-cal-day over-cap">1</div><div className="ds-cal-day over-cap">2</div><div className="ds-cal-day over-cap">3</div><div className="ds-cal-day over-cap">4</div>
                          <div className="ds-cal-day over-cap">5</div><div className="ds-cal-day at-cap">6</div><div className="ds-cal-day">7</div><div className="ds-cal-day">8</div>
                          <div className="ds-cal-day">9</div><div className="ds-cal-day">10</div><div className="ds-cal-day">11</div><div className="ds-cal-day">12</div>
                          <div className="ds-cal-day">13</div><div className="ds-cal-day">14</div><div className="ds-cal-day selected well-under">15</div><div className="ds-cal-day">16</div>
                          <div className="ds-cal-day">17</div><div className="ds-cal-day">18</div><div className="ds-cal-day">19</div><div className="ds-cal-day">20</div>
                          <div className="ds-cal-day">21</div><div className="ds-cal-day">22</div><div className="ds-cal-day">23</div><div className="ds-cal-day">24</div>
                          <div className="ds-cal-day">25</div><div className="ds-cal-day">26</div><div className="ds-cal-day">27</div><div className="ds-cal-day">28</div>
                          <div className="ds-cal-day">29</div><div className="ds-cal-day">30</div><div className="ds-cal-day">31</div>
                        </div>
                        <div className="ds-calendar-legend">
                          <span className="ds-legend-item"><span className="ds-legend-dot well-under"></span> well under</span>
                          <span className="ds-legend-item"><span className="ds-legend-dot at-cap"></span> at cap</span>
                          <span className="ds-legend-item"><span className="ds-legend-dot over-cap"></span> over</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* COLUMN 2 */}
                <div className="ds-column">
                  
                  {/* Card 5: Colors, Swatches & Patterns */}
                  <div className="ds-card">
                    <div className="ds-section-title">Colors &amp; Swatches</div>
                    <div className="ds-color-swatch-list" style={{ marginBottom: '24px' }}>
                      {[
                        { name: 'Primary Intense', hex: '#0019e6' },
                        { name: 'Accent Sky', hex: '#3399ff' },
                        { name: 'Sage Green', hex: '#2eb868' },
                        { name: 'Ember Orange', hex: '#f97316' },
                        { name: 'Midnight Navy', hex: '#0A1128' },
                        { name: 'Canvas Base', hex: '#FCFAF6', border: '1px solid rgba(0,0,0,0.05)' }
                      ].map((swatch) => (
                        <div key={swatch.hex} className="ds-swatch" onClick={() => copyHexDS(swatch.hex)}>
                          <div className="ds-swatch-color" style={{ background: swatch.hex, border: swatch.border }}></div>
                          <div className="ds-swatch-info">
                            <div className="ds-swatch-name">{swatch.name}</div>
                            <div className="ds-swatch-value">{swatch.hex}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="ds-specimen-label" style={{ marginBottom: '12px', paddingTop: '16px', borderTop: '1px dashed rgba(10, 17, 40, 0.08)' }}>
                      Blueprint &amp; Brand Patterns
                    </div>
                    <div className="ds-pattern-row" style={{ display: 'flex', gap: '16px' }}>
                      <div className="ds-pattern-box blueprint" style={{ flex: 1, height: '90px', borderRadius: '12px', border: '1px solid rgba(0,25,230,0.15)', backgroundColor: '#FCFAF6', backgroundImage: 'radial-gradient(rgba(0, 25, 230, 0.15) 1px, transparent 0)', backgroundSize: '10px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: '10px', fontWeight: '600', color: '#0019e6', letterSpacing: '0.05em', fontFamily: 'monospace' }}>BLUEPRINT</span>
                      </div>
                      <div className="ds-pattern-box gradient" style={{ flex: 1, height: '90px', borderRadius: '12px', background: 'linear-gradient(135deg, #0019e6, #3399ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 15px rgba(0,25,230,0.2)' }}>
                        <span style={{ fontSize: '10px', fontWeight: '600', color: '#ffffff', letterSpacing: '0.05em', fontFamily: 'monospace' }}>GRADIENT</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 6: Craving Triggers */}
                  <div className="ds-card">
                    <div className="ds-section-title">Craving Triggers</div>
                    <div className="ds-trigger-modal">
                      <h3 className="ds-trigger-modal-title">What triggered this?</h3>
                      <p className="ds-trigger-modal-subtitle">Logging triggers helps you spot patterns over time.</p>
                      
                      <div className="ds-trigger-modal-grid">
                        <div
                          className={`ds-trigger-modal-card ${activeCravingTriggers.includes('Stress') ? 'active' : ''}`}
                          onClick={() => toggleCravingTrigger('Stress')}
                        >
                          <div className="ds-tm-icon-wrap">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                            </svg>
                          </div>
                          <div className="ds-tm-title">Stress</div>
                        </div>

                        <div
                          className={`ds-trigger-modal-card ${activeCravingTriggers.includes('Habit') ? 'active' : ''}`}
                          onClick={() => toggleCravingTrigger('Habit')}
                        >
                          <div className="ds-tm-icon-wrap">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M21 2v6h-6"></path>
                              <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
                              <path d="M3 22v-6h6"></path>
                              <path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path>
                            </svg>
                          </div>
                          <div className="ds-tm-title">Habit</div>
                        </div>

                        <div
                          className={`ds-trigger-modal-card ${activeCravingTriggers.includes('Social') ? 'active' : ''}`}
                          onClick={() => toggleCravingTrigger('Social')}
                        >
                          <div className="ds-tm-icon-wrap">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                          </div>
                          <div className="ds-tm-title">Social</div>
                        </div>

                        <div
                          className={`ds-trigger-modal-card ${activeCravingTriggers.includes('Boredom') ? 'active' : ''}`}
                          onClick={() => toggleCravingTrigger('Boredom')}
                        >
                          <div className="ds-tm-icon-wrap">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                              <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                              <line x1="6" y1="1" x2="6" y2="4"></line>
                              <line x1="10" y1="1" x2="10" y2="4"></line>
                              <line x1="14" y1="1" x2="14" y2="4"></line>
                            </svg>
                          </div>
                          <div className="ds-tm-title">Boredom</div>
                        </div>
                      </div>

                      <div className="ds-trigger-modal-footer">
                        <a href="#" className="ds-trigger-modal-skip" onClick={(e) => e.preventDefault()}>Skip for now</a>
                      </div>
                    </div>
                  </div>

                  {/* Card 7: Daily Trend */}
                  <div className="ds-card">
                    <div>
                      <div className="ds-section-title">Daily Trend</div>
                      <div className="ds-label-tag">DAILY TREND</div>
                      <p style={{ fontSize: '0.85rem', color: '#64748b', margin: '0 0 16px 0', fontFamily: "'Inter', sans-serif" }}>
                        Your line vs. your daily cap.
                      </p>
                    </div>

                    <div style={{ width: '100%', padding: '10px 0', flex: '1 1 auto', display: 'flex', alignItems: 'center' }}>
                      <svg viewBox="0 0 280 155" style={{ width: '100%', height: 'auto', overflow: 'visible' }}>
                        <defs>
                          <linearGradient id="dsTrendGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#0019e6" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#0019e6" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>

                        {/* Horizontal Grid lines */}
                        <line x1="38" y1="28" x2="272" y2="28" stroke="rgba(10, 17, 40, 0.05)" strokeWidth="1" strokeDasharray="3,3" />
                        <line x1="38" y1="56" x2="272" y2="56" stroke="rgba(10, 17, 40, 0.05)" strokeWidth="1" strokeDasharray="3,3" />
                        <line x1="38" y1="84" x2="272" y2="84" stroke="rgba(10, 17, 40, 0.05)" strokeWidth="1" strokeDasharray="3,3" />
                        <line x1="38" y1="112" x2="272" y2="112" stroke="rgba(10, 17, 40, 0.05)" strokeWidth="1" strokeDasharray="3,3" />
                        <line x1="38" y1="140" x2="272" y2="140" stroke="rgba(10, 17, 40, 0.12)" strokeWidth="1" />

                        {/* Y-Axis Labels */}
                        <text x="22" y="31" fill="#64748b" fontSize="11px" fontFamily="'Inter', sans-serif" textAnchor="end">8</text>
                        <text x="22" y="59" fill="#64748b" fontSize="11px" fontFamily="'Inter', sans-serif" textAnchor="end">6</text>
                        <text x="22" y="87" fill="#64748b" fontSize="11px" fontFamily="'Inter', sans-serif" textAnchor="end">4</text>
                        <text x="22" y="115" fill="#64748b" fontSize="11px" fontFamily="'Inter', sans-serif" textAnchor="end">2</text>
                        <text x="22" y="143" fill="#64748b" fontSize="11px" fontFamily="'Inter', sans-serif" textAnchor="end">0</text>

                        {/* Green Dashed Cap Line */}
                        <path d="M 40 42 L 116 42 L 154 56 L 268 56" fill="none" stroke="#2eb868" strokeWidth="2" strokeDasharray="3,3" strokeLinecap="round" />

                        {/* Blue Gradient Area Fill */}
                        <path d="M 40 70 C 58 50, 60 42, 78 42 C 96 42, 98 56, 116 56 C 134 56, 136 70, 154 70 L 192 70 C 210 70, 212 56, 230 56 C 248 56, 250 70, 268 70 L 268 140 L 40 140 Z" fill="url(#dsTrendGradient)" />

                        {/* Blue Curve Trend Line */}
                        <path d="M 40 70 C 58 50, 60 42, 78 42 C 96 42, 98 56, 116 56 C 134 56, 136 70, 154 70 L 192 70 C 210 70, 212 56, 230 56 C 248 56, 250 70, 268 70" fill="none" stroke="#0019e6" strokeWidth="3" strokeLinecap="round" />

                        {/* Data Point Circles with White Halo */}
                        <circle cx="40" cy="70" r="5" fill="#0019e6" stroke="#ffffff" strokeWidth="2.5" />
                        <circle cx="78" cy="42" r="5" fill="#0019e6" stroke="#ffffff" strokeWidth="2.5" />
                        <circle cx="116" cy="56" r="5" fill="#0019e6" stroke="#ffffff" strokeWidth="2.5" />
                        <circle cx="154" cy="70" r="5" fill="#0019e6" stroke="#ffffff" strokeWidth="2.5" />
                        <circle cx="192" cy="70" r="5" fill="#0019e6" stroke="#ffffff" strokeWidth="2.5" />
                        <circle cx="230" cy="56" r="5" fill="#0019e6" stroke="#ffffff" strokeWidth="2.5" />
                        <circle cx="268" cy="70" r="5" fill="#0019e6" stroke="#ffffff" strokeWidth="2.5" />
                      </svg>
                    </div>
                  </div>

                </div>

                {/* COLUMN 3 */}
                <div className="ds-column">
                  
                  {/* Card 8: Iconography */}
                  <div className="ds-card">
                    <div className="ds-section-title">Iconography</div>
                    <div className="ds-icon-grid">
                      <div className="ds-icon-box">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0019e6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                          <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        <span className="ds-icon-name">Home</span>
                      </div>
                      <div className="ds-icon-box">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0019e6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                          <line x1="16" x2="16" y1="2" y2="6"></line>
                          <line x1="8" x2="8" y1="2" y2="6"></line>
                          <line x1="3" x2="21" y1="10" y2="10"></line>
                        </svg>
                        <span className="ds-icon-name">Log</span>
                      </div>
                      <div className="ds-icon-box">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0019e6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 3v18h18"></path>
                          <path d="M18 17V9"></path>
                          <path d="M13 17V5"></path>
                          <path d="M8 17v-3"></path>
                        </svg>
                        <span className="ds-icon-name">Insights</span>
                      </div>
                      <div className="ds-icon-box">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0019e6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                          <path d="M5 3v4"></path>
                          <path d="M19 17v4"></path>
                          <path d="M3 5h4"></path>
                          <path d="M17 19h4"></path>
                        </svg>
                        <span className="ds-icon-name">Toolkit</span>
                      </div>
                      <div className="ds-icon-box">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0019e6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span className="ds-icon-name">Profile</span>
                      </div>
                      <div className="ds-icon-box">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0019e6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 17c1.38 0 2.5-1.12 2.5-2.5 0-.61-.22-1.17-.6-1.6L12 11.5l-1.4 1.4c-.38.43-.6.99-.6 1.6z"></path>
                          <path d="M12 2c1.4 2.8 2.8 4.2 4.2 7 1.4 2.8 1.4 5.6 0 8.4-1.4 2.8-4.2 4.2-7 4.2s-5.6-1.4-7-4.2c-1.4-2.8-1.4-5.6 0-8.4 1.4-2.8 4.2-5.6 9.8-7z"></path>
                        </svg>
                        <span className="ds-icon-name">Ember</span>
                      </div>
                      <div className="ds-icon-box">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0019e6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 12H2v4h16v-4z"></path>
                          <path d="M22 12v4"></path>
                          <path d="M7 12v4"></path>
                          <path d="M18 8c0-2.5-2-2.5-2-5"></path>
                          <path d="M22 8c0-2.5-2-2.5-2-5"></path>
                        </svg>
                        <span className="ds-icon-name">Cigarette</span>
                      </div>
                      <div className="ds-icon-box">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0019e6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                        </svg>
                        <span className="ds-icon-name">Health</span>
                      </div>
                      <div className="ds-icon-box">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0019e6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                          <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                          <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                        </svg>
                        <span className="ds-icon-name">Wallet</span>
                      </div>
                      <div className="ds-icon-box">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0019e6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path>
                          <path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path>
                          <path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path>
                        </svg>
                        <span className="ds-icon-name">Breathe</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 9: Button States (Desktop & Mobile Only) */}
                  <div className="ds-card ds-card-desktop-button-states">
                    <div className="ds-section-title">Button States</div>
                    <div className="ds-buttons-layout">
                      <div className="ds-btn-state-grid">
                        <div></div>
                        <div className="ds-btn-header">Normal</div>
                        <div className="ds-btn-header">Hover</div>
                        <div className="ds-btn-header">Clicked</div>
                        
                        <div className="ds-btn-row-label">Primary</div>
                        <div><button className="ds-btn-state ds-btn-primary">I beat it</button></div>
                        <div><button className="ds-btn-state ds-btn-primary hover">I beat it</button></div>
                        <div><button className="ds-btn-state ds-btn-primary active">I beat it</button></div>

                        <div className="ds-btn-row-label">Outline</div>
                        <div><button className="ds-btn-state ds-btn-outline">i smoked</button></div>
                        <div><button className="ds-btn-state ds-btn-outline hover">i smoked</button></div>
                        <div><button className="ds-btn-state ds-btn-outline active">i smoked</button></div>
                      </div>
                    </div>
                  </div>

                  {/* Card 10: Interactive Element */}
                  <div className="ds-card">
                    <div className="ds-section-title">Interactive Element</div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', textAlign: 'left' }}>
                        <div style={{ padding: '6px', background: 'rgba(0, 25, 230, 0.08)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0019e6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path>
                            <path d="M9.6 4.6A2 2 0 1 1 11 8H2"></path>
                            <path d="M12.6 19.4A2 2 0 1 0 14 16H2"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 style={{ fontFamily: "'Quicksand', sans-serif", fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '0 0 4px 0' }}>Box breathing</h3>
                          <p style={{ fontSize: '11.5px', color: '#475569', margin: '0', lineHeight: '1.4', textAlign: 'left' }}>In 4 · hold 4 · out 4 · hold 4. Calms the nervous system in under a minute.</p>
                        </div>
                      </div>
                      
                      <div className={`ds-breathing-module ${isBreathing ? 'active' : ''}`} id="dsBreathingBox" style={{ minHeight: '180px' }}>
                        <div className="ds-breathing-bg-glow"></div>
                        <div className="ds-breathing-circle-outer">
                          <div className="ds-breathing-squircle-inner" id="dsBreathingText">{breathText}</div>
                        </div>
                      </div>
                      <p className="ds-breathing-hint" style={{ marginBottom: '10px' }}>Match your breath to the glow.</p>
                      <button className={`ds-breathing-toggle-btn ${isBreathing ? 'active' : ''}`} onClick={() => setIsBreathing(!isBreathing)}>
                        {isBreathing ? 'Stop' : 'Start Box Breathing'}
                      </button>
                    </div>
                  </div>

                  {/* Card 11: Counters and Progress Bars */}
                  <div className="ds-card" style={{ paddingBottom: '32px' }}>
                    <div>
                      <div className="ds-section-title">Counters and Progress Bars</div>
                      <div className="ds-specimen-label" style={{ marginBottom: '14px' }}>Active Consumption Counter Dial</div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '18px 0 24px 0', borderBottom: '1px dashed rgba(10, 17, 40, 0.08)', marginBottom: '24px' }}>
                        <div style={{ position: 'relative', width: '148px', height: '148px' }}>
                          <svg viewBox="0 0 140 140" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                            <circle cx="70" cy="70" r="58" stroke="rgba(10, 17, 40, 0.06)" strokeWidth="10" fill="transparent"></circle>
                            <circle cx="70" cy="70" r="58" stroke="#0019e6" strokeWidth="10" fill="transparent" strokeDasharray="364.4" strokeDashoffset="60.7" strokeLinecap="round"></circle>
                          </svg>
                          <div style={{ position: 'absolute', top: '0', left: '0', right: '0', bottom: '0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif" }}>
                            <span style={{ fontSize: '40px', fontWeight: '700', color: '#0a1128', lineHeight: '1' }}>5</span>
                            <span style={{ fontSize: '11px', fontWeight: '600', color: '#64748b', marginTop: '4px', letterSpacing: '0.02em' }}>of 6 today</span>
                          </div>
                        </div>
                        <p style={{ fontSize: '12px', fontWeight: '600', color: '#475569', margin: '18px 0 0 0', fontFamily: "'Inter', sans-serif", textAlign: 'center' }}>
                          1 left in your envelope today.
                        </p>
                      </div>
                    </div>

                    <div className="ds-progress-links-group" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <div className="ds-progress-item">
                        <div className="ds-label-tag">Progress Bar Steps</div>
                        <div className="ds-stepper" style={{ marginTop: '8px' }}>
                          <div className="ds-step completed">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </div>
                          <div className="ds-step-line completed"></div>
                          <div className="ds-step active">2</div>
                          <div className="ds-step-line"></div>
                          <div className="ds-step">3</div>
                        </div>
                      </div>
                      <div className="ds-progress-item">
                        <div className="ds-label-tag">Line Progress Indicator (Taper Progress)</div>
                        <div className="ds-line-progress-bar" style={{ marginTop: '8px' }}>
                          <div className="ds-line-progress-fill" style={{ width: '65%' }}></div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#64748b', marginTop: '6px', fontWeight: '600' }}>
                          <span>6.5 cigs/day</span>
                          <span>Cap: 10 cigs</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div></div>
          </div>
        </section>

        {/* Chapter 5: The Simulator Mockup Reveal */}
        <section className="story-chapter chapter-mockup-pin">
          <div className="container mockup-reveal-grid">
            <div className="mockup-reveal-info">
              <span className="mono brand-accent-color">05 / THE INTERACTIVE PROTOTYPE</span>
              <h2>Experience the Prototype</h2>
              <p>Play with the live, working mobile simulator. Track your smoke-free days, click the menu or action buttons, and test the logging mechanics in real-time.</p>
              <div className="cta-row" style={{ marginTop: 'var(--space-md)' }}>
                <a href="/Projects/emberquit.html" onClick={handleOpenFullscreen} target="_blank" rel="noreferrer" className="btn-pop btn-pop-primary">Open Fullscreen ↗</a>
              </div>
            </div>
            <div className="mockup-reveal-viewport-container">
              <div className="revealed-device-wrapper">
                <div className="iphone13-mockup-wrapper zoomed-mockup">
                  <img className="iphone13-frame-img" src="/project-details/img/iphone13_frame.png" alt="iPhone 13 Mockup Frame" />
                  <div className="phone-viewport">
                    <iframe className="zoomed-iframe" src="/Projects/emberquit.html?skipOnboarding=true" title="Emberquit Live Prototype" width="100%" height="100%"></iframe>
                    <div className="viewport-mask"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Toast Element */}
      <div className={`ds-copy-toast ${showToast ? 'show' : ''}`}>{toastMessage}</div>

      {/* Full-Width Project Footer (Matching Resume Page) */}
      <footer className="no-print project-site-footer">
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-md)' }}>
          <span className="mono" style={{ fontSize: '0.75rem', color: '#0a1128', letterSpacing: '0.05em' }}>© 2026 SHREYA KULKARNI. ALL RIGHTS RESERVED.</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Link to="/project-details/honee" className="mono" style={{ fontSize: '0.75rem', color: '#0a1128', textDecoration: 'none', fontWeight: '600' }}>← HONÉE</Link>
            <span className="mono" style={{ fontSize: '0.75rem', color: '#0a1128', opacity: 0.3 }}>|</span>
            <Link to="/project-details/restease" className="mono" style={{ fontSize: '0.75rem', color: '#0a1128', textDecoration: 'none', fontWeight: '600' }}>RESTEASE →</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
