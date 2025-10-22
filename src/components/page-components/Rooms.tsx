import { RoomsProps } from "@/@types/types";
import { Section } from "../sectionComponants";
import { RoomsSlider } from "../sliders";
import { SectionHeading } from "../typography";

const Rooms: React.FC<RoomsProps> = ({ title, subTitle, cards }) => {
  return (
    <Section className="bg-primary">
      <div className="flex flex-col md:gap-14 gap-8">
        <SectionHeading title={title} subTitle={subTitle} titleColor="white" subTitleColor="white" wrapperClassName="max_width" line />
        <RoomsSlider cards={cards} />
      </div>
    </Section>
  );
};

export default Rooms;
