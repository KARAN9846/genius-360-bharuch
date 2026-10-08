// import { CalendarDays } from "lucide-react";

// export default function AnnouncementBar() {
//   return (
//     <div className="border-b border-blue-100 bg-blue-50">
//       <div className="mx-auto flex min-h-9 max-w-7xl items-center justify-center px-3 py-2">
//         <div className="flex min-w-0 items-center justify-center gap-1.5 text-[11px] font-semibold text-blue-800 sm:gap-2 sm:text-sm">
//           <CalendarDays
//             size={14}
//             strokeWidth={2.2}
//             className="shrink-0 text-red-600 sm:h-[15px] sm:w-[15px]"
//             aria-hidden="true"
//           />

//           <span className="whitespace-nowrap">
//             <span className="font-medium text-red-600">
//               Bharuch&apos;s First Big Scholarship Exam
//             </span>

//             <span className="mx-1 text-blue-300 sm:mx-1.5">•</span>

//             <span>13 Dec 2026</span>
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// }

import { CalendarDays } from "lucide-react";
import { examInfo } from "@/data/exam";

export default function AnnouncementBar() {
  const registrationDeadline = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date(examInfo.registration.lastDate));

  return (
    <div className="border-b border-red-700 bg-[#E53935]">
      <div className="mx-auto flex min-h-9 max-w-7xl items-center justify-center px-3 py-2">
        <div className="flex min-w-0 items-center justify-center gap-1.5 text-[11px] font-semibold text-white sm:gap-2 sm:text-sm">
          <CalendarDays
            size={14}
            strokeWidth={2.2}
            className="shrink-0 text-white sm:h-[15px] sm:w-[15px]"
            aria-hidden="true"
          />

          <span className="whitespace-nowrap">
            <span>Bharuch&apos;s First Big Competitive Scholarship Exam</span>

            <span className="mx-1 text-red-200 sm:mx-1.5">•</span>

            <span>Registration Ends {registrationDeadline}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
