import { Section } from "@/components/sectionComponants";
import Image from "next/image";
import Link from "next/link";
import { BiDownload } from "react-icons/bi";

interface CafeBannerData {
  title: string;
  subTItle: string;
  description: string;
  src: string;
  logo: string;
  link: {
    label: string;
    href: string;
  };
}
const CafeBanner: React.FC<CafeBannerData> = ({
  title,
  subTItle,
  description,
  link,
  logo,
  src,
}) => {
  return (
    <Section defaultPadding={false} className="bg-[#F9FFEB]">
      <div className="grid lg:grid-cols-7 items-center">
        <div className="lg:col-span-5 w-full relative aspect-[4/2.2] after:absolute after:inset-3 after:border after:border-white">
          <Image src={src} alt={title} fill className="object-cover" />
        </div>
        <div className="lg:col-span-2 px-6 py-8">
          <div className="w-[200px] mx-auto relative aspect-[4/1.15]">
            <Image src={logo} alt={title} fill className="object-cover" />
          </div>
          <h1 className="md:text-xl text-center mt-4">{title}</h1>
          <h2 className="text-primary md:text-[2.5rem] text-center text-4xl font-aboreto mt-4">
            {subTItle}
          </h2>
          <p className="md:text-lg text-primary text-center mt-4">
            {description}
          </p>
          <Link href={link.href} target="_blank" download={true} className="bg-secondary px-5 py-2 text-white flex items-center justify-center gap-2 rounded-md uppercase w-fit mx-auto mt-4">
            {link.label}
            <span>
              <BiDownload size={24}/>
            </span>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default CafeBanner;
