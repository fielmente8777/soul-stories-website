import { ExperiencesProps } from "@/@types/types";
import { SectionWithContainer } from "@/components/sectionComponants";
import ExperiencesSliders from "@/components/sliders/ExperiencesSliders";
import SectionHeading from "@/components/typography/SectionHeading2";
import Image from "next/image";

const Experiences: React.FC<ExperiencesProps> = ({
  title,
  src,
  subTitle,
  cards,
}) => {
  return (
    <SectionWithContainer>
      <div className="md:space-y-10 space-y-8">
        <div className="space-y-2">
          <div className="relative aspect-[4/1.7] w-[161px] mx-auto">
            <Image
              src={src}
              alt={title}
              fill
              sizes="100%"
              className="object-cover"
            />
          </div>
          <SectionHeading
            title={title}
            subTitle={subTitle}
            titleColor="[#000000]"
            textCenter
          />
        </div>
        <ExperiencesSliders cards={cards} />
      </div>
    </SectionWithContainer>
  );
};

export default Experiences;
