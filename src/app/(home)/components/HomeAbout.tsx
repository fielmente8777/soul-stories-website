import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";
import SectionHeading from "../../../components/typography/SectionHeading2";
import { LazyLoadedVideo } from "@/components/Video";

interface HomeAboutProps {
  title: string;
  subTitle: string;
  description: string;
  src: string;
  videoSrc: string;
  poster: string;
  link: {
    label: string;
    url: string;
  };
}
const HomeAbout: React.FC<HomeAboutProps> = ({
  title,
  subTitle,
  description,
  link,
  src,
  videoSrc,
  poster,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid lg:grid-cols-9 grid-cols-1 gap-6">
        <div className="lg:col-span-4 space-y-8">
          <SectionHeading title={title} subTitle={subTitle} line />
          <p className="text-center text-primary md:text-lg">{description}</p>
          <LinkButton
            href={link.url}
            label={link.label}
            className="mx-auto bg-secondary text-white"
          />
        </div>
        <div className="lg:col-span-5 relative">
          <div className="w-full max-w-[75%] aspect-[4/4] relative">
            <Image src={src} alt={title} fill className="object-cover" />
          </div>
          <div className="max-w-[45%] w-full absolute top-[30%] right-0 z-10 border border-white">
            <div className="w-full aspect-[4/6.2] relative">
              <LazyLoadedVideo
                src={videoSrc}
                muted={true}
                loop={true}
                autoPlay={true}
                poster={poster}
                controls={false}
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default HomeAbout;
