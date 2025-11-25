import LinkButton from "@/components/buttons/LinkButton";
import { Container, Section } from "@/components/sectionComponants";
import Image from "next/image";
import React from "react";

type CelebrateProps = {
  title: string;
  subTitle: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  link: {
    label: string;
    href: string;
  };
};

const Celebrate = ({
  title,
  subTitle,
  description,
  link,
  image,
}: CelebrateProps) => {
  return (
    <Section>
      <Container>
        <div className="grid lg:grid-cols-12 items-center gap-8">
          <div className="col-span-7">
            <div className="relative aspect-4/3">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="col-span-5 space-y-4">
            <h2 className="md:text-xl text-primaryuppercase font-medium">
              {title}
            </h2>
            <h3 className="md:text-5xl text-primary text-3xl font-aboreto">
              {subTitle}
            </h3>
            <p>{description}</p>

            <div>
              <LinkButton
                label={link?.label}
                href={link?.href}
                className="bg-secondary text-white"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Celebrate;
