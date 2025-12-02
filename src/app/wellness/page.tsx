import Banner2 from "@/components/Banner/Banner2";
import TestimonialsSection from "@/components/sectionComponants/TestimonialsSection";
import AboutSoulCare from "../soul-care/components/AboutSoulCare";
import AddSection from "../soul-care/components/AddSection";
import OurPackages from "../soul-care/components/OurPackages";
import WellnessServices from "../soul-care/components/WellnessServices";
import SectionHeader from "./components/SectionHeader";
import { wellnessPageData } from "./wellnessPageData";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Yoga Retreat in Mussoorie | Soul Storries Wellness & Spa Villas",
  description:
    "Rejuvenate your mind and body at Soul Storries Mussoorie, a luxury yoga retreat in the Himalayas offering guided wellness programs, serene spa therapies, and nature-immersed villa stays.",
  alternates: {
    canonical: "https://soulstorries.com/kafuli-cafe/",
    languages: {
      "en-US": "https://soulstorries.com/kafuli-cafe/",
    },
  },
  openGraph: {
    title: "Yoga Retreat in Mussoorie | Soul Storries Wellness & Spa Villas",
    description:
      "Rejuvenate your mind and body at Soul Storries Mussoorie, a luxury yoga retreat in the Himalayas offering guided wellness programs, serene spa therapies, and nature-immersed villa stays.",
    images: [
      {
        url: "https://soulstorries.com/kafuli-cafe/images/soulstorries-og.webp",
        width: 1200,
        height: 630,
        alt: "Soul Storries — Luxury Villas & Wellness Estate in Mussoorie",
      },
    ],
    siteName: "Soul Storries",
    type: "website",
    url: "https://soulstorries.com/kafuli-cafe/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga Retreat in Mussoorie | Soul Storries Wellness & Spa Villas",
    description:
      "Escape to Soul Storries — a luxury wellness estate featuring private villas, Kafuli Café, and spa experiences in the heart of Mussoorie.",
    images: ["https://soulstorries.com/kafuli-cafe/images/soulstorries-og.webp"],
    site: "@soulstorries",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};


const page = () => {
  return (
    <div>
      <SectionHeader />
      <Banner2 {...wellnessPageData.bannerData} fullBorder isLogo={false} />
      <AboutSoulCare {...wellnessPageData.aboutSoulCare} align="left" />
      <WellnessServices {...wellnessPageData.wellnessServices} />
      <AddSection {...wellnessPageData.addCard} card={false} isBorder={true} />
      <OurPackages {...wellnessPageData.ourPackages} />
      <TestimonialsSection />
    </div>
  );
};

export default page;
