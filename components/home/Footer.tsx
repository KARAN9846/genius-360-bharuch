import { ArrowUpRight, CalendarDays, Phone } from "lucide-react";

import { examInfo } from "@/data/exam";

export default function Footer() {
  const examDate = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date(examInfo.examDate));

  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to enquire about registration for the Genius 360° Bharuch Scholarship Exam. Please share the registration details.",
  );

  const whatsappUrl = `https://wa.me/${examInfo.contact.whatsapp}?text=${whatsappMessage}`;

  return (
    <footer className="relative overflow-hidden border-t border-[#E4E7EC] bg-[#F8FAFC]">
      {/* Decorative background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#1769E0]/[0.06] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-20 h-64 w-64 rounded-full bg-[#E53935]/[0.05] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-12">
          {/* Brand */}
          <div>
            <a href="/" className="inline-flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-[#2046B8]">
                GENIUS <span className="text-[#E53935]">360°</span>
              </span>

              <span className="mt-0.5 text-[9px] font-semibold tracking-[0.18em] text-[#667085]">
                BY MAHAVIR CLASSES
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[#667085]">
              {examInfo.positioning}. A platform for young learners to challenge
              themselves, perform and shine.
            </p>

            {/* Exam date */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#EFF6FF] px-3 py-2 text-sm text-[#475467]">
              <CalendarDays
                size={16}
                className="text-[#1769E0]"
                strokeWidth={2}
              />

              <span className="font-semibold text-[#101828]">{examDate}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-[#101828]">Quick Links</h3>

            <nav className="mt-4 flex flex-col gap-3">
              <a
                href="/"
                className="w-fit text-sm text-[#667085] transition-colors duration-200 hover:text-[#1769E0]"
              >
                Home
              </a>

              <a
                href="/syllabus"
                className="w-fit text-sm text-[#667085] transition-colors duration-200 hover:text-[#1769E0]"
              >
                Syllabus
              </a>

              <a
                href={examInfo.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-[#E53935] transition-colors duration-200 hover:text-[#C62828]"
              >
                Register Now
                <ArrowUpRight size={14} strokeWidth={2.2} />
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-[#101828]">Need Help?</h3>

            <p className="mt-4 text-sm leading-6 text-[#667085]">
              Have a question about registration or the exam?
            </p>

            {/* Phone */}
            <a
              href={`tel:${examInfo.contact.phone}`}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#EFF6FF] px-3.5 py-2.5 text-sm font-bold text-[#1769E0] transition-all duration-200 hover:bg-[#DBEAFE] hover:shadow-sm"
            >
              <Phone size={16} strokeWidth={2} />

              {examInfo.contact.phone}
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Genius 360° on WhatsApp"
              className="mt-2.5 inline-flex items-center gap-2 rounded-lg bg-[#EAF8F0] px-3.5 py-2.5 text-sm font-bold text-[#128C4A] transition-all duration-200 hover:bg-[#DCF4E6] hover:shadow-sm"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-[17px] w-[17px] fill-current"
              >
                <path d="M20.52 3.48A11.82 11.82 0 0 0 12.04 0C5.53 0 .24 5.29.24 11.8c0 2.08.54 4.11 1.57 5.9L.14 24l6.45-1.64a11.78 11.78 0 0 0 5.45 1.34h.01c6.51 0 11.8-5.29 11.8-11.8 0-3.15-1.22-6.11-3.33-8.32ZM12.05 21.7h-.01a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.83.98 1.02-3.73-.23-.38a9.84 9.84 0 1 1 8.43 4.71Zm5.4-7.39c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.51-1.78-1.69-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
              </svg>

              {examInfo.contact.phone}
            </a>

            <p className="mt-3 text-xs text-[#98A2B3]">
              Available for exam-related assistance.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-3 border-t border-[#E4E7EC] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#98A2B3]">
            © {new Date().getFullYear()} Genius 360° by Mahavir Classes. All
            rights reserved.
          </p>

          <p className="text-xs font-medium text-[#667085]">
            Challenge. Perform. Shine.
          </p>
        </div>
      </div>
    </footer>
  );
}
