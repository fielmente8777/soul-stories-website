"use client";
import Image from "next/image";
import Section from "./Section";
import { testimonialData } from "./commanData";
import { SectionHeading } from "../typography";
import { TestimonialsSlider } from "../sliders";

const TestimonialsSection: React.FC = () => {
  return (
    <Section className="bg-[#F9FFEB]" defaultPadding={false}>
      <div className="grid md:grid-cols-6 grid-cols-1 items-center">
        <div className="md:col-span-4 relative w-full md:aspect-[4/2.5] aspect-square after:absolute after:inset-3 after:border after:border-white">
          <Image
            src={testimonialData.src}
            alt="Image"
            fill
            className="object-cover"
          />
        </div>
        <div className="md:col-span-2 space-y-6 px-6 py-10">
          <div className="bg-secondary w-full h-[1px]"/>
          <SectionHeading subTitle={testimonialData.title} />
          <div className="w-[50px] aspect-square relative">
            <Image
              src={testimonialData.logo}
              alt="Image"
              fill
              className="object-contain"
            />
          </div>
          <TestimonialsSlider cards={testimonialData.cards} />
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;
