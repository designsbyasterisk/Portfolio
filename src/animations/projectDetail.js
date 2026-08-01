/* ==========================================================================
   PROJECT DETAIL PAGE ANIMATIONS & RESPONSIVE IFRAME SCALER (GSAP + SCROLLTRIGGER)
   Handles Split Headers, Card Deck Pinning, Parallax Scaling, and iFrame Resizing
   ========================================================================== */

export function resizeIframes() {
    // 1. Handle Desktop Browser Viewports
    const browserContainers = document.querySelectorAll('.browser-viewport');
    browserContainers.forEach(container => {
        const iframe = container.querySelector('iframe');
        if (!iframe) return;
        
        const containerWidth = container.offsetWidth;
        if (containerWidth === 0) return;
        
        const targetWidth = 1280;
        const targetHeight = 800;
        const scale = containerWidth / targetWidth;
        
        iframe.style.width = `${targetWidth}px`;
        iframe.style.height = `${targetHeight}px`;
        iframe.style.transform = `scale(${scale})`;
        iframe.style.transformOrigin = 'top left';
        iframe.style.border = 'none';
        
        container.style.height = `${targetHeight * scale}px`;
    });

    // 2. Handle Mobile Phone Viewports
    const phoneContainers = document.querySelectorAll('.phone-viewport');
    phoneContainers.forEach(container => {
        const iframe = container.querySelector('iframe');
        if (!iframe) return;
        
        if (iframe.classList.contains('zoomed-iframe')) {
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.transform = 'none';
            iframe.style.border = 'none';
            return;
        }
        
        const containerWidth = container.offsetWidth;
        if (containerWidth === 0) return;
        
        const targetWidth = 375;
        const containerHeight = container.offsetHeight;
        let targetHeight = 812;
        if (containerHeight > 0) {
            targetHeight = Math.round(targetWidth * (containerHeight / containerWidth));
        }
        const scale = containerWidth / targetWidth;
        
        iframe.style.width = `${targetWidth}px`;
        iframe.style.height = `${targetHeight}px`;
        iframe.style.transform = `scale(${scale})`;
        iframe.style.transformOrigin = 'top left';
        iframe.style.border = 'none';
    });

    // 3. Handle iPad Viewports
    const ipadViewports = document.querySelectorAll('.ipad-viewport');
    ipadViewports.forEach(container => {
        const iframe = container.querySelector('iframe');
        if (!iframe) return;
        
        const containerWidth = container.offsetWidth;
        if (containerWidth === 0) return;
        
        let targetWidth = 1440;
        let targetHeight = 1000;
        if (container.dataset.targetWidth) {
            targetWidth = parseInt(container.dataset.targetWidth, 10);
        }
        if (container.dataset.targetHeight) {
            targetHeight = parseInt(container.dataset.targetHeight, 10);
        }
        const scale = containerWidth / targetWidth;
        const computedHeight = container.offsetHeight > 0 ? (container.offsetHeight / scale) : targetHeight;
        
        iframe.style.width = `${targetWidth}px`;
        iframe.style.height = `${computedHeight}px`;
        iframe.style.transform = `scale(${scale})`;
        iframe.style.transformOrigin = 'top left';
        iframe.style.border = 'none';
    });

    // 4. Handle Wireframe Grid Viewports
    const wireframeContainers = document.querySelectorAll('.wireframe-iframe-wrapper');
    wireframeContainers.forEach(container => {
        const iframe = container.querySelector('iframe');
        if (!iframe) return;
        
        const containerWidth = container.offsetWidth;
        if (containerWidth === 0) return;
        
        const targetWidth = 760;
        const targetHeight = 580;
        
        if (containerWidth < targetWidth) {
            const scale = containerWidth / targetWidth;
            iframe.style.width = `${targetWidth}px`;
            iframe.style.height = `${targetHeight}px`;
            iframe.style.transform = `scale(${scale})`;
            iframe.style.transformOrigin = 'top center';
            iframe.style.border = 'none';
            container.style.height = `${targetHeight * scale}px`;
        } else {
            iframe.style.width = `${targetWidth}px`;
            iframe.style.height = `${targetHeight}px`;
            iframe.style.transform = 'none';
            iframe.style.transformOrigin = 'top center';
            iframe.style.border = 'none';
            container.style.height = `${targetHeight}px`;
        }
    });
}

export function syncPrototypeIframeScale() {
    document.querySelectorAll('.iphone13-mockup-wrapper, .restease-mockup-wrapper').forEach(wrapper => {
        const currentWidth = wrapper.getBoundingClientRect().width;
        if (!currentWidth || currentWidth === 0) return;
        const scaleRatio = currentWidth / 400;
        const iframe = wrapper.querySelector('iframe');
        if (iframe) {
            if (scaleRatio < 0.999) {
                const inversePct = (100 / scaleRatio).toFixed(3);
                iframe.style.width = inversePct + '%';
                iframe.style.height = inversePct + '%';
                iframe.style.transform = 'scale(' + scaleRatio.toFixed(4) + ')';
                iframe.style.transformOrigin = 'top left';
            } else {
                iframe.style.width = '100%';
                iframe.style.height = '100%';
                iframe.style.transform = 'none';
            }
        }
    });
}

export function initProjectDetailAnimations(gsap, ScrollTrigger) {
    resizeIframes();
    syncPrototypeIframeScale();

    // Helper for Hex to RGB
    function hexToRgb(hex) {
        if (!hex || typeof hex !== 'string') return "255, 255, 255";
        let c = hex.startsWith('#') ? hex.substring(1) : hex;
        if (c.length === 3) {
            c = c[0]+c[0]+c[1]+c[1]+c[2]+c[2];
        }
        const r = parseInt(c.substring(0, 2), 16);
        const g = parseInt(c.substring(2, 4), 16);
        const b = parseInt(c.substring(4, 6), 16);
        return `${r}, ${g}, ${b}`;
    }

    // A. Header Text Reveal Animation (gsap-split-header)
    const splitHeader = document.querySelector('.gsap-split-header');
    if (splitHeader && !splitHeader.dataset.animated) {
        splitHeader.dataset.animated = "true";
        const text = splitHeader.textContent.trim();
        splitHeader.textContent = '';
        splitHeader.style.overflow = 'hidden';
        splitHeader.style.display = 'block';

        const words = text.split(' ');
        words.forEach(word => {
            const wordSpan = document.createElement('span');
            wordSpan.style.display = 'inline-block';
            wordSpan.style.overflow = 'hidden';
            wordSpan.style.verticalAlign = 'bottom';
            wordSpan.style.marginRight = '0.22em';

            const charSpan = document.createElement('span');
            charSpan.textContent = word;
            charSpan.style.display = 'inline-block';
            charSpan.style.transform = 'translateY(110%)';
            charSpan.style.opacity = '0';
            
            wordSpan.appendChild(charSpan);
            splitHeader.appendChild(wordSpan);
        });

        gsap.to(splitHeader.querySelectorAll('span span'), {
            y: '0%',
            opacity: 1,
            duration: 0.75,
            stagger: 0.08,
            ease: "power3.out",
            delay: 0.15
        });
    }

    // B. Hero Parallax & Fade
    if (document.querySelector('.chapter-hero')) {
        gsap.to(".chapter-hero-bg", {
            scale: 1.15,
            ease: "none",
            scrollTrigger: {
                trigger: ".chapter-hero",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

        gsap.to(".hero-content", {
            y: -100,
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: ".chapter-hero",
                start: "top top",
                end: "bottom 20%",
                scrub: true
            }
        });
    }

    // C. Responsive Layouts & Cinematic Pinning (Desktop: min-width: 993px)
    let mm = gsap.matchMedia();

    mm.add("(min-width: 993px) and (min-aspect-ratio: 1.1/1)", () => {
        // 1. Chapter 2: Split Narrative Lock & Metric Card Zoom
        if (document.querySelector('.chapter-narrative')) {
            const narrativeTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".chapter-narrative",
                    start: "top top",
                    end: "+=100%",
                    pin: true,
                    scrub: true,
                    anticipatePin: 1
                }
            });

            narrativeTl.fromTo(".narrative-content-left", 
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 0.4 }
            )
            .fromTo(".chapter-narrative .bento-card",
                { scale: 0.35, opacity: 0, rotationY: -45 },
                { scale: 1, opacity: 1, rotationY: 0, duration: 0.6, ease: "power2.out" },
                "-=0.2"
            )
            .fromTo(".brand-metric-card",
                { scale: 0.35, opacity: 0, rotationY: -45 },
                { scale: 1, opacity: 1, rotationY: 0, duration: 0.6, ease: "power2.out" },
                "-=0.3"
            );
        }

        // 2. Chapter Deck Pin (Vertical Stacked Card Deck Reveal)
        const deckSection = document.querySelector('.chapter-deck-pin');
        if (deckSection) {
            const deckCards = deckSection.querySelectorAll('.deck-card');
            if (deckCards.length > 0) {
                const deckTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: deckSection,
                        start: "top top",
                        end: () => `+=${deckCards.length * 100}%`,
                        pin: true,
                        scrub: true,
                        invalidateOnRefresh: true,
                        anticipatePin: 1
                    }
                });

                // Set initial overlapping layers
                deckCards.forEach((card, idx) => {
                    gsap.set(card, {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        y: 0,
                        opacity: 1,
                        scale: idx === 0 ? 1 : (idx === 1 ? 0.95 : 0.9),
                        zIndex: 50 - idx
                    });
                });

                // Animate cards sequentially on scroll progress
                deckCards.forEach((card, idx) => {
                    if (idx < deckCards.length - 1) {
                        const slideDir = idx % 2 === 0 ? "-120%" : "120%";
                        const rotDir = idx % 2 === 0 ? -8 : 8;
                        deckTl.to(card, {
                            x: slideDir,
                            rotation: rotDir,
                            duration: 1,
                            ease: "power2.inOut"
                        });
                        deckTl.to(deckCards[idx + 1], {
                            scale: 1,
                            duration: 1,
                            ease: "power2.inOut"
                        }, "-=1");

                        if (deckCards[idx + 2]) {
                            deckTl.to(deckCards[idx + 2], {
                                scale: 0.95,
                                duration: 1,
                                ease: "power2.inOut"
                            }, "-=1");
                        }
                    }
                });
            }
        }

        // 3. Horizontal Gallery Showcase
        const gallerySections = document.querySelectorAll('.chapter-gallery-pin');
        gallerySections.forEach((gallerySection) => {
            const galleryTrack = gallerySection.querySelector('.gallery-horizontal-track');
            if (!galleryTrack) return;

            const getScrollAmount = () => {
                let trackWidth = galleryTrack.scrollWidth;
                let viewportWidth = window.innerWidth;
                return -(trackWidth - viewportWidth);
            };

            const horizontalTween = gsap.to(galleryTrack, {
                x: () => getScrollAmount(),
                ease: "none",
                scrollTrigger: {
                    trigger: gallerySection,
                    start: "top top",
                    end: () => `+=${galleryTrack.scrollWidth - window.innerWidth + 400}`,
                    pin: true,
                    scrub: true,
                    invalidateOnRefresh: true,
                    anticipatePin: 1
                }
            });

            const slideCards = galleryTrack.querySelectorAll('.gallery-slide-card');
            slideCards.forEach((card) => {
                const img = card.querySelector('.slide-image-wrapper img');
                const wrapper = card.querySelector('.slide-image-wrapper');
                if (img && wrapper) {
                    const isMockup = img.src.includes('mockup') || wrapper.classList.contains('wide-wrapper');
                    const startScale = isMockup ? 1.03 : 1.12;
                    gsap.fromTo(img,
                        { scale: startScale },
                        {
                            scale: 1.0,
                            ease: "power1.out",
                            scrollTrigger: {
                                trigger: card,
                                containerAnimation: horizontalTween,
                                start: "left 90%",
                                end: "left 40%",
                                scrub: true
                            }
                        }
                    );
                }

                const cardTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: card,
                        containerAnimation: horizontalTween,
                        start: "left 98%",
                        end: "right 2%",
                        scrub: true,
                        invalidateOnRefresh: true
                    }
                });

                cardTl.fromTo(card,
                    { scale: 0.88, opacity: 0.45, rotation: 1.5, transformOrigin: "center center" },
                    { scale: 1.0, opacity: 1, rotation: 0, ease: "power1.out", duration: 0.5 }
                ).to(card,
                    { scale: 0.88, opacity: 0.45, rotation: -1.5, ease: "power1.in", duration: 0.5 }
                );
            });
        });

        // 4. Interactive Phone Mockup Reveal (chapter-mockup-pin)
        const mockupSection = document.querySelector('.chapter-mockup-pin');
        const phoneMockup = document.querySelector('.iphone13-mockup-wrapper.zoomed-mockup');
        const zoomedIframe = document.querySelector('.zoomed-iframe');

        if (mockupSection && phoneMockup) {
            gsap.set(phoneMockup, {
                scale: 0.35,
                rotation: -10,
                y: 0,
                transformOrigin: "center center"
            });

            const updateMockupSize = () => {
                const viewportHeight = window.innerHeight;
                const viewportWidth = window.innerWidth;
                const headerElement = document.querySelector('.floating-header, .project-sticky-header');
                const headerHeight = headerElement ? headerElement.offsetHeight : 70;
                const visibleHeight = viewportHeight - headerHeight;
                
                const targetHeight = visibleHeight * 0.82;
                const targetWidth = viewportWidth * 0.82;
                
                const finalSize = Math.min(targetHeight, targetWidth, 964);
                phoneMockup.style.setProperty('--mockup-size', `${Math.round(finalSize)}px`);
            };
            
            updateMockupSize();

            const getShiftY = () => {
                const headerElement = document.querySelector('.floating-header, .project-sticky-header');
                const headerHeight = headerElement ? headerElement.offsetHeight : 70;
                return Math.round(headerHeight / 2);
            };

            let scrollTimeout = null;

            const mockupTl = gsap.timeline({
                scrollTrigger: {
                    id: "mockup-scroll-trigger",
                    trigger: mockupSection,
                    start: "top top",
                    end: "+=150%",
                    pin: true,
                    scrub: true,
                    invalidateOnRefresh: true,
                    anticipatePin: 1,
                    onUpdate: (self) => {
                        if (zoomedIframe) zoomedIframe.style.pointerEvents = 'none';
                        if (scrollTimeout) clearTimeout(scrollTimeout);
                        scrollTimeout = setTimeout(() => {
                            if (self.progress >= 0.65) {
                                if (zoomedIframe) zoomedIframe.style.pointerEvents = 'auto';
                            }
                        }, 100);
                    }
                }
            });

            mockupTl.to(phoneMockup, {
                scale: 1.0,
                y: () => getShiftY(),
                rotation: 0,
                duration: 0.7,
                ease: "power1.out",
                force3D: false
            });
        }
    });

    // Mobile layout resets (< 992px)
    mm.add("(max-width: 992px)", () => {
        const deckCards = document.querySelectorAll('.chapter-deck-pin .deck-card');
        deckCards.forEach(card => {
            gsap.set(card, {
                position: "",
                top: "",
                left: "",
                width: "",
                height: "",
                y: "",
                opacity: "",
                scale: "",
                zIndex: "",
                x: "",
                rotation: ""
            });
        });

        const phoneMockup = document.querySelector('.iphone13-mockup-wrapper.zoomed-mockup');
        if (phoneMockup) {
            gsap.set(phoneMockup, {
                scale: "",
                rotation: "",
                y: "",
                willChange: ""
            });
        }

        const zoomedIframe = document.querySelector('.zoomed-iframe');
        if (zoomedIframe) {
            zoomedIframe.style.pointerEvents = 'auto';
        }
    });

    // Handle breathing widget if present
    const breathingCircle = document.querySelector('.breathing-circle-widget');
    const breathingText = document.querySelector('.breathing-text');
    const breathingBtn = document.querySelector('.btn-breathing-control');
    
    if (breathingCircle && breathingText && breathingBtn && !breathingBtn.dataset.bound) {
        breathingBtn.dataset.bound = "true";
        let breathingInterval = null;
        let breathingActive = false;
        let step = 0;
        
        const brandAccent = document.body.style.getPropertyValue('--brand-accent') || '#316dd5';
        const rgbAccent = hexToRgb(brandAccent);
        const phases = [
            { text: "Inhale", scale: 1.5, bg: `radial-gradient(circle, rgba(${rgbAccent}, 0.6) 0%, rgba(${rgbAccent}, 0.15) 75%)` },
            { text: "Hold", scale: 1.5, bg: `radial-gradient(circle, rgba(${rgbAccent}, 0.6) 0%, rgba(${rgbAccent}, 0.15) 75%)` },
            { text: "Exhale", scale: 1.0, bg: `radial-gradient(circle, rgba(${rgbAccent}, 0.3) 0%, rgba(${rgbAccent}, 0.05) 70%)` },
            { text: "Hold", scale: 1.0, bg: `radial-gradient(circle, rgba(${rgbAccent}, 0.3) 0%, rgba(${rgbAccent}, 0.05) 70%)` }
        ];

        function runBreathingStep() {
            const phase = phases[step];
            breathingText.textContent = phase.text;
            gsap.to(breathingCircle, {
                scale: phase.scale,
                background: phase.bg,
                duration: 4.0,
                ease: "power1.inOut"
            });
            step = (step + 1) % 4;
        }

        function startBreathing() {
            breathingActive = true;
            breathingBtn.textContent = "Stop Guide";
            breathingBtn.style.backgroundColor = "#dc2626";
            breathingBtn.style.color = "#ffffff";
            step = 0;
            runBreathingStep();
            breathingInterval = setInterval(runBreathingStep, 4000);
        }

        function stopBreathing() {
            breathingActive = false;
            clearInterval(breathingInterval);
            breathingBtn.textContent = "Start Guide";
            breathingBtn.style.backgroundColor = brandAccent;
            breathingBtn.style.color = "#ffffff";
            breathingText.textContent = "Inhale";
            gsap.to(breathingCircle, {
                scale: 1.0,
                background: `radial-gradient(circle, rgba(${rgbAccent}, 0.4) 0%, rgba(${rgbAccent}, 0.1) 70%)`,
                duration: 0.8,
                ease: "power2.out"
            });
        }

        breathingBtn.addEventListener('click', () => {
            if (breathingActive) {
                stopBreathing();
            } else {
                startBreathing();
            }
        });
    }
}
