import { celebrationsData } from "./celebrationsData";
import CelebrationBanner from "./components/CelebrationBanner";
import Wedding from "./components/Wedding";

export default function Celebrations() {
  return (
    <main>
      <CelebrationBanner {...celebrationsData?.bannerData} />
      <Wedding {...celebrationsData?.weddingsData} />
    </main>
  );
}
