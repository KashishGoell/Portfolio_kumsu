// ╔══════════════════════════════════════════════════════════════╗
// ║                  YOUR PORTFOLIO DATA FILE                    ║
// ║   Edit ONLY this file to update all content on the site.    ║
// ╚══════════════════════════════════════════════════════════════╝

const PORTFOLIO = {

  // ── SITE META ────────────────────────────────────────────────
  name:       "Kashish Goel",
  title:      "AI & ML Engineer",
  logoText:   "kumsu",
  tagline:    "Engineering clarity. Designing elegance.",

  // ── HERO SECTION ─────────────────────────────────────────────
  hero: {
    badge:    "Available for opportunities from May 2026",
    heading:  "Building AI at the Speed of Thought",
    subtitle: "I design and develop intelligent systems where logic meets aesthetics — from real-time AI pipelines to beautiful, production-grade web experiences.",
    ctaText:  "View My Work",
    ctaLink:  "#projects",
  },

  // ── ABOUT SECTION ────────────────────────────────────────────
  about: {
    photo:    "",
    initials: "KG",

    quote:    "I build technology that works beautifully.",
    quoteBy:  "Steve Jobs",

    bio: [
      "My journey into tech began with curiosity , and quickly turned into craftsmanship. Today, I design and develop digital products where logic meets aesthetics and performance meets simplicity.",
      "Every system I build carries intention: clean architecture, thoughtful design, and measurable results. I'm here to build experiences that last. Not trends. Not templates. Real impact.",
    ],

    stats: [
      { num: "2+",  label: "Years Exp" },
      { num: "20+", label: "Projects"  },
      { num: "∞",   label: "Curiosity" },
    ],
  },

  // ── PROJECTS ─────────────────────────────────────────────────
  projects: [
    {
      title:     "Cognition Arena",
      desc:      "A competitive arena where multiple AI models battle against each other, enabling benchmarking, comparison, and evaluation of model intelligence in real-time.",
      image:     "",
      imageLabel:"AI ARENA",
      imageBg:   "linear-gradient(135deg, #0a0f2a, #1a237e)",
      tags:      ["LLM", "AI Evaluation", "Python"],
      liveUrl:   "https://drive.google.com/file/d/1cAIFK0R8vs-SChCztNkFgJuH0D_POpm2/view?usp=sharing",
      githubUrl: "https://github.com/KashishGoell/Cognition-Arena",
    },
    {
      title:     "AI Hand Energy Network",
      desc:      "A real-time OpenCV-based system that detects hand gestures and visualizes dynamic 'energy power' effects, creating an interactive AI-driven experience.",
      image:     "",
      imageLabel:"HAND POWER",
      imageBg:   "linear-gradient(135deg, #1a0a2e, #3f0d5a)",
      tags:      ["OpenCV", "Computer Vision", "Python"],
      liveUrl:   "https://drive.google.com/file/d/1fgrGI6oN67Fi6eJ5vJ24xyzULl3BhWxB/view?usp=sharing",
      githubUrl: "https://github.com/KashishGoell/AI_Hand_Energy_Network",
    },
    {
      title:     "AURA AI",
      desc:      "A full-stack, voice-enabled personal assistant powered by a local LLM, running completely offline using React, FastAPI, and Ollama.",
      image:     "",
      imageLabel:"AURA AI",
      imageBg:   "linear-gradient(135deg, #0a0f1a, #0d1f33)",
      tags:      ["React", "FastAPI", "Ollama", "LLM", "Voice"],
      liveUrl:   "https://drive.google.com/file/d/1ryimHaBRF5eceYd63ziNBrdhnAT5vTVv/view?usp=sharing",
      githubUrl: "https://github.com/you/aura",
    },
    {
      title:     "Air Menu",
      desc:      "A touchless, gesture-controlled ordering system where you navigate the entire menu using only your fingertip via computer vision.",
      image:     "",
      imageLabel:"AIR MENU",
      imageBg:   "linear-gradient(135deg, #0f1a0a, #1a2e0d)",
      tags:      ["Python", "OpenCV", "ML"],
      liveUrl:   "https://www.linkedin.com/posts/kashishgoell_artificialintelligence-machinelearning-llm-activity-7420526398525698048-wFvl",
      githubUrl: "https://github.com/KashishGoell/AirMenu",
    },
    {
      title:     "Traffic Light Simulation",
      desc:      "An RL agent trained to intelligently optimize traffic light durations, converging to golden timings across 4 phases.",
      image:     "",
      imageLabel:"TRAFFIC RL",
      imageBg:   "linear-gradient(135deg, #1a0a0f, #2e0d1a)",
      tags:      ["Reinforcement Learning", "SUMO", "Python"],
      liveUrl:   "https://www.linkedin.com/posts/kashishgoell_reinforcementlearning-trafficoptimization-activity-7314043407520223234-v7RR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENgbu0BklwVHyNi4inZfmQ0K8IMGDDLdrI",
      githubUrl: "https://github.com/KashishGoell/Traffic_Light_Simulation",
    },
    {
      title:     "DLegal Blanket",
      desc:      "Legal company website helping users navigate legal complexities with confidence, clarity, and strategy.",
      image:     "",
      imageLabel:"DLEGAL",
      imageBg:   "linear-gradient(135deg, #0f0f1a, #1a1a2e)",
      tags:      ["TypeScript", "JavaScript", "CSS"],
      liveUrl:   "https://dlegalblanket.com/",
      githubUrl: "https://github.com/KashishGoell/DLegal_Blanket",
    },
  ],

  // ── SKILLS ───────────────────────────────────────────────────
  skills: [
  {
    group: "AI & Machine Learning",
    items: [
      { name: "Python (NumPy, Pandas)", pct: 95 },
      { name: "Deep Learning (TensorFlow / PyTorch)", pct: 90 },
      { name: "Reinforcement Learning (Q-Learning, DQN)", pct: 95 },
      { name: "Computer Vision (OpenCV, MediaPipe)", pct: 90 },
      { name: "Model Deployment (APIs, FastAPI, Flask)", pct: 92 },
      { name: "Data Processing & Feature Engineering", pct: 90 },
    ],
  },

  {
    group: "Web Development",
    items: [
      { name: "React / Next.js", pct: 85 },
      { name: "Node.js / Express", pct: 88 },
      { name: "TypeScript", pct: 80 },
      { name: "REST APIs / JSON Handling", pct: 92 },
      { name: "Authentication (JWT, Sessions)", pct: 85 },
      { name: "Responsive UI / UX Design", pct: 88 },
    ],
  },

  {
    group: "Mobile Development",
    items: [
      { name: "Flutter (Dart)", pct: 92 },
      { name: "State Management", pct: 85 },
      { name: "API Integration", pct: 90 },
      { name: "Clean UI Design (Dark / Pastel Themes)", pct: 88 },
    ],
  },

  {
    group: "Data, Automation & Systems",
    items: [
      { name: "Automation (N8N, Zapier)", pct: 85 },
      { name: "Web Scraping & RSS Pipelines", pct: 90 },
      { name: "OCR & Document Processing", pct: 88 },
      { name: "Newsletter Systems (Inoreader, AI Pipelines)", pct: 92 },
      { name: "Backend System Design", pct: 85 },
    ],
  },

  {
    group: "Tools & DevOps",
    items: [
      { name: "Git / GitHub", pct: 92 },
      { name: "Docker (Basics)", pct: 75 },
      { name: "Vercel / Netlify", pct: 90 },
      { name: "Firebase / Supabase", pct: 85 },
      { name: "Jupyter / Google Colab", pct: 95 },
    ],
  },
],

  // ── ROLES ────────────────────────────────────────────────────
  roles: [
    {
      icon:  "1.",
      title: "AI / ML Engineer",
      desc:  "Designing intelligent systems using machine learning and deep learning.",
    },
    {
      icon:  "2.",
      title: "Software Engineer",
      desc:  "Engineering scalable, maintainable systems with clean architecture.",
    },
    {
      icon:  "3.",
      title: "Intelligent Systems Engineer",
      desc:  "Building smart, data-driven solutions combining AI and automation.",
    },
    {
      icon:  "4.",
      title: "Technical Lead",
      desc:  "Guiding teams and driving impactful technical decisions.",
    },
  ],

  // ── EXPERIENCE ───────────────────────────────────────────────
  experience: [
     {
    date:    "Mar 2026 — Present",
    role:    "Freelance : AI Developer",
    company: "Iunera GmbH & Co., Germany",
    desc:    "Engineered a modular offline AI pipeline combining OCR and lightweight LLMs to extract structured data from receipts. Addressed real-world challenges like over-extraction and semantic misalignment through prompt optimization and adaptive validation strategies."
  },
  {
    date:    "Mar 2026 — Present",
    role:    "Freelance : AI Automation",
    company: "Haiti Policy, Washington DC",
    desc:    "Developed a scalable news monitoring and analysis pipeline to track Haiti-related developments across governance, security, economy, and international actors. Implemented intelligent filtering and prioritization mechanisms to deliver high-quality, report-ready insights for strategic decision-making."
  },
    {
      date:    "Jan 2026 — Present",
      role:    "AI Intern",
      company: "PIET",
      desc:    "Worked on enterprise-scale AI applications and system design.",
    },
    {
      date:    "Mar 2025 — Apr 2025",
      role:    "Software Engineer Intern",
      company: "Bytes & Watts",
      desc:    "Built custom web solutions and SaaS platforms.",
    },
    {
      date:    "Sep 2024 — Dec 2024",
      role:    "App Developer",
      company: "Indominus Labs",
      desc:    "Developed responsive applications and collaborated with design teams.",
    },
  ],

  // ── EDUCATION ────────────────────────────────────────────────
  education: [
    {
      date:    "2022 — 2026",
      role:    "B.Tech — CSE (AI/ML)",
      company: "Vellore Institute of Technology",
      desc:    "Focused on AI/ML and real-world system design.",
    },
    {
      date:    "2020 — 2022",
      role:    "High School & Intermediate",
      company: "SDVM, Panipat",
      desc:    "Strong foundation in PCM and CS.",
    },
  ],

  // ── CONTACT ──────────────────────────────────────────────────
  contact: {
    email:    "kashish2882005@gmail.com",
    location: "Panipat, Haryana, India",
    status:   "Open to opportunities",

    socials: [
      { label: "GitHub",   url: "https://github.com/KashishGoell" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/kashishgoell/" },
      
    ],
  },

  // ── FOOTER ───────────────────────────────────────────────────
  footer: {
    left:  "© 2026 Kashish Goel. All rights reserved.",
    right: "Built with precision 🚀",
  },
};