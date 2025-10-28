import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface AboutSoulCareProps {
  images: string[];
  title: string;
  subTitle: string;
  description: string;
  link: {
    label: string;
    url: string;
  };
}

const AboutSoulCare: React.FC<AboutSoulCareProps> = ({
  images,
  title,
  subTitle,
  description,
  link,
}) => {
  return (
    <SectionWithContainer sectionClassName="about-soul">
      <div className="grid lg:grid-cols-6 auto-cols-auto gap-6 items-center">
        <div className="lg:col-span-2 space-y-6">
          <SectionHeading title={title} subTitle={subTitle} wrapperClassName="about-soul-care" />
          <div className="lg:hidden flex gap-6 items-end w-full">
            {images.map((image, index) => (
              <div
                className={`max-w-1/2 w-full ${
                  index === 0 ? "aspect-[4/7.5]" : "aspect-[4/6.5]"
                } relative`}
                key={index}
              >
                <Image
                  src={image}
                  alt={`Image ${index}`}
                  fill
                  className={`object-cover ${
                    index === 0 ? "rounded-b-full" : "rounded-full"
                  }`}
                />
              </div>
            ))}
          </div>
          <p className="md:text-lg">{description}</p>
          <LinkButton
            href={link.url}
            label={link.label}
            className="bg-secondary border-secondary text-white"
          />
        </div>
        <div className="lg:col-span-4 lg:flex hidden gap-6 items-end w-full">
          {images.map((image, index) => (
            <div
              className={`max-w-1/2 w-full ${
                index === 0 ? "aspect-[4/7.5]" : "aspect-[4/6.5]"
              } relative`}
              key={index}
            >
              <Image
                src={image}
                alt={`Image ${index}`}
                fill
                className={`object-cover ${
                  index === 0 ? "rounded-b-full" : "rounded-full"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AboutSoulCare;
