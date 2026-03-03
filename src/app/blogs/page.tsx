import { BlogCard } from "@/components/cards";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeading } from "@/components/typography";
import { Metadata } from "next";
import { blogPageData } from "./blogPageData";

export const metadata: Metadata = {
  title: "Luxury Travel & Wellness Blogs | Soul Storries Mussoorie",
  description:
    "Read inspiring blogs on luxury travel, spa retreats, wellness living, and villa stays in Mussoorie by Soul Storries – crafted for mindful, soulful journeys.",
  alternates: {
    canonical: "https://soulstorries.com/blogs/",
    languages: {
      "en-US": "https://soulstorries.com/blogs/",
    },
  },
  openGraph: {
    title: "Luxury Travel & Wellness Blogs | Soul Storries Mussoorie",
    description:
      "Read inspiring blogs on luxury travel, spa retreats, wellness living, and villa stays in Mussoorie by Soul Storries – crafted for mindful, soulful journeys.",
    images: [
      {
        url: "https://soulstorries.com/blogs/images/soulstorries-og.webp",
        width: 1200,
        height: 630,
        alt: "Soul Storries — Luxury Villas & Wellness Estate in Mussoorie",
      },
    ],
    siteName: "Soul Storries",
    type: "website",
    url: "https://soulstorries.com/blogs/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Travel & Wellness Blogs | Soul Storries Mussoorie",
    description:
      "Escape to Soul Storries — a luxury wellness estate featuring private villas, Kafuli Café, and spa experiences in the heart of Mussoorie.",
    images: ["https://soulstorries.com/blogs/images/soulstorries-og.webp"],
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

export default function Blogs() {
  return (
    <main>
      <SectionWithContainer sectionClassName="bg-[#F9FFEB]">
        <SectionHeading
          title={blogPageData.bannerData.title}
          subTitle={blogPageData.bannerData.subTitle}
          line
          titleClassName="uppercase"
          titleColor="primary"
        />
        <div
          className="grid
          grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
          mt-8"
        >
          {blogPageData.cards.map((card, index) => (
            <BlogCard key={index} {...card} />
          ))}
        </div>
      </SectionWithContainer>
    </main>
  );
}
