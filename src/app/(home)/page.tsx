import Banner from "@/components/Banner/Banner";
import { homePageData } from "./homePageData";
import HomeAbout from "./components/HomeAbout";
import { Section, SectionWithContainer } from "@/components/sectionComponants";
import RoomSection from "./components/RoomSection";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpIcons } from "@/utils/icons";
import Experiences from "./components/Experiences";
import ContactUs from "./components/ContactUs";
import { contact } from "../../utils/constent";
import TestimonialsSection from "@/components/sectionComponants/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <Banner {...homePageData.bannerData} />
      <HomeAbout {...homePageData.aboutUsData} />
      <SectionWithContainer>
        <div className="bg-secondary max-w-sm mx-auto h-[1px] w-full" />
        <h2 className="text-primary text-center md:text-[2.5rem] text-4xl font-aboreto my-8">
          {homePageData.title}
        </h2>
        <div className="bg-secondary max-w-sm mx-auto h-[1px] w-full" />
      </SectionWithContainer>
      <RoomSection {...homePageData.roomsData} />
      <Section
        defaultPadding={false}
        className="relative aspect-[4/3] w-full after:absolute after:inset-3 after:border-[.5px] after:border-white"
      >
        <Image
          src={homePageData.addPosterData.images[0]}
          alt={homePageData.addPosterData.title}
          fill
          sizes="100vw"
          className="object-cover object-[50%_bottom]"
        />
        <Link
          href={homePageData.addPosterData.link.url}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex items-center justify-center gap-2 text-lg border-b border-white transition-all duration-300 ease-in-out hover:scale-x-105 active:scale-95 hover:shadow-lg z-10"
        >
          {homePageData.addPosterData.link.label}
          <span className="">
            <ArrowUpIcons />
          </span>
        </Link>
      </Section>

      <Experiences {...homePageData.experiences} />
      <ContactUs {...homePageData.contactUsData} />
      <TestimonialsSection />
    </main>
  );
}
