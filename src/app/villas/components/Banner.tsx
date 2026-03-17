import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import ImageSlider from "./ImageSlider";
import ViewAmenityBtn from "./ViewAmenityBtn";
import { JSX } from "react";

interface Props {
  images: string[];
  roomName: string;
  roomType: string;
  description: string;
  link: {
    label: string;
    url: string;
  };
  amenitiesData: {
    icon?: JSX.Element | string;
    name: string;
  }[];
}

const Banner: React.FC<Props> = ({
  images,
  roomName,
  roomType,
  description,
  link,
  amenitiesData,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-[#F9FFEB]">
      <div className="grid md:grid-cols-6 grid-cols-1 gap-8">
        <div className="md:col-span-4 col-span-1">
          <ImageSlider images={images} />
        </div>
        <div className="text-primary flex flex-col gap-6 md:col-span-2 col-span-1">
          <div className="flex flex-col gap-3">
            <h1 className="uppercase  md:text-5xl text-3xl font-aboreto">
              {roomName}
            </h1>
            <h2 className="md:text-2xl">{roomType}</h2>
            {/* <button className="w-fit underline underline-offset-4 uppercase">View Amenities</button> */}
            <ViewAmenityBtn amenitiesData={amenitiesData} />
          </div>
          <div className="flex flex-col gap-4">
            <p className="md:text-lg">{description}</p>
            <LinkButton
              href={link.url}
              label={link.label}
              className="w-full items-center justify-center text-secondary py-4"
            />
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Banner;
