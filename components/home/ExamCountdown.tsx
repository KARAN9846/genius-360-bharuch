"use client";

import { useEffect, useState } from "react";
import { examInfo } from "../../data/exam";

type CountdownValues = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const countdownUnits: { key: keyof CountdownValues; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

function getCountdown(targetTime: number): CountdownValues | null {
  const remainingSeconds = Math.floor((targetTime - Date.now()) / 1000);

  if (remainingSeconds <= 0) {
    return null;
  }

  return {
    days: Math.floor(remainingSeconds / 86_400),
    hours: Math.floor((remainingSeconds % 86_400) / 3_600),
    minutes: Math.floor((remainingSeconds % 3_600) / 60),
    seconds: remainingSeconds % 60,
  };
}

export default function ExamCountdown() {
  const [countdown, setCountdown] = useState<CountdownValues | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const targetTime = new Date(examInfo.examDate).getTime();
  const formattedDate = new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Kolkata",
  }).format(new Date(examInfo.examDate));

  useEffect(() => {
    const updateCountdown = () => {
      setCountdown(getCountdown(targetTime));
      setHasStarted(true);
    };

    updateCountdown();
    const intervalId = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(intervalId);
  }, [targetTime]);

  return (
    <section
      aria-labelledby="exam-countdown-title"
      className="mx-auto max-w-7xl bg-[#123B8C] px-4 py-6 text-center text-white sm:px-6 sm:py-8 lg:px-8"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center">
        <h2
          id="exam-countdown-title"
          className="text-base font-medium sm:text-lg"
        >
          The Countdown Begins
        </h2>

        <p className="mt-1 text-sm font-light text-blue-100 sm:text-base">
          Get ready. Your challenge begins on
        </p>

        <time
          dateTime={examInfo.examDate}
          className="mt-1 text-xl font-semibold tracking-tight text-red-300 sm:text-2xl"
        >
          {formattedDate}
        </time>

        <div className="mt-4 w-full max-w-2xl">
          {hasStarted && countdown === null ? (
            <p className="rounded-2xl border border-white/20 bg-white/10 px-4 py-4 text-base font-medium sm:text-lg">
              The Genius 360 Scholarship Exam is here!
            </p>
          ) : (
            <div
              role="timer"
              aria-label="Time remaining until the Genius 360 Scholarship Exam"
              className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3"
            >
              {countdownUnits.map(({ key, label }) => (
                <div
                  key={key}
                  className="rounded-xl border border-white/20 bg-white/10 px-3 py-3 sm:px-4 sm:py-4"
                >
                  <p className="text-2xl font-semibold tabular-nums sm:text-3xl">
                    {countdown?.[key].toString().padStart(2, "0") ?? "--"}
                  </p>
                  <p className="mt-1 text-[11px] font-normal uppercase tracking-[0.12em] text-blue-100 sm:text-xs">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
