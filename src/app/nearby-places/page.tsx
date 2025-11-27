import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { nearByData } from "./nearByData";
import NearByPlacesCard from "@/components/cards/NearByPlacesCard";

export default function NearByPlaces() {
  return (
    <main>
      <SectionWithContainer>
        <SectionHeading
          title={nearByData.placess.title}
          subTitle={nearByData.placess.subTitle}
          line
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {nearByData.placess.cards.map((card, index) => (
            <NearByPlacesCard key={index} {...card} />
          ))}
        </div>
      </SectionWithContainer>
    </main>
  );
}
