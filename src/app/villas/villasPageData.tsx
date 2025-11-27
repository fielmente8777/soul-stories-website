import { contact } from "@/utils/constent";
import { hotelLandingPageData } from "../hotel/hoteLandingPageData";

export const villasPageData = {
  bannerData: {
    title: "",
    subTitle: "",
    description: "",
    src: "",
  },
  roomsData: {
    title: "WHERE COMFORT MEETS LUXURY",
    subTitle: "Our VILLA Accommodations",
    description:
      "**Rs 2,500 Extra Bed charges per guest per night with Breakfast. Breakfast is complimentary, and all other meals are available on an à la carte.",
    cards: hotelLandingPageData.rooms.cards.map((card) => ({
      textColor: "primary",
      title: card.title,
      description: card.description,
      noOfBadRooms: card.noOfBadRooms,
      listOfIcons: card.listOfIcons,
      images: card.images,
      price: card.price,
      link: { label: "BOOK NOW", url: contact.WhatsappCta },
    })),
  },
  testimonialData: {
    title: "Testimonials",
    src: "",
    cards: [
      {
          name: "Arun Kumar",
          description:"",
      }
    ],
  }
};
