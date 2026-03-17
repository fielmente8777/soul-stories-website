import Banner from "@/components/Banner/Banner";
import Form1 from "@/components/forms/Form1";
import { Section, SectionWithContainer } from "@/components/sectionComponants";
import TestimonialsSection from "@/components/sectionComponants/TestimonialsSection";
import { ArrowUpIcons } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import ContactUs from "./components/ContactUs";
import Experiences from "./components/Experiences";
import HomeAbout from "./components/HomeAbout";
import RoomSection from "./components/RoomSection";
import { homePageData } from "./homePageData";
import Pr from "./components/Pr";

export default function Home() {
  return (
    <main>
      <Banner {...homePageData.bannerData} />
      <div className="md:-top-16 md:relative z-30 max-md:py-[16px] max-md:bg-dark2">
        <div className="!p-4 bg-primary md:rounded-md max-w-[1400px] mx-auto">
          <div className="md:rounded-2xl  md:shadow-xl md:py-5 bg-white">
            <Form1 rounded />
          </div>
        </div>
      </div>
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
        className="relative md:aspect-[4/3] aspect-[4/4] w-full after:absolute after:inset-3 after:border-[.5px] after:border-white"
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
          className="absolute md:bottom-10 bottom-30 left-1/2 -translate-x-1/2 text-white flex items-center justify-center gap-2 md:text-lg border-b border-white transition-all duration-300 ease-in-out hover:scale-x-105 active:scale-95 hover:shadow-lg z-10"
        >
          {homePageData.addPosterData.link.label}
          <span className="">
            <ArrowUpIcons />
          </span>
        </Link>
      </Section>

      <Experiences {...homePageData.experiences} />
      <ContactUs {...homePageData.contactUsData} />
      <Pr prData={homePageData.prData} />
      <TestimonialsSection />
    </main>
  );
}
