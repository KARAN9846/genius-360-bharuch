import { Award, Medal, Trophy } from "lucide-react";

import CelebrationConfetti from "./CelebrationConfetti";

const recognitionItems = [
  {
    title: "Scholarship Opportunities",
    description:
      "Top-performing students may receive scholarship benefits based on their performance.",
    icon: Trophy,
  },
  {
    title: "Top Performer Recognition",
    description:
      "Outstanding performance is recognised and celebrated to encourage young learners.",
    icon: Medal,
  },
  {
    title: "Achievement Certificates",
    description:
      "Students can receive certificates recognising their participation and achievement.",
    icon: Award,
  },
];

export default function ScholarshipRecognition() {
  return (
    <section
      id="scholarship"
      className="relative isolate w-full overflow-hidden bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {/* Celebration layer */}
      <CelebrationConfetti />

      {/* Section content */}
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-red-600">
            Scholarships & Recognition
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#0B1220] sm:text-4xl lg:text-5xl">
            Scholarships & Recognition
            <span className="block text-blue-700">for Top Performers</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            An opportunity for young learners to challenge themselves,
            demonstrate their potential and get recognised for their
            performance.
          </p>
        </div>

        {/* Recognition cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 min-[900px]:max-[1024px]:grid-cols-3 min-[900px]:max-[1024px]:gap-5">
          {recognitionItems.map((item, index) => {
            const Icon = item.icon;
            const centeredTabletCard =
              index === recognitionItems.length - 1
                ? "md:max-[900px]:col-span-2 md:max-[900px]:mx-auto md:max-[900px]:w-1/2 min-[900px]:max-[1024px]:col-span-1 min-[900px]:max-[1024px]:mx-0 min-[900px]:max-[1024px]:w-full"
                : "";

            return (
              <article
                key={item.title}
                className={`rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md sm:p-7 ${centeredTabletCard}`}
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                  <Icon size={28} strokeWidth={2} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-[#0B1220]">
                  {item.title}
                </h3>

                <p className="mx-auto mt-3 max-w-[280px] text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Bottom highlight */}
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-blue-100 bg-white px-5 py-4 text-center shadow-sm sm:mt-10 sm:px-6 sm:py-5">
          <p className="text-sm font-medium text-[#0B1220] sm:text-base">
            Give your child a chance to{" "}
            <span className="text-blue-700">challenge, perform and shine.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
