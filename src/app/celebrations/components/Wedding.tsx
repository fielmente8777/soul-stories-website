"use client";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import { NextBtn, PrevBtn } from "@/utils/icons";
import Image from "next/image";
import { Navigation } from "swiper/modules";

interface WeddingProps {
  cards: {
    title: string;
    description: string;
    src: string;
  }[];
  link: {
    text: string;
    href: string;
  };
}
const Wedding: React.FC<WeddingProps> = ({ cards, link }) => {
  return (
    <Section  className="md:flex items-center justify-center md:px-16">
      <button className="wedding-prev  text-primary md:block hidden">
        <PrevBtn />
      </button>
      <Container className="space-y-12 md:max-w-6xl! w-full">
        <SwiperCarousel
          data={cards || []}
          slidesPerView={1}
          spaceBetween={0}
          loop
          modules={[Navigation]}
          navigation={{
            nextEl: ".wedding-next",
            prevEl: ".wedding-prev",
          }}
          renderSlide={(card) => (
            <div className="space-y-8">
              <SectionHeading
                title={card?.title}
                line
                titleClassName="font-aboreto md:text-[2.5rem]! text-2xl!"
              />
              <div className="w-full aspect-[4/2] relative">
                <Image
                  src={card?.src}
                  alt={card?.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-primary md:text-lg text-center">
                {card?.description}
              </p>
            </div>
          )}
        />
        <LinkButton
          href={link?.href}
          label={link?.text}
          whatsAppIcon
          className="mx-auto  text-nowrap text-white bg-secondary border-secondary"
        />
      </Container>
      <button className="wedding-next text-primary md:block hidden">
        <NextBtn />
      </button>
    </Section>
  );
};

export default Wedding;
