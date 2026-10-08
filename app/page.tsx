import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import ExamCountdown from "@/components/home/ExamCountdown";
import ExamPattern from "@/components/home/ExamPattern";
import ScholarshipRecognition from "@/components/home/ScholarshipRecognition";

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
      </main>
    </>
  );
}
