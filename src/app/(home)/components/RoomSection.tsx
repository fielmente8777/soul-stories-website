"use client";
import { RoomsProps } from "@/@types/types";
import LinkButton from "@/components/buttons/LinkButton";
import { RoomCard } from "@/components/cards";
import { Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { SectionHeading } from "@/components/typography";
import { BtnNext } from "@/utils/icons";
import { Navigation } from "swiper/modules";

const RoomSection: React.FC<RoomsProps> = ({
  title,
  subTitle,
  description,
  cards,
  link,
}) => {
  return (
    <Section className="bg-[#F9FFEB]">
      <div className="grid max-w-[1400px] ml-auto md:grid-cols-7 grid-cols-1 items-center gap-6">
        <div className="md:col-span-2 space-y-6">
          <SectionHeading title={title} subTitle={subTitle} />
          <p className="text-primary md:text-lg">{description}</p>
          {link && (
            <LinkButton
              href={link.url}
              label={link.label}
              className="bg-secondary text-white"
            />
          )}
        </div>
        <div className="md:col-span-5 relative">
          <SwiperCarousel
            data={cards || []}
            slidesPerView={1}
            spaceBetween={26}
            loop
            modules={[Navigation]}
            navigation={{
              nextEl: ".room-next",
              prevEl: ".room-prev",
            }}
            breakpoints={{
              768: {
                slidesPerView: 2.5,
              },
            }}
            renderSlide={(card) => (
              <RoomCard {...card} headingClass="text-3xl!" />
            )}
          />
          <button className="room-next flex items-center justify-center w-10 h-10  rounded-full box-shadow bg-white text-secondary absolute top-[40%] -left-5 z-10 translate-y-[-40%] ">
            <BtnNext />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default RoomSection;
