"use client";
import { usePathname } from "next/navigation";
import LandingNavBar from "./LandingNavBar";
import WebsiteNavBar from "./WebsiteNavBar";
const Navbar: React.FC = () => {
  const pathName = usePathname();

  if (pathName === "/thank-you/") {
    return null;
  } else if (pathName === "/hotel/") {
    return <LandingNavBar />;
  } else if (pathName === "/celebration/") {
    return <LandingNavBar />;
  } else {
    return <WebsiteNavBar />;
  }
};

export default Navbar;
