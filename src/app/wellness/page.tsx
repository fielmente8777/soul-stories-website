import Banner2 from "@/components/Banner/Banner2";
import TestimonialsSection from "@/components/sectionComponants/TestimonialsSection";
import AboutSoulCare from "../soul-care/components/AboutSoulCare";
import AddSection from "../soul-care/components/AddSection";
import OurPackages from "../soul-care/components/OurPackages";
import WellnessServices from "../soul-care/components/WellnessServices";
import SectionHeader from "./components/SectionHeader";
import { wellnessPageData } from "./wellnessPageData";

const page = () => {
  return (
    <div>
      <SectionHeader />
      <Banner2 {...wellnessPageData.bannerData} fullBorder isLogo={false} />
      <AboutSoulCare {...wellnessPageData.aboutSoulCare} align="left" />
      <WellnessServices {...wellnessPageData.wellnessServices} />
      <AddSection {...wellnessPageData.addCard} card={false} isBorder={true} />
      <OurPackages {...wellnessPageData.ourPackages} />
      <TestimonialsSection />
    </div>
  );
};

export default page;
