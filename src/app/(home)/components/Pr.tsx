"use client";

import { SectionWithContainer } from "@/components/sectionComponants";
import { useWebContext } from "@/context-api/WebContext";
import Image from "next/image";

interface PrProps {
  prData: {
    logo: string;
    src: string;
    title: string;
    description: string;
  }[];
}

const Pr: React.FC<PrProps> = ({ prData }) => {
  const { setPopUpPrData,setIsPrPopUpOpen } = useWebContext();

  return (
    <SectionWithContainer >
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {prData.map((card, index) => (
          <div
            key={index}
            className="relative w-full aspect-[4/1] cursor-pointer"
            onClick={() => {
                setPopUpPrData(card)
                setIsPrPopUpOpen(true)
            }}
          >
            <Image
              src={card.logo}
              alt={card.title}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </SectionWithContainer>
  );
};

export default Pr;
