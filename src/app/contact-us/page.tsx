import React from "react";
import ContactData from "./components/ContactData";
import { contactData } from "./contactData";
import { Section } from "@/components/sectionComponants";
import LazyLoadedMap from "@/components/map/LazyLoadedMap";

const page = () => {
  return (
    <div>
      <ContactData {...contactData.bannerData} />
      <Section defaultPadding={false} className="w-full md:aspect-[4/1.5] aspect-square">
        <LazyLoadedMap src={contactData.mapUrl} />
      </Section>
    </div>
  );
};

export default page;
