import { Container, Section } from "@/components/sectionComponants";
import SectionHeading2 from "@/components/typography/SectionHeading";
import React from "react";

const SectionHeader = () => {
  return (
    <Section className="bg-bg1">
      <Container>
        <SectionHeading2
          title="A SANCTUARY FOR WELLNESS"
          subTitle="Discover Soul CARE WELLNESS BY Soul STORRIES"
          textCenter
          logo
        />
      </Container>
    </Section>
  );
};

export default SectionHeader;
