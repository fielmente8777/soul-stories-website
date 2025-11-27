import { contact } from "@/utils/constent";
import { AirPortIcon, BusIcon, TrainIcon } from "@/utils/icons";
import { hotelLandingPageData } from "../hotel/hoteLandingPageData";

export const homePageData = {
  bannerData: {},
  aboutUsData: {
    title: "WELCOME TO SOUL STORRIES",
    subTitle: "experience serenity at Soul Storries, Mussoorie",
    description: "Step into a world of mountain magic at Soul Storries, nestled in the serene heart of Garhwal’s picturesque village. Our exclusive Mussoorie retreat seamlessly combines modern luxury with the untouched beauty of nature, offering a one-of-a-kind sanctuary that promises an unforgettable escape.",
    images: [],
    link: {
      label: "ABOUT US",
      url: "/about-us",
    },
  },
  title: "AN-award WINING EXPERIENCE",
  roomsData: {
    title: "VILLA ACCOMMODATIONS",
    subTitle: "AT SOUL STORRIES",
    description:
      "Our villas offer a peaceful retreat surrounded by pristine Uttarakhand landscapes. Experience calm, clarity, and comfort in every corner.",
    cards: hotelLandingPageData.rooms.cards.map((card) => ({
      textColor: "primary",
      title: card.title,
      noOfBadRooms: card.noOfBadRooms,
      listOfIcons: card.listOfIcons,
      images: card.images,
    })),
    link: {
      label: "KNOW MORE",
      url: "",
    },
  },
  addPosterData: {
    title: "Himalayan Views Meet Soulful Food",
    images: [],
    link: {
      label: "EXPLORE",
      url: "",
    },
  },
  experiences: {
    src: "",
    title: "MORE THAN JUST HIMALAYAN VIEW",
    subTitle: "Exclusive Experiences, Reserved for Soul Storries Guests",
    cards: [
      {
        src: "",
        alt: "DIY BARBEQUE",
      },
      {
        src: "",
        alt: "SPA & WELLNESS",
      },
      {
        src: "",
        alt: "TERRACE BAR & GRILL",
      },
      // {
      //     src:"",
      //     alt:"",
      // },
    ],
  },
  contactUsData: {
    title: "Seamlessly Connected to Every Destination",
    src: "/im23.webp",
    items: [
      {
        icons: <BusIcon />,
        title: "Bus Station",
        distance: "Nearest Bus Station — Dehradun ISBT (38 km)",
      },
      {
        icons: <TrainIcon />,
        title: "Train Station",
        distance: "Nearest Railway Station — Dehradun (36 km)",
      },
      {
        icons: <AirPortIcon />,
        title: "Airport",
        distance: "Nearest Airport — Jolly Grant, Dehradun (60 km)",
      },
    ],
    link: {
      text: "GET DIRECTION",
      href: contact.addressLink,
    },
  },
  prData: [
    {
      src: "",
      link: "",
    },
  ],
  testimonialData: {
    src: "",
    logo: "",
    title: "Appreciation From Our Guests",
    cards: [
      {
        description: "",
        name: "",
      },
    ],
  },
};
