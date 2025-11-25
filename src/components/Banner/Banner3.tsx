"use client";
import React from "react";
import { Section } from "../sectionComponants";
import Image from "next/image";
import { LazyLoadedVideo } from "../Video";
import SwiperCarousel from "../sliders/SwiperCarousel";

type BannerProps = {
  title: string;
  subTitle: string;
  videos: string[];
};

const Banner3 = ({ videos }: BannerProps) => {
  return (
    <Section className="bg-bg1 !p-5">
      <div className="grid lg:grid-cols-12 grid-cols-1 items-center">
        <div className="lg:col-span-4 col-span-1 flex flex-col items-center space-y-4">
          <div>
            <Image src={"/logo.png"} alt="" width={150} height={150} />
          </div>
          <h2 className="font-medium text-primary uppercase">
            YOUR PERFECT VENUE FOR
          </h2>
          <h3 className="md:text-6xl text-3xl text-center font-aboreto text-primary ">
            Weddings, wellness retreat & parties
          </h3>
        </div>

        <div className=" hidden lg:col-span-8 col-span-1 lg:grid grid-cols-3 gap-3 h-full lg:mt-0 mt-12">
          {videos?.map((video, index) => (
            <div key={index} className="relative w-full aspect-4/6 rounded-sm">
              <LazyLoadedVideo
                src={video}
                loop
                muted
                controls={false}
                autoPlay
              />
            </div>
          ))}
        </div>

        <div className="mt-6 block lg:hidden">
          <SwiperCarousel
            data={videos}
            renderSlide={(vd, index) => (
              <div
                key={index}
                className="bg-orange-300 relative w-full aspect-4/5 rounded-sm"
              >
                <LazyLoadedVideo src={vd} loop />
              </div>
            )}
          />
        </div>
      </div>
    </Section>
  );
};

export default Banner3;
