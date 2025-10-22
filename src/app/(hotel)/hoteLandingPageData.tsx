import { contact } from "@/utils/constent";
import {
  AirPortIcon,
  BadICon,
  BusIcon,
  HillStationICon,
  TrainIcon,
  WifiIcon,
} from "@/utils/icons";

export const hotelLandingPageData = {
  bannerData: {
    src: "/im14.webp",
  },
  aboutHotel: {
    title: "WELCOME TO SOUL STORRIES",
    subTitle: "Your Luxury Wellness Estate in Mussooriee",
    description:
      "Amid Uttarakhand’s tranquil hills, where nature whispers ancient wisdom, I found my sanctuary — Soul Storries. Born during the stillness of Covid, my restless traveler’s heart longed for the embrace of my homeland. Returning to these serene mountains awakened something profound within me — a deep connection to nature, consciousness, and purpose. Here, amidst the valleys and silence, I discovered harmony, renewal, and a vision that reaches beyond self.",
    link: { label: "BOOK NOW", url: "" },
    src: "/logo-2.png",
    images: [
      "/im1.webp", "/im8.webp", "/im24.webp", "/im17.webp", "/im5.webp",
      "/im6.webp", "/im20.webp", "/im16.webp", "/im4.webp", "/im20.webp",
    ],
  },
  rooms: {
    title: "WHERE COMFORT MEETS LUXURY",
    subTitle: "Our VILLA Accommodations",
    cards: [
      {
        title: "FLORA",
        noOfBadRooms: "4 Bedrooms Luxury Villa",
        description:
          "Experience Flora — a luxurious 4-bedroom chalet at Soul Storries, featuring private access, elegant comforts, and stunning mountain views of Mussoorie.",
        link: { label: "BOOK NOW", url: "" },
        images: ["/im13.webp"],
        listOfIcons: [
          {
            icons: <HillStationICon />,
            title: "hill station",
          },
          {
            icons: <BadICon />,
            title: "Bad",
          },
          {
            icons: <WifiIcon />,
            title: "Wifi",
          },
        ],
      },
      {
        title: "Amaraa",
        noOfBadRooms: "1 Bedrooms Luxury Villa",
        description:
          "One-bedroom villas provide a luxurious and comfortable retreat for those seeking a private and intimate stay experience with all the essential amenities and more.",
        link: { label: "BOOK NOW", url: "" },
        images: ["/im9.webp"],
        listOfIcons: [
          {
            icons: <HillStationICon />,
            title: "hill station",
          },
          {
            icons: <BadICon />,
            title: "Bad",
          },
          {
            icons: <WifiIcon />,
            title: "Wifi",
          },
        ],
      },
      {
        title: "AURORA",
        noOfBadRooms: "2 Bedrooms Luxury Villa",
        description:
          "Discover Aurora — a 2-bedroom wooden chalet at Soul Storries, offering cozy luxury, shared moments, and breathtaking views of the Mussoorie mountains.",
        link: { label: "BOOK NOW", url: "" },
        images: ["/im15.webp"],
        listOfIcons: [
          {
            icons: <HillStationICon />,
            title: "hill station",
          },
          {
            icons: <BadICon />,
            title: "Bad",
          },
          {
            icons: <WifiIcon />,
            title: "Wifi",
          },
        ],
      },
    ],
  },
  cafeAndRestaurants: {
    title: "KAFULI CAFE & RESTAURANT",
    subTitle: "by Soul Storries",
    description:
      "For the first time, Kafuli Cafe opens its doors to all, offering a serene dining experience at 7,500 ft amidst the Garhwal Himalayas. Savor breathtaking views, soulful cuisine, and moments of peaceful indulgence — now open for bookings.",
    images: ["/im21.webp", "/im3.webp"],
    link: { label: "BOOK NOW", url: "" },
  },
  experiences: {
    title: "UNIQUE EXPERIENCES",
    subTitle: "at soul storries",
    link: {
      label: "BOOK NOW",
      url: "",
    },
    cards: [
      {
        title: "DIY BARBEQUE",
        src: "/im7.webp",
      },
      {
        title: "SPA & WELLNESS",
        src: "/im18.webp",
      },
      {
        title: "TERRACE BAR & GRILL",
        src: "/im11.webp",
      },
      {
        title: "BONFIRE",
        src: "/im10.webp",
      },
    ],
  },
  contactUsData: {
    title: "Seamlessly Connected to Every Destination",
    src: "/im23.webp",
    items: [
      {
        icons: <BusIcon />,
        title: "Bus Station",
        distance: "XX Kilometers",
      },
      {
        icons: <TrainIcon />,
        title: "Train Station",
        distance: "XX Kilometers",
      },
      {
        icons: <AirPortIcon />,
        title: "Airport",
        distance: "XX Kilometers",
      },
    ],
    link: {
      text: "BOOK NOW",
      href: contact.WhatsappCta,
    },
  },
};
