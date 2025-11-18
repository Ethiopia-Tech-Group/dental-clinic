import React from "react";
import ServiceHeroSection from "../components/User/ServiceComponent/ServiceHero";
import ServiceType from "../components/User/ServiceComponent/ServiceType";
import ServiceDentail from "../components/User/ServiceComponent/ServiceDentail";
import ServiceVedio from "../components/User/ServiceComponent/ServiceVedio";
import ExpertCareSection from "../components/User/ServiceComponent/ServiceExpertCare";

function page() {
  return (
    <div>
      <ServiceHeroSection />
      <ServiceType />
      <ServiceDentail />
      <ServiceVedio />
      <ExpertCareSection />
    </div>
  );
}

export default page;
