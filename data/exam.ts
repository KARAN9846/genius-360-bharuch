export const examInfo = {
  name: "Genius 360 Bharuch",

  positioning: "Registration Ends 31 Oct 2026",

  examDate: "2026-12-13T00:00:00+05:30",

  registrationUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSd-7pdZUm-Ib6ZGDhMSdlAftD12AAv3PAXJB5ruJ4Kxjeu89w/viewform",

  contact: {
    phone: "9913006732",
    whatsapp: "919913006732",
  },

  eligibility: {
    standards: ["Std 5", "Std 6", "Std 7"],
    boards: ["CBSE", "GSEB"],
    mediums: ["English", "Gujarati"],
  },

  examPattern: {
    totalMarks: 100,
    type: "MCQ",
    duration: "2 hours",
    mode: "Offline",
  },

  venue: "At designated Mahavir Classes centres across Bharuch",

  registration: {
    status: "open",
    startDate: null,
    lastDate: "2026-10-31T23:59:59+05:30",
    fee: 200,
    feeNote: "Non-refundable",
  },

  scholarship: {
    title: "Scholarships & Recognition for Top Performers",
  },

  admitCard: {
    title: "Admit Card / Hall Ticket",
    date: "2026-12-09",
  },

  result: {
    date: "2026-12-25",
  },
} as const;
