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
    person2: "Jane Diaz",
    // Short version used in footer / compact spots
    short: "Adam & Jane",
  },

  /* ── Date & Time ────────────────────────────────── */
  date: {
    full: "July 31, 2026",
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
    churchCoords: "14.422576739443441,121.03185609178465",
    reception: {
      name: "Acacia Sequoia Ballroom",
      coords: "14.420794773525193,121.03530093118874",
    },
  },

  /* ── Hero section ───────────────────────────────── */
  hero: {
    preHeading: "You are cordially invited to the wedding of",
    ctaText: "RSVP",
  },

  /* ── Our Story ──────────────────────────────────── */
  story: {
    heading: "Our Story",
    image: "images/babys.png",
    imageAlt: "Photo of the happy couple",
    paragraphs: [
  "It all started at the gym — somewhere between burpees, sweat, and trying to survive the workout.",
  "What began with friendly hellos and a casual 'What’s your plan after this?' soon led to a dinner date. One dinner turned into more dinners, and before we knew it, we were spending more time together outside the gym than inside it.",
  "Then we decided to take a little adventure together — Phuket. Between beach sunsets, great food (and beers), and lots of laughter, something became very clear: this wasn’t just a holiday… we were falling in love.",
  "And somehow, those sweaty gym sessions led us here — getting married and starting our forever. 💍"
],
  },

  /* ── Save the Date ──────────────────────────────── */
  saveTheDate: {
    heading: "Save the Date",
    note: "Kindly respond by April 15, 2026",
  },

  /* ── Details ────────────────────────────────────── */
  details: {
  heading: "Celebration Details",
  items: [
    {
      label: "Ceremony",
      text: "The 'I Do's' begin at 3:00 PM at St. Jerome Emiliani and Sta. Susana Parish, Alabang. Arrive early — we promise it’ll be worth it.",
    },
    {
      label: "Dinner & Reception",
      text: "Join us for dinner, drinks, and questionable dance moves at the Acacia Sequoia Ballroom (16th floor) starting at 5:00 PM. Bring your best dance steps.",
    },
    {
      label: "Dress Code",
      text: "Formal evening attire. Kindly avoid wearing white (the bride called dibs). Bonus points if you match our wedding color palette.",
    },
  ],
},

  /* ── RSVP ───────────────────────────────────────── */
  rsvp: {
    // Paste your Google Apps Script web-app URL here (see setup instructions)
    googleSheetUrl: "",
    heading: "Will You Join Us?",
    subtext: "We would be honoured by your presence. Please let us know if you can make it.",
    whatsappNote: "Prefer WhatsApp  ? Copy a pre-filled message below.",
    successMessage: "Thank you! Your RSVP has been received.",
  },

  /* ── Entourage ──────────────────────────────────── */
  entourage: {
    heading: "Our Entourage",
    subtext: "The wonderful people walking beside us on our special day.",
    groups: [
      {
        role: "Parents of the Bride",
        members: ["Mr. & Mrs. Bride's Parent"],
      },
      {
        role: "Parents of the Groom",
        members: ["Mr. & Mrs. Groom's Parent"],
      },
      {
        role: "Principal Sponsors",
        members: ["Mr. & Mrs. Sponsor 1", "Mr. & Mrs. Sponsor 2"],
      },
      {
        role: "Maid of Honor",
        members: ["Name Here"],
      },
      {
        role: "Best Man",
        members: ["Name Here"],
      },
      {
        role: "Bridesmaids",
        members: ["Name 1", "Name 2", "Name 3"],
      },
      {
        role: "Groomsmen",
        members: ["Name 1", "Name 2", "Name 3"],
      },
      {
        role: "Secondary Sponsors — Candle",
        members: ["Name & Name", "Name & Name"],
      },
      {
        role: "Secondary Sponsors — Veil",
        members: ["Name & Name", "Name & Name"],
      },
      {
        role: "Secondary Sponsors — Cord",
        members: ["Name & Name", "Name & Name"],
      },      
      {
        role: "Flower Girls",
        members: ["Name Here"],
      },
      {
        role: "Ring Bearer",
        members: ["Name Here"],
      },
    ],
  },

  /* ── Footer ─────────────────────────────────────── */
  footer: {
    email: "(+65)87141800 / (+65)94274880",
    note: "Made with love",
  },
};
