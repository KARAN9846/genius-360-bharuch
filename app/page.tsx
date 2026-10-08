import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import ExamCountdown from "@/components/home/ExamCountdown";
import ExamPattern from "@/components/home/ExamPattern";
import ScholarshipRecognition from "@/components/home/ScholarshipRecognition";
import HowItWorks from "@/components/home/HowItWorks";
import FinalCTA from "@/components/home/FinalCTA";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>
        <Hero />
        <ExamCountdown />
        <ExamPattern />
        <ScholarshipRecognition />
        <HowItWorks />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
