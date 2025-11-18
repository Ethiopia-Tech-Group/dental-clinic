import Image from "next/image";
import Header from "./components/User/HomeComponents/Header";
import HeroSection from "./components/User/HomeComponents/Hero";
import ServicesSection from "./components/User/HomeComponents/Services";
import DentalSections from "./components/User/HomeComponents/DentalSections";
import Footer from "./components/User/HomeComponents/FooterSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <DentalSections />
    </div>
  );
}
