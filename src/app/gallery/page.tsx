import GridSection from "./components/GridSection";
import { galleryData } from "./galleryData";

export default function Gallery() {
  return (
    <main>
      <GridSection {...galleryData} />
    </main>
  );
}
