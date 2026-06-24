/* ============================================================
   Subhankar Majumdar — Physiotherapist | Interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Mobile nav ---------- */
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");

  const openMenu = () => navMenu.classList.add("open");
  const closeMenu = () => navMenu.classList.remove("open");

  if (navToggle) navToggle.addEventListener("click", openMenu);
  if (navClose) navClose.addEventListener("click", closeMenu);

  document.querySelectorAll(".nav__link").forEach((link) =>
    link.addEventListener("click", closeMenu)
  );

  /* ---------- Header shadow on scroll ---------- */
  const header = document.getElementById("header");
  const scrollTopBtn = document.getElementById("scroll-top");

  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 20);
    scrollTopBtn.classList.toggle("show", y > 500);
    setActiveLink();
  };
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll("section[id]");
  function setActiveLink() {
    const scrollY = window.scrollY + 120;
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      const link = document.querySelector(`.nav__link[href="#${id}"]`);
      if (!link) return;
      if (scrollY >= top && scrollY < top + height) {
        document.querySelectorAll(".nav__link").forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll(
    ".section__header, .hero__content, .hero__media, .about__media, .about__content, " +
    ".service-card, .why__item, .why__highlight, .testimonial, .contact__info, .contact__form, .trustbar__item"
  );
  revealEls.forEach((el) => el.classList.add("reveal"));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealEls.forEach((el) => io.observe(el));

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll(".stat__num");
  const countObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = +el.dataset.count;
        const duration = 1600;
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target).toLocaleString();
          if (progress < 1) requestAnimationFrame(step);
          else el.textContent = target.toLocaleString();
        };
        requestAnimationFrame(step);
        countObserver.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((c) => countObserver.observe(c));

  /* ---------- Contact form ---------- */
  const form = document.getElementById("contact-form");
  const note = document.getElementById("form-note");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();

      if (!name || !phone) {
        note.textContent = "Please enter your name and phone number.";
        note.className = "form__note error";
        return;
      }

      // No backend wired up yet — this is where you'd send the data.
      note.textContent = `Thank you, ${name}! Your request has been noted. I'll get back to you soon.`;
      note.className = "form__note success";
      form.reset();

      setTimeout(() => {
        note.textContent = "";
        note.className = "form__note";
      }, 6000);
    });
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Initial run
  onScroll();
})();
