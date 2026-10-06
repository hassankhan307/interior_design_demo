/**
 * ==========================================================================
 * ATELIER NOIR — LUXURY INTERIOR DESIGN & ARCHITECTURE STUDIO
 * Interactive Client Demo Script
 * ==========================================================================
 */

// --------------------------------------------------------------------------
// 1. CONFIGURATION & EDITABLE CLIENT SETTINGS (DEMO PLACEHOLDERS)
// --------------------------------------------------------------------------
const STUDIO_CONFIG = {
  studioName: "Atelier Noir",
  tagline: "Spaces Designed Around the Way You Live.",
  // Client WhatsApp Number (digits only, country code included - e.g. 923001234567)
  whatsappNumber: "923001234567",
  email: "contact@ateliernoir-studio.com",
  defaultWhatsAppMessage: "Hello Atelier Noir, I found your luxury interior design portfolio demo and would like to discuss a project."
};

/**
 * Universal WhatsApp Redirection Helper
 * @param {string} customMsg - Optional custom text pre-fill
 */
function triggerWhatsApp(customMsg) {
  const message = customMsg || STUDIO_CONFIG.defaultWhatsAppMessage;
  const encoded = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${STUDIO_CONFIG.whatsappNumber}?text=${encoded}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

// --------------------------------------------------------------------------
// 2. PROJECT CASE STUDY DATABASE (RICH EDITORIAL CONTENT)
// --------------------------------------------------------------------------
const PROJECTS_DATA = {
  p1: {
    id: "p1",
    title: "The Grand Courtyard Villa",
    category: "residential",
    location: "DHA Phase 6, Karachi",
    style: "Contemporary Luxury",
    area: "8,500 Sq. Ft (1,000 Sq. Yds)",
    scope: "Full Architecture & Turnkey Interior",
    timeline: "14 Months",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    overview: "A bespoke residence designed around internal landscaped light-wells, monumental Roman travertine volumes, and seamless double-height glass vistas. The brief was to create an introspective sanctuary shielded from urban noise while celebrating natural daylight, warm acoustics, and generous hosting flow.",
    decisions: [
      "Carved an internal central atrium courtyard to illuminate deep living spaces with filtered daylight.",
      "Engineered bespoke 3.4m floor-to-ceiling smoked oak pivot doors with concealed architectural hardware.",
      "Integrated recessed perimeter linear LED cove lighting with automated sunset scene presets.",
      "Floored all social spaces with continuous monolithic honed Roman Travertine slabs without threshold joints."
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80"
    ],
    materials: [
      "Roman Travertine", "Smoked European Oak", "Hand-Brushed Brass", "Bouclé Textiles", "Acoustic Slats"
    ],
    palette: [
      { name: "Warm Ivory", hex: "#FAF8F5" },
      { name: "Honed Travertine", hex: "#D4C8B5" },
      { name: "Smoked Oak", hex: "#4A3B32" },
      { name: "Antique Brass", hex: "#B8976C" },
      { name: "Charcoal Slate", hex: "#1C1B19" }
    ],
    result: "The completed villa represents an exquisite synthesis of privacy, grandeur, and domestic intimacy. Natural light continuously dances across the textured limestone walls throughout the day, creating an ever-shifting sensory atmosphere."
  },
  p2: {
    id: "p2",
    title: "Horizon Sky Penthouse",
    category: "residential",
    location: "Clifton Coastline, Karachi",
    style: "Modern Minimalist",
    area: "5,200 Sq. Ft (Duplex)",
    scope: "Complete Structural Gut & Luxury Interior",
    timeline: "9 Months",
    heroImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80",
    overview: "Perched high above the Arabian Sea, this duplex penthouse was redesigned with a sculptural, monolithic sensibility. We stripped away excess partitions to forge an unobstructed 180-degree ocean horizon viewpoint.",
    decisions: [
      "Poured seamless warm grey microcement across both levels for an uninterrupted gallery aesthetic.",
      "Constructed a floating cantilevered steel staircase with integrated shadowline step illumination.",
      "Custom-designed a 4.5-meter monolithic Calacatta marble kitchen island with waterfall edges.",
      "Concealed air-handling units and service ducting within acoustic architectural ceilings."
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80"
    ],
    materials: [
      "Calacatta Gold Marble", "Seamless Microcement", "Matte Black Steel", "Belgian Linen", "Tinted Bronze Glass"
    ],
    palette: [
      { name: "Alabaster White", hex: "#F3EFEA" },
      { name: "Sea Salt Grey", hex: "#C7C4BF" },
      { name: "Raw Calacatta", hex: "#E9E3D8" },
      { name: "Bronze Metal", hex: "#63564A" },
      { name: "Deep Obsidian", hex: "#121110" }
    ],
    result: "A quiet, contemplative skyline haven that captures the shifting hues of the sunset. Minimalist in form, yet profoundly warm and tactile in everyday living."
  },
  p3: {
    id: "p3",
    title: "Aethelgard Corporate Headquarters",
    category: "commercial office",
    location: "Financial District, Karachi",
    style: "Executive Modern",
    area: "6,800 Sq. Ft",
    scope: "Turnkey Corporate Interior & Acoustic Architecture",
    timeline: "6 Months",
    heroImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
    overview: "An executive suite that rejects sterile office cliches in favor of hospitality-grade luxury. Designed for an investment advisory firm, the space communicates prestige, discretion, and forward-thinking precision.",
    decisions: [
      "Installed bespoke micro-perforated acoustic American Walnut wall louvers for boardroom privacy.",
      "Crafted custom brass-trimmed executive conference desks with hidden biophilic charging docks.",
      "Engineered motorized privacy glass partitions that transition from crystal clear to frosted in milliseconds.",
      "Formulated a dedicated wellness espresso lounge and library for high-focus strategy sessions."
    ],
    gallery: [
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
    ],
    materials: [
      "American Walnut", "Nero Marquina Marble", "Satin Brass Trim", "Full-Grain Saddle Leather", "Acoustic Wool"
    ],
    palette: [
      { name: "Executive Walnut", hex: "#38281F" },
      { name: "Nero Marquina", hex: "#1A1A1A" },
      { name: "Saddle Tan", hex: "#8F5E3B" },
      { name: "Oatmeal Grey", hex: "#DCD8D0" },
      { name: "Polished Brass", hex: "#C5A880" }
    ],
    result: "The headquarters has become the firm’s most effective deal-making asset, earning accolades for its sophisticated, calming, and commanding spatial presence."
  },
  p4: {
    id: "p4",
    title: "Maison Terroir Espresso Bar",
    category: "hospitality",
    location: "E-Street, Karachi",
    style: "Warm Minimalism",
    area: "2,400 Sq. Ft",
    scope: "Concept, Branding Synergy & Full Execution",
    timeline: "4 Months",
    heroImage: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1600&q=80",
    overview: "An intimate artisanal coffee and dessert salon inspired by Mediterranean and Kyoto minimalism. The goal was to create an unhurried, multi-sensory environment where patrons feel encased in earth tones and natural acoustics.",
    decisions: [
      "Hand-applied textured terracotta lime-wash across curved archways and banquette walls.",
      "Custom cast a fluted concrete espresso bar that anchors the space like a sculpture.",
      "Incorporated concealed acoustic ceiling baffles to maintain a quiet, conversational buzz.",
      "Curated low-voltage ambient pendant lighting casting intimate warmth directly onto tabletops."
    ],
    gallery: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
    ],
    materials: [
      "Terracotta Lime Plaster", "Hand-Cast Concrete", "Bouclé Upholstery", "Artisanal Zellige", "Charred Timber"
    ],
    palette: [
      { name: "Terracotta Clay", hex: "#B86B53" },
      { name: "Warm Sandstone", hex: "#DECDBB" },
      { name: "Espresso Brown", hex: "#3A2A20" },
      { name: "Olive Sage", hex: "#82836E" },
      { name: "Bone White", hex: "#FAF6EE" }
    ],
    result: "A celebrated dining and coffee destination with viral aesthetic acclaim, maintaining exceptional seating efficiency without sacrificing spacious luxury."
  },
  p5: {
    id: "p5",
    title: "Komorebi Serene Haven",
    category: "residential",
    location: "PECHS, Karachi",
    style: "Japandi Modern",
    area: "4,000 Sq. Ft",
    scope: "Complete Interior Architecture & Millwork",
    timeline: "8 Months",
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80",
    overview: "A peaceful residential oasis tailored for a multigenerational family. By blending Scandinavian clean lines with Japanese wabi-sabi reverence for natural imperfection, we crafted an airy sanctuary of light and raw timber.",
    decisions: [
      "Integrated floor-to-ceiling slatted light-ash screens that divide spaces while permitting cross-ventilation.",
      "Installed bespoke low-profile platform seating and tatami-inspired reading nooks.",
      "Specified textured washi paper pendants and raw natural linen drapery.",
      "Used zero-VOC organic mineral clay finishes to ensure superior indoor air wellness."
    ],
    gallery: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80"
    ],
    materials: [
      "Light Ash Wood", "Organic Mineral Clay", "Natural Raw Linen", "Honed Basalt Stone", "Washi Paper"
    ],
    palette: [
      { name: "Pale Ash", hex: "#E4DCD0" },
      { name: "Wabi-Plaster", hex: "#D6CABA" },
      { name: "Basalt Charcoal", hex: "#32302E" },
      { name: "Natural Flax", hex: "#B8AFA2" },
      { name: "Soft Ivory", hex: "#FDFBF7" }
    ],
    result: "A transcendent, calm domestic retreat that has noticeably elevated the daily wellbeing, mindfulness, and relaxation of the homeowners."
  },
  p6: {
    id: "p6",
    title: "The Master Sanctuary Suite",
    category: "residential",
    location: "Creek Vistas, Karachi",
    style: "Contemporary Luxury",
    area: "1,800 Sq. Ft (Primary Suite)",
    scope: "Master Suite & Private Spa Overhaul",
    timeline: "3.5 Months",
    heroImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80",
    overview: "A boutique hotel-inspired private master wing encompassing an expansive sleeping quarter, custom Italian-style dressing gallery, and a bookmatched marble ensuite with an oversized soaking tub.",
    decisions: [
      "Upholstered the entire master focal wall in acoustic channel-tufted velvet with integrated bronze nightstands.",
      "Engineered an illuminated glass walk-in wardrobe with soft-closing bronze-tinted aluminum doors.",
      "Bookmatched Statuario marble slabs in the ensuite bath with ceiling-recessed rain showers.",
      "Installed multi-scene Lutron smart lighting allowing seamless transitions from energizing dawn to soothing night."
    ],
    gallery: [
      "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80"
    ],
    materials: [
      "Bookmatched Statuario", "Silk-Velvet Paneling", "Bronze Framed Glass", "Brushed Champagne Brass", "Smoked Mirror"
    ],
    palette: [
      { name: "Silk Velvet", hex: "#6D645E" },
      { name: "Statuario White", hex: "#EFECE8" },
      { name: "Bronze Metal", hex: "#8A6D4B" },
      { name: "Champagne Brass", hex: "#C5A880" },
      { name: "Deep Truffle", hex: "#2E2824" }
    ],
    result: "A private realm of pure indulgence that offers the serenity and luxury of a 5-star resort in the privacy of one's personal home."
  }
};

// --------------------------------------------------------------------------
// 3. BEFORE & AFTER TRANSFORMATIONS DATA
// --------------------------------------------------------------------------
const BEFORE_AFTER_DATA = {
  living: {
    title: "DHA Phase 6 Residence — Living Hall",
    beforeImg: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80",
    afterImg: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80",
    interventions: "Opened structural walls, installed concealed cove lighting, custom walnut fluting, and Italian porcelain slab flooring.",
    feedback: "“The transformation completely altered how our family moves and hosts. It feels three times larger and infinitely calmer.”"
  },
  kitchen: {
    title: "Clifton Waterfront — Gourmet Kitchen & Bar",
    beforeImg: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80",
    afterImg: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80",
    interventions: "Demolished dated cabinetry, extended island into a 4-meter Calacatta marble counter, and added integrated Gaggenau appliances.",
    feedback: "“Cooking and entertaining has become the highlight of our weekends. The craftsmanship on the brass joinery is sublime.”"
  },
  bedroom: {
    title: "PECHS Family Villa — Master Suite Oasis",
    beforeImg: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef0?auto=format&fit=crop&w=1600&q=80",
    afterImg: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80",
    interventions: "Replaced obsolete wardrobe layout with an open-concept bronze closet, acoustic channel paneling, and architectural mood lighting.",
    feedback: "“It feels like checking into our favorite boutique suite in Milan every single night.”"
  }
};

// --------------------------------------------------------------------------
// 4. DOM ELEMENTS & INITIALIZATION
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initCustomCursor();
  initStatsCounter();
  initProjectFilters();
  initProjectModal();
  initBeforeAfterSlider();
  init3DVisualizationToggle();
  initFaqAccordion();
  initInquiryForm();
  initConsultationModal();
  initWhatsAppButtons();
  initBackToTop();
  initSmoothScrollLinks();
});

// --------------------------------------------------------------------------
// 5. STICKY HEADER & ACTIVE NAVIGATION
// --------------------------------------------------------------------------
function initStickyHeader() {
  const header = document.getElementById('siteHeader');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');
  const sections = document.querySelectorAll('section[id], header[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Active Section Spy
    let currentId = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // Mobile Drawer Toggle
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileClose = document.getElementById('mobileDrawerClose');
  const mobileItems = document.querySelectorAll('.mobile-nav-item');

  function openMobileMenu() {
    mobileDrawer.classList.add('open');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileDrawer.classList.remove('open');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openMobileMenu);
  if (mobileClose) mobileClose.addEventListener('click', closeMobileMenu);

  mobileItems.forEach(item => {
    item.addEventListener('click', closeMobileMenu);
  });
}

// --------------------------------------------------------------------------
// 6. SUBTLE LUXURY CUSTOM CURSOR
// --------------------------------------------------------------------------
function initCustomCursor() {
  const cursor = document.getElementById('customCursor');
  const follower = document.getElementById('cursorFollower');
  if (!cursor || !follower) return;

  let mouseX = 0, mouseY = 0;
  let followerX = 0, followerY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
  });

  // Smooth animation loop for follower
  function animateFollower() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    follower.style.left = `${followerX}px`;
    follower.style.top = `${followerY}px`;
    requestAnimationFrame(animateFollower);
  }
  requestAnimationFrame(animateFollower);

  // Hover states on interactive elements
  const hoverTargets = document.querySelectorAll('a, button, input, select, textarea, .project-card, .material-card, .masonry-item, .ba-handle');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

// --------------------------------------------------------------------------
// 7. ANIMATED STATISTICS COUNTER (IntersectionObserver)
// --------------------------------------------------------------------------
function initStatsCounter() {
  const statsContainer = document.getElementById('statsCounterContainer');
  if (!statsContainer) return;

  const statNumbers = statsContainer.querySelectorAll('.stat-number');
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(numEl => {
          const target = parseInt(numEl.getAttribute('data-target'), 10);
          const suffix = numEl.getAttribute('data-suffix') || '';
          animateSingleCounter(numEl, target, suffix);
        });
        observer.unobserve(statsContainer);
      }
    });
  }, { threshold: 0.25 });

  observer.observe(statsContainer);

  function animateSingleCounter(el, target, suffix) {
    let start = 0;
    const duration = 1800; // ms
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quartic
      const ease = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(ease * target);

      el.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target + suffix;
      }
    }
    requestAnimationFrame(update);
  }
}

// --------------------------------------------------------------------------
// 8. PROJECT FILTERING & CATEGORY SWITCHER
// --------------------------------------------------------------------------
function initProjectFilters() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category.includes(filterValue)) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// --------------------------------------------------------------------------
// 9. DATA-DRIVEN PROJECT CASE STUDY MODAL
// --------------------------------------------------------------------------
function initProjectModal() {
  const modal = document.getElementById('projectModal');
  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalCloseBtn');
  const projectCards = document.querySelectorAll('.project-card');

  // Modal Sub-Elements
  const modalHeroImg = document.getElementById('modalHeroImg');
  const modalBadges = document.getElementById('modalBadges');
  const modalTitle = document.getElementById('modalProjectTitle');
  const modalMetaBar = document.getElementById('modalMetaBar');
  const modalOverview = document.getElementById('modalOverview');
  const modalDecisions = document.getElementById('modalDecisions');
  const modalGalleryGrid = document.getElementById('modalGalleryGrid');
  const modalResult = document.getElementById('modalResult');
  const modalSpecLocation = document.getElementById('modalSpecLocation');
  const modalSpecArea = document.getElementById('modalSpecArea');
  const modalSpecStyle = document.getElementById('modalSpecStyle');
  const modalSpecScope = document.getElementById('modalSpecScope');
  const modalSpecTimeline = document.getElementById('modalSpecTimeline');
  const modalMaterials = document.getElementById('modalMaterials');
  const modalColorPalette = document.getElementById('modalColorPalette');
  const modalBookConsultBtn = document.getElementById('modalBookConsultBtn');
  const modalWhatsappBtn = document.getElementById('modalWhatsappBtn');

  let currentLoadedProject = null;

  function openProjectModal(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;
    currentLoadedProject = data;

    // Populate Hero & Header
    modalHeroImg.src = data.heroImage;
    modalHeroImg.alt = data.title;
    modalTitle.textContent = data.title;

    modalBadges.innerHTML = `
      <span class="modal-tag">${data.style}</span>
      <span class="modal-tag">•</span>
      <span class="modal-tag">${data.location}</span>
    `;

    modalMetaBar.innerHTML = `
      <span><i class="fa-solid fa-ruler-combined"></i> ${data.area}</span>
      <span><i class="fa-regular fa-clock"></i> ${data.timeline}</span>
    `;

    // Overview & Decisions
    modalOverview.textContent = data.overview;

    modalDecisions.innerHTML = data.decisions
      .map(decision => `<li>${decision}</li>`)
      .join('');

    // Gallery
    modalGalleryGrid.innerHTML = data.gallery
      .map(imgUrl => `
        <div class="modal-gallery-item">
          <img src="${imgUrl}" alt="${data.title} Detail Perspective" loading="lazy">
        </div>
      `).join('');

    modalResult.textContent = data.result;

    // Specifications
    modalSpecLocation.textContent = data.location;
    modalSpecArea.textContent = data.area;
    modalSpecStyle.textContent = data.style;
    modalSpecScope.textContent = data.scope;
    modalSpecTimeline.textContent = data.timeline;

    // Materials Pills
    modalMaterials.innerHTML = data.materials
      .map(mat => `<span class="material-pill">${mat}</span>`)
      .join('');

    // Color Swatches
    modalColorPalette.innerHTML = data.palette
      .map(color => `
        <div class="palette-swatch" style="background-color: ${color.hex};" data-name="${color.name} (${color.hex})"></div>
      `).join('');

    // Show Modal
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProjectModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Card click trigger
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const pid = card.getAttribute('data-project-id');
      openProjectModal(pid);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeProjectModal);
  if (backdrop) backdrop.addEventListener('click', closeProjectModal);

  // Keyboard escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // Modal CTAs
  if (modalBookConsultBtn) {
    modalBookConsultBtn.addEventListener('click', () => {
      closeProjectModal();
      openConsultationModal();
    });
  }

  if (modalWhatsappBtn) {
    modalWhatsappBtn.addEventListener('click', () => {
      if (currentLoadedProject) {
        triggerWhatsApp(`Hello Atelier Noir, I am very interested in the design style and materials used in "${currentLoadedProject.title}" (${currentLoadedProject.location}). I would like to discuss a similar project.`);
      } else {
        triggerWhatsApp();
      }
    });
  }
}

// --------------------------------------------------------------------------
// 10. DRAGGABLE BEFORE & AFTER COMPARISON SLIDER
// --------------------------------------------------------------------------
function initBeforeAfterSlider() {
  const container = document.getElementById('baComparison');
  const beforeLayer = document.getElementById('baBeforeLayer');
  const handle = document.getElementById('baHandle');
  const tabs = document.querySelectorAll('.ba-tab');

  const baBeforeImg = document.getElementById('baBeforeImg');
  const baAfterImg = document.getElementById('baAfterImg');
  const baProjectTitle = document.getElementById('baProjectTitle');
  const baInterventions = document.getElementById('baInterventions');
  const baFeedback = document.getElementById('baFeedback');

  if (!container || !beforeLayer || !handle) return;

  let isDragging = false;

  function updateSliderPosition(clientX) {
    const rect = container.getBoundingClientRect();
    let offsetX = clientX - rect.left;
    let percentage = (offsetX / rect.width) * 100;

    // Clamp between 0% and 100%
    percentage = Math.max(0, Math.min(100, percentage));

    beforeLayer.style.width = `${percentage}%`;
    handle.style.left = `${percentage}%`;
    handle.setAttribute('aria-valuenow', Math.round(percentage));
  }

  // Pointer & Mouse Events
  container.addEventListener('pointerdown', (e) => {
    isDragging = true;
    updateSliderPosition(e.clientX);
    container.setPointerCapture(e.pointerId);
  });

  container.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  });

  function stopDragging(e) {
    if (isDragging) {
      isDragging = false;
      try {
        container.releasePointerCapture(e.pointerId);
      } catch (err) {}
    }
  }

  container.addEventListener('pointerup', stopDragging);
  container.addEventListener('pointercancel', stopDragging);

  // Keyboard accessibility for slider handle
  handle.addEventListener('keydown', (e) => {
    const currentVal = parseInt(handle.getAttribute('aria-valuenow') || '50', 10);
    if (e.key === 'ArrowLeft') {
      const newVal = Math.max(0, currentVal - 5);
      beforeLayer.style.width = `${newVal}%`;
      handle.style.left = `${newVal}%`;
      handle.setAttribute('aria-valuenow', newVal);
    } else if (e.key === 'ArrowRight') {
      const newVal = Math.min(100, currentVal + 5);
      beforeLayer.style.width = `${newVal}%`;
      handle.style.left = `${newVal}%`;
      handle.setAttribute('aria-valuenow', newVal);
    }
  });

  // Room Switcher Tabs
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const roomKey = tab.getAttribute('data-ba');
      const data = BEFORE_AFTER_DATA[roomKey];
      if (!data) return;

      // Smooth swap
      beforeLayer.style.opacity = '0.4';
      setTimeout(() => {
        baBeforeImg.src = data.beforeImg;
        baAfterImg.src = data.afterImg;
        baProjectTitle.textContent = data.title;
        baInterventions.textContent = data.interventions;
        baFeedback.textContent = data.feedback;

        // Reset to 50%
        beforeLayer.style.width = '50%';
        handle.style.left = '50%';
        handle.setAttribute('aria-valuenow', '50');
        beforeLayer.style.opacity = '1';
      }, 150);
    });
  });
}

// --------------------------------------------------------------------------
// 11. 3D VISUALIZATION INTERACTIVE SWITCHER
// --------------------------------------------------------------------------
function init3DVisualizationToggle() {
  const visButtons = document.querySelectorAll('.vis-btn');
  const renderImg = document.getElementById('visRenderImg');
  const builtImg = document.getElementById('visBuiltImg');
  const caption = document.getElementById('visCaption');

  if (!visButtons.length || !renderImg || !builtImg) return;

  visButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      visButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const view = btn.getAttribute('data-view');
      if (view === 'render') {
        renderImg.classList.add('active');
        builtImg.classList.remove('active');
        caption.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Mode: 3D Concept Visualization Phase';
      } else {
        renderImg.classList.remove('active');
        builtImg.classList.add('active');
        caption.innerHTML = '<i class="fa-solid fa-check-double"></i> Mode: Final Executed Residence Handover';
      }
    });
  });

  const discussBtn = document.getElementById('visDiscussBtn');
  if (discussBtn) {
    discussBtn.addEventListener('click', () => {
      openConsultationModal();
    });
  }
}

// --------------------------------------------------------------------------
// 12. ACCESSIBLE FAQ ACCORDION
// --------------------------------------------------------------------------
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all others
      faqItems.forEach(other => {
        other.classList.remove('active');
        const otherTrigger = other.querySelector('.faq-trigger');
        if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// --------------------------------------------------------------------------
// 13. PROJECT INQUIRY FORM (VALIDATION & DEMO SUBMISSION)
// --------------------------------------------------------------------------
function initInquiryForm() {
  const form = document.getElementById('projectInquiryForm');
  const successState = document.getElementById('formSuccessState');
  const resetBtn = document.getElementById('resetInquiryFormBtn');
  const successClientName = document.getElementById('successClientName');
  const successWhatsappBtn = document.getElementById('successWhatsappBtn');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Validate Name
    const nameInput = document.getElementById('clientName');
    const nameGroup = nameInput.closest('.form-group');
    if (!nameInput.value.trim()) {
      nameGroup.classList.add('has-error');
      isValid = false;
    } else {
      nameGroup.classList.remove('has-error');
    }

    // Validate Phone
    const phoneInput = document.getElementById('clientPhone');
    const phoneGroup = phoneInput.closest('.form-group');
    if (!phoneInput.value.trim() || phoneInput.value.trim().length < 7) {
      phoneGroup.classList.add('has-error');
      isValid = false;
    } else {
      phoneGroup.classList.remove('has-error');
    }

    // Validate Email
    const emailInput = document.getElementById('clientEmail');
    const emailGroup = emailInput.closest('.form-group');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailGroup.classList.add('has-error');
      isValid = false;
    } else {
      emailGroup.classList.remove('has-error');
    }

    // Validate Project Type
    const typeSelect = document.getElementById('projectType');
    const typeGroup = typeSelect.closest('.form-group');
    if (!typeSelect.value) {
      typeGroup.classList.add('has-error');
      isValid = false;
    } else {
      typeGroup.classList.remove('has-error');
    }

    // Validate Location
    const locInput = document.getElementById('projectLocation');
    const locGroup = locInput.closest('.form-group');
    if (!locInput.value.trim()) {
      locGroup.classList.add('has-error');
      isValid = false;
    } else {
      locGroup.classList.remove('has-error');
    }

    if (!isValid) return;

    // Submit Simulation
    const submitBtn = document.getElementById('submitInquiryBtn');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Submitting Request...`;

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      const clientNameVal = nameInput.value.trim();
      const projectTypeVal = typeSelect.value;
      const projectLocVal = locInput.value.trim();

      if (successClientName) successClientName.textContent = clientNameVal;

      form.style.display = 'none';
      successState.classList.add('active');

      showToast("Inquiry Confirmed", "Your project parameters have been received. We look forward to connecting!");

      // Wire WhatsApp Fast Follow-up
      if (successWhatsappBtn) {
        successWhatsappBtn.onclick = () => {
          triggerWhatsApp(`Hello Atelier Noir, I just submitted an inquiry on your website. My name is ${clientNameVal}, and I am looking for ${projectTypeVal} in ${projectLocVal}.`);
        };
      }
    }, 900);
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      form.style.display = 'block';
      successState.classList.remove('active');
    });
  }

  // Inquiry fast WhatsApp link
  const fastWhatsapp = document.getElementById('inquiryWhatsappFast');
  if (fastWhatsapp) {
    fastWhatsapp.addEventListener('click', () => {
      triggerWhatsApp("Hello Atelier Noir, I would like to chat directly regarding a new interior design project.");
    });
  }
}

// --------------------------------------------------------------------------
// 14. BOOK CONSULTATION MODAL
// --------------------------------------------------------------------------
function initConsultationModal() {
  const modal = document.getElementById('consultModal');
  const backdrop = document.getElementById('consultBackdrop');
  const closeBtn = document.getElementById('consultCloseBtn');
  const form = document.getElementById('quickConsultForm');
  const successView = document.getElementById('consultSuccessView');
  const closeSuccessBtn = document.getElementById('closeConsultSuccessBtn');
  const directWhatsapp = document.getElementById('consultDirectWhatsapp');

  // Trigger buttons across page
  const triggers = [
    document.getElementById('openConsultationNav'),
    document.getElementById('openConsultationMobile'),
    document.getElementById('heroConsultationBtn'),
    document.getElementById('portfolioConsultBtn'),
    document.getElementById('founderConsultBtn'),
    document.getElementById('finalStartProjectBtn')
  ];

  window.openConsultationModal = function() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  function closeConsultModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => {
      form.reset();
      form.style.display = 'block';
      successView.classList.remove('active');
    }, 300);
  }

  triggers.forEach(btn => {
    if (btn) btn.addEventListener('click', window.openConsultationModal);
  });

  if (closeBtn) closeBtn.addEventListener('click', closeConsultModal);
  if (backdrop) backdrop.addEventListener('click', closeConsultModal);
  if (closeSuccessBtn) closeSuccessBtn.addEventListener('click', closeConsultModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeConsultModal();
    }
  });

  // Direct WhatsApp Button from inside Modal
  if (directWhatsapp) {
    directWhatsapp.addEventListener('click', () => {
      const name = document.getElementById('consultName').value.trim() || 'Client';
      const scope = document.getElementById('consultType').value;
      triggerWhatsApp(`Hello Atelier Noir, my name is ${name}. I would like to schedule a consultation regarding a ${scope} project.`);
    });
  }

  // Submit Consultation Form
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      const nameInput = document.getElementById('consultName');
      const phoneInput = document.getElementById('consultPhone');

      if (!nameInput.value.trim()) {
        nameInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        nameInput.closest('.form-group').classList.remove('has-error');
      }

      if (!phoneInput.value.trim()) {
        phoneInput.closest('.form-group').classList.add('has-error');
        isValid = false;
      } else {
        phoneInput.closest('.form-group').classList.remove('has-error');
      }

      if (!isValid) return;

      const submitBtn = document.getElementById('submitConsultBtn');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Reserving Time...`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.style.display = 'none';
        successView.classList.add('active');
        showToast("Consultation Logged", "Your private session request has been received!");
      }, 750);
    });
  }
}

// --------------------------------------------------------------------------
// 15. GLOBAL WHATSAPP BUTTONS & TRIGGERS
// --------------------------------------------------------------------------
function initWhatsAppButtons() {
  const heroWhatsapp = document.getElementById('heroWhatsappBtn');
  const openWhatsappMobile = document.getElementById('openWhatsappMobile');
  const portfolioWhatsapp = document.getElementById('portfolioWhatsappBtn');
  const founderWhatsapp = document.getElementById('founderWhatsappBtn');
  const faqWhatsapp = document.getElementById('faqWhatsappBtn');
  const finalWhatsapp = document.getElementById('finalWhatsappBtn');
  const floatingWhatsappBtn = document.getElementById('floatingWhatsappBtn');
  const directTriggers = document.querySelectorAll('.whatsapp-direct-trigger');

  if (heroWhatsapp) heroWhatsapp.addEventListener('click', () => triggerWhatsApp());
  if (openWhatsappMobile) openWhatsappMobile.addEventListener('click', () => triggerWhatsApp());
  if (portfolioWhatsapp) portfolioWhatsapp.addEventListener('click', () => triggerWhatsApp("Hello Atelier Noir, I would like an instant quote estimate for my interior project."));
  if (founderWhatsapp) founderWhatsapp.addEventListener('click', () => triggerWhatsApp("Hello Sarah, I would like to consult on an architectural interior design brief."));
  if (faqWhatsapp) faqWhatsapp.addEventListener('click', () => triggerWhatsApp("Hello Atelier Noir, I have a specific question about your design and turnkey process."));
  if (finalWhatsapp) finalWhatsapp.addEventListener('click', () => triggerWhatsApp("Hello Atelier Noir, I am ready to start my project and would like to explore ideas."));
  if (floatingWhatsappBtn) floatingWhatsappBtn.addEventListener('click', () => triggerWhatsApp());

  directTriggers.forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      triggerWhatsApp();
    });
  });
}

// --------------------------------------------------------------------------
// 16. TOAST NOTIFICATION UTILITY
// --------------------------------------------------------------------------
function showToast(title, message) {
  const toast = document.getElementById('toastNotification');
  const toastTitle = document.getElementById('toastTitle');
  const toastMessage = document.getElementById('toastMessage');
  const toastClose = document.getElementById('toastCloseBtn');

  if (!toast) return;

  toastTitle.textContent = title;
  toastMessage.textContent = message;

  toast.classList.add('show');

  const timeoutId = setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);

  if (toastClose) {
    toastClose.onclick = () => {
      clearTimeout(timeoutId);
      toast.classList.remove('show');
    };
  }
}

// --------------------------------------------------------------------------
// 17. BACK TO TOP BUTTON
// --------------------------------------------------------------------------
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 450) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// --------------------------------------------------------------------------
// 18. SMOOTH SCROLL FOR IN-PAGE ANCHORS
// --------------------------------------------------------------------------
function initSmoothScrollLinks() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 75;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
