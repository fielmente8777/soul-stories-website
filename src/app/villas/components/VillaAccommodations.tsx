import { RoomsProps } from "@/@types/types";
import RoomCard2 from "@/components/cards/RoomCard2";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";

const VillaAccommodations: React.FC<RoomsProps> = ({
  title,
  subTitle,
  cards,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-primary">
      <SectionHeading title={title} subTitle={subTitle} line titleColor="white" subTitleColor="white" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {cards.map((card, index) => (
          <RoomCard2 key={index} {...card} />
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default VillaAccommodations;
