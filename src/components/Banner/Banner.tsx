import Image from "next/image";
import { Section } from "../sectionComponants";
import { LazyLoadedVideo } from "../Video";

interface BannerProps {
  src: string;
  videoSrc?: string;
}
const Banner: React.FC<BannerProps> = ({ src, videoSrc }) => {
  return (
    <Section
      defaultPadding={false}
      className="relative w-full md:aspect-[16/9] aspect-square"
    >
      {videoSrc ? (
        <LazyLoadedVideo
          src={videoSrc}
          muted={true}
          autoPlay
          loop
          poster={src}
          controls={false}
        />
      ) : (
        <Image
          src={src}
          alt="banner"
          fill
          className="object-cover"
          sizes="100vw"
          priority
          loading="eager"
        />
      )}

      <div className="absolute z-20 top-6 left-1/2 transform -translate-x-1/2">
        <div className="relative lg:w-[200px] w-[100px] aspect-[4/3]">
          <Image src="/logo.png" alt="logo" fill className="object-contain" />
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black/30" />
    </Section>
  );
};

export default Banner;
