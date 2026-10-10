import AnnouncementBar from "@/components/layout/AnnouncementBar";

import Navbar from "@/components/layout/Navbar";
import SyllabusPage from "@/components/syllabus/SyllabusComingSoon";
import SyllabusHero from "@/components/syllabus/SyllabusHero";
import SyllabusGroups from "@/components/syllabus/SyllabusGroups";
import FinalCTA from "@/components/layout/FinalCTA";
import OfflineRegistrationLocation from "@/components/layout/OfflineRegistrationLocation";
import Footer from "@/components/layout/Footer";
SyllabusHero;
export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <SyllabusHero />
        {/* <SyllabusPage /> */}
        <SyllabusGroups />
        <FinalCTA />
        <OfflineRegistrationLocation />
        <Footer />
      </main>
    </>
  );
}
