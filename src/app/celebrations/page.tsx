import { celebrationsData } from "./celebrationsData";
import CelebrationBanner from "./components/CelebrationBanner";

export default function Celebrations() {
  return (
    <main>
      <CelebrationBanner {...celebrationsData?.bannerData} />
    </main>
  );
}
