import LinkButton from "@/components/buttons/LinkButton";
import { Section } from "@/components/sectionComponants";
import Image from "next/image";

interface AddSectionProps {
  title: string;
  description: string;
  link: {
    label: string;
    url: string;
  };
  src: string;
  card?: boolean;
  isBorder?: boolean;
}

const AddSection: React.FC<AddSectionProps> = ({
  title,
  description,
  link,
  src,
  card = true,
  isBorder = false,
}) => {
  return (
    <Section
      defaultPadding={false}
      className={`relative w-full md:aspect-[4/1.75] aspect-[4/4.5] overflow-hidden ${
        isBorder &&
        "after:absolute after:inset-x-4 after:h-[96%] after:top-3 after:border-[.5px] after:border-secondary"
      }`}
    >
      <Image
        src={src}
        alt="banner"
        fill
        className="object-cover object-bottom"
        sizes="100vw"
        priority
        loading="eager"
      />
      {card && (
        <div className="md:right-36 px-4 absolute top-1/2 transform -translate-y-1/2">
          <div className="bg-primary add-section md:p-10 px-4 py-8 md:w-sm w-full flex flex-col gap-4">
            <h2 className="text-2xl md:text-[2.5rem] font-aboreto text-center text-white">
              {title}
            </h2>
            <p className="text-white md:text-lg text-center">{description}</p>
            <LinkButton
              href={link.url}
              label={link.label}
              className="bg-secondary border-secondary text-white mx-auto"
            />
          </div>
        </div>
      )}
    </Section>
  );
};

export default AddSection;
