import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogsData } from "@/app/blogs/[slug]/blogsData";
import { ContentBlocks, LinkCards } from "@/components/content/ContentBlocks";
import Form1 from "@/components/forms/Form1";
import { canonicalUrl, groupLinks, legacy, wellnessLinks } from "@/lib/legacy";

type Props = { params: Promise<{ legacyPath: string[] }> };
const existing = new Set(["/", "/about-us", "/blogs", "/contact-us", "/kafuli-cafe", "/wellness", "/thank-you"]);
const routes = [...Object.keys(legacy.pages).filter(path => !existing.has(path)), ...Object.keys(legacy.archives)];

export const dynamicParams = false;
export function generateStaticParams() { return routes.map(path => ({ legacyPath: path.slice(1).split("/") })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { legacyPath } = await params;
  const path = "/" + legacyPath.join("/");
  const page = legacy.pages[path] || legacy.archives[path];
  if (!page) notFound();
  return { title: `${page.title} | Soul Storries`, description: page.description || `Discover ${page.title} at Soul Storries in Mussoorie.`, alternates: { canonical: canonicalUrl(path) }, openGraph: { title: page.title, description: page.description, url: canonicalUrl(path), images: ["https://soulstorries.com/Screens2025.png"] } };
}

export default async function RestoredPage({ params }: Props) {
  const { legacyPath } = await params;
  const path = "/" + legacyPath.join("/");
  const page = legacy.pages[path];
  const archive = legacy.archives[path];
  if (!page && !archive) notFound();
  const title = page?.title || archive.title;
  const archiveCards = archive?.posts.map(slug => blogsData.find(blog => blog.slug === slug)).filter((blog): blog is (typeof blogsData)[number] => Boolean(blog)).map(blog => ({ label: blog.title, href: `/blogs/${blog.slug}/`, image: blog.src, description: blog.description }));
  const related = path.startsWith("/wellness/") ? wellnessLinks.filter(link => link.href !== path + "/") : path.includes("wedding") || path.includes("corporate") || path.includes("celebration") ? groupLinks.filter(link => link.href !== path + "/") : [];
  const attraction = /^\/(top-experiences|top-sights-in-mussoo|outdoor-attractions)\//.test(path);
  const attractionCards = attraction ? Object.entries(legacy.pages).filter(([key]) => /^\/(top-experiences|top-sights-in-mussoo|outdoor-attractions)\//.test(key) && key !== path).map(([key, item]) => ({ label: item.title, href: key + "/", image: item.blocks.find(block => block.type === "image")?.src })) : [];
  return <main>
    <section className="bg-bg1 py-10 md:py-16"><div className="max_width"><nav aria-label="Breadcrumb" className="text-sm text-light mb-6"><Link href="/">Home</Link><span className="mx-2">/</span>{path.startsWith("/wellness/") && <><Link href="/wellness/">Wellness</Link><span className="mx-2">/</span></>}<span>{title}</span></nav><h1 className="font-aboreto text-primary text-3xl md:text-5xl max-w-6xl leading-snug break-words">{title}</h1></div></section>
    {page && <article className="max_width py-10 md:py-16"><div className="max-w-5xl mx-auto"><ContentBlocks blocks={page.blocks} skipTitle={page.blocks[0]?.html?.toLowerCase() === `<h2>${page.title.toLowerCase()}</h2>`} /></div></article>}
    {archive && <>{archive.description && <p className="max_width pt-10 text-light">{archive.description}</p>}<LinkCards title={`Stories: ${archive.title}`} cards={archiveCards || []} /></>}
    {page?.enquiry && <section id="enquire" className="bg-bg1 py-12"><div className="max_width"><h2 className="font-aboreto text-primary text-3xl mb-4">Enquire about {title}</h2><p className="text-light mb-8">Share your preferred dates and group size. Our reservations team will confirm availability and your personalised package.</p><div className="bg-white p-5 rounded-sm"><Form1 /></div></div></section>}
    {attraction && <LinkCards title="Explore Nearby" cards={attractionCards} />}
    {related.length > 0 && <LinkCards title="You May Also Like" cards={related} />}
  </main>;
}
