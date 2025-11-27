import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";

interface ConnectWithUsProps {
  title: string;
  description: string[];
  src: string;
}

const ConnectWithUs: React.FC<ConnectWithUsProps> = ({
  title,
  description,
  src,
}) => {
  return (
    <SectionWithContainer>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-6">
        <div className="flex flex-col gap-4 py-4 md:py-8 border-y border-secondary">
          <h2 className="md:text-[2.5rem] text-3xl uppercase font-aboreto text-primary">
            {title}
          </h2>
          {description.map((item, index) => (
            <p key={index} className="text-primary md:text-lg">
              {item}
            </p>
          ))}
        </div>
        <div className="w-full relative aspect-[4/3]">
          <Image
            src={src}
            alt="Image"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ConnectWithUs;
