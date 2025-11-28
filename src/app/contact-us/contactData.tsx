import { contact } from "@/utils/constent";
import { FillMailIcon } from "@/utils/icons";

export const contactData = {
  bannerData: {
    title: "CONTACT US TODAY!",
    subTitle: "WE’D LOVE TO HEAR FROM YOU",
    description:
      "Our passionate team is always ready to provide the guidance and support you need. Reach out to us, and let us help you craft the perfect luxury getaway, surrounded by the breathtaking beauty of Garhwal.",
    src: "/Hand.png",
    cards: [
      {
        title: "EMAIL ADDRESS:",
        label: contact.email,
        href: "mailto:" + contact.email,
        icon: <FillMailIcon />,
      },
      {
        title: "PHONE NUMBER:",
        label: contact.phone[0],
        href: "tel:" + contact.phone[0],
        label2: contact.phone[1],
        href2: "tel:" + contact.phone[1],
        icon: <FillMailIcon />,
      },
      {
        title: "ADDRESS:",
        label: contact.address,
        href: contact.addressLink,
        icon: <FillMailIcon />,
      },
    ],
  },
  mapUrl: contact.mapUrl,
};
