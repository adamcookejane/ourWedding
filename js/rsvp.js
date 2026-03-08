/**
 * ========================================================
 *  rsvp.js — RSVP Modal, Form Validation, localStorage,
 *            Clipboard copy, Toast notifications
 * ========================================================
 */

(function () {
  "use strict";

  var W = window.WEDDING || WEDDING;

  /* ── DOM refs ─────────────────────────────────────────── */
  var overlay       = document.getElementById("rsvpModal");
  var modal         = overlay ? overlay.querySelector(".modal") : null;
  var closeBtn      = document.getElementById("modalCloseBtn");
  var form          = document.getElementById("rsvpForm");
  var copyBtn       = document.getElementById("copyRsvpBtn");
  var successPanel  = document.getElementById("rsvpSuccess");
  var closeSuccess  = document.getElementById("rsvpCloseSuccessBtn");
  var toast         = document.getElementById("toast");

  // All buttons that should open the modal
  var openBtns = document.querySelectorAll(
    "#heroRsvpBtn"
  );

  var lastFocusedEl = null;

  /* ── Open / Close modal ───────────────────────────────── */
  function openModal() {
    lastFocusedEl = document.activeElement;
    overlay.removeAttribute("hidden");

    // Force reflow so CSS transition triggers
    void overlay.offsetHeight;
    overlay.classList.add("is-open");

    // Reset to form view
    form.removeAttribute("hidden");
    successPanel.setAttribute("hidden", "");
    var whatsappEl = overlay.querySelector(".modal__whatsapp");
    if (whatsappEl) whatsappEl.removeAttribute("hidden");

    // Clear fields and errors
    form.reset();
    clearErrors();
    var headingEl = document.getElementById("rsvpModalHeading");
    var subtextEl = document.getElementById("rsvpModalSubtext");
    if (headingEl) headingEl.removeAttribute("hidden");
    if (subtextEl) subtextEl.removeAttribute("hidden");

    document.body.style.overflow = "hidden";

    // Focus the first input
    var firstInput = form.querySelector("input, textarea");
    if (firstInput) firstInput.focus();
  }

  function closeModal() {
    overlay.classList.remove("is-open");

    // Wait for transition to end before hiding
    setTimeout(function () {
      overlay.setAttribute("hidden", "");
      document.body.style.overflow = "";
      if (lastFocusedEl) lastFocusedEl.focus();
    }, 300);
  }

  // Bind open buttons
  openBtns.forEach(function (btn) {
    btn.addEventListener("click", openModal);
  });

  // Close button
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  // Click on backdrop
  if (overlay) {
    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeModal();
    });
  }

  // Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay && overlay.classList.contains("is-open")) {
      closeModal();
    }
  });

  // Close success view
  if (closeSuccess) closeSuccess.addEventListener("click", closeModal);

  /* ── Focus trap inside modal ──────────────────────────── */
  if (overlay) {
    overlay.addEventListener("keydown", function (e) {
      if (e.key !== "Tab") return;

      var focusables = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;

      var first = focusables[0];
      var last  = focusables[focusables.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });
  }

  /* ── Form validation ──────────────────────────────────── */
  function validateField(input, errorId, message) {
    var errorEl = document.getElementById(errorId);
    var valid = input.checkValidity();

    if (!valid) {
      input.classList.add("is-invalid");
      if (errorEl) errorEl.textContent = message;
    } else {
      input.classList.remove("is-invalid");
      if (errorEl) errorEl.textContent = "";
    }
    return valid;
  }

  function validateForm() {
    var nameInput    = document.getElementById("rsvpName");
    var emailInput   = document.getElementById("rsvpEmail");
    var messageInput = document.getElementById("rsvpMessage");
    var guestsInput  = document.getElementById("rsvpGuests");
    var attendance   = form.querySelector('input[name="attendance"]:checked');

    var v1 = validateField(nameInput, "rsvpNameError", "Please enter your full name.");
    var v2 = validateField(emailInput, "rsvpEmailError", "Please enter a valid email address.");
    var v4 = validateField(messageInput, "rsvpMessageError", "Please leave a message for the couple.");

    // Guests validation (max 2)
    var guestsVal = parseInt(guestsInput.value, 10);
    var guestsErr = document.getElementById("rsvpGuestsError");
    var v5 = guestsVal >= 1 && guestsVal <= 2;
    if (!v5) {
      guestsInput.classList.add("is-invalid");
      if (guestsErr) guestsErr.textContent = "Maximum 2 guests allowed.";
    } else {
      guestsInput.classList.remove("is-invalid");
      if (guestsErr) guestsErr.textContent = "";
    }

    // Attendance validation (radio)
    var v3 = !!attendance;
    var attendErr = document.getElementById("rsvpAttendanceError");
    if (!v3 && attendErr) {
      attendErr.textContent = "Please select your attendance.";
    } else if (attendErr) {
      attendErr.textContent = "";
    }

    return v1 && v2 && v3 && v4 && v5;
  }

  // Live validation on blur
  if (form) {
    var nameInput  = document.getElementById("rsvpName");
    var emailInput = document.getElementById("rsvpEmail");

    var messageInput = document.getElementById("rsvpMessage");

    nameInput.addEventListener("blur", function () {
      validateField(nameInput, "rsvpNameError", "Please enter your full name.");
    });
    emailInput.addEventListener("blur", function () {
      validateField(emailInput, "rsvpEmailError", "Please enter a valid email address.");
    });
    messageInput.addEventListener("blur", function () {
      validateField(messageInput, "rsvpMessageError", "Please leave a message for the couple.");
    });
    var guestsInput = document.getElementById("rsvpGuests");
    guestsInput.addEventListener("blur", function () {
      var val = parseInt(guestsInput.value, 10);
      var guestsErr = document.getElementById("rsvpGuestsError");
      if (val < 1 || val > 2 || isNaN(val)) {
        guestsInput.classList.add("is-invalid");
        if (guestsErr) guestsErr.textContent = "Maximum 2 guests allowed.";
      } else {
        guestsInput.classList.remove("is-invalid");
        if (guestsErr) guestsErr.textContent = "";
      }
    });
  }

  /* ── Submit handler ───────────────────────────────────── */
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!validateForm()) return;

      var data = {
        name:       document.getElementById("rsvpName").value.trim(),
        email:      document.getElementById("rsvpEmail").value.trim(),
        guests:     document.getElementById("rsvpGuests").value,
        attendance: form.querySelector('input[name="attendance"]:checked').value,
        message:    document.getElementById("rsvpMessage").value.trim(),
        timestamp:  new Date().toISOString(),
      };

      var submitBtn = form.querySelector('button[type="submit"]');
      var originalText = submitBtn.textContent;

      // Show loading state
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";

      function onSuccess() {
        form.setAttribute("hidden", "");
        var whatsappEl = overlay.querySelector(".modal__whatsapp");
        if (whatsappEl) whatsappEl.setAttribute("hidden", "");
        var headingEl = document.getElementById("rsvpModalHeading");
        var subtextEl = document.getElementById("rsvpModalSubtext");
        if (headingEl) headingEl.setAttribute("hidden", "");
        if (subtextEl) subtextEl.setAttribute("hidden", "");
        successPanel.removeAttribute("hidden");
        showToast(W.rsvp.successMessage);
        form.reset();
        clearErrors();
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }

      function saveToLocal() {
        var existing = [];
        try {
          existing = JSON.parse(localStorage.getItem("wedding_rsvps")) || [];
        } catch (_) { /* ignore */ }
        existing.push(data);
        localStorage.setItem("wedding_rsvps", JSON.stringify(existing));
      }

      // Send to Google Sheets if URL is configured
      var sheetUrl = W.rsvp.googleSheetUrl;
      if (sheetUrl) {
        fetch(sheetUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        })
        .then(function () {
          saveToLocal();
          onSuccess();
        })
        .catch(function () {
          saveToLocal();
          onSuccess();
          showToast("RSVP saved locally — we'll sync later.");
        });
      } else {
        // No Google Sheet URL configured — localStorage only
        saveToLocal();
        onSuccess();
      }
    });
  }

  function clearErrors() {
    form.querySelectorAll(".is-invalid").forEach(function (el) {
      el.classList.remove("is-invalid");
    });
    form.querySelectorAll(".form-error").forEach(function (el) {
      el.textContent = "";
    });
  }

  /* ── Copy RSVP message to clipboard ───────────────────── */
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var nameVal   = document.getElementById("rsvpName").value.trim() || "[Your Name]";
      var guestsVal = document.getElementById("rsvpGuests").value || "1";
      var attendVal = form.querySelector('input[name="attendance"]:checked');
      var attending = attendVal ? (attendVal.value === "yes" ? "Joyfully Accept" : "Regretfully Decline") : "[Not selected]";
      var msgVal    = document.getElementById("rsvpMessage").value.trim();

      var text =
        "Hi " + W.couple.short + "!\n\n" +
        "RSVP for your wedding on " + W.date.numeric + ":\n\n" +
        "Name: " + nameVal + "\n" +
        "Guests: " + guestsVal + "\n" +
        "Attendance: " + attending + "\n" +
        (msgVal ? "Message: " + msgVal + "\n" : "") +
        "\nCongratulations! 🎉";

      navigator.clipboard.writeText(text).then(function () {
        showToast("RSVP message copied to clipboard!");
      }).catch(function () {
        // Fallback for older browsers
        fallbackCopy(text);
        showToast("RSVP message copied!");
      });
    });
  }

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (_) { /* ignore */ }
    document.body.removeChild(ta);
  }

  /* ── Toast notification ───────────────────────────────── */
  var toastTimer = null;

  function showToast(message) {
    if (!toast) return;

    clearTimeout(toastTimer);

    toast.textContent = message;
    toast.removeAttribute("hidden");

    // Force reflow
    void toast.offsetHeight;
    toast.classList.add("is-visible");

    toastTimer = setTimeout(function () {
      toast.classList.remove("is-visible");
      setTimeout(function () {
        toast.setAttribute("hidden", "");
      }, 300);
    }, 3500);
  }
})();
