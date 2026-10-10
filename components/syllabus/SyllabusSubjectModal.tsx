"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import type { SyllabusSubject } from "@/data/syllabus";

type SyllabusSubjectModalProps = {
  subject: SyllabusSubject | null;
  onClose: () => void;
};

const gujaratiFont = {
  fontFamily: '"Noto Sans Gujarati", "Nirmala UI", "Gujarati Sangam MN", sans-serif',
};

export default function SyllabusSubjectModal({
  subject,
  onClose,
}: SyllabusSubjectModalProps) {
  useEffect(() => {
    if (!subject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [subject, onClose]);

  if (!subject) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-[#101828]/45 p-0 backdrop-blur-[2px] sm:items-center sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="syllabus-subject-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="relative flex max-h-[88vh] w-full flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:max-w-2xl sm:rounded-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-[#E4E7EC] px-5 py-4 sm:px-6 sm:py-5">
          <div className="min-w-0">
            <h2
              id="syllabus-subject-title"
              className="text-lg font-bold text-[#101828] sm:text-xl"
            >
              {subject.name.english}
            </h2>

            <p
              lang="gu"
              style={gujaratiFont}
              className="mt-0.5 break-words text-xs leading-5 text-[#667085]"
            >
              {subject.name.gujarati}
            </p>

            <p className="mt-1 text-xs text-[#667085]">
              {subject.topics.length}{" "}
              {subject.topics.length === 1 ? "topic" : "topics"}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-[#1769E0]">
              {subject.marks} Marks
            </span>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close syllabus"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E4E7EC] bg-white text-[#667085] transition-colors hover:border-[#D0D5DD] hover:bg-[#F8FAFC] hover:text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#1769E0]/30"
            >
              <X size={18} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Topics */}
        <div className="overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.12em] text-[#1769E0]">
            Syllabus
          </p>

          <ul className="space-y-2.5">
            {subject.topics.map((topic, index) => (
              <li
                key={`${subject.name}-${index}`}
                className="flex items-start gap-3 rounded-xl bg-[#F8FAFC] px-3.5 py-3 text-sm leading-6 text-[#475467]"
              >
                <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#1769E0]" />
                <span className="min-w-0">
                  <span className="block">{topic.english}</span>
                  <span
                    lang="gu"
                    style={gujaratiFont}
                    className="mt-1 block break-words text-[13px] leading-5 text-[#667085]"
                  >
                    {topic.gujarati}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
