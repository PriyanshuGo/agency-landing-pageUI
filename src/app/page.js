import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Mission from "@/components/Mission";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Mission />
    </div>
  );
}
