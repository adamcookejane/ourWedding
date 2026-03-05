/**
 * ========================================================
 *  WEDDING CONFIG — Edit all your details here!
 * ========================================================
 *  Every piece of text on the site comes from this file.
 *  Change names, dates, colours, story text, etc. below
 *  and the page updates automatically.
 * ========================================================
 */

const WEDDING = {
  /* ── Couple ─────────────────────────────────────── */
  couple: {
    person1: "Adam Cooke",
    person2: "Jane Diazzz",
    // Short version used in footer / compact spots
    short: "Adam & Jane",
  },

  /* ── Date & Time ────────────────────────────────── */
  date: {
    full: "Friday, the Thirty-First of July",
    numeric: "July 31, 2026",
    iso: "2026-07-31",          
    time: "3:00 PM – 10:00 PM",
    ceremony: "3:00 PM",
    reception: "5:00 PM",
  },

  /* ── Venue ──────────────────────────────────────── */
  venue: {
    name: "St. Jerome Emiliani and Sta. Susana Parish",
    addressLine1: "Alabang, Muntinlupa City,",
    addressLine2: "Philippines",
    mapUrl: "https://maps.app.goo.gl/EV77mgmkJa4twSjt7",
  },

  /* ── Hero section ───────────────────────────────── */
  hero: {
    preHeading: "You are cordially invited to the wedding of",
    ctaText: "RSVP",
  },

  /* ── Our Story ──────────────────────────────────── */
  story: {
    heading: "Our Story",
    image: "images/couple-placeholder.svg",
    imageAlt: "Photo of the happy couple",
    paragraphs: [
      "We met on a rainy afternoon in October 2019, quite by accident, at a small bookshop on Elm Street. Bryan was reaching for the last copy of a poetry collection — the same one .. had been hunting for weeks.",
      "What started as a friendly argument over who deserved the book turned into coffee, then dinner, then a thousand more conversations that never seemed to end. Three years, two apartments, and one very spoiled golden retriever later, Bryan proposed on the same corner where it all began.",
      "Now we're writing the next chapter — and we want you there for the opening line.",
    ],
  },

  /* ── Save the Date ──────────────────────────────── */
  saveTheDate: {
    heading: "Save the Date",
    note: "Kindly respond by May 15, 2026",
  },

  /* ── Details ────────────────────────────────────── */
  details: {
    heading: "Celebration Details",
    items: [
      {
        label: "Ceremony",
        text: "An intimate outdoor ceremony begins at 4:00 PM in the Garden Pavilion.",
      },
      {
        label: "Cocktail Hour",
        text: "Join us for cocktails and canapés on the terrace at 5:00 PM.",
      },
      {
        label: "Dinner & Reception",
        text: "A plated dinner followed by dancing in the Grand Ballroom at 6:00 PM.",
      },
      {
        label: "Musical Guest",
        text: "Live performance by The Moonlight Quartet.",
      },
      {
        label: "Dress Code",
        text: "Black-tie optional. We encourage guests to dress in evening attire.",
      },
    ],
  },

  /* ── RSVP ───────────────────────────────────────── */
  rsvp: {
    // Paste your Google Apps Script web-app URL here (see setup instructions)
    googleSheetUrl: "",
    heading: "Will You Join Us?",
    subtext: "We would be honoured by your presence. Please let us know if you can make it.",
    whatsappNote: "Prefer WhatsApp? Copy a pre-filled message below.",
    successMessage: "Thank you! Your RSVP has been received.",
  },

  /* ── Registry ───────────────────────────────────── */
  registry: {
    heading: "Gift Registry",
    subtext: "Your presence is our greatest gift. If you wish to honour us further, we are registered at the following:",
    items: [
      {
        name: "Amazon",
        url: "#",
        description: "Home & kitchen essentials",
      },
      {
        name: "Crate & Barrel",
        url: "#",
        description: "Dining & entertaining",
      },
      {
        name: "Honeymoon Fund",
        url: "#",
        description: "Help us explore the Amalfi Coast",
      },
    ],
  },

  /* ── Footer ─────────────────────────────────────── */
  footer: {
    email: "hello@adamandjanewedding.com",
    note: "Made with love",
  },
};
