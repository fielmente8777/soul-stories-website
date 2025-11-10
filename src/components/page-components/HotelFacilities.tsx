"use client";
import { FacilitiesProps } from "@/@types/types";
import { useWebContext } from "@/context-api/WebContext";
import React from "react";
import OnlyButton from "../buttons/OnlyButton";
import { Section } from "../sectionComponants";
import { CommonSlider } from "../sliders";
import { SectionHeading } from "../typography";

const Experiences: React.FC<FacilitiesProps> = ({
  title,
  subTitle,
  cards,
  link,
}) => {
  const { setIsOpenPopup } = useWebContext();
  return (
    <Section>
      <div className="flex flex-col gap-8 md:gap-12">
        <SectionHeading
          title={title}
          subTitle={subTitle}
          line
          wrapperClassName="max-lg:px-4"
        />

        <CommonSlider cards={cards} />
        {/* <LinkButton
          href={link.url}
          label={link.label}
          className="text-nowrap text-white bg-secondary border-secondary mx-auto"
        /> */}
        <OnlyButton
          label={link.label}
          onclick={() => setIsOpenPopup(true)}
          className="text-nowrap text-white bg-secondary border-secondary mx-auto"
        />
      </div>
    </Section>
  );
};

export default Experiences;
