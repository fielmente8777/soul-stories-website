import { Metadata } from "next";
import { celebrationsData } from "./celebrationsData";
import CelebrationBanner from "./components/CelebrationBanner";
import Wedding from "./components/Wedding";

export const metadata: Metadata = {
  title:
    "Bachelor & Family Party Venue in Mussoorie | Soul Storries Luxury Villas",
  description:
    "Unforgettable bachelor and family parties at Soul Storries Mussoorie. Enjoy private luxury villas, scenic mountain views, and personalized event experiences in a peaceful natural setting.",
  alternates: {
    canonical: "https://soulstorries.com/celebrations/",
    languages: {
      "en-US": "https://soulstorries.com/celebrations/",
    },
  },
  openGraph: {
    title:
      "Bachelor & Family Party Venue in Mussoorie | Soul Storries Luxury Villas",
    description:
      "Unforgettable bachelor and family parties at Soul Storries Mussoorie. Enjoy private luxury villas, scenic mountain views, and personalized event experiences in a peaceful natural setting.",
    images: [
      {
        url: "https://soulstorries.com/celebrations/images/soulstorries-og.webp",
        width: 1200,
        height: 630,
        alt: "Soul Storries — Luxury Villas & Wellness Estate in Mussoorie",
      },
    ],
    siteName: "Soul Storries",
    type: "website",
    url: "https://soulstorries.com/celebrations/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bachelor & Family Party Venue in Mussoorie | Soul Storries Luxury Villas",
    description:
      "Escape to Soul Storries — a luxury wellness estate featuring private villas, Kafuli Café, and spa experiences in the heart of Mussoorie.",
    images: ["https://soulstorries.com/celebrations/images/soulstorries-og.webp"],
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


export default function Celebrations() {
  return (
    <main>
      <CelebrationBanner {...celebrationsData?.bannerData} />
      <Wedding {...celebrationsData?.weddingsData} />
    </main>
  );
}
