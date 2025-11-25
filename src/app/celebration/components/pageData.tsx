import { contact } from "@/utils/constent";
import {
  AirPortIcon,
  BadICon,
  BusIcon,
  HillStationICon,
  TrainIcon,
  WifiIcon,
} from "@/utils/icons";

export const pageData = {
  bannerData: {
    title: "",
    subTitle: "",
    videos: [
      "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/soul+stories/Video1.mp4",
      "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/soul+stories/Video2.mp4",
      "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/soul+stories/Video3.mp4",
    ],
  },

  celebrateData: {
    title: "A LUXURIOUS ESCAPE TO CELEBRATE",
    subTitle: "AT SOUL STORRIES, MUSSOORIE",
    description:
      "Step into a world of mountain magic at Soul Storries, nestled in the serene heart of Garhwal’s picturesque village. Our exclusive Mussoorie retreat seamlessly combines modern luxury with the untouched beauty of nature, offering a one-of-a-kind sanctuary for weddings, corporate events, and intimate gatherings — promising an unforgettable escape.",
    image: {
      src: "/Celebrate.jpg",
      alt: "",
    },
    link: {
      label: "BOOK NOW",
      href: "/contact",
    },
  },

  rooms: {
    title: "DESIGNED FOR DEEP REST & HOLISTIC REJUVENATION",
    subTitle: "Our VILLA Accommodations",
    cards: [
      {
        title: "FLORA",
        noOfBadRooms: "4 Bedrooms Luxury Villa",
        price: "₹ 60,000 + 18% Taxes",
        // description:
        //   "Experience Flora — a luxurious 4-bedroom chalet at Soul Storries, featuring private access, elegant comforts, and stunning mountain views of Mussoorie.",
        link: { label: "BOOK NOW", url: contact.WhatsappCta },
        images: [
          "/images/Flora/Flora-bedroom1.webp",
          "/images/Flora/Flora-bedroom2.webp",
          "/images/Flora/Flora-living1.webp",
          "/images/Flora/Flora-living2.webp",
          "/images/Flora/Flora-living3.webp",
          "/images/Flora/Flora-living4.webp",
          "/images/Flora/Flora-outside1.webp",
          // "/images/Flora/Flora-outside2.webp",
          "/images/Flora/Flora-outside3.webp",

          "/images/Flora/Flora-bathroom.webp",
        ],
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
        noOfBadRooms: "1 Bedroom Luxury Villa",
        price: "₹ 15,000 + 18% Taxes",
        // description:
        //   "One-bedroom villas provide a luxurious and comfortable retreat for those seeking a private and intimate stay experience with all the essential amenities and more.",
        link: { label: "BOOK NOW", url: contact.WhatsappCta },
        images: [
          "/images/Amara/Amara-bedroom2.webp",
          "/images/Amara/Amara-bedroom1.webp",
          "/images/Amara/Amara-living1.webp",
          "/images/Amara/Amara-living2.webp",
          "/images/Amara/Amara-outside1.webp",
          "/images/Amara/Amara-outside2.webp",
          "/images/Amara/Amara-bathroom.webp",
        ],
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
        price: "₹ 30,000 + 18% Taxes",
        // description:
        //   "Discover Aurora — a 2-bedroom wooden chalet at Soul Storries, offering cozy luxury, shared moments, and breathtaking views of the Mussoorie mountains.",
        link: { label: "BOOK NOW", url: contact.WhatsappCta },
        images: [
          "/images/Aurora/Aurora-bedroom1.webp",
          "/images/Aurora/Aurora-bedroom2.webp",
          "/images/Aurora/Aurora-living1.webp",
          "/images/Aurora/Aurora-living2.webp",
          "/images/Aurora/Aurora-outside1.webp",
          "/images/Aurora/Aurora-bathroom.webp",
        ],
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
        title: "AURA",
        noOfBadRooms: "1 Bedroom Luxury Villa",
        price: "₹ 15,000 + 18% Taxes",
        // description:
        //   "Escape the corner office and unwind in Aura, our cozy one-bedroom wooden chalet. With panoramic Himalayan views, it’s the perfect romantic retreat in Mussoorie.",
        link: { label: "BOOK NOW", url: contact.WhatsappCta },
        images: [
          "/images/Aura/Aura-bedroom1.webp",
          "/images/Aura/Aura-bedroom2.webp",
          "/images/Aura/Aura-living1.webp",
          "/images/Aura/Aura-outside1.webp",
          "/images/Aura/Aura-bathroom.webp",
        ],
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
        title: "ATHENA",
        noOfBadRooms: "2 Bedrooms Luxury Villa",
        price: "₹ 30,000 + 18% Taxes",
        // description:
        //   "A  luxurious 2-bedroom, 1,700 sqft retreat at Soul Storries, perfect for small families. Enjoy serene comfort, a cozy balcony, & breathtaking views of the magical Mussoorie mountains.",
        link: { label: "BOOK NOW", url: contact.WhatsappCta },
        images: [
          "/images/Athena/Athena-bedroom1.webp",
          "/images/Athena/Athena-bedroom2.webp",
          "/images/Athena/Athena-living1.webp",
          "/images/Athena/Athena-living2.webp",
        ],
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
      text: "BOOK NOW",
      href: contact.WhatsappCta,
    },
  },

  eventData: {
    title: "CELEBRATIONS AT SOUL STORRIES",
    subTitle: "DESIGNED FOR UNFORGETTABLE CELEBRATIONS",
    description:
      "Your moments deserve the magic of Soul Storries. Host your wedding, event, or gathering with us. Book now and celebrate in serenity amidst the breathtaking beauty of Mussoorie.",
    link: {
      label: "Book Now",
      url: contact.WhatsappCta,
    },
    cards: [
      {
        src: "/Event1.jpg",
        title: "INTIMATE WEDDINGS",
      },
      {
        src: "/Event2.jpg",
        title: "CORPORATE EVENTS",
      },
      {
        src: "/Event3.jpg",
        title: "FAMILY GATHERINGS",
      },
    ],
  },
};
