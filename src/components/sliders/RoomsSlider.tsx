"use client";
import { RoomsProps } from "@/@types/types";
import { FC } from "react";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCarousel from "./SwiperCarousel";
import { RoomCard } from "../cards";
import { Container } from "../sectionComponants";
import { NextBtn, PrevBtn } from "@/utils/icons";

interface RoomsSliderProps {
  cards: RoomsProps["cards"];
}
const RoomsSlider: FC<RoomsSliderProps> = ({ cards }) => {
  return (
    <div className="w-full flex items-center lg:px-4">
      <button className="rooms-prev lg:block hidden">
        <PrevBtn />
      </button>
      <Container>
        <SwiperCarousel
          data={cards}
          slidesPerView={1.5}
          spaceBetween={24}
          loop
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".rooms-next",
            prevEl: ".rooms-prev",
          }}
          autoplay={{ delay: 2500 }}
          breakpoints={{
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
              autoplay: false,
            },
          }}
          className="w-full"
          renderSlide={(card) => <RoomCard {...card} />}
        />
      </Container>
      <button className="rooms-next lg:block hidden">
        <NextBtn />
      </button>
    </div>
  );
};

export default RoomsSlider;
