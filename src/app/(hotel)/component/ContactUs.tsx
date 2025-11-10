"use client";
import OnlyButton from "@/components/buttons/OnlyButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { useWebContext } from "@/context-api/WebContext";
import Image from "next/image";
import { JSX } from "react";

interface IConnectivity {
  title: string;
  src: string;
  items: {
    icons: JSX.Element;
    title: string;
    distance: string;
  }[];
  link: {
    text: string;
    href: string;
  };
}
const ContactUs: React.FC<IConnectivity> = ({ title, src, items }) => {
  const { setIsOpenPopup } = useWebContext();
  return (
    <SectionWithContainer>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="md:grid grid-cols-2 md:items-center flex flex-col-reverse gap-8 w-full mt-8">
          <div className="flex flex-col gap-8 max-md:order-2">
            <div className="flex items-center gap-3">
              <div className="w-3 h-[130px] bg-secondary" />
              <h2 className="text-3xl md:text-[2.5rem] text-primary lg:max-w-[500px] font-aboreto">
                {title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              {items?.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="">{item.icons}</div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-2xl text-light font-aboreto">
                      {item.title}
                    </h3>
                    {/* <SectionHeading subTitle={item.distance} subTitleClassName="description1 !text-primary" /> */}
                    <p className="text-light">{item.distance}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* <LinkButton
              href={contact.WhatsappCta}
              label={"Book Now"}
              className="text-white bg-secondary text-nowrap border-secondary"
            /> */}
            <OnlyButton
              onclick={() => setIsOpenPopup(true)}
              label={"Book Now"}
              className="text-white bg-secondary text-nowrap border-secondary"
            />
          </div>
          <div className="relative lg:aspect-[4/2.5] max-md:order-1 rounded-sm overflow-hidden aspect-[4/3]  w-full">
            <Image src={src} alt={title} fill className="" />
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ContactUs;
