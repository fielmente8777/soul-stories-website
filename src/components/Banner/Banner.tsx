import Image from "next/image";
import { Section } from "../sectionComponants";

interface BannerProps {
  src: string;
}
const Banner: React.FC<BannerProps> = ({ src }) => {
  return (
    <Section defaultPadding={false} className="relative w-full md:aspect-[16/9] aspect-square">
      <Image
        src={src}
        alt="banner"
        fill
        sizes="100%"
        className="object-cover"
      />
      <div className="absolute z-20 top-6 left-1/2 transform -translate-x-1/2">
        <div className="relative lg:w-[200px] w-[100px] aspect-[4/3]">
          <Image
            src="/logo.png"
            alt="logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
    </Section>
  );
};

export default Banner;
