import { contact } from "@/utils/constent";
import { CallIcon, FillLocationIcon, FillMailIcon } from "@/utils/icons";

export const navUpper = [
  {
    label: "Mussoorie, Uttarakhand",
    href: contact.addressLink,
    icon: <FillLocationIcon />,
  },
  {
    label: contact.email,
    href: "mailto:" + contact.email,
    icon: <FillMailIcon />,
  },
  {
    label: contact.phone[0],
    href: "tel:" + contact.phone[0],
    icon: <CallIcon />,
  },
];


export const BottomNav = {
  logo: "/logo.png",
  links: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about-us/",
    },
    {
      label: "Villas",
      href: "/villas/",
    },
    {
      label: "Kafuli Cafe",
      href: "/kafuli-cafe/",
    },
    {
      label: "Contact Us",
      href: "/contact-us/",
    },
    {
      label: "blog",
      href: "/blog/",
    },
    {
      label: "celebrations",
      href: "/celebrations/",
    },
    {
      label: "gallery",
      href: "/gallery/",
    },
    {
      label: "nearby places",
      href: "/nearby-places/",
    },
    {
      label: "wellness",
      href: "/wellness/",
    },
  ],
}