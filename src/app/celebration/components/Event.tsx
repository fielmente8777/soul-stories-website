"use client";

import LinkButton from "@/components/buttons/LinkButton";
import EventCard from "@/components/cards/EventCard";
import { Section, SectionWithContainer } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import { usePathname } from "next/navigation";
import { Autoplay, Pagination } from "swiper/modules";

export interface EventProps {
  title: string;
  subTitle: string;
  description: string;
  link: {
    label: string;
    url: string;
  };
  cards: {
    src: string;
    title: string;
  }[];
}

const Event: React.FC<EventProps> = ({
  title,
  subTitle,
  cards,
  link,
  description,
}) => {
  const cardData = cards.length < 4 ? [...cards, ...cards] : cards;
  const pathName = usePathname();
  return (
    <Section className="bg-primary !p-0 relative">
      <SectionWithContainer
        containerClassName="!max-w-[85rem]"
        sectionClassName={`${pathName === "/" ? "bg-background" : ""}`}
      >
        <div className="">
          <SectionHeading
            title={title}
            subTitle={subTitle}
            titleColor="white"
            subTitleColor="white"
            logo
            // subTitleColor={pathName !== "/" ? "primary" : "primary-dark"}
            textCenter
            line={pathName === "/" ? false : true}
            wrapperClassName="gap-2"
          />
        </div>

        <div className="w-full md:mt-14 mt-8 common">
          <SwiperCarousel
            data={cardData}
            modules={[Pagination, Autoplay]}
            loop={true}
            autoplay={true}
            pagination={{
              clickable: true,
              el: ".pagination_3",
            }}
            className="w-full custom-swiper md:aspect-4/2 aspect-[4/5.5]"
            slidesPerView={1}
            spaceBetween={24}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            renderSlide={(item, index) => <EventCard key={index} {...item} />}
          />
          <div className="pagination_2 flex items-center justify-center gap-2"></div>

          <p className="text-center text-white max-w-6xl mx-auto">
            {description}
          </p>
          <LinkButton
            label={link.label}
            href={link.url}
            className="md:mt-12 mx-auto bg-secondary border-none text-white mt-8 z-50 relative"
          />
        </div>
      </SectionWithContainer>

      <div
        className="absolute inset-0 bg-contain"
        style={{
          backgroundImage: `url('/Mask.png')`,
        }}
      />
    </Section>
  );
};

export default Event;
