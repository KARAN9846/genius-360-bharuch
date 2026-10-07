export const examInfo = {
  name: "Genius 360 Bharuch",

  positioning: "Bharuch's First Big Scholarship Exam",

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
  },

  scholarship: {
    title: "Scholarships & Recognition for Top Performers",
  },

  registration: {
    status: "coming-soon",
    startDate: null,
    lastDate: null,
  },

  additionalDetails: {
    duration: null,
    mode: null,
    venue: null,
    fee: null,
    admitCard: null,
    result: null,
  },
} as const;
