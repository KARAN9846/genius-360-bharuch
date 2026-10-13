import Image from "next/image";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import ExamCountdown from "@/components/home/ExamCountdown";
import CashPrizeSection from "@/components/home/CashPrizeSection";
import ExamPattern from "@/components/home/ExamPattern";
import ScholarshipRecognition from "@/components/home/ScholarshipRecognition";
import HowItWorks from "@/components/home/HowItWorks";
import FinalCTA from "@/components/layout/FinalCTA";
import OfflineRegistrationLocation from "@/components/layout/OfflineRegistrationLocation";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>
        <Hero />
        <ExamCountdown />
        <section
          aria-label="Mahaviraa Scholarship Exam"
          className="px-5 py-6 sm:px-6 sm:py-8 lg:px-8"
        >
          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl shadow-sm">
            <Image
              src="/images/mahaviraa-scholarship-coming-soon.png"
              width={2172}
              height={724}
              alt="Mahaviraa Scholarship Exam coming soon for Std 9th and 10th"
              sizes="(max-width: 1215px) calc(100vw - 2.5rem), 1152px"
              className="block h-auto w-full"
            />
          </div>
        </section>
        <CashPrizeSection />
        <ExamPattern />
        <ScholarshipRecognition />
        <HowItWorks />
        <FinalCTA />
        <OfflineRegistrationLocation />
        <Footer />
      </main>
    </>
  );
}
