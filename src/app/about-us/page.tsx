import { Metadata } from "next";
import { aboutPageData } from "./aboutPageData";
import AboutBanner from "./components/AboutBanner";
import ConnectWithUs from "./components/ConnectWithUs";

export const metadata: Metadata = {
  title:
    "About Soul Storries Mussoorie | Luxury Wellness Retreat in the Hills",
  description:
    "Discover the story behind Soul Storries Mussoorie – a luxurious retreat offering nature-inspired villas, personalized hospitality, and a soulful spa and wellness experience in the heart of Uttarakhand.",
  alternates: {
    canonical: "https://soulstorries.com/about-us/",
    languages: {
      "en-US": "https://soulstorries.com/about-us/",
    },
  },
  openGraph: {
    title:
      "About Soul Storries Mussoorie | Luxury Wellness Retreat in the Hills",
    description:
      "Discover the story behind Soul Storries Mussoorie – a luxurious retreat offering nature-inspired villas, personalized hospitality, and a soulful spa and wellness experience in the heart of Uttarakhand.",
    images: [
      {
        url: "https://soulstorries.com/about-us/images/soulstorries-og.webp",
        width: 1200,
        height: 630,
        alt: "Soul Storries — Luxury Villas & Wellness Estate in Mussoorie",
      },
    ],
    siteName: "Soul Storries",
    type: "website",
    url: "https://soulstorries.com/about-us/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Soul Storries Mussoorie | Luxury Wellness Retreat in the Hills",
    description:
      "Escape to Soul Storries — a luxury wellness estate featuring private villas, Kafuli Café, and spa experiences in the heart of Mussoorie.",
    images: ["https://soulstorries.com/about-us/images/soulstorries-og.webp"],
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
    }
  },

};

export default function AboutUs() {
  return (
    <main>
      <AboutBanner {...aboutPageData.bannerData} />
      <ConnectWithUs {...aboutPageData.contactWithYourSoul} />
    </main>
  );
}
