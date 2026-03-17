"use client";

import React from "react";
import { RoomsProps } from "@/@types/types";
import LinkButton from "../buttons/LinkButton";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import SwiperCarousel from "../sliders/SwiperCarousel";
import { LazyLoadedVideo } from "../Video";

type RoomCard2Props = RoomsProps["cards"][number];

const RoomCard2: React.FC<RoomCard2Props> = ({
  title,
  noOfBadRooms,
  description,
  price,
  listOfIcons,
  link,
  images,
  videoSrc,
  poster,
}) => {
  const hasImages = images && images.length > 0;
  const hasVideo = !!videoSrc && !!poster;

  return (
    <div className="flex flex-col gap-4 overflow-hidden room-card">
      {title && hasImages && (
        <SwiperCarousel
          data={images!}
          slidesPerView={1}
          spaceBetween={0}
          modules={[Navigation]}
          navigation
          className="w-full"
          renderSlide={(src) => (
            <div className="w-full relative aspect-[4/3.5]">
              <Image
                src={src}
                alt={title ?? "Villa image"}
                fill
                className="object-cover"
              />
            </div>
          )}
        />
      )}

      {hasVideo && (
        <div className="w-full relative max-md:aspect-[4/6.65] md:h-full">
          <LazyLoadedVideo
            src={videoSrc!}
            poster={poster!}
            loop
            muted
            autoPlay
            controls={false}
          />
        </div>
      )}

      <div className="space-y-2 pb-4">
        {title && (
          <div className="flex items-center justify-between gap-4">
            <h3 className="md:text-[2.5rem] text-2xl text-white font-aboreto">
              {title}
            </h3>
            <div className="w-full h-px bg-secondary" />
            {listOfIcons && listOfIcons.length > 0 && (
              <ul className="flex items-center gap-1">
                {listOfIcons.map((item, index) => (
                  <li
                    key={index}
                    aria-label={item.title}
                    className="text-white"
                  >
                    {item.icons}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {noOfBadRooms && (
          <p className="text-xl text-white flex-1 font-medium">
            {noOfBadRooms}
          </p>
        )}

        {description && <p className="text-white md:pr-4">{description}</p>}

        {price && (
          <p className="text-white md:text-lg flex-1 font-semibold mt-4">
            {price}
          </p>
        )}

        <div className="flex items-center gap-4">
          {link && (
            <LinkButton
              href={link.url}
              label={link.label}
              className="mt-4 text-secondary w-full justify-center border-secondary/50"
            />
          )}
          {description && (
            <LinkButton
              href={`./${title?.toLowerCase()}`}
              target="_self"
              label="Explore"
              className="mt-4 text-secondary w-full justify-center border-secondary/50"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RoomCard2;
