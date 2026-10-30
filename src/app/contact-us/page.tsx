import Form1 from "@/components/forms/Form1";
import { OriginalDetails } from "@/components/content/ContentBlocks";
import React from "react";
import ContactData from "./components/ContactData";
import { contactData } from "./contactData";
import { Section } from "@/components/sectionComponants";
import LazyLoadedMap from "@/components/map/LazyLoadedMap";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Soul Storries Mussoorie | Luxury Villas & Wellness",
  description:
    "Reach out to Soul Storries Mussoorie for bookings, spa inquiries, and villa stays in a peaceful luxury retreat surrounded by Uttarakhand’s scenic beauty.",
  alternates: {
    canonical: "https://soulstorries.com/contact-us/",
    languages: {
      "en-US": "https://soulstorries.com/contact-us/",
    },
  },
  openGraph: {
    title: "Contact Soul Storries Mussoorie | Luxury Villas & Wellness",
    description:
      "Reach out to Soul Storries Mussoorie for bookings, spa inquiries, and villa stays in a peaceful luxury retreat surrounded by Uttarakhand’s scenic beauty.",
    images: [
      {
        url: "https://soulstorries.com/Screens2025.png",
        width: 1200,
        height: 630,
        alt: "Soul Storries — Luxury Villas & Wellness Estate in Mussoorie",
      },
    ],
    siteName: "Soul Storries",
    type: "website",
    url: "https://soulstorries.com/contact-us/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Soul Storries Mussoorie | Luxury Villas & Wellness",
    description:
      "Escape to Soul Storries — a luxury wellness estate featuring private villas, Kafuli Café, and spa experiences in the heart of Mussoorie.",
    images: ["https://soulstorries.com/Screens2025.png"],
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
    <main>
      <ContactData {...contactData.bannerData} />
      <Section
        defaultPadding={false}
        className="w-full md:aspect-[4/1.5] aspect-square"
      >
        <LazyLoadedMap src={contactData.mapUrl} />
      </Section>
      <OriginalDetails path="/contact-us" />
      <section className="max_width py-12"><h2 className="font-aboreto text-primary text-3xl mb-8">Make an Enquiry</h2><Form1 /></section>
    </main>
  );
};

export default page;
