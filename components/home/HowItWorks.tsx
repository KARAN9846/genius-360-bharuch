import {
  BookOpenCheck,
  ClipboardPenLine,
  FileCheck2,
  Trophy,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Register",
    description:
      "Complete your registration and secure your spot for the Genius 360° Scholarship Exam.",
    icon: ClipboardPenLine,
  },
  {
    number: "02",
    title: "Prepare",
    description:
      "Review the syllabus, strengthen your concepts and get ready for the challenge.",
    icon: BookOpenCheck,
  },
  {
    number: "03",
    title: "Appear",
    description:
      "Be present on 13 December 2026 and give your best in the scholarship examination.",
    icon: FileCheck2,
  },
  {
    number: "04",
    title: "Achieve",
    description:
      "Show your potential and get an opportunity to be recognised for your performance.",
    icon: Trophy,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#1769E0]">
            How It Works
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#101828] sm:text-4xl lg:text-5xl">
            Your Journey to <span className="text-[#1769E0]">Genius 360°</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#667085] sm:text-base">
            From registration to recognition, follow a simple journey designed
            to make your scholarship exam experience easy and clear.
          </p>
        </div>

        {/* Journey */}
        <div className="relative mx-auto mt-14 max-w-6xl">
          {/* Desktop connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-px bg-[#D0D5DD] lg:block"
          />

          <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative flex gap-4 lg:block lg:text-center"
                >
                  {/* Mobile connecting line */}
                  {index < steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute left-[19px] top-12 h-[calc(100%+2.5rem)] w-px bg-[#D0D5DD] lg:hidden"
                    />
                  )}

                  {/* Step marker */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white bg-red-600 shadow-sm lg:mx-auto">
                    <div className="h-2 w-2 rounded-full bg-white" />
                  </div>

                  {/* Content */}
                  <div className="min-w-0 pb-1 lg:mt-6">
                    <div className="flex items-center gap-2 lg:block">
                      <span className="text-xs font-bold tracking-[0.12em] text-[#1769E0]">
                        {step.number}
                      </span>

                      <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#1769E0] lg:mx-auto lg:mt-3">
                        <Icon size={18} strokeWidth={2} />
                      </div>
                    </div>

                    <h3 className="mt-2 text-lg font-bold text-[#101828] sm:text-xl lg:mt-4">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-[#667085] lg:mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
