import LinkButton from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import CafeSlider from "@/components/sliders/CafeSlider";
import SectionHeading2 from "@/components/typography/SectionHeading";

interface OpenToAllProps {
  title: string;
  subTitle: string;
  description: string[];
  images: string[];
  link: {
    label: string;
    href: string;
  };
}
const OpenToAll: React.FC<OpenToAllProps> = ({
  title,
  subTitle,
  description,
  images,
  link,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-[#F9FFEB]" containerClassName="space-y-9" >
      <SectionHeading2 title={title} subTitle={subTitle} line />
      <p className="md:text-lg text-center text-primary ">{description[0]}</p>
      <CafeSlider cards={images} />
      {description.slice(1).map(
        (item, index) =>
          index > 0 && (
            <p key={index} className="md:text-lg mt-4 text-center text-primary">
              {item}
            </p>
          )
      )}
      <LinkButton
        href={link.href}
        label={link.label}
        className="bg-secondary text-white mx-auto mt-4"
      />
    </SectionWithContainer>
  );
};

export default OpenToAll;
