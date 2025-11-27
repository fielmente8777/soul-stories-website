import VillaAccommodations from "./components/VillaAccommodations";
import VillasBanner from "./components/VillasBanner";
import { villasPageData } from "./villasPageData";

export default function VillsPage() {
  return (
    <main>
      <VillasBanner {...villasPageData.bannerData} />
      <VillaAccommodations {...villasPageData.roomsData} />
    </main>
  );
}
