import { BookOpen, GraduationCap, Target, Sparkles } from "lucide-react";
import { examInfo } from "@/data/exam";

export default function SyllabusHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-blue-100 bg-gradient-to-br from-white via-[#F5F9FF] to-[#FFF5F4]">
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 -z-10 h-56 w-56 rounded-full bg-blue-200/25 blur-3xl sm:h-72 sm:w-72"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-56 w-56 rounded-full bg-red-200/20 blur-3xl sm:h-72 sm:w-72"
      />

      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        {/* Hero Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/90 px-3.5 py-1.5 shadow-sm shadow-blue-100/50">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50">
              <BookOpen
                size={14}
                strokeWidth={2.2}
                className="text-[#1769E0]"
                aria-hidden="true"
              />
            </span>

            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#1769E0] sm:text-xs">
              Exam Syllabus
            </span>

            <Sparkles size={13} className="text-[#E53935]" aria-hidden="true" />
          </div>

          <h1 className="mt-5 text-[2rem] font-extrabold leading-[1.12] tracking-tight text-[#101828] sm:mt-6 sm:text-4xl sm:leading-tight lg:text-5xl">
            Complete
            <span className="mt-1 block bg-gradient-to-r from-[#1769E0] to-[#1746B4] bg-clip-text text-transparent sm:mt-0 sm:inline">
              {" "}
              Exam Syllabus
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-[13px] leading-6 text-[#667085] sm:mt-4 sm:text-base sm:leading-7">
            Explore the subject-wise syllabus for the{" "}
            <span className="font-bold text-[#344054]">{examInfo.name}</span>{" "}
            and prepare confidently for the scholarship exam.
          </p>
        </div>

        {/* Exam Information Cards */}
        <div className="mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-2.5 sm:mt-8 sm:grid-cols-3 sm:gap-3">
          {/* Eligibility */}
          <div className="group flex items-center gap-3 rounded-2xl border border-blue-100 bg-white/90 p-3.5 shadow-sm shadow-blue-100/30 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:justify-center sm:gap-3.5 sm:px-4 sm:py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-[#1769E0] transition-transform duration-200 group-hover:scale-105 sm:h-11 sm:w-11">
              <GraduationCap size={21} strokeWidth={2} aria-hidden="true" />
            </div>

            <div className="min-w-0 text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#98A2B3]">
                Eligibility
              </p>

              <p className="mt-0.5 text-sm font-extrabold text-[#101828] sm:text-[15px]">
                Std 5–7
              </p>
            </div>

            <div className="ml-auto h-8 w-1 rounded-full bg-blue-100 sm:hidden" />
          </div>

          {/* Boards */}
          <div className="group flex items-center gap-3 rounded-2xl border border-red-100 bg-white/90 p-3.5 shadow-sm shadow-red-100/30 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-200 hover:shadow-md sm:justify-center sm:gap-3.5 sm:px-4 sm:py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100 text-[#E53935] transition-transform duration-200 group-hover:scale-105 sm:h-11 sm:w-11">
              <Target size={21} strokeWidth={2} aria-hidden="true" />
            </div>

            <div className="min-w-0 text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#98A2B3]">
                Boards
              </p>

              <p className="mt-0.5 text-sm font-extrabold text-[#101828] sm:text-[15px]">
                CBSE • GSEB
              </p>
            </div>

            <div className="ml-auto h-8 w-1 rounded-full bg-red-100 sm:hidden" />
          </div>

          {/* Exam Pattern */}
          <div className="group flex items-center gap-3 rounded-2xl border border-indigo-100 bg-white/90 p-3.5 shadow-sm shadow-indigo-100/30 transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md sm:justify-center sm:gap-3.5 sm:px-4 sm:py-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100 text-indigo-600 transition-transform duration-200 group-hover:scale-105 sm:h-11 sm:w-11">
              <BookOpen size={21} strokeWidth={2} aria-hidden="true" />
            </div>

            <div className="min-w-0 text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#98A2B3]">
                Exam Pattern
              </p>

              <p className="mt-0.5 text-sm font-extrabold text-[#101828] sm:text-[15px]">
                100 Marks • MCQ
              </p>
            </div>

            <div className="ml-auto h-8 w-1 rounded-full bg-indigo-100 sm:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
}
