import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Herosection";
import AboutUs from "./components/Aboutus";
import ContactSection from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}
