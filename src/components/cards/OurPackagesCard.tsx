import { OurPackagesPropsTypes } from "@/@types/types";
import Image from "next/image";
import { FC } from "react";
import LinkButton from "../buttons/LinkButton";

const OurPackagesCard: FC<OurPackagesPropsTypes["cards"][0]> = ({
  packageType,
  days,
  description,
  src,
  link,
}) => {
  return (
    <div className="bg-white md:py-[68px] py-[40px] box-shadow md:px-[48px] px-4 rounded-[24px]">
      <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-6">
        <div className="grid grid-cols-1 max-md:gap-6 md:grid-cols-2 md:col-span-4 md:divide-x-[0.5px] max-md:divide-y-[0.5px]  divide-clr/50">
          <div className="flex  justify-center items-center gap-3">
            <div className="md:w-[60px] w-[80px] aspect-square bg-clr1 rounded-full flex justify-center items-center">
              <div className="w-[40px] aspect-square relative">
                <Image
                  src={src}
                  alt={packageType}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex-grow w-full">
              <h3 className="md:text-[2rem] text-2xl text-clr font-plus">
                {packageType}
              </h3>
              <p className="text-clr md:text-lg mt-3">{days}</p>
            </div>
          </div>
          <div className="md:pl-6 max-md:pt-4">
            <p className="text-clr md:text-lg">{description}</p>
          </div>
        </div>
        <div className="md:col-span-1">
          <LinkButton href={link.href} label={link.label} />
        </div>
      </div>
    </div>
  );
};

export default OurPackagesCard;
