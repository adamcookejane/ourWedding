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
    churchCoords: "14.422397514704853, 121.03176298977537",
    reception: {
      name: "Acacia Hotel Manila",
      address: "Filinvest Corporate City Alabang, Muntinlupa City, Philippines",
      coords: "14.42069628709095, 121.03524591496492",
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
  "What began with friendly hellos and a casual ‘What’s your plan after this?’ soon led to a dinner date. One dinner turned into more dinners, and before we knew it, we were spending more time together outside the gym than inside it.",
  "Then we decided to take a little adventure together — Phuket. Between beach sunsets, great food (and beers), and lots of laughter, something became very clear: this wasn’t just a holiday… we were falling in love.",
  "And somehow, those sweaty gym sessions led us here — getting married and starting our forever. 💍"
],
    // Images inserted after a paragraph (0-based index). Replace src with real photos.
    inlineImages: [
      { afterParagraph: 2, src: "images/story-phuket.jpg",  alt: "Our trip to Phuket" },
      { afterParagraph: 3, src: "images/story-forever.jpg", alt: "Our forever begins" },
    ],
  },

  /* ── Save the Date ──────────────────────────────── */
  saveTheDate: {
    heading: "The Big Day",
    note: "Kindly respond by May 15, 2026",
  },

  /* ── Details ────────────────────────────────────── */
  details: {
  heading: "Celebration Details",
  items: [
    {
      label: "Ceremony",
      text: "The 'I Do's' begin at 3:00 PM at St. Jerome Emiliani and Sta. Susana Parish, Alabang.",
    },
    {
      label: "Dinner & Reception",
      text: "Join us for dinner, drinks, and questionable dance moves at the Acacia Sequoia Ballroom (16th floor) starting at 5:00 PM. Bring your best dance steps.",
    },
    {
      label: "Dress Code",
      text: "Formal evening attire. White is reserved for the bride. Feel free to embrace our wedding palette of rose gold, pale rose, sage green, and dusty blue.",
    },
  ],
},

  /* ── RSVP ───────────────────────────────────────── */
  rsvp: {
    // Paste your Google Apps Script web-app URL here (see setup instructions)
    googleSheetUrl: "https://script.google.com/macros/s/AKfycbyKxh7WF5_2ODyRAWA2KN6KNaig3Uas9aGeRyufuyRSOIjVmyv0GtXOlPx-_R6mveAtZw/exec",
    heading: "Will You Join Us?",
    subtext: "We would be honoured by your presence. Please let us know if you can make it.",
    whatsappNote: "",
    successMessage: "Thank you! Your RSVP has been received. Maraming salamat po!",
  },

  /* ── Entourage ──────────────────────────────────── */
  entourage: {
    heading: "Our Entourage",
    subtext: "The wonderful people walking beside us on our special day.",
    groups: [
      {
        role: "Parents of the Bride",
        members: ["Thelma Diaz", "Rodrigo Diaz"],
      },
      {
        role: "Parents of the Groom",
        members: ["Winifred Ryan", "Daniel Cooke"],
      },
      {
        role: "Principal Sponsors",
        members: ["Mrs. Jocelyn Ponce and Mr. Romy Ballesteros", "Mr. Nathaniel Ballesteros & Mrs. Sponsor 2"],
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
        members: ["Mclaren Diaz"],
      },
    ],
  },

  /* ── Footer ─────────────────────────────────────── */
  footer: {
    email: "(+65) 94274880",
    note: "Made with love",
  },
};
