import { contact } from "@/utils/constent";
import {
  FillCallIcon,
  FillFaceBookIcon,
  FillInstaIcon,
  FillLocationIcon,
  FillMailIcon,
} from "@/utils/icons";
import { BottomNav } from "../navbar/navData";

interface FooterData {
  logo: string;
  description: string;
  lists: {
    title?: string;
    links: {
      title?: string;
      icon: React.ReactNode;
      label: string;
      href: string;
      label2?: string;
      href2?: string;
    }[];
  }[];
}

export const footerData: FooterData = {
  logo: "/logo.png",
  description:
    "Escape to Soul Storries — elegant stays amidst Mussoorie’s misty hills and Garhwal’s serene beauty.",
  lists: [
    {
      title: "Contact Us",
      links: [
        {
          title: "Address: ",
          icon: <FillLocationIcon />,
          label: contact.address,
          href: contact.addressLink,
        },
        {
          title: "Phone: ",
          icon: <FillCallIcon />,
          label: contact.phone[0],
          href: "tel:" + contact.phone[0],
          label2: contact.phone[1],
          href2: "tel:" + contact.phone[1],
        },
        {
          title: "Email: ",
          icon: <FillMailIcon />,
          label: contact.email,
          href: "mailto:" + contact.email,
        },
      ],
    },
    {
      links: [
        {
          icon: <FillFaceBookIcon />,
          label: "Facebook",
          href: contact.socialMedia.facebook,
        },
        {
          icon: <FillInstaIcon />,
          label: "Instagram",
          href: contact.socialMedia.instagram,
        },
      ],
    },
  ],
};
export const footerData2: FooterData = {
  logo: "/soul-care/logo.webp",
  description:
    "Soulcare — your sanctuary for deep rest, renewal, and inner healing.",
  lists: [
    {
      title: "Contact Us",
      links: [
        {
          title: "Address: ",
          icon: <FillLocationIcon />,
          label: contact.address,
          href: contact.addressLink,
        },
        {
          title: "Phone: ",
          icon: <FillCallIcon />,
          label: contact.phone[0],
          href: "tel:" + contact.phone[0],
          label2: contact.phone[1],
          href2: "tel:" + contact.phone[1],
        },
        {
          title: "Email: ",
          icon: <FillMailIcon />,
          label: contact.email,
          href: "mailto:" + contact.email,
        },
      ],
    },
    {
      links: [
        {
          icon: <FillFaceBookIcon />,
          label: "Facebook",
          href: contact.socialMedia.facebook,
        },
        {
          icon: <FillInstaIcon />,
          label: "Instagram",
          href: contact.socialMedia.instagram,
        },
      ],
    },
  ],
};

interface WebSiteFooterData {
  logo: string;
  description: string;
  link: {
    label: string;
    href: string;
  };
  lists: {
    title?: string;
    links: {
      title?: string;
      icon?: React.ReactNode;
      label: string;
      href: string;
      label2?: string;
      href2?: string;
    }[];
  }[];
}

export const webSiteFooterData: WebSiteFooterData = {
  logo: "/logo.png",
  description: "Reserve your luxury holiday!",
  link: {
    label: "BOOK NOW",
    href: contact.WhatsappCta,
  },
  lists: [
    {
      links: [
        {
          icon: <FillFaceBookIcon />,
          label: "Facebook",
          href: contact.socialMedia.facebook,
        },
        {
          icon: <FillInstaIcon />,
          label: "Instagram",
          href: contact.socialMedia.instagram,
        },
      ],
    },
    {
      title: "Quick Links",
      links: BottomNav.links.slice(0, 5).map((link) => ({
        label: link.label,
        href: link.href,
      })),
    },
    {
      title: "Explore",
      links: BottomNav.links.slice(5).map((link) => ({
        label: link.label,
        href: link.href,
      })),
    },
    {
      title: "Policies",
      links: [
        {
          label: "Check-in Policy",
          href: "/check-in-policy",
        },
        {
          label: "Privacy Policy",
          href: "/privacy-policy",
        },
        {
          label: "Terms & Conditions",
          href: "/terms-and-conditions",
        },
      ],
    },
    {
      title: "Contact Us",
      links: [
        {
          icon: <FillLocationIcon />,
          label: "Address: " + contact.address,
          href: contact.addressLink,
        },
        {
          title: "call: ",
          icon: <FillCallIcon />,
          label: contact.phone[0],
          href: "tel:" + contact.phone[0],
          label2: contact.phone[1],
          href2: "tel:" + contact.phone[1],
        },
        {
          title: "Email: ",
          icon: <FillMailIcon />,
          label: contact.email,
          href: "mailto:" + contact.email,
        },
      ],
    },
  ],
};
