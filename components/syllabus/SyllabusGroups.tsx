"use client";

import { BookOpen, Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { syllabusGroups } from "@/data/syllabus";
import SyllabusSubjectModal from "./SyllabusSubjectModal";

const gujaratiFont = {
  fontFamily: '"Noto Sans Gujarati", "Nirmala UI", "Gujarati Sangam MN", sans-serif',
};

export default function SyllabusGroups() {
  const [activeGroup, setActiveGroup] = useState<"A" | "B" | "C">("A");
  const [openSubject, setOpenSubject] = useState<string | null>(null);

  const selectedGroup = syllabusGroups.find(
    (group) => group.id === activeGroup,
  );

  const selectedSubject = selectedGroup?.subjects.find(
    (subject) => `${activeGroup}-${subject.id}` === openSubject,
  );

  function handleGroupChange(groupId: "A" | "B" | "C") {
    setActiveGroup(groupId);
    setOpenSubject(null);
  }

  function handleSubjectOpen(subjectId: string) {
    setOpenSubject(`${activeGroup}-${subjectId}`);
  }

  function handleSubjectClose() {
    setOpenSubject(null);
  }

  return (
    <>
      <section className="bg-[#F8FAFC] px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto w-full max-w-6xl">
          {/* Section Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#1769E0]">
              Select Your Group
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#101828] sm:text-3xl">
              Find Your Syllabus
            </h2>

            <p className="mt-3 text-sm leading-6 text-[#667085] sm:text-base">
              Choose the group that matches your current standard to view the
              complete syllabus.
            </p>
          </div>

          {/* Mobile Group Selector */}
          <div className="mx-auto mt-7 grid max-w-md grid-cols-3 overflow-hidden rounded-xl border border-[#D0D5DD] bg-white md:hidden">
            {syllabusGroups.map((group) => {
              const isActive = activeGroup === group.id;

              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => handleGroupChange(group.id)}
                  aria-pressed={isActive}
                  className={`min-h-12 px-2 py-2.5 text-center transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1769E0]/30 focus:ring-inset ${
                    isActive
                      ? "bg-[#1769E0] text-white"
                      : "bg-white text-[#344054] hover:bg-[#F8FAFC] active:bg-[#F2F4F7]"
                  }`}
                >
                  <span className="block text-[11px] font-bold uppercase tracking-[0.08em]">
                    {group.title}
                  </span>

                  <span
                    className={`mt-0.5 block text-[10px] ${
                      isActive ? "text-blue-100" : "text-[#98A2B3]"
                    }`}
                  >
                    {group.currentStandard} → {group.preparingFor}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Desktop Group Selector */}
          <div className="mx-auto mt-8 hidden max-w-4xl gap-3 md:grid md:grid-cols-3">
            {syllabusGroups.map((group) => {
              const isActive = activeGroup === group.id;

              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => handleGroupChange(group.id)}
                  aria-pressed={isActive}
                  className={`group relative w-full cursor-pointer rounded-2xl border px-5 py-5 text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1769E0]/30 focus:ring-offset-2 ${
                    isActive
                      ? "border-[#1769E0] bg-white shadow-md shadow-blue-100/60"
                      : "border-[#E4E7EC] bg-white hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md hover:shadow-slate-200/60 active:translate-y-0"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p
                        className={`text-xs font-bold uppercase tracking-[0.12em] ${
                          isActive ? "text-[#1769E0]" : "text-[#98A2B3]"
                        }`}
                      >
                        {group.title}
                      </p>

                      <p className="mt-1.5 text-base font-bold text-[#101828] sm:text-lg">
                        {group.currentStandard}{" "}
                        <span className="font-medium text-[#98A2B3]">→</span>{" "}
                        {group.preparingFor}
                      </p>

                      <p className="mt-1 text-xs text-[#667085]">
                        Currently studying → Preparing for
                      </p>
                    </div>

                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-200 ${
                        isActive
                          ? "bg-[#1769E0] text-white"
                          : "bg-[#F2F4F7] text-[#98A2B3] group-hover:bg-blue-50 group-hover:text-[#1769E0]"
                      }`}
                    >
                      {isActive && <Check size={16} strokeWidth={2.5} />}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Group */}
          {selectedGroup && (
            <div className="mx-auto mt-7 max-w-5xl rounded-2xl border border-[#E4E7EC] bg-white p-4 sm:mt-8 sm:p-6 lg:p-7">
              {/* Group Header */}
              <div className="border-b border-[#E4E7EC] pb-5">
                <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#1769E0]">
                  {selectedGroup.title}
                </p>

                <div className="mt-1.5 grid gap-2 md:grid-cols-[minmax(0,1fr)_auto] md:gap-x-4 md:gap-y-3 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-4">
                  <h3 className="text-xl font-bold tracking-tight text-[#101828] sm:text-2xl">
                    {selectedGroup.currentStandard}{" "}
                    <span className="font-medium text-[#98A2B3]">→</span>{" "}
                    {selectedGroup.preparingFor}
                  </h3>

                  <div className="inline-flex w-fit max-w-full flex-nowrap items-center gap-1 whitespace-nowrap rounded-xl bg-red-600 px-2 py-2 text-sm font-medium text-white shadow-sm sm:gap-1.5 sm:px-5 sm:py-2.5">
                    <BookOpen
                      size={17}
                      strokeWidth={2}
                      aria-hidden="true"
                      className="shrink-0 text-white"
                    />
                    <span className="min-w-0 font-semibold text-white">
                      Study Materials
                    </span>
                    <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-wide text-white">
                      Coming Soon
                    </span>
                  </div>

                  <p className="text-xs text-[#667085] md:col-span-2 lg:col-span-1 lg:justify-self-end lg:text-right">
                    CBSE & GSEB • Gujarati & English Medium
                  </p>
                </div>
              </div>

              {/* Subject Cards */}
              <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {selectedGroup.subjects.map((subject) => {
                  const subjectKey = `${activeGroup}-${subject.id}`;
                  const isOpen = openSubject === subjectKey;

                  return (
                    <button
                      key={subjectKey}
                      type="button"
                      onClick={() => handleSubjectOpen(subject.id)}
                      aria-label={`View ${subject.name.english} syllabus`}
                      aria-haspopup="dialog"
                      className={`group flex min-h-[92px] w-full cursor-pointer items-center justify-between gap-3 rounded-xl border px-4 py-4 text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#1769E0]/30 focus:ring-offset-1 sm:px-5 ${
                        isOpen
                          ? "border-[#1769E0] bg-white shadow-md shadow-blue-100/50"
                          : "border-[#E4E7EC] bg-[#F8FAFC] hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-md hover:shadow-slate-200/50 active:translate-y-0"
                      }`}
                    >
                      <div className="min-w-0">
                        <h4
                          className={`text-sm font-bold transition-colors sm:text-base ${
                            isOpen
                              ? "text-[#1769E0]"
                              : "text-[#101828] group-hover:text-[#1769E0]"
                          }`}
                        >
                          {subject.name.english}
                        </h4>

                        <p
                          lang="gu"
                          style={gujaratiFont}
                          className="mt-0.5 break-words text-xs leading-4 text-[#667085] sm:text-[13px]"
                        >
                          {subject.name.gujarati}
                        </p>

                        <p className="mt-1 text-xs text-[#667085]">
                          {subject.topics.length}{" "}
                          {subject.topics.length === 1 ? "topic" : "topics"}
                        </p>
                      </div>

                      <div className="flex shrink-0 items-center gap-2">
                        <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-[#1769E0] sm:text-xs">
                          {subject.marks} Marks
                        </span>

                        <span
                          className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 ${
                            isOpen
                              ? "bg-[#1769E0] text-white"
                              : "bg-white text-[#98A2B3] ring-1 ring-[#E4E7EC] group-hover:bg-blue-50 group-hover:text-[#1769E0] group-hover:ring-blue-100"
                          }`}
                        >
                          <ChevronDown
                            size={16}
                            strokeWidth={2.2}
                            className="transition-transform duration-200 group-hover:translate-y-0.5"
                          />
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Subject Syllabus Popup */}
      <SyllabusSubjectModal
        subject={selectedSubject ?? null}
        onClose={handleSubjectClose}
      />
    </>
  );
}
