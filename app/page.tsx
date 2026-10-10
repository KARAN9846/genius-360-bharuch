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
