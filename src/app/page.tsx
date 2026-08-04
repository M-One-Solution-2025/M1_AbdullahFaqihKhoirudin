import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ProgramsSection } from '@/components/ProgramsSection';
import { AnnouncementsSection } from '@/components/AnnouncementsSection';
import { FacilitiesSection } from '@/components/FacilitiesSection';
import { ContactPPDBSection } from '@/components/ContactPPDBSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      <HeroSection />
      <ProgramsSection />
      <AnnouncementsSection />
      <FacilitiesSection />
      <ContactPPDBSection />
      <Footer />
    </main>
  );
}
