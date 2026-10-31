import Image from "next/image";
import Link from "next/link";
import { ContentBlock, legacy } from "@/lib/legacy";

export function ContentBlocks({ blocks, skipTitle = false }: { blocks: ContentBlock[]; skipTitle?: boolean }) {
  const seenTables = new Set<string>();
  let hasTherapyHeading = false;
  return (
    <div className="soul-content space-y-6">
      {blocks.map((block, index) => {
        if (block.html?.includes("<table")) {
          const fingerprint = block.html.replace(/<h[23][^>]*>[\s\S]*?<\/h[23]>/g, "").replace(/<[^>]+>/g, "").replace(/\s+/g, "").toLowerCase();
          if (seenTables.has(fingerprint)) return null;
          seenTables.add(fingerprint);
        }
        if (block.html?.replace(/<[^>]+>/g, "").trim() === "TREATMENTS &amp; THERAPIES") {
          if (hasTherapyHeading) return null;
          hasTherapyHeading = true;
        }
        if (skipTitle && index === 0 && block.html?.startsWith("<h2>")) return null;
        if (block.type === "html") return <div key={index} className="soul-rich-text" dangerouslySetInnerHTML={{ __html: block.html ?? "" }} />;
        if (block.type === "image" && block.src) return (
          <Image key={index} src={block.src} alt={block.alt || "Soul Storries, Mussoorie"} width={block.width || 1200} height={block.height || 800} sizes="(min-width: 1024px) 960px, 100vw" className="max-w-full h-auto rounded-sm" />
        );
        if (block.type === "video" && block.src) return <video key={index} controls playsInline preload="none" poster="/images/Flora/Flora-outside1.webp" className="w-full rounded-sm"><source src={block.src} type="video/mp4" /><a href={block.src}>Watch the Soul Storries film</a></video>;
        if (block.type === "link" && block.href) return <Link key={index} href={block.href} className="inline-block border-b border-secondary pb-1 text-primary font-semibold">{block.label}</Link>;
        return null;
      })}
    </div>
  );
}

export function OriginalDetails({ path, title }: { path: string; title?: string }) {
  const blocks = legacy.supplements[path];
  if (!blocks?.length) return null;
  return <section className="max_width py-12 md:py-16"><div className="max-w-4xl mx-auto">{title && <h2 className="font-aboreto text-primary text-3xl mb-8">{title}</h2>}<ContentBlocks blocks={blocks} /></div></section>;
}

export function LinkCards({ title, cards }: { title: string; cards: { label: string; href: string; image?: string; description?: string }[] }) {
  return (
    <section className="max_width py-12 md:py-16">
      <h2 className="font-aboreto text-primary text-3xl md:text-4xl text-center mb-10">{title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(card => <Link key={card.href} href={card.href} className="group bg-bg1 rounded-sm overflow-hidden border border-primary/10 focus-visible:outline-2 focus-visible:outline-primary">
          {card.image && <div className="relative aspect-[4/3]"><Image src={card.image} alt={card.label} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-300 group-hover:scale-105" /></div>}
          <div className="p-6 space-y-3"><h3 className="font-aboreto text-primary text-xl">{card.label}</h3>{card.description && <p className="text-light leading-relaxed">{card.description}</p>}<span className="inline-block text-primary border-b border-secondary">Explore</span></div>
        </Link>)}
      </div>
    </section>
  );
}
