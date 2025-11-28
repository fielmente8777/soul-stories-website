import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";
import SectionHeading from "../../../components/typography/SectionHeading2";
import { LazyLoadedVideo } from "@/components/Video";

interface HomeAboutProps {
  title: string;
  subTitle: string;
  description: string;
  cards: {
    src: string;
    videoSrc?: string;
  }[];
  link: {
    label: string;
    url: string;
  };
}
const HomeAbout: React.FC<HomeAboutProps> = ({
  title,
  subTitle,
  description,
  cards,
  link,
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
          {cards[0].src && (
            <div className="w-full max-w-[75%] aspect-[4/4] relative">
              <Image
                src={cards[0].src}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          )}
          {cards[1].videoSrc && (
            <div className="max-w-[45%] absolute top-[30%] right-0 z-10">
              <div className="w-full aspect-[4/6] relative">
                <LazyLoadedVideo
                  src={cards[1].videoSrc}
                  muted={true}
                  loop={true}
                  autoPlay={true}
                  controls={false}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default HomeAbout;
