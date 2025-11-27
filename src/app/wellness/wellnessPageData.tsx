import { contact } from "@/utils/constent";
import { hotelLandingPageData } from "../hotel/hoteLandingPageData";

export const wellnessPageData = {
  bannerData: {
    src: "/soul-care/im17.webp",
    logo: "/soul-care/logo.webp",
    title: "Embrace Your Inner Peace",
    description:
      "Experience deep relaxation with therapeutic spa treatments that restore balance and rejuvenate your body.",
    link: { label: "Call Now", url: "tel: " + contact.phone[0] },
  },
  aboutSoulCare: {
    images: ["/soul-care/im15.webp", "/soul-care/im20.webp"],
    title: "ABOUT US",
    subTitle: "SOUL CARE BY SOUL STORIES",
    description:
      "Discover a space where well-being meets serenity, nestled in the heart of the Himalayas. At Soulcare, we believe true wellness begins within. Rooted in nature, guided by ancient wisdom, and nurtured with intention, our sanctuary offers expert-led wellness programs that provide holistic solutions for weight loss, pain relief, and overall health management — addressing concerns like gut health, migraines, thyroid imbalances, and more. Designed for deep rest, renewal, and reconnection, Soulcare is your haven for inner healing and wholeness.",
    link: { label: "BOOK NOW", url: contact.WhatsappCta },
  },
  wellnessServices: {
    title: "OUR WELLNESS SERVICES",
    subTitle: "Wellness for Mind, Body & Soul",
    link: { label: "BOOK NOW", url: contact.WhatsappCta },
    cards: [
      {
        src: "/soul-care/im13.webp",
        alt: "SOUND HEALING",
      },
      {
        src: "/soul-care/im10.webp",
        alt: "SPA THERAPIES",
      },
      {
        src: "/soul-care/im5.webp",
        alt: "HEALING POTLI TREATMENTS",
      },
      {
        src: "/soul-care/Sustainable-Weight-loss.webp",
        alt: "Sustainable Weight loss",
      },
      {
        src: "/soul-care/Targeted-Pain-Relief.webp",
        alt: "Targeted Pain Relief",
      },
      {
        src: "/soul-care/Holistic-Healing.webp",
        alt: "Holistic Healing",
      },
      {
        src: "/soul-care/Yoga-and-Stillness.webp",
        alt: "Yoga & Stillness",
      },
    ],
  },
  gallery: {
    subTitle: "soul care gallery",
    description:
      "Take a break from the hustle and bustle in our serene relaxation area, where soft lighting, soothing music, and the gentle aroma of essential oils create an atmosphere of pure tranquility. Indulge in exclusive body treatments that rejuvenate your senses — from gentle scrubs that awaken and refresh your skin to nourishing wraps that leave it silky smooth. Experience a variety of techniques, from classic massages to exotic rituals, designed to relieve tension, improve circulation, and restore balance and ease to your body.",
    images: [
      "/soul-care/im11.webp",
      "/soul-care/im14.webp",
      "/soul-care/im9.webp",
      "/soul-care/im3.webp",
      "/soul-care/im14.webp",
      "/soul-care/im15.webp",
      "/soul-care/im12.webp",
      "/soul-care/im19.webp",
      "/soul-care/im18.webp",
      "/soul-care/im4.webp",
    ],
    src: "/soul-care/logo-1.webp",
    link: { label: "BOOK NOW", url: contact.WhatsappCta },
  },
  ourPackages: {
    title: "Explore Our Wellness Packages",
    description:
      "Explore our carefully curated wellness packages, each designed to cater to your unique needs and help you rediscover balance and vitality.",
    cards: [
      {
        packageType: "COUPLE PACKAGES",
        days: "Journey of Renewal Program (1 Day)",
        description:
          "A 1-day luxury wellness retreat for couples combining Ayurveda, spa therapy, yoga, and sound healing for complete mind-body rejuvenation.",
        src: "/icons/couple-packages.png",
        link: { href: contact.WhatsappCta, label: "Book Package" },
      },
      {
        packageType: "SPA WELLNESS PACKAGES",
        days: "Rejuvenation Program (3 Days)",
        description:
          "A 3-day holistic program to detox, relax, and rejuvenate your mind and body.",
        src: "/icons/spa-wellness.png",
        link: { href: contact.WhatsappCta, label: "Book Package" },
      },
      {
        packageType: "SPA WELLNESS PACKAGES",
        days: "Detox & De-stress Program (5 Days)",
        description:
          "A 5-day restorative program to relieve stress, detoxify, and rejuvenate your body & mind.",
        src: "/icons/spa-wellness2.png",
        link: { href: contact.WhatsappCta, label: "Book Package" },
      },
      {
        packageType: "SPA WELLNESS PACKAGES",
        days: "Healing & Wellness Program (7 Days)",
        description:
          "7-day Ayurvedic wellness plan for full mind-body healing and detox.",
        src: "/icons/spa-wellness3.png",
        link: { href: contact.WhatsappCta, label: "Book Package" },
      },
    ],
  },
  accommodation: {
    title: "DESIGNED FOR DEEP REST & HOLISTIC REJUVENATION",
    subTitle: "Our VILLA Accommodations",
    link: { label: "BOOK NOW", url: contact.WhatsappCta },
    cards: hotelLandingPageData.rooms.cards.map((card) => ({
      textColor: "primary",
      title: card.title,
      noOfBadRooms: card.noOfBadRooms,
      listOfIcons: card.listOfIcons,
      images: card.images,
    })),
  },
  addCard: {
    title: "Time to unwind? Book Now",
    description:
      "Escape into serenity with personalized Ayurveda, spa, and yoga experiences designed to refresh your body and soul. Book now for an unforgettable experience of luxury and holistic healing.",
    link: { label: "BOOK NOW", url: contact.WhatsappCta },
    src: "/soul-care/im21.webp",
  },
};
