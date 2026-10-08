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
      <div className="mx-auto flex min-h-9 max-w-7xl items-center justify-center px-2 py-2 sm:px-3">
        <div className="flex min-w-0 max-w-full items-center justify-center gap-1 text-[9px] font-semibold leading-none text-white sm:gap-2 sm:text-sm sm:leading-normal">
          <CalendarDays
            size={12}
            strokeWidth={2.2}
            className="shrink-0 text-white sm:h-[15px] sm:w-[15px]"
            aria-hidden="true"
          />

          <span className="min-w-0 whitespace-nowrap">
            <span>Bharuch&apos;s First Big Competitive Scholarship Exam</span>

            <span className="mx-0.5 text-red-200 sm:mx-1.5">•</span>

            <span>Registration Ends {registrationDeadline}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
