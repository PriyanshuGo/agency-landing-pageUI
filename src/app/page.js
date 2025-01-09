import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Mission from "@/components/Mission";
import Service from "@/components/Service";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Mission />
      <Service />
      <Projects />
    </div>
  );
}
