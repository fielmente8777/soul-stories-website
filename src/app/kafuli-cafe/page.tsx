import { SectionWithContainer } from "@/components/sectionComponants";
import CafeBanner from "./components/CafeBanner";
import { kafuliPageData } from "./kafuliPageData";
import OpenToAll from "./components/OpenToAll";

export default function KafuliCafePage() {
  return (
    <main>
      <CafeBanner {...kafuliPageData?.bannerData} />
      <SectionWithContainer>
        <div className="max-w-4xl mx-auto w-full space-y-8">
          <div className="bg-secondary max-w-[60%] mx-auto h-[1px] w-full" />
          <p className="md:text-lg text-primary text-center">
            {kafuliPageData?.description}
          </p>
          <div className="bg-secondary max-w-[60%] mx-auto h-[1px] w-full" />
        </div>
      </SectionWithContainer>
      <OpenToAll {...kafuliPageData?.openToAll} />
    </main>
  );
}
