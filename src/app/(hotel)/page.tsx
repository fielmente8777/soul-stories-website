import Banner from "@/components/Banner/Banner";
import Form1 from "@/components/forms/Form1";
import {
  AboutSection,
  CafeAndRestaurants,
  Experiences,
  Rooms,
} from "@/components/page-components";
import { Container } from "@/components/sectionComponants";
import ContactUs from "./component/ContactUs";
import { hotelLandingPageData } from "./hoteLandingPageData";

export default function Hotel() {
  return (
    <main>
      <Banner {...hotelLandingPageData.bannerData} />
      <div className="md:-top-16 md:relative z-30 max-md:py-[16px] max-md:bg-dark2">
        <Container className="!p-4 bg-primary md:rounded-2xl">
          <div className="md:rounded-2xl  md:shadow-xl md:py-5 bg-white">
            <Form1 rounded />
          </div>
        </Container>
      </div>
      <AboutSection {...hotelLandingPageData.aboutHotel} />
      <Rooms {...hotelLandingPageData.rooms} />
      <CafeAndRestaurants {...hotelLandingPageData.cafeAndRestaurants} />
      <Experiences {...hotelLandingPageData.experiences} />
      <ContactUs {...hotelLandingPageData.contactUsData} />
    </main>
  );
}
