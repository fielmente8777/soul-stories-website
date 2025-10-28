import Banner2 from "@/components/Banner/Banner2";
import Form2 from "@/components/forms/Form2";
import { AboutSection, Rooms } from "@/components/page-components";
import { Section } from "@/components/sectionComponants";
import AboutSoulCare from "./components/AboutSoulCare";
import AddSection from "./components/AddSection";
import OurPackages from "./components/OurPackages";
import WellnessServices from "./components/WellnessServices";
import { soulCarePageData } from "./soulCarePageData";

export default function SoulCare() {
  return (
    <main>
      <Banner2 {...soulCarePageData.bannerData} />
      <Section defaultPadding={false} className="bg-primary py-8">
        <div className="!p-4 bg-white md:rounded-2xl max-w-[1450px] mx-auto">
          <Form2 rounded />
        </div>
      </Section>
      <AboutSoulCare {...soulCarePageData.aboutSoulCare} />
      <WellnessServices {...soulCarePageData.wellnessServices} />
      <div className="soul-care-gallery">
        <AboutSection {...soulCarePageData.gallery} />
      </div>
      <OurPackages {...soulCarePageData.ourPackages} />
      <Rooms {...soulCarePageData.accommodation} bg="[#F9FFEB] mlml" />
      <AddSection {...soulCarePageData.addCard} />
    </main>
  );
}
