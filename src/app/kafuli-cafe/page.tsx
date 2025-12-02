import { SectionWithContainer } from "@/components/sectionComponants";
import CafeBanner from "./components/CafeBanner";
import { kafuliPageData } from "./kafuliPageData";
import OpenToAll from "./components/OpenToAll";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Kafuli Cafe Mussoorie | Farm-to-Table Dining & Curated Café Menu",
  description:
    "Kafuli Café at Soul Storries Mussoorie offers a farm-to-table experience with a thoughtfully crafted café menu featuring local flavors, seasonal ingredients, and wellness-inspired cuisine in a serene hillside setting.",
  alternates: {
    canonical: "https://soulstorries.com/kafuli-cafe/",
    languages: {
      "en-US": "https://soulstorries.com/kafuli-cafe/",
    },
  },
  openGraph: {
    title: "Kafuli Cafe Mussoorie | Farm-to-Table Dining & Curated Café Menu",
    description:
      "Kafuli Café at Soul Storries Mussoorie offers a farm-to-table experience with a thoughtfully crafted café menu featuring local flavors, seasonal ingredients, and wellness-inspired cuisine in a serene hillside setting.",
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
    title: "Kafuli Cafe Mussoorie | Farm-to-Table Dining & Curated Café Menu",
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

export default function KafuliCafePage() {
  return (
    <main>
      <CafeBanner {...kafuliPageData?.bannerData} />
      <SectionWithContainer>
        <div className="max-w-4xl mx-auto w-full space-y-8">
          <div className="bg-secondary max-w-[60%] mx-auto h-[1px] w-full" />
          <p className="md:text-lg text-primary text-center">
            {kafuliPageData?.description}
          </p>
          <div className="bg-secondary max-w-[60%] mx-auto h-[1px] w-full" />
        </div>
      </SectionWithContainer>
      <OpenToAll {...kafuliPageData?.openToAll} />
    </main>
  );
}
