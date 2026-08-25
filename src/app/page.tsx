import HomeHero from "@/src/components/home/HomeHero";
import FeaturedWork from "@/src/components/home/FeaturedWork";
import ProfileSection from "@/src/components/home/ProfileSection";
import ContactSection from "@/src/components/home/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HomeHero />
      <FeaturedWork />
      <ProfileSection />
      <ContactSection />
    </main>
  );
}