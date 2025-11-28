"use client";
import { usePathname } from "next/navigation";
import LandingFooter from "./LandingFooter";
import WebsiteFooter from "./WebsiteFooter";

const Footer = () => {
  const pathName = usePathname();
  if (pathName === "/thank-you/") {
    return null;
  } else if (pathName === "/hotel/") {
    return <LandingFooter />;
  } else if (pathName === "/celebration/") {
    return <LandingFooter />;
  } else {
    return <WebsiteFooter />;
  }
};

export default Footer;
