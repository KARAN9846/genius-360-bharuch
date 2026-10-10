"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { examInfo } from "@/data/exam";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Syllabus", href: "/syllabus" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-18 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex min-w-0 items-center"
          aria-label="Genius 360° by Mahavir Classes home"
        >
          <div className="leading-none">
            <span className="block text-lg font-extrabold tracking-tight text-blue-800 sm:text-xl">
              GENIUS <span className="text-red-600">360°</span>
            </span>

            <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.16em] text-slate-500 sm:text-[10px]">
              By Mahavir Classes
            </span>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm font-semibold transition-colors hover:text-blue-700 ${
                  isActive ? "text-blue-700" : "text-slate-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <Link
          href={examInfo.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-xl bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-red-700 hover:shadow-md lg:inline-flex"
        >
          Register Now
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition-colors hover:bg-slate-50 lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={22} strokeWidth={2} />
          ) : (
            <Menu size={22} strokeWidth={2} />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-slate-200 bg-white shadow-lg lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`border-b border-slate-100 py-3.5 text-sm font-semibold transition-colors last:border-b-0 hover:text-blue-700 ${
                    isActive ? "text-blue-700" : "text-slate-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href={examInfo.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-3 inline-flex min-h-11 items-center justify-center rounded-xl bg-red-600 px-5 text-sm font-medium text-white transition-colors hover:bg-red-700"
            >
              Register Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
