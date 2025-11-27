import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";

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
            <h2 className="text-primary md:text-[2.5rem] text-4xl font-aboreto text-nowrap">
              {subTitle}
            </h2>
          </div>
          <div className="bg-secondary w-full h-[1px]" />
        </div>
        <p className="md:text-lg text-primary mt-4">{description[0]}</p>
        <div></div>
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
