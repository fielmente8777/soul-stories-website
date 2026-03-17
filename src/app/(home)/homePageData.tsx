import { contact } from "@/utils/constent";
import { AirPortIcon, BusIcon, TrainIcon } from "@/utils/icons";
import { hotelLandingPageData } from "../hotel/hoteLandingPageData";
import { soulCarePageData } from "../soul-care/soulCarePageData";

export const homePageData = {
  bannerData: {
    src: "/Screens2025.png",
    videoSrc:
      "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/soul+stories/Soul+Stories+Luxury+Villa+and+Resorts%2C+Mussoorie+%EF%BD%9C+The+Ultimate+Luxury+Getaway.mp4",
  },
  aboutUsData: {
    title: "WELCOME TO SOUL STORRIES",
    subTitle: "experience serenity at Soul Storries, Mussoorie",
    description:
      "Step into a world of mountain magic at Soul Storries, nestled in the serene heart of Garhwal’s picturesque village. Our exclusive Mussoorie retreat seamlessly combines modern luxury with the untouched beauty of nature, offering a one-of-a-kind sanctuary that promises an unforgettable escape.",
    src: "/home-about.jpg",
    poster: "video/mp4",
    videoSrc:
      "https://eazotel-clients-images.s3.ap-south-1.amazonaws.com/soul+stories/Video3.mp4",

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
      images: card.images ? [card.images[0]] : [],
    })),
    link: {
      label: "KNOW MORE",
      url: "",
    },
  },
  addPosterData: {
    title: "Himalayan Views Meet Soulful Food",
    images: ["/adds.png"],
    link: {
      label: "EXPLORE",
      url: "/kafuli-cafe",
    },
  },
  experiences: {
    src: "/layer-2.png",
    title: "MORE THAN JUST HIMALAYAN VIEW",
    subTitle: "Exclusive Experiences, Reserved for Soul Storries Guests",
    cards: [
      ...hotelLandingPageData.experiences.cards,
      ...soulCarePageData.wellnessServices.cards,
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
      logo: "/pr/travel-turtle.png",
      src: "/pr/pr-bnr.webp",
      title: "TRAVEL TURTLE - A SERENDIPITOUS SOJOURN AT SOUL STORRIES - SUDIPTA SAHA",
      description: "“A Serendipitous Sojourn at Soul Storries” by Sudipta Saha, featured on Travel Turtle, explores a journey of self-discovery and meaningful experiences. The article delves into soulful travel encounters that leave a lasting impact. It highlights the beauty of unexpected moments and the emotions tied to exploring new places. Through vivid storytelling, it inspires readers to embrace the magic of travel.",
    },
    {
      logo: "/pr/the-pionner.png",
      src: "/pr/pr2-bnr.jpg",
      title: "SUNDAY PIONEER AGENDA - FINDING SOUL CONNECTIONS AT SOUL STORRIES - GYANESHWAR DAYAL",
      description: "*”Finding Soul Connections at Soul Storries”* by Gyaneshwar Dayal, featured in *Sunday Pioneer Agenda*, explores the essence of meaningful travel experiences. The article highlights how *Soul Storries* offers a unique blend of luxury, tranquility, and deep emotional connections. It delves into the immersive environment that fosters self-discovery and relaxation. Through engaging storytelling, it captures the magic of soulful retreats.",
    },
    {
      logo: "/pr/hospitality-world.png",
      src: "/pr/pr3-bnr.png",
      title: "HOSPITALITY.ECONOMIC TIMES FROM THE ECONOMIC TIMES - FROM EXHIBITIONS TO HOSPITALITY, MADHAVI MADAAN’S 'SOUL STORRIES' IS MORE THAN JUST A BRICK-AND-MORTAR STORY",
      description: "Madhavi Madaan’s Soul Storries, featured in The Economic Times, goes beyond traditional hospitality, blending art, culture, and immersive experiences. The article highlights how it serves as a platform for exhibitions, storytelling, and luxurious stays. It showcases Madaan’s vision of creating a space that connects people with meaningful narratives. Soul Storries is more than just a destination—it’s a fusion of creativity and hospitality.",
    },
    {
      logo: "/pr/th.png",
      src: "/pr/pr4-bnr.jpg",
      title: "TNHGLOBAL - SOUL STORRIES: AN OASIS OF LUXURY AND NATURE",
      description: "“Soul Storries: An Oasis of Luxury and Nature”*, featured on TNHGLOBAL, explores a retreat that harmonizes opulence with serene natural beauty. The article highlights the exquisite hospitality, breathtaking landscapes, and rejuvenating experiences offered. It delves into how Soul Storries provides a perfect escape for travelers seeking tranquility and comfort. The piece captures the essence of luxury intertwined with nature’s charm.",
    },
  ],
};
