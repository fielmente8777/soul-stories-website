"use client";
import { RoomsProps } from "@/@types/types";
import LinkButton from "../buttons/LinkButton";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import SwiperCarousel from "../sliders/SwiperCarousel";

const RoomCard2: React.FC<RoomsProps["cards"][0]> = ({
  title,
  noOfBadRooms,
  description,
  price,
  listOfIcons,
  link,
  images,
}) => {
  return (
    <div className="flex flex-col gap-4 overflow-hidden room-card">
      <SwiperCarousel
        data={images}
        slidesPerView={1}
        spaceBetween={0}
        modules={[Navigation]}
        navigation={true}
        className="w-full"
        renderSlide={(src) => (
          <div className="w-full relative aspect-[4/3.5]">
            <Image src={src} alt={title} fill className="object-cover" />
          </div>
        )}
      />
      <div className="space-y-2 pb-4">
        <div className="flex items-center justify-between gap-4">
          <h3
            className={`md:text-[2.5rem] text-2xl text-white
            font-aboreto`}
          >
            {title}
          </h3>
          <div className="w-full h-px bg-secondary" />
          <ul className="flex items-center gap-1">
            {listOfIcons?.map((item, index) => (
              <li key={index} aria-label={item.title} className={`text-white`}>
                {item.icons}
              </li>
            ))}
          </ul>
        </div>
        <p
          className={`text-xl text-white flex-1
          font-medium`}
        >
          {noOfBadRooms}
        </p>
        {description && <p className="text-white">{description}</p>}
        {price && (
          <p className="text-white md:text-lg flex-1 font-semibold mt-4">{price}</p>
        )}
        {link && (
          <LinkButton
            href={link.url}
            label={link.label}
            className="mt-4 text-secondary w-full  justify-center border-secondary/50"
          />
        )}
      </div>
    </div>
  );
};

export default RoomCard2;
