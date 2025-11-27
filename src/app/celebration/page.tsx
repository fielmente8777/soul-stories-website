import Banner3 from "@/components/Banner/Banner3";
import React from "react";
import { pageData } from "./components/pageData";
import Form1 from "@/components/forms/Form1";
import Celebrate from "./components/Celebrate";
import { Rooms } from "@/components/page-components";
import ContactUs from "../hotel/component/ContactUs";
import OfferSlider from "@/components/sliders/OfferSlider";
import Event from "./components/Event";

const Title = [
  "FAMILY GATHERINGS",
  "CELEBRATORY FUNCTIONS",
  "WELLNESS RETREATS",
  "PRIVATE PARTIES",
];

const page = () => {
  return (
    <div>
      <Banner3 {...pageData?.bannerData} />
      <div className="md:-top-2 md:relative z-30 max-md:py-[16px] max-md:bg-dark2">
        <div className="!p-4 bg-primary md:rounded-2xl max-w-[1400px] mx-auto">
          <div className="md:rounded-2xl  md:shadow-xl md:py-5 bg-white">
            <Form1 rounded />
          </div>
        </div>
      </div>
      <Celebrate {...pageData?.celebrateData} />
      <Event {...pageData?.eventData} />
      <Rooms {...pageData.rooms} bg />
      <div className="relative w-full bg-primary">
        <OfferSlider offersTitle={Title} />
      </div>
      <ContactUs {...pageData.contactUsData} />
    </div>
  );
};

export default page;
