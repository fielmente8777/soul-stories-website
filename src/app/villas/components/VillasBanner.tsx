import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import Image from "next/image";

interface VillasBannerProps {
  title: string;
  subTitle: string;
  description: string;
  src: string;
}
const VillasBanner: React.FC<VillasBannerProps> = ({
  title,
  subTitle,
  description,
  src,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-[#F9FFEB]">
      <div className="space-y-6">
        <SectionHeading title={title} subTitle={subTitle} line />
        <div className="md:w-[227px] w-[200px] mx-auto aspect-square relative">
          <Image
            src={src}
            alt={title}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <p className="md:text-lg text-primary text-center">{description}</p>
      </div>
    </SectionWithContainer>
  );
};

export default VillasBanner;
