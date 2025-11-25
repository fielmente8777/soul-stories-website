"use client";

import { EventProps } from "@/app/celebration/components/Event";
import Image from "next/image";

const EventCard: React.FC<EventProps["cards"][0]> = ({ src, title }) => {
  return (
    <div>
      <div className="w-full ">
        <div
          className={` w-full relative aspect-[4/4.5] before:absolute before:inset-4 before:border-[0.2px] before:z-50 before:border-secondary before:rounded-t-[12.5rem] before:content-['']`}
        >
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover rounded-t-[12.5rem]"
          />
        </div>
      </div>

      <div className="mt-12 flex justify-center">
        <h3 className="text-white text-lg text-center font-medium uppercase border-y  border-secondary w-fit px-4">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default EventCard;
