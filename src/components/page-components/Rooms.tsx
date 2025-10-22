import { RoomsProps } from "@/@types/types";
import { SectionWithContainer } from "../sectionComponants";
import { SectionHeading } from "../typography";
import { RoomsSlider } from "../sliders";

const Rooms: React.FC<RoomsProps> = ({ title, subTitle, cards }) => {
  return (
    <SectionWithContainer sectionClassName="bg-primary">
      <div className="flex flex-col md:gap-14 gap-8">
        <SectionHeading title={title} subTitle={subTitle} titleColor="white" subTitleColor="white" line />
        <RoomsSlider cards={cards} />
      </div>
    </SectionWithContainer>
  );
};

export default Rooms;
