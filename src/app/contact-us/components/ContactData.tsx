import { Section } from "@/components/sectionComponants";
import SectionHeading2 from "@/components/typography/SectionHeading";
import Image from "next/image";
import { ReactNode } from "react";

export interface BannerCard {
  title: string;
  label: string;
  href: string;
  icon: ReactNode;

  // optional second label & link (only for phone numbers)
  label2?: string;
  href2?: string;
}

export interface BannerData {
  title: string;
  subTitle: string;
  description: string;
  src: string;
  cards: BannerCard[];
}

const ContactData = ({
  title,
  subTitle,
  description,
  src,
  cards,
}: BannerData) => {
  return (
    <Section className="p-0!">
      <div className="grid md:grid-cols-2 md:divide-x divide-y divide-secondary">
        <div className="space-y-4 py-16">
          <SectionHeading2 title={title} subTitle={subTitle} textCenter />
          <div className="relative w-full aspect-4/1">
            <Image src={src} alt="image" fill className="object-contain" />
          </div>

          <p className="p-6 text-center">{description}</p>
        </div>

        <div className="md:p-16 max-md:px-4 max-md:pt-8">
          <div className="divide-y divide-secondary space-y-6">
            {cards?.map((card, index) => (
              <div key={index} className="pb-12 space-y-2 text-primary">
                <div className="flex items-center gap-1">
                  <span className="text-secondary"> {card.icon}</span>
                  <h2 className="md:text-2xl font-aboreto">{card.title}</h2>
                </div>

                <p>{card?.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactData;
