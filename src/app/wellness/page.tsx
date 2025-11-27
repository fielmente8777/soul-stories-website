import Banner2 from "@/components/Banner/Banner2";
import React from "react";
import { wellnessPageData } from "./wellnessPageData";
import { SectionHeading } from "@/components/typography";
import AboutSoulCare from "../soul-care/components/AboutSoulCare";
import WellnessServices from "../soul-care/components/WellnessServices";
import AddSection from "../soul-care/components/AddSection";
import OurPackages from "../soul-care/components/OurPackages";
import SectionHeading2 from "@/components/typography/SectionHeading";
import { Container } from "@/components/sectionComponants";
import SectionHeader from "./components/SectionHeader";

const page = () => {
  return (
    <div>
      <SectionHeader />
      <Banner2 {...wellnessPageData.bannerData} fullBorder isLogo={false} />
      <AboutSoulCare {...wellnessPageData.aboutSoulCare} align="left" />
      <WellnessServices {...wellnessPageData.wellnessServices} />
      <AddSection {...wellnessPageData.addCard} card={false} isBorder={true} />
      <OurPackages {...wellnessPageData.ourPackages} />
    </div>
  );
};

export default page;
