import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Section1 from "@/components/Section1";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Section1 />
    </div>
  );
}
