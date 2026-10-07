import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { examInfo } from "@/data/exam";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center px-4 pb-8 pt-4 sm:px-6 sm:pb-10 sm:pt-5 lg:grid-cols-[0.92fr_1.08fr] lg:gap-2 lg:px-8 lg:pb-10 lg:pt-7">
        {/* Content */}
        <div className="relative z-10 order-2 mx-auto flex w-full max-w-[560px] flex-col items-center text-center lg:order-1 lg:mx-0 lg:items-start lg:py-4 lg:text-left">
          {/* Positioning badge */}
          <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-red-100 bg-red-50 px-3.5 py-2 text-xs font-semibold text-red-700 sm:mb-5 sm:text-sm">
            <span
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-600"
              aria-hidden="true"
            />

            <span>{examInfo.positioning}</span>
          </div>

          {/* Main heading */}
          <h1 className="max-w-xl text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl">
            <span className="text-red-600">Genius 360°</span>
            <span className="block text-blue-700">Bharuch</span>
          </h1>

          {/* Supporting title */}
          <div className="mt-3 flex flex-col items-center gap-2 lg:mt-1 lg:flex-row lg:items-center lg:gap-3">
            <div
              className="h-1 w-8 shrink-0 rounded-full bg-red-600 lg:h-8 lg:w-1"
              aria-hidden="true"
            />

            <p className="max-w-md text-base font-semibold leading-7 text-slate-700 sm:text-lg sm:leading-8">
              Junior Level Competitive Scholarship Exam
            </p>
          </div>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-[320px] text-sm leading-6 text-slate-600 sm:mt-4 sm:max-w-[500px] sm:text-base sm:leading-7 lg:mx-0">
            A platform for young learners to challenge their knowledge,
            reasoning and future-ready thinking.
          </p>

          {/* Eligibility */}
          <div className="mt-4 flex flex-wrap justify-center gap-2 sm:mt-5 lg:justify-start">
            <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-800 sm:text-sm">
              {`Std ${examInfo.eligibility.standards[0].replace("Std ", "")}–${examInfo.eligibility.standards.at(-1)?.replace("Std ", "")}`}
            </span>

            <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 sm:text-sm">
              {examInfo.eligibility.boards.join(" • ")}
            </span>
          </div>

          {/* Medium */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-slate-500 sm:text-sm lg:justify-start">
            <span>Gujarati Medium</span>
            <span className="text-slate-300">•</span>
            <span>English Medium</span>
          </div>

          {/* Actions */}
          <div className="mt-4 flex w-full flex-col items-center gap-3 sm:mt-5 lg:mt-7 lg:w-auto lg:flex-row lg:items-center">
            <Link
              href={examInfo.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full max-w-[340px] items-center justify-center gap-2 rounded-xl bg-red-600 px-6 text-sm font-medium text-white shadow-[0_8px_24px_rgba(229,57,53,0.18)] transition-all hover:bg-red-700 hover:shadow-[0_10px_28px_rgba(229,57,53,0.24)] active:scale-[0.98] sm:px-7 lg:w-auto"
            >
              Register Now
              <ArrowRight size={17} strokeWidth={2.4} aria-hidden="true" />
            </Link>

            <div className="inline-flex min-h-12 w-full max-w-[340px] items-center justify-center gap-2 rounded-xl border border-blue-100 bg-blue-50/70 px-5 text-sm font-bold text-blue-800 lg:w-auto">
              <CalendarDays size={17} strokeWidth={2} aria-hidden="true" />
              <span>13 December 2026</span>
            </div>
          </div>
        </div>

        {/* Hero artwork */}
        <div className="relative order-1 mx-auto h-[190px] w-full sm:h-[280px] md:h-[320px] lg:order-2 lg:mt-0 lg:h-auto lg:min-h-[520px]">
          <Image
            src="/images/genius-360-hero.png"
            alt="Students representing Genius 360 degree Bharuch scholarship examination"
            fill
            priority
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 90vw, 55vw"
            className="object-contain object-center lg:scale-[1.08]"
          />
        </div>
      </div>
    </section>
  );
}
