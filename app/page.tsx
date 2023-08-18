import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import ContactSection from "./components/Contact";
import TestimonialsSection from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
