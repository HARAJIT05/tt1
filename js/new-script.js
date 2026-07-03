// ============================================================
// MODERN PHYSIOTHERAPY SITE - JAVASCRIPT
// ============================================================

(function () {
  "use strict";

  // DOM Elements
  const header = document.getElementById("header");
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav-menu");
  const mobileOverlay = document.getElementById("mobile-overlay");
  const navLinks = nav.querySelectorAll("a");
  const contactForm = document.getElementById("contact-form");
  const serviceSelect = document.getElementById("service");
  const otherGroup = document.getElementById("other-group");
  const otherInput = document.getElementById("other-service");
  const yearEl = document.getElementById("year");
  const ctaBtn = document.getElementById("cta-btn");

  const WHATSAPP_NUMBER = "918961976555";

  // ===== HEADER SCROLL EFFECT =====
  const onScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    updateActiveLink();
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  // ===== MOBILE MENU TOGGLE =====
  const toggleMobileMenu = () => {
    hamburger.classList.toggle("open");
    nav.classList.toggle("open");
    mobileOverlay.classList.toggle("open");
    document.body.style.overflow = nav.classList.contains("open")
      ? "hidden"
      : "";
  };

  const closeMobileMenu = () => {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    mobileOverlay.classList.remove("open");
    document.body.style.overflow = "";
  };

  hamburger.addEventListener("click", toggleMobileMenu);
  mobileOverlay.addEventListener("click", closeMobileMenu);

  // Close menu when nav link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // ===== ACTIVE NAV LINK ON SCROLL =====
  const updateActiveLink = () => {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.scrollY + 150;

    sections.forEach((section) => {
      const id = section.getAttribute("id");
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const link = document.querySelector(`.nav__link[href="#${id}"]`);

      if (!link) return;

      navLinks.forEach((l) => l.classList.remove("active"));

      if (scrollY >= top && scrollY < top + height) {
        link.classList.add("active");
      }
    });
  };

  // ===== SERVICE CONDITIONAL FIELD =====
  const toggleOtherService = () => {
    const isOther = serviceSelect.value === "Other";
    otherGroup.style.display = isOther ? "flex" : "none";
    if (otherInput) {
      otherInput.required = isOther;
      if (!isOther) otherInput.value = "";
    }
  };

  serviceSelect.addEventListener("change", toggleOtherService);
  toggleOtherService();

  // ===== CONTACT FORM - WHATSAPP =====
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = contactForm.name.value.trim();
      const phone = contactForm.phone.value.trim();
      const email = contactForm.email.value.trim();
      let service = contactForm.service.value.trim();
      const timeslot = contactForm.timeslot.value.trim();
      const otherService = otherInput ? otherInput.value.trim() : "";
      const message = contactForm.message.value.trim();

      // Validation
      if (!name || !phone || !service || !timeslot) {
        showFormMessage("Please fill in your name, phone, service, and time slot.", "error");
        return;
      }

      if (service === "Other") {
        if (!otherService) {
          showFormMessage("Please specify your service need.", "error");
          return;
        }
        service = otherService;
      }

      // Build WhatsApp message
      const lines = [
        "*New Appointment Request*",
        "━━━━━━━━━━━━━━━━━━━━━━",
        `*Name:* ${name}`,
        `*Phone:* ${phone}`,
      ];

      if (email) lines.push(`*Email:* ${email}`);
      lines.push(`*Service:* ${service}`);
      lines.push(`*Time Slot:* ${timeslot}`);
      if (message) lines.push(`*Message:* ${message}`);

      const text = encodeURIComponent(lines.join("\n"));
      const waURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

      window.open(waURL, "_blank");

      showFormMessage(
        `Thanks ${name}! Opening WhatsApp to send your request...`,
        "success"
      );

      setTimeout(() => {
        contactForm.reset();
        showFormMessage("", "");
      }, 2000);
    });
  }

  const showFormMessage = (message, type) => {
    const formNote = document.getElementById("form-note");
    formNote.textContent = message;
    formNote.className = `form-note ${type ? type : ""}`;
  };

  // ===== FOOTER YEAR =====
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ===== INITIAL CALLS =====
  updateActiveLink();
  onScroll();
})();
