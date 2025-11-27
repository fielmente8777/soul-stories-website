"use client";
import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import { BtnNext, BtnPrev } from "@/utils/icons";
import Image from "next/image";
import { Navigation } from "swiper/modules";

interface WellnessServicesProps {
  title: string;
  subTitle: string;
  link: {
    label: string;
    url: string;
  };
  cards: {
    src: string;
    alt: string;
  }[];
}

const WellnessServices: React.FC<WellnessServicesProps> = ({
  title,
  subTitle,
  link,
  cards,
}) => {
  return (
    <Section className="space-y-12 wellness-services">
      <Container>
        <div className="flex  gap-8 md:gap-12">
          <SectionHeading
            title={title}
            subTitle={subTitle}
            titleColor="white"
            subTitleColor="white"
            wrapperClassName="wellness-wrapper"
          />
          <div className="md:flex hidden gap-4 items-center justify-center">
            <button className="wellness-prev flex items-center justify-center w-12 aspect-square rounded-full box-shadow bg-secondary text-white">
              <BtnPrev />
            </button>
            <button className="wellness-next flex items-center justify-center w-12 aspect-square rounded-full box-shadow bg-secondary text-white">
              <BtnNext />
            </button>
          </div>
        </div>
      </Container>
      <div className="max-w-[1430px] md:ml-auto">
        <SwiperCarousel
          data={cards}
          slidesPerView={1}
          spaceBetween={24}
          loop
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1024: {
              slidesPerView: 3.4,
              spaceBetween: 16,
            },
          }}
          navigation={{
            nextEl: ".wellness-next",
            prevEl: ".wellness-prev",
          }}
          className="w-full"
          renderSlide={(card) => (
            <div className="w-full relative aspect-[4/4]">
              <Image
                src={card.src}
                alt={card.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-40% to-black/0"></div>
              <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2">
                <h3 className="text-2xl font-aboreto text-center text-white">
                  {card.alt}
                </h3>
              </div>
            </div>
          )}
        />
        <div className="flex mt-8 md:hidden gap-4 items-center justify-center">
          <button className="wellness-prev flex items-center justify-center w-12 aspect-square rounded-full box-shadow bg-secondary text-white">
            <BtnPrev />
          </button>
          <button className="wellness-next flex items-center justify-center w-12 aspect-square rounded-full box-shadow bg-secondary text-white">
            <BtnNext />
          </button>
        </div>
      </div>
      <LinkButton
        href={link.url}
        label={link.label}
        className="bg-secondary border-secondary text-white mx-auto"
        whatsAppIcon={true}
        arrowIcon={false}
      />
    </Section>
  );
};

export default WellnessServices;
