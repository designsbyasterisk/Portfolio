export const projectsData = [
  {
    id: "emberquit",
    slug: "emberquit",
    num: "01",
    title: "EMBERQUIT",
    subtitle: "Behavioral Coaching Companion for Tobacco Cessation",
    badge: "MOBILE APP",
    category: "Mobile App",
    tags: ["PRODUCT DESIGN", "BEHAVIORAL DESIGN", "MOBILE UX"],
    heroImage: "/project-details/img/phone_mockup_1_44kb.webp",
    thumbnail: "/project-details/img/phone_mockup_1_44kb.webp",
    detailedMockup: "/project-details/img/emberquit_detailed_mockup.png",
    floatingMockup: "/project-details/img/emberquit_floating_mockup.png",
    overview: "Emberquit is a behavioral companion designed to empower individuals on their journey to quit smoking and vaping through positive reinforcement, craving logging, habit tracking, and biometric recovery milestones.",
    stats: [
      { label: "TARGET USERS", value: "Young Adults & Habit Seekers" },
      { label: "CORE FOCUS", value: "Behavioral Replacement & Micro-interventions" },
      { label: "DESIGN SYSTEM", value: "Warm Ember Palette & Calming UI" }
    ],
    problemStatement: "Quitting nicotine is notoriously difficult due to withdrawal spikes, environmental triggers, and the mental loop of guilt associated with relapse. Traditional apps rely heavily on shame counters (resetting to Day 0 upon slip-up), which often causes users to abandon their quit attempts altogether.",
    solution: "Emberquit introduces compassionate logging, stress-reduction breathing rituals, instant craving displacement tools, and non-punitive progress tracking that focuses on long-term reduction over perfection.",
    keyFeatures: [
      {
        title: "Compassionate Craving Logger",
        description: "Log craving triggers in under 5 seconds with zero judgment, capturing emotional context and environmental cues."
      },
      {
        title: "Guided Breathing & Tactile Rituals",
        description: "Interactive haptic breathing exercises engineered to reduce acute stress during peak nicotine cravings."
      },
      {
        title: "Biometric Recovery Timeline",
        description: "Visualizes health recovery markers like blood oxygen stabilization, lung capacity improvement, and money saved."
      },
      {
        title: "Adaptive Relapse Shield",
        description: "Replaces traditional Day-0 resets with continuous reduction analytics and supportive mental health check-ins."
      }
    ],
    deckCards: [
      {
        title: "Craving Interventions",
        description: "Immediate actions designed to disrupt the impulse-reaction loop when cravings hit.",
        image: "/project-details/img/phone_mockup_1.webp"
      },
      {
        title: "Biometric Milestones",
        description: "Real-time visualization of bodily healing markers and financial savings.",
        image: "/project-details/img/emberquit_hifi_mockup.jpg"
      }
    ],
    demoLink: "/emberquit.html"
  },
  {
    id: "restease",
    slug: "restease",
    num: "02",
    title: "RESTEASE",
    subtitle: "Disaster Response Command & Telemetry System",
    badge: "DISASTER SYSTEM",
    category: "Disaster System",
    tags: ["SYSTEMS DESIGN", "SERVICE DESIGN", "HARDWARE / UX"],
    heroImage: "/project-details/img/restease_44kb.webp",
    thumbnail: "/project-details/img/restease_44kb.webp",
    overview: "An offline-first disaster response command and telemetry system designed for search and rescue operators to coordinate field evacuations, track stretcher vitals, and map debris fields in real-time.",
    stats: [
      { label: "CONTEXT", value: "Post-Disaster Earthquake & Landslide Response" },
      { label: "NETWORK", value: "Mesh Network Vitals Sync (Offline Capable)" },
      { label: "EQUIPMENT", value: "Smart Stretcher & Rescuer HUD Interface" }
    ],
    problemStatement: "During urban collapse or extreme weather disasters, cellular infrastructure fails, rendering standard dispatch systems useless. Search teams waste critical golden-hour time attempting to manually track victim vitals, locate medical evacuation teams, and relay field coordinates through degraded voice radio.",
    solution: "Restease bridges hardware sensors embedded in emergency stretchers with an offline mesh network dashboard, enabling real-time telemetry, victim triage priority, and field unit mapping without relying on cellular internet.",
    keyFeatures: [
      {
        title: "Offline Mesh Network Telemetry",
        description: "Peer-to-peer radio sync relays victim vitals and GPS coordinates back to base stations."
      },
      {
        title: "Smart Stretcher Sensors",
        description: "Monitors heart rate, blood oxygen, and ambient temperature directly from stretcher handles."
      },
      {
        title: "Triage Heatmaps & Route Guidance",
        description: "Dynamic map interface indicating hazardous debris zones and fastest safe extraction pathways."
      },
      {
        title: "One-Touch Casualty Log",
        description: "High-contrast tactile UI optimized for outdoor visibility and single-gloved-hand operation."
      }
    ],
    deckCards: [
      {
        title: "Debris Field Mapping",
        description: "Topographic mapping with mesh node overlays for rescue teams.",
        image: "/project-details/img/landslide_isometric.jpg"
      },
      {
        title: "Telemetry HUD",
        description: "Real-time vitals monitoring panel for incoming field evacuations.",
        image: "/project-details/img/restease_phone_mockup.png"
      }
    ],
    demoLink: "/Projects/restease.html"
  },
  {
    id: "f1_dashboard",
    slug: "f1-dashboard",
    num: "03",
    title: "F1 DASHBOARD",
    subtitle: "Real-Time Formula 1 Telemetry & Teleportation Analytics",
    badge: "WEB APP",
    category: "Web App",
    tags: ["INTERACTION DESIGN", "DATA VISUALIZATION", "DASHBOARD UX"],
    heroImage: "/project-details/img/f1_44kb.webp",
    thumbnail: "/project-details/img/f1_44kb.webp",
    overview: "A live Formula 1 race control dashboard concept plotting real-time speed telemetry curves, tire wear degrade curves, DRS activation zones, and interactive track maps for motorsports strategists.",
    stats: [
      { label: "DATA STREAM", value: "High-Frequency 100Hz Telemetry Feeds" },
      { label: "VISUALS", value: "High-Contrast Dark Mode & Vector Plots" },
      { label: "INTERACTION", value: "Scrubbable Lap Timeline & Delta Comparisons" },
    ],
    problemStatement: "Motorsport broadcasts simplify race data for passive TV viewers, missing out on deep telemetry insights like throttle application, brake point deltas, and micro-sector sector times that race engineers and hardcore fans crave.",
    solution: "The F1 Dashboard presents live lap-by-lap comparison tools, interactive speed vs gear traces, driver gap matrices, and live 2D track position trackers in a high-density, customizable grid workspace.",
    keyFeatures: [
      {
        title: "Driver Telemetry Overlay",
        description: "Side-by-side comparative speed, throttle, and braking traces across any two drivers on track."
      },
      {
        title: "Live GPS Track Map",
        description: "SVG track model updating car positions, DRS status, and sector flag conditions dynamically."
      },
      {
        title: "Tire Degradation Simulator",
        description: "Predictive compound degradation curves estimating pit window strategies."
      },
      {
        title: "Telemetry Scrub Bar",
        description: "Rewind any moment of the Grand Prix to analyze overtaking maneuvers down to 1/100th of a second."
      }
    ],
    deckCards: [
      {
        title: "Live Race Workspace",
        description: "Integrated multi-monitor layout showing driver map and speed deltas.",
        image: "/project-details/img/f1_44kb.webp"
      }
    ],
    demoLink: "/Projects/F1_Dashboard.html"
  },
  {
    id: "honee",
    slug: "honee",
    num: "04",
    title: "HONÉE STOREFRONT",
    subtitle: "Luxury Organic Honey Skincare E-Commerce Ritual",
    badge: "E-COMMERCE",
    category: "E-Commerce",
    tags: ["BRANDING", "VISUAL DESIGN", "E-COMMERCE UX"],
    heroImage: "/project-details/img/honee_44kb.webp",
    thumbnail: "/project-details/img/honee_44kb.webp",
    overview: "A luxury cosmetics storefront reimagining organic honey lipcare and skincare through bespoke rituals, rich typography, tactile interactive cart flows, and sensory storytelling.",
    stats: [
      { label: "BRAND TYPE", value: "Artisanal Organic Beauty & Skincare" },
      { label: "EXPERIENCE", value: "Interactive Ritual Customizer & Tactile Cart" },
      { label: "AESTHETIC", value: "Warm Golden Honey Palette & Glassmorphism" }
    ],
    problemStatement: "Modern beauty storefronts often feel transactional and repetitive, failing to evoke the texture, fragrance, and soothing ritual experience of luxury organic skincare products.",
    solution: "HONÉE blends micro-animations, product texture samplers, custom routine builders, and fluid cart transitions to create an enchanting e-commerce experience that boosts brand storytelling and conversion.",
    keyFeatures: [
      {
        title: "Interactive Skincare Builder",
        description: "Step-by-step quiz matching user skin profiles with personalized honey-infused routine sets."
      },
      {
        title: "Tactile Slide-Out Cart",
        description: "Fluid slide drawer with gift wrap options, free sample selectors, and real-time tier progress."
      },
      {
        title: "Sensory Product Showcase",
        description: "High-resolution texture zoom and ingredient breakdowns highlighting raw honey sourcing."
      },
      {
        title: "Micro-Animation Micro-Interactions",
        description: "Subtle drop-and-glow animations on add-to-cart and subscription toggle controls."
      }
    ],
    deckCards: [
      {
        title: "Luxury Storefront Hero",
        description: "Editorial layout featuring warm lighting and honey jar presentation.",
        image: "/project-details/img/honee_44kb.webp"
      }
    ],
    demoLink: "/Projects/Honee.html"
  }
];
