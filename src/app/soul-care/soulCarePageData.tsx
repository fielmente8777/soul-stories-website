import { contact } from "@/utils/constent";

export const soulCarePageData = {
  bannerData: {
    src: "/im1.webp",
    logo: "/logo.png",
    title: "Soul Care",
    description: "",
    link: { label: "Call Now", url: "tel: " + contact.phone[0] },
  },
  aboutSoulCare: {
    images: ["", ""],
    title: "Soul Care",
    subTitle: "Your Wellness Retreat in Mussoorie",
    description:
      "Escape to Soul Storries — elegant stays amidst Mussoorie’s misty hills and Garhwal’s serene beauty.",
    link: { label: "BOOK NOW", url: contact.WhatsappCta },
  },
  wellnessServices: {
    title: "Wellness Services",
    subTitle: "at Soul Storries",
    link: { label: "BOOK NOW", url: contact.WhatsappCta },
    cards: [
      {
        src: "",
        alt: "",
      },
    ],
  },
  gallery: {
    title: "Gallery",
    description:"",
    images:[""],
    link: { label: "BOOK NOW", url: contact.WhatsappCta },
  },
};
