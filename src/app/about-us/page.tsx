import { aboutPageData } from "./aboutPageData";
import AboutBanner from "./components/AboutBanner";
import ConnectWithUs from "./components/ConnectWithUs";

export default function AboutUs() {
  return (
    <main>
      <AboutBanner {...aboutPageData.bannerData} />
      <ConnectWithUs {...aboutPageData.contactWithYourSoul} />
    </main>
  );
}
