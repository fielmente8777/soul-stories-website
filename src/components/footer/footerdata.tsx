import { contact } from "@/utils/constent";
import {
  FillCallIcon,
  FillFaceBookIcon,
  FillInstaIcon,
  FillLocationIcon,
  FillMailIcon,
} from "@/utils/icons";


export const footerData = {
  logo: "/logo.png",
  description:"Escape to Soul Storries — elegant stays amidst Mussoorie’s misty hills and Garhwal’s serene beauty.",
  lists: [
    {
      title: "Contact Us",
      links: [
        {
          icon: <FillLocationIcon />,
          label: "Address: " + contact.address,
          href: contact.addressLink,
        },
        {
          icon: <FillCallIcon />,
          label: "Phone: " + contact.phone,
          href: "tel:" + contact.phone,
        },
        {
          icon: <FillMailIcon />,
          label: "Email: " + contact.email,
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
