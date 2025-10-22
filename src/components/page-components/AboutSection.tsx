import { AboutSectionProps } from "@/@types/types";
import { SectionWithContainer } from "../sectionComponants";
import Image from "next/image";
import LinkButton from "../buttons/LinkButton";
import { SectionHeading } from "../typography";

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  subTitle,
  description,
  link,
  src,
  images,
}) => {
  const gridPattern = [
    "row-span-4",
    "row-span-2",
    "row-span-3",
    "row-span-2",
    "row-span-3",
    "row-span-3",
    "row-span-4",
    "row-span-3",
    "row-span-2",
    "row-span-2",
  ];
  return (
    <SectionWithContainer>
      <div className="flex flex-col gap-8 md:gap-12">
        <div className="w-[100px] aspect-[4/2] relative mx-auto">
          <Image
            src={src}
            alt={title}
            fill
            sizes="100%"
            quality={100}
            className="object-contain"
          />
        </div>
        <SectionHeading title={title} subTitle={subTitle} line />
        <div className="grid grid-cols-4 grid-flow-row auto-rows-[6.5rem] gap-4">
          {images.map((image, index) => (
            <div
              className={`relative w-full h-full aspect-auto ${gridPattern[index]}`}
              key={index}
            >
              <Image
                src={image}
                alt={title}
                fill
                sizes="100%"
                className="object-cover object-center rounded-[20px]"
              />
            </div>
          ))}
        </div>
        <p className="text-center text-dark md:text-lg lg:max-w-[69rem] mx-auto">{description}</p>
        <LinkButton
          href={link.url}
          label={link.label}
          className=" text-white bg-secondary text-nowrap border-secondary mx-auto"
        />
      </div>
    </SectionWithContainer>
  );
};

export default AboutSection;
