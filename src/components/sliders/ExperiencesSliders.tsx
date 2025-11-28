"use client";
import { ExperiencesProps } from "@/@types/types";
import { EffectCoverflow, Navigation } from "swiper/modules";
import SwiperCarousel from "./SwiperCarousel";
import ExperienceCard from "../cards/ExperienceCard";

interface ExperiencesSlidersProps {
  cards: ExperiencesProps["cards"];
}

const ExperiencesSliders: React.FC<ExperiencesSlidersProps> = ({ cards }) => {
  return (
    <div className="w-full">
      <SwiperCarousel
        data={cards || []}
        modules={[EffectCoverflow, Navigation]}
        navigation={{
          nextEl: ".cafe-next",
          prevEl: ".cafe-prev",
        }}
        className="w-full we-offer-slider"
        swiperSlideClassName="swiper-slide"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 0, // Keep flat
          stretch: -20, // Don't stretch
          depth: 40, // Controls scale & blur of side slides
          modifier: 2, // Makes the central slide more prominent
        }}
        speed={800}
        breakpoints={{
          640: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        renderSlide={(card) => (
          <ExperienceCard {...card} />
        )}
      />
      
    </div>
  );
};

export default ExperiencesSliders;
