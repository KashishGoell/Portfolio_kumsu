// ╔══════════════════════════════════════════════════════════════╗
// ║                        main.js                               ║
// ║   Reads PORTFOLIO from data.js and builds the entire site.   ║
// ╚══════════════════════════════════════════════════════════════╝

document.addEventListener('DOMContentLoaded', () => {

  // ════════════════════════════════════════════════════════════
  // 1. POPULATE SITE FROM DATA
  // ════════════════════════════════════════════════════════════

  const D = PORTFOLIO; // shorthand

  // ── Meta / title ──
  document.title = `Portfolio — ${D.name}`;

  // ── Navbar ──
  document.getElementById('nav-logo').textContent   = D.logoText;
  document.getElementById('nav-cta-text').textContent = D.hero.ctaText;

  // ── Hero ──
  document.getElementById('hero-badge-text').textContent  = D.hero.badge;
  document.getElementById('hero-heading').textContent     = D.hero.heading;
  document.getElementById('hero-subtitle').textContent    = D.hero.subtitle;
  document.getElementById('hero-cta').textContent         = D.hero.ctaText;
  document.getElementById('hero-cta').href                = D.hero.ctaLink;

  // ── About — photo or placeholder ──
  const photoEl       = document.getElementById('about-photo');
  const placeholderEl = document.getElementById('about-placeholder');
  if (D.about.photo) {
    photoEl.src = D.about.photo;
    photoEl.style.display = 'block';
    placeholderEl.style.display = 'none';
  } else {
    placeholderEl.textContent = D.about.initials;
    photoEl.style.display = 'none';
  }

  document.getElementById('about-quote').textContent   = `"${D.about.quote}" — ${D.about.quoteBy}`;
  const bioEl = document.getElementById('about-bio');
  bioEl.innerHTML = D.about.bio.map(p => `<p class="section-sub" style="margin-top:16px">${p}</p>`).join('');

  const statsEl = document.getElementById('about-stats');
  statsEl.innerHTML = D.about.stats.map(s => `
    <div class="stat">
      <span class="stat-num">${s.num}</span>
      <span class="stat-label">${s.label}</span>
    </div>`).join('');

  // ── Projects ──
  const projectGrid = document.getElementById('project-grid');
  projectGrid.innerHTML = D.projects.map((p, i) => `
    <div class="project-card reveal" style="transition-delay:${i * 0.08}s">
      <div class="project-num">${String(i + 1).padStart(2, '0')}</div>

      ${p.image
        ? `<img src="${p.image}" class="project-img-real" alt="${p.title}" />`
        : `<div class="project-img-placeholder" style="background:${p.imageBg}">${p.imageLabel}</div>`
      }

      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.desc}</p>

      <div class="project-tags">
        ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>

      <div class="project-links">
        ${p.liveUrl    ? `<a href="${p.liveUrl}"    target="_blank" rel="noopener" class="project-link">Live Demo ↗</a>` : ''}
        ${p.githubUrl  ? `<a href="${p.githubUrl}"  target="_blank" rel="noopener" class="project-link project-link--ghost">GitHub →</a>` : ''}
      </div>
    </div>`).join('');

  // ── Skills ──
  const skillsGrid = document.getElementById('skills-grid');
  skillsGrid.innerHTML = D.skills.map((g, gi) => `
    <div class="skill-group reveal" style="transition-delay:${gi * 0.1}s">
      <div class="skill-group-title">${g.group}</div>
      ${g.items.map(s => `
        <div class="skill-item">
          <div class="skill-name-row">
            <span class="skill-name">${s.name}</span>
            <span class="skill-pct">${s.pct}%</span>
          </div>
          <div class="skill-bar"><div class="skill-fill" data-w="${s.pct}"></div></div>
        </div>`).join('')}
    </div>`).join('');

  // ── Roles ──
  const rolesGrid = document.getElementById('roles-grid');
  rolesGrid.innerHTML = D.roles.map((r, i) => `
    <div class="role-card reveal" style="transition-delay:${i * 0.08}s">
      <div class="role-icon">${r.icon}</div>
      <h3 class="role-title">${r.title}</h3>
      <p class="role-desc">${r.desc}</p>
    </div>`).join('');

  // ── Experience ──
  const expEl = document.getElementById('timeline-experience');
  expEl.innerHTML = D.experience.map(e => timelineItem(e)).join('');

  // ── Education ──
  const eduEl = document.getElementById('timeline-education');
  eduEl.innerHTML = D.education.map(e => timelineItem(e)).join('');

  // ── Contact ──
  document.getElementById('contact-email').textContent    = D.contact.email;
  document.getElementById('contact-email').href           = `mailto:${D.contact.email}`;
  document.getElementById('contact-location').textContent = D.contact.location;
  document.getElementById('contact-status').textContent   = `● ${D.contact.status}`;

  const socialsEl = document.getElementById('contact-socials');
  socialsEl.innerHTML = D.contact.socials
    .filter(s => s.url)
    .map(s => `<a href="${s.url}" target="_blank" rel="noopener" class="social-link">${s.label} →</a>`)
    .join('');

  // ── Footer ──
  document.getElementById('footer-left').textContent  = D.footer.left;
  document.getElementById('footer-right').textContent = D.footer.right;


  // ════════════════════════════════════════════════════════════
  // 2. CUSTOM CURSOR
  // ════════════════════════════════════════════════════════════

  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = (mx - 6) + 'px';
    cursor.style.top  = (my - 6) + 'px';
  });

  (function animRing() {
    rx += (mx - rx - 20) * 0.12;
    ry += (my - ry - 20) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button')) {
      cursor.style.transform = 'scale(2.5)';
      ring.style.opacity     = '0';
    } else {
      cursor.style.transform = 'scale(1)';
      ring.style.opacity     = '1';
    }
  });


  // ════════════════════════════════════════════════════════════
  // 3. SCROLL REVEAL
  // ════════════════════════════════════════════════════════════

  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.12 });

  const observeAll = () => {
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach(el => revealObserver.observe(el));
  };
  observeAll(); // run once after DOM is built


  // ════════════════════════════════════════════════════════════
  // 4. SKILL BARS — animate on scroll into view
  // ════════════════════════════════════════════════════════════

  const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          setTimeout(() => { bar.style.width = bar.dataset.w + '%'; }, 200);
        });
      }
    });
  }, { threshold: 0.2 });

  // Observe skill groups after they're injected
  document.querySelectorAll('.skill-group').forEach(el => skillObserver.observe(el));


  // ════════════════════════════════════════════════════════════
  // 5. NAVBAR — shrink on scroll
  // ════════════════════════════════════════════════════════════

  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.style.padding    = '14px 120px';
      navbar.style.background = 'rgba(0,0,0,0.85)';
    } else {
      navbar.style.padding    = '20px 120px';
      navbar.style.background = 'rgba(0,0,0,0.4)';
    }
  });


  // ════════════════════════════════════════════════════════════
  // 6. SMOOTH SCROLL for nav links
  // ════════════════════════════════════════════════════════════

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });


  // ════════════════════════════════════════════════════════════
  // 7. CONTACT FORM
  // ════════════════════════════════════════════════════════════

  document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    const btn = document.getElementById('submit-btn');
    btn.textContent = 'Sent ✓';
    btn.style.background = '#00f0ff';
    setTimeout(() => {
      btn.innerHTML = 'Send Message <span class="btn-arrow">→</span>';
      btn.style.background = '';
    }, 3000);
  });


  // ════════════════════════════════════════════════════════════
  // HELPERS
  // ════════════════════════════════════════════════════════════

  function timelineItem({ date, role, company, desc }) {
    return `
      <div class="timeline-item">
        <div class="timeline-date">${date}</div>
        <div class="timeline-role">${role}</div>
        <div class="timeline-company">${company}</div>
        <p class="timeline-desc">${desc}</p>
      </div>`;
  }

});
