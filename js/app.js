/**
 * ========================================================
 *  app.js — Renders the page from WEDDING config
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


  /* ── Hero ─────────────────────────────────────────────── */
  function renderHero() {
    setText("heroPreHeading", W.hero.preHeading);
    setText("heroPerson1", W.couple.person1);
    setText("heroPerson2", W.couple.person2);
    setText("heroDate", W.date.full + ' ' + W.date.ceremony);
    setText("heroVenue", W.venue.addressLine1 + ' ' + W.venue.addressLine2);

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
      var inlineImgs = (W.story.inlineImages || []).reduce(function (map, entry) {
        map[entry.afterParagraph] = entry;
        return map;
      }, {});

      textContainer.innerHTML = W.story.paragraphs
        .map(function (p, i) {
          var html = "<p>" + escapeHTML(p) + "</p>";
          return html;
        })
        .join("");
    }
  }

  /* ── Save the Date ───────────────────────────────────── */
  function renderSaveTheDate() {
    setText("stdHeading", W.saveTheDate.heading);

    var venuesEl = document.getElementById("stdVenues");
    if (venuesEl) {
      venuesEl.innerHTML =
        '<div class="std__venue-item">' +
          '<p class="std__venue-role">Ceremony</p>' +
          '<p class="std__venue-name">' + escapeHTML(W.venue.name) + '</p>' +
          '<p class="std__venue-addr">' + escapeHTML(W.venue.addressLine1) + ' ' + escapeHTML(W.venue.addressLine2) + '</p>' +
        '</div>' +
        '<div class="std__venue-item">' +
          '<p class="std__venue-role">Reception</p>' +
          '<p class="std__venue-name">' + escapeHTML(W.venue.reception.name) + '</p>' +
          '<p class="std__venue-addr">' + escapeHTML(W.venue.reception.address) + '</p>' +
        '</div>';
    }
    setText("stdNote", W.saveTheDate.note);

    var countdownEl = document.getElementById("stdCountdown");
    if (countdownEl) {
      var target = new Date("2026-07-31T00:00:00");
      function renderCountdown() {
        var now  = new Date();
        var diff = target - now;
        if (diff <= 0) {
          countdownEl.innerHTML = '<p class="std__note">Today is the day! 🎉</p>';
          return;
        }
        var days    = Math.floor(diff / 864e5);
        var hours   = Math.floor((diff % 864e5) / 36e5);
        var minutes = Math.floor((diff % 36e5) / 6e4);
        var seconds = Math.floor((diff % 6e4) / 1e3);
        function pad(n) { return String(n).padStart(2, "0"); }
        countdownEl.innerHTML =
          '<div class="std__countdown-item"><span class="std__countdown-num">' + days    + '</span><span class="std__countdown-label">Days</span></div>' +
          '<div class="std__countdown-item"><span class="std__countdown-num">' + pad(hours)   + '</span><span class="std__countdown-label">Hours</span></div>' +
          '<div class="std__countdown-item"><span class="std__countdown-num">' + pad(minutes) + '</span><span class="std__countdown-label">Minutes</span></div>' +
          '<div class="std__countdown-item"><span class="std__countdown-num">' + pad(seconds) + '</span><span class="std__countdown-label">Seconds</span></div>';
      }
      renderCountdown();
      setInterval(renderCountdown, 1000);
    }

    var mapsContainer = document.getElementById("stdMaps");
    if (mapsContainer) {
      function mapCard(label, coords) {
        var embedUrl = "https://maps.google.com/maps?q=" + coords + "&hl=en&z=16&output=embed";
        var linkUrl  = "https://maps.google.com/maps?q=" + coords;
        return (
          '<div class="std__map-wrap">' +
            '<p class="std__map-label">' + escapeHTML(label) + '</p>' +
            '<iframe class="std__map-iframe" src="' + embedUrl + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>' +
            '<a class="btn btn--outline std__map-link" href="' + linkUrl + '" target="_blank" rel="noopener noreferrer">Open in Maps</a>' +
          '</div>'
        );
      }
      mapsContainer.innerHTML =
        mapCard("Ceremony", W.venue.churchCoords) +
        mapCard("Reception", W.venue.reception.coords);
    }
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

  /* ── Entourage ───────────────────────────────────────── */
  function renderEntourage() {
    setText("entourageHeading", W.entourage.heading);
    setText("entourageSubtext", W.entourage.subtext);

    const container = document.getElementById("entourageGroups");
    if (!container) return;

    container.innerHTML = W.entourage.groups
      .map(function (group) {
        var memberItems = group.members
          .map(function (name) {
            return '<li class="entourage-member--blur">' + escapeHTML(name) + '</li>';
          })
          .join("");
        return (
          '<div class="entourage-group">' +
            '<div class="entourage-group__role">' + escapeHTML(group.role) + '</div>' +
            '<ul class="entourage-group__members">' + memberItems + '</ul>' +
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
      ".story, .save-the-date, .details, .entourage, .gifts"
    );
    targets.forEach(function (el) {
      el.classList.add("fade-in");
    });

    // Also animate inner elements for stagger
    var innerTargets = document.querySelectorAll(
      ".story__image-wrap, .story__content, .details__list, .entourage__groups"
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

  /* ── Gifts Modal ─────────────────────────────────────── */
  function initGiftsModal() {
    var giftsOverlay  = document.getElementById("giftsModal");
    var giftsOpenBtn  = document.getElementById("giftsHowBtn");
    var giftsCloseBtn = document.getElementById("giftsModalCloseBtn");

    if (!giftsOverlay) return;

    // Modal heading
    setText("giftsModalHeading", "");

    // Populate account details from config
    var g = (W.gifts) || {};
    var b1 = document.getElementById("giftsBank1");
    var b2 = document.getElementById("giftsBank2");
    var b3 = document.getElementById("giftsBank3");
    if (b1 && g.bank1)    b1.textContent = g.bank1;
    if (b2 && g.bank2)    b2.textContent = g.bank2;
    if (b3 && g.bank3)    b3.textContent = g.bank3;

    function openGiftsModal() {
      giftsOverlay.removeAttribute("hidden");
      requestAnimationFrame(function () {
        giftsOverlay.classList.add("is-open");
      });
      if (giftsCloseBtn) giftsCloseBtn.focus();
    }

    function closeGiftsModal() {
      giftsOverlay.classList.remove("is-open");
      giftsOverlay.setAttribute("hidden", "");
      if (giftsOpenBtn) giftsOpenBtn.focus();
    }

    if (giftsOpenBtn) giftsOpenBtn.addEventListener("click", openGiftsModal);
    if (giftsCloseBtn) giftsCloseBtn.addEventListener("click", closeGiftsModal);

    giftsOverlay.addEventListener("click", function (e) {
      if (e.target === giftsOverlay) closeGiftsModal();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && giftsOverlay.classList.contains("is-open")) {
        closeGiftsModal();
      }
    });
  }

  /* ── Init ─────────────────────────────────────────────── */
  function init() {
    renderHero();
    renderStory();
    renderSaveTheDate();
    renderDetails();
    renderEntourage();
    renderFooter();
    renderModalText();
    initScrollAnimations();
    initPageLoader();
    initGiftsModal();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
