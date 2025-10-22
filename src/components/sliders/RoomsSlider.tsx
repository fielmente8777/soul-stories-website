"use client";
import { RoomsProps } from "@/@types/types";
import { FC } from "react";
import { Autoplay } from "swiper/modules";
import SwiperCarousel from "./SwiperCarousel";
import { RoomCard } from "../cards";

interface RoomsSliderProps {
  cards: RoomsProps["cards"];
}
const RoomsSlider: FC<RoomsSliderProps> = ({ cards }) => {
  return (
    <>
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={24}
        loop
        modules={[Autoplay]}
        autoplay={{ delay: 2500 }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            autoplay: false,
          },
        }}
        className="w-full"
        renderSlide={(card) => <RoomCard {...card} />}
      />
    </>
  );
};

export default RoomsSlider;
