import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
} from "lucide-react";
import { examInfo } from "@/data/exam";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date(date));
}

export default function SyllabusComingSoon() {
  const examDate = formatDate(examInfo.examDate);
  const registrationDeadline = formatDate(examInfo.registration.lastDate);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFC]">
      <section className="relative flex min-h-[calc(100vh-5rem)] items-center px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-[#1769E0]/[0.06] blur-3xl"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#E53935]/[0.05] blur-3xl"
        />

        <div className="relative mx-auto w-full max-w-5xl">
          {/* Main card */}
          <div className="overflow-hidden rounded-3xl border border-[#E4E7EC] bg-white shadow-xl shadow-slate-200/50">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              {/* Main content */}
              <div className="px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
                {/* Status badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-[#1769E0]"
                  />

                  <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#1769E0]">
                    Coming Soon
                  </span>
                </div>

                {/* Main heading */}
                <h1 className="mt-6 max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-[#101828] sm:text-5xl">
                  Syllabus <span className="text-[#1769E0]">Coming Soon</span>
                </h1>

                {/* Main explanation */}
                <p className="mt-5 max-w-xl text-sm leading-6 text-[#667085] sm:text-base sm:leading-7">
                  It will be published here soon.
                </p>

                <p className="mt-3 max-w-xl text-sm leading-6 text-[#667085] sm:text-base">
                  Please check back for the complete subject-wise syllabus and
                  topics.
                </p>

                {/* Status message */}
                <div className="mt-7 flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50/70 p-4">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#1769E0]"
                    strokeWidth={2}
                  />

                  <div>
                    <p className="text-sm font-semibold text-[#174EA6]">
                      The syllabus will be available here soon.
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#667085]">
                      Once officially released, this page will be updated with
                      the complete syllabus.
                    </p>
                  </div>
                </div>

                {/* Important dates */}
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {/* Exam Date */}
                  <div className="rounded-xl border border-[#E4E7EC] bg-[#F8FAFC] p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#1769E0]">
                        <CalendarDays size={18} strokeWidth={2} />
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#98A2B3]">
                          Exam Date
                        </p>

                        <p className="mt-0.5 text-sm font-bold text-[#101828]">
                          {examDate}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Registration Deadline */}
                  <div className="rounded-xl border border-[#E4E7EC] bg-[#F8FAFC] p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[#E53935]">
                        <Clock3 size={18} strokeWidth={2} />
                      </div>

                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#98A2B3]">
                          Registration Ends
                        </p>

                        <p className="mt-0.5 text-sm font-bold text-[#101828]">
                          {registrationDeadline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={examInfo.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#E53935] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-500/10 transition-all duration-200 hover:bg-[#D32F2F] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-offset-2 sm:w-auto"
                  >
                    Register Now
                    <ArrowRight
                      size={18}
                      strokeWidth={2.5}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </a>

                  <a
                    href="/"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-[#D0D5DD] bg-white px-6 py-3.5 text-sm font-semibold text-[#344054] transition-colors duration-200 hover:bg-[#F8FAFC] sm:w-auto"
                  >
                    <ArrowLeft size={17} strokeWidth={2} />
                    Back to Home
                  </a>
                </div>
              </div>

              {/* Visual panel */}
              <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#0B2F6B] px-6 py-12 sm:min-h-[340px] lg:min-h-full">
                {/* Decorative circles */}
                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-20 h-56 w-56 rounded-full border-[35px] border-white/[0.05]"
                />

                <div
                  aria-hidden="true"
                  className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border-[40px] border-[#1769E0]/20"
                />

                {/* Visual content */}
                <div className="relative max-w-xs text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-white shadow-lg ring-1 ring-white/10">
                    <BookOpen size={38} strokeWidth={1.7} />
                  </div>

                  <h2 className="mt-6 text-2xl font-bold text-white">
                    Detailed Syllabus
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-blue-100/75">
                    Subject-wise topics and preparation details will be
                    available here once the syllabus is officially released.
                  </p>

                  {/* Coming soon indicator */}
                  <div className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-4 py-2">
                    <FileText
                      size={15}
                      className="text-[#60A5FA]"
                      strokeWidth={2}
                    />

                    <span className="text-xs font-semibold text-blue-100">
                      Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <p className="mt-5 text-center text-xs text-[#98A2B3] sm:text-sm">
            The syllabus will be updated on this page once it is officially
            released.
          </p>
        </div>
      </section>
    </main>
  );
}
