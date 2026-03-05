/**
 * ========================================================
 *  app.js — Renders the page from WEDDING config test
 * ========================================================
 */

(function () {
  "use strict";

  const W = window.WEDDING || WEDDING;

  /* ── Helper: set text by id ──────────────────────────── */
  function setText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function setHTML(id, html) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  /* ── Hero ─────────────────────────────────────────────── */
  function renderHero() {
    setText("heroPreHeading", W.hero.preHeading);
    setText("heroPerson1", W.couple.person1);
    setText("heroPerson2", W.couple.person2);
    setText("heroDate", W.date.full);
    setText("heroVenue", W.venue.name);

    // Update page title
    document.title = `${W.couple.short} — Wedding Invitation`;
  }

  /* ── Our Story ───────────────────────────────────────── */
  function renderStory() {
    const img = document.getElementById("storyImage");
    if (img) {
      img.src = W.story.image;
      img.alt = W.story.imageAlt;
    }

    setText("storyHeading", W.story.heading);

    const textContainer = document.getElementById("storyText");
    if (textContainer) {
      textContainer.innerHTML = W.story.paragraphs
        .map(function (p) {
          return "<p>" + escapeHTML(p) + "</p>";
        })
        .join("");
    }
  }

  /* ── Save the Date ───────────────────────────────────── */
  function renderSaveTheDate() {
    setText("stdHeading", W.saveTheDate.heading);

    const dateEl = document.getElementById("stdDate");
    if (dateEl) {
      dateEl.textContent = W.date.numeric;
      dateEl.setAttribute("datetime", W.date.iso);
    }

    setText("stdTime", W.date.time);
    setText("stdVenueName", W.venue.name);
    setHTML(
      "stdAddress",
      escapeHTML(W.venue.addressLine1) + "<br>" + escapeHTML(W.venue.addressLine2)
    );
    setText("stdNote", W.saveTheDate.note);

    const mapLink = document.getElementById("stdMapLink");
    if (mapLink) mapLink.href = W.venue.mapUrl;
  }

  /* ── Details ─────────────────────────────────────────── */
  function renderDetails() {
    setText("detailsHeading", W.details.heading);

    const list = document.getElementById("detailsList");
    if (!list) return;

    list.innerHTML = W.details.items
      .map(function (item) {
        return (
          '<li>' +
            '<div class="details__label">' + escapeHTML(item.label) + '</div>' +
            '<div class="details__text">' + escapeHTML(item.text) + '</div>' +
          '</li>'
        );
      })
      .join("");
  }

  /* ── Registry ────────────────────────────────────────── */
  function renderRegistry() {
    setText("registryHeading", W.registry.heading);
    setText("registrySubtext", W.registry.subtext);

    const container = document.getElementById("registryCards");
    if (!container) return;

    container.innerHTML = W.registry.items
      .map(function (item) {
        return (
          '<div class="registry-card">' +
            '<div class="registry-card__name">' + escapeHTML(item.name) + '</div>' +
            '<div class="registry-card__desc">' + escapeHTML(item.description) + '</div>' +
            '<a class="btn btn--outline" href="' + escapeHTML(item.url) + '" target="_blank" rel="noopener noreferrer">View Registry</a>' +
          '</div>'
        );
      })
      .join("");
  }

  /* ── Footer ──────────────────────────────────────────── */
  function renderFooter() {
    setText("footerNames", W.couple.short);
    setText("footerDate", W.date.numeric);
    setText("footerVenue", W.venue.name + " — " + W.venue.addressLine2);

    const emailEl = document.getElementById("footerEmail");
    if (emailEl) {
      emailEl.textContent = W.footer.email;
      emailEl.href = "mailto:" + W.footer.email;
    }

    setText("footerNote", W.footer.note);
  }

  /* ── RSVP Modal text ─────────────────────────────────── */
  function renderModalText() {
    setText("rsvpModalHeading", W.rsvp.heading);
    setText("rsvpModalSubtext", W.rsvp.subtext);
    setText("rsvpWhatsappNote", W.rsvp.whatsappNote);
    setText("rsvpSuccessMsg", W.rsvp.successMessage);
  }

  /* ── Scroll fade-in animation ────────────────────────── */
  function initScrollAnimations() {
    // Mark sections for animation
    var targets = document.querySelectorAll(
      ".story, .save-the-date, .details, .registry"
    );
    targets.forEach(function (el) {
      el.classList.add("fade-in");
    });

    // Also animate inner elements for stagger
    var innerTargets = document.querySelectorAll(
      ".story__image-wrap, .story__content, .details__list, .registry__cards"
    );
    innerTargets.forEach(function (el) {
      el.classList.add("fade-in");
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".fade-in").forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ── Util: escape HTML ───────────────────────────────── */
  function escapeHTML(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  /* ── Page-load reveal sequence ─────────────────────────── */
  function initPageLoader() {
    var loader   = document.getElementById("pageLoader");
    var monogram = document.getElementById("loaderMonogram");

    // Set monogram text from config
    if (monogram) {
      monogram.textContent = W.couple.short;
    }

    // Prevent scroll during intro
    document.body.style.overflow = "hidden";

    // Phase 1: show monogram briefly (0.6s), then curtain opens
    setTimeout(function () {
      if (loader) loader.classList.add("is-done");

      // Phase 2: stagger-reveal hero elements after curtain opens
      setTimeout(function () {
        document.body.style.overflow = "";
        revealHeroElements();
      }, 600);

      // Phase 3: clean up loader from DOM
      setTimeout(function () {
        if (loader) loader.classList.add("is-hidden");
      }, 1800);
    }, 900);
  }

  function revealHeroElements() {
    var items = document.querySelectorAll(".hero-anim");
    items.forEach(function (el, i) {
      setTimeout(function () {
        el.classList.add("is-revealed");
      }, i * 160);   // 160ms stagger between each element
    });
  }

  /* ── Init ─────────────────────────────────────────────── */
  function init() {
    renderHero();
    renderStory();
    renderSaveTheDate();
    renderDetails();
    renderRegistry();
    renderFooter();
    renderModalText();
    initScrollAnimations();
    initPageLoader();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
