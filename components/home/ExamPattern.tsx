// import {
//   BrainCircuit,
//   Calculator,
//   FlaskConical,
//   Globe2,
//   Languages,
//   Puzzle,
// } from "lucide-react";

// const examAreas = [
//   {
//     title: "Mathematics",
//     marks: 20,
//     icon: Calculator,
//   },
//   {
//     title: "Science",
//     marks: 20,
//     icon: FlaskConical,
//   },
//   {
//     title: "Technology & AI",
//     marks: 15,
//     icon: BrainCircuit,
//   },
//   {
//     title: "Logic & Reasoning",
//     marks: 15,
//     icon: Puzzle,
//   },
//   {
//     title: "General SST",
//     marks: 15,
//     icon: Globe2,
//   },
//   {
//     title: "Languages",
//     marks: 15,
//     icon: Languages,
//     description: "Hindi • English • Gujarati",
//   },
// ];

// export default function ExamPattern() {
//   return (
//     <section
//       id="exam-pattern"
//       className="w-full bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
//     >
//       <div className="mx-auto max-w-6xl">
//         {/* Section Header */}
//         <div className="mx-auto max-w-2xl text-center">
//           <span className="inline-flex items-center rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-red-600">
//             Exam Pattern
//           </span>

//           <h2 className="mt-5 text-3xl font-semibold tracking-tight text-blue-700 sm:text-4xl lg:text-5xl">
//             A 360° Test of Young Minds
//           </h2>

//           <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
//             A balanced scholarship exam designed to test knowledge, reasoning,
//             awareness and future-ready thinking.
//           </p>
//         </div>

//         {/* Exam Areas */}
//         <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
//           {examAreas.map((area) => {
//             const Icon = area.icon;

//             return (
//               <article
//                 key={area.title}
//                 className="group flex items-center gap-4 rounded-2xl border border-blue-100 bg-[#F7FAFF] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md sm:p-6"
//               >
//                 <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
//                   <Icon size={24} strokeWidth={2} />
//                 </div>

//                 <div className="min-w-0 flex-1">
//                   <h3 className="text-base font-medium text-[#0B1220] sm:text-lg">
//                     {area.title}
//                   </h3>

//                   {area.description && (
//                     <p className="mt-1 text-xs text-slate-500">
//                       {area.description}
//                     </p>
//                   )}
//                 </div>

//                 <div className="shrink-0 text-right">
//                   <span className="block text-2xl font-semibold leading-none text-red-600">
//                     {area.marks}
//                   </span>
//                   <span className="mt-1 block text-[10px] font-medium uppercase tracking-wider text-red-700">
//                     Marks
//                   </span>
//                 </div>
//               </article>
//             );
//           })}
//         </div>

//         {/* Total */}
//         <div className="mt-8 flex justify-center">
//           <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2.5 text-sm font-medium text-blue-800">
//             <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] text-white">
//               ✓
//             </span>
//             100 Marks Total
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import {
  BrainCircuit,
  Calculator,
  FlaskConical,
  Globe2,
  Languages,
  Puzzle,
} from "lucide-react";

const examAreas = [
  {
    title: "Mathematics",
    marks: 20,
    icon: Calculator,
  },
  {
    title: "Science",
    marks: 20,
    icon: FlaskConical,
  },
  {
    title: "Technology & AI",
    marks: 15,
    icon: BrainCircuit,
  },
  {
    title: "Logic & Reasoning",
    marks: 15,
    icon: Puzzle,
  },
  {
    title: "General SST",
    marks: 15,
    icon: Globe2,
  },
  {
    title: "Languages",
    marks: 15,
    icon: Languages,
    description: "Hindi • English • Gujarati",
  },
];

export default function ExamPattern() {
  return (
    <section
      id="exam-pattern"
      className="w-full bg-white px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-red-100 bg-red-50 px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] text-red-600">
            Exam Pattern
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-blue-700 sm:text-4xl lg:text-5xl">
            A 360° Test of Young Minds
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            A balanced scholarship exam designed to test knowledge, reasoning,
            awareness and future-ready thinking.
          </p>
        </div>

        {/* Exam Areas */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3">
          {examAreas.map((area) => {
            const Icon = area.icon;
            const weightage = area.marks;

            return (
              <article
                key={area.title}
                className="group rounded-2xl border border-blue-100 bg-[#F7FAFF] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md sm:p-6"
              >
                {/* Main card content */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Icon size={24} strokeWidth={2} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-medium text-[#0B1220] sm:text-lg">
                      {area.title}
                    </h3>

                    {area.description && (
                      <p className="mt-1 text-xs text-slate-500">
                        {area.description}
                      </p>
                    )}
                  </div>

                  <div className="shrink-0 text-right">
                    <span className="block text-2xl font-semibold leading-none text-red-600">
                      {area.marks}
                    </span>

                    <span className="mt-1 block text-[10px] font-medium uppercase tracking-wider text-red-700">
                      Marks
                    </span>
                  </div>
                </div>

                {/* Weightage */}
                <div className="mt-5">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                      Weightage
                    </span>

                    <span className="text-[11px] font-semibold text-blue-700">
                      {weightage}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div
                    className="h-2 w-full overflow-hidden rounded-full bg-blue-100"
                    role="progressbar"
                    aria-label={`${area.title} weightage`}
                    aria-valuenow={weightage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-full rounded-full bg-blue-600 transition-all duration-500 group-hover:bg-blue-700"
                      style={{ width: `${weightage}%` }}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Total */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-5 py-2.5 text-sm font-medium text-blue-800">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[11px] text-white">
              ✓
            </span>
            100 Marks Total
          </div>
        </div>
      </div>
    </section>
  );
}
