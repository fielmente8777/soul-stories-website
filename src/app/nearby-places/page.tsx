import type { Metadata } from "next";
import { EstateDistances } from "@/components/content/GuestInformation";
import { LinkCards } from "@/components/content/ContentBlocks";
import { legacy } from "@/lib/legacy";
import { nearByData } from "./nearByData";

export const metadata: Metadata = { title: "Nearby Attractions & Experiences | Soul Storries", alternates: { canonical: "https://soulstorries.com/nearby-places/" } };
export default function NearbyPlaces() {
  const cards = Object.entries(legacy.pages).filter(([path]) => /^\/(top-experiences|top-sights-in-mussoo|outdoor-attractions)\//.test(path)).map(([path, page]) => {
    const original = nearByData.placess.cards.find(card => card.title.toLowerCase().replaceAll("’", "'") === page.title.toLowerCase().replaceAll("’", "'"));
    return { label: page.title, href: path + "/", image: page.blocks.find(block => block.type === "image")?.src || original?.src, description: original?.description };
  });
  return <main><section className="max_width pt-12"><h1 className="font-aboreto text-primary text-center text-4xl md:text-5xl">Explore Around Soul Storries</h1></section><LinkCards title="Things to Do in Mussoorie" cards={cards} /><EstateDistances /></main>;
}
