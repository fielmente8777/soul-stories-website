"use client";
import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { LazyLoadedVideo } from "@/components/Video";

interface AboutBannerProps {
  title: string;
  subTitle: string;
  description: string[];
  videos: {
    videoSrc: string;
    poster: string;
  }[];
  link: {
    label: string;
    href: string;
  };
}
const AboutBanner: React.FC<AboutBannerProps> = ({
  title,
  subTitle,
  description,
  videos,
  link,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-[#F9FFEB]">
      <div className="">
        <div className="flex items-center gap-2">
          <div className="">
            <h1 className="text-xl text-black">{title}</h1>
            <h2 className="text-primary md:text-[2.5rem] text-4xl font-aboreto lg:text-nowrap">
              {subTitle}
            </h2>
          </div>
          <div className="bg-secondary w-full h-[1px]" />
        </div>
        <p className="md:text-lg text-primary mt-4">{description[0]}</p>
        <div>
          <div className="lg:grid hidden md:grid-cols-3 gap-5 mt-12 max-w-7xl mx-auto">
            {videos.map((card, index) => (
              <div
                key={index}
                className={`relative w-full aspect-[4/6.5] ${
                  index == 0 && `mt-26`
                } ${index == 1 && `mt-14`}`}
              >
                <LazyLoadedVideo
                  src={card.videoSrc}
                  muted={true}
                  autoPlay
                  loop
                  poster={card.poster}
                  // controls={false}
                />

                
              </div>
            ))}
          </div>

          <div className="lg:hidden block mt-12">
            <SwiperCarousel
              data={videos}
              className="w-full h-full"
              renderSlide={(card, index) => (
                <div
                  key={index}
                  className={`relative w-full aspect-[4/4.4] border`}
                >
                  <LazyLoadedVideo
                    src={card.videoSrc}
                    muted={true}
                    autoPlay
                    loop
                    poster={card.poster}
                    controls={false}
                  />
                </div>
              )}
            />
          </div>
        </div>
        <p className="md:text-lg text-primary mt-4 text-right">
          {description[1]}
        </p>
        <LinkButton
          href={link.href}
          label={link.label}
          className="bg-secondary border-secondary text-white mx-auto"
        />
      </div>
    </SectionWithContainer>
  );
};

export default AboutBanner;
