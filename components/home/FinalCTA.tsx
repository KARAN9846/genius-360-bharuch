import {
  ArrowRight,
  CalendarDays,
  Clock3,
  IndianRupee,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { examInfo } from "@/data/exam";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date(date));
}

export default function FinalCTA() {
  const examDate = formatDate(examInfo.examDate);
  const registrationDeadline = formatDate(examInfo.registration.lastDate);

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#1769E0]/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#E53935]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Main CTA container */}
        <div className="relative overflow-hidden rounded-3xl bg-[#0B2F6B] shadow-xl shadow-[#0B2F6B]/10">
          {/* Decorative shapes */}
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full border-[40px] border-white/[0.04]"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border-[50px] border-[#1769E0]/10"
          />

          <div className="relative grid lg:grid-cols-[1.15fr_0.85fr]">
            {/* Left content */}
            <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-3.5 py-1.5">
                <Sparkles
                  size={14}
                  className="text-[#60A5FA]"
                  strokeWidth={2}
                />

                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-100">
                  Ready for the Challenge?
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[3.25rem]">
                Give Your Child a Chance to{" "}
                <span className="text-[#60A5FA]">Shine</span>
              </h2>

              <p className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                at Genius 360°
              </p>

              {/* Description */}
              <p className="mt-5 max-w-xl text-sm leading-6 text-blue-100/80 sm:text-base sm:leading-7">
                Take the challenge, demonstrate your potential and be part of
                Bharuch&apos;s First Big Scholarship Exam.
              </p>

              {/* Deadline */}
              <div className="mt-7 flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#60A5FA]">
                  <CalendarDays size={18} strokeWidth={2} />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-blue-100/60">
                    Registration closes
                  </p>

                  <p className="mt-1 text-sm font-bold text-white sm:text-base">
                    {registrationDeadline}
                  </p>
                </div>
              </div>

              {/* CTA + help */}
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <a
                  href={examInfo.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#E53935] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/10 transition-all duration-200 hover:bg-[#D32F2F] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#0B2F6B] sm:w-auto"
                >
                  Register Now
                  <ArrowRight
                    size={18}
                    strokeWidth={2.5}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href={`tel:${examInfo.contact.phone}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-100/75 transition-colors hover:text-white"
                >
                  <Phone size={15} strokeWidth={2} />
                  Need help? {examInfo.contact.phone}
                </a>
              </div>
            </div>

            {/* Right information panel */}
            <div className="border-t border-white/10 bg-white/[0.05] px-6 py-8 sm:px-10 sm:py-10 lg:border-l lg:border-t-0 lg:px-10 lg:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue-100/60">
                Exam Details
              </p>

              {/* Exam date */}
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.07] p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1769E0] text-white">
                    <CalendarDays size={20} strokeWidth={2} />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-blue-100/60">
                      Exam Date
                    </p>

                    <p className="mt-0.5 text-lg font-bold text-white">
                      {examDate}
                    </p>
                  </div>
                </div>

                <p className="mt-3 text-xs leading-5 text-blue-100/60">
                  {examInfo.positioning}
                </p>
              </div>

              {/* Quick facts */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                  <Clock3
                    size={17}
                    className="text-[#60A5FA]"
                    strokeWidth={2}
                  />

                  <p className="mt-2 text-xs text-blue-100/55">Duration</p>

                  <p className="mt-0.5 text-sm font-bold text-white">
                    {examInfo.examPattern.duration}
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                  <span className="text-base font-bold text-[#60A5FA]">
                    MCQ
                  </span>

                  <p className="mt-2 text-xs text-blue-100/55">Exam Type</p>

                  <p className="mt-0.5 text-sm font-bold text-white">
                    {examInfo.examPattern.type}
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                  <IndianRupee
                    size={17}
                    className="text-[#60A5FA]"
                    strokeWidth={2}
                  />

                  <p className="mt-2 text-xs text-blue-100/55">
                    Registration Fee
                  </p>

                  <p className="mt-0.5 text-sm font-bold text-white">
                    ₹{examInfo.registration.fee}
                  </p>

                  <p className="mt-0.5 text-[10px] text-blue-100/50">
                    {examInfo.registration.feeNote}
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                  <span className="text-sm font-bold text-[#60A5FA]">
                    OFFLINE
                  </span>

                  <p className="mt-2 text-xs text-blue-100/55">Mode</p>

                  <p className="mt-0.5 text-sm font-bold text-white">
                    {examInfo.examPattern.mode}
                  </p>
                </div>
              </div>

              {/* Venue */}
              <div className="mt-4 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.06] p-4">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#60A5FA]"
                  strokeWidth={2}
                />

                <div>
                  <p className="text-xs text-blue-100/55">Exam Venue</p>

                  <p className="mt-1 text-sm font-medium leading-5 text-white">
                    {examInfo.venue}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom reassurance */}
        <p className="mt-5 text-center text-xs text-[#667085] sm:text-sm">
          Challenge yourself. Discover your potential. Make your mark.
        </p>
      </div>
    </section>
  );
}
