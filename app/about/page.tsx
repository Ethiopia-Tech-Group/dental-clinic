import About from "../components/User/AboutUs/AboutUs";
import AboutHeroSection from "../components/User/AboutUs/AboutHeroSection";
import StatsSection from "../components/User/AboutUs/StatsSection";
import DentistsSection from "../components/User/AboutUs/DentistsSection";

function page() {
  return (
    <div>
      <About />
      <AboutHeroSection />
      <StatsSection />
      <DentistsSection />
    </div>
  );
}

export default page;
