import TestimonialsSection from "@/components/sectionComponants/TestimonialsSection";
import Banner from "../components/Banner";
import { roomsPageData } from "./components/pageData";
import { SectionWithContainer } from "@/components/sectionComponants";
import SectionHeading from "@/components/typography/SectionHeading2";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const villas = await roomsPageData;

  return villas.map((villa) => ({
    slug: villa.slug,
    fallback: false,
  }));
}

export async function generateMetadata({ params }: Params) {
  const path = await params;
  const villa = await roomsPageData.find((villa) => villa.slug === path.slug);

  return {
    title: villa?.metaData.title,
    description: villa?.metaData.description,
    alternate: {
      canonical: `https://soulstorries.com/villas/${villa?.slug}`,
      languages: {
        "en-US": `https://soulstorries.com/villas/${villa?.slug}`,
      },
    },
    openGraph: {
      title: villa?.metaData.title,
      description: villa?.metaData.description,
      images: [
        {
          url: `https://soulstorries.com/villas/${villa?.slug}/images/soulstorries-og.webp`,
          width: 1200,
          height: 630,
          alt: "Soul Storries — Luxury Villas & Wellness Estate in Mussoorie",
        },
      ],
      siteName: "Soul Storries",
      type: "website",
      url: `https://soulstorries.com/villas/${villa?.slug}`,
      locale: "en_US",
    },
  };
}

export default async function Villa(props: Params) {
  const params = await props.params;
  const villa = await roomsPageData.find((villa) => villa.slug === params.slug);
  if (!villa) {
    return (
      <main className="max_screen_width py-10">
        <h1 className="text-2xl font-semibold md:text-4xl text-center">
          Villa not found
        </h1>
      </main>
    );
  }
  return (
    <main>
      <Banner
        roomName={villa.title}
        roomType={villa.noOfBadRooms ?? ""}
        description={villa.description}
        images={villa.images ?? []}
        link={villa.link ?? { label: "", href: "" }}
        amenitiesData={villa.amenitiesData ?? []}
      />
      <SectionWithContainer>
        <div>
          <SectionHeading
            subTitle={villa.safeAndHygienicData?.title}
            textCenter
          />
          <ul className="flex max-md:flex-col gap-4 md:items-center justify-between md:mt-10 mt-6">
            {villa.safeAndHygienicData?.items?.map((item, index) => (
              <li key={index} className="flex gap-3">
                <span>
                  <TickIcon />
                </span>
                <span className="text-dark text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWithContainer>
      <TestimonialsSection />
    </main>
  );
}

export const TickIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM10.09 16.72L6.29 12.91L7.77 11.43L10.09 13.76L15.94 7.89L17.42 9.37L10.09 16.72Z"
      fill="#044444"
    />
  </svg>
);
