"use client";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading2 from "@/components/typography/SectionHeading";
import { useWebContext } from "@/context-api/WebContext";
import Image from "next/image";

interface GridSectionProps {
  title: string;
  subTitle: string;
  images: string[];
}
const GridSection: React.FC<GridSectionProps> = ({
  title,
  subTitle,
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

  const { openImagePopup } = useWebContext();
  return (
    <SectionWithContainer containerClassName="space-y-9">
      <SectionHeading2 title={title} subTitle={subTitle} line />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 grid-flow-row auto-rows-[6.5rem] gap-4">
        {images.map((image, index) => (
          <div
            className={`relative w-full h-full aspect-auto ${gridPattern[index]}`}
            key={index}
          >
            <Image
              src={image}
              alt={title ? title : image}
              fill
              sizes="100%"
              className="object-cover object-center rounded-[20px]"
              onClick={() => openImagePopup(images, index)}
            />
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default GridSection;
