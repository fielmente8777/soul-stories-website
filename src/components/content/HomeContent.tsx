import Image from "next/image";
import Link from "next/link";
import { blogsData } from "@/app/blogs/[slug]/blogsData";
import { legacy, wellnessLinks } from "@/lib/legacy";
import { ContentBlocks, LinkCards } from "./ContentBlocks";

export function AudienceLinks() {
  return <LinkCards title="Soul Storries for Everyone" cards={[
    { label: "For Families", href: "/villas/", image: "/images/Flora/Flora-living1.webp", description: "Ideal for large families from 3–14 guests." },
    { label: "For Couples", href: "/villas/aura/", image: "/images/Aura/Aura-bedroom1.webp", description: "A cozy escape for couples." },
    { label: "For Corporates", href: "/corporate-events/", image: "/Corporate-Events.jpg", description: "Tailored for teams up to 40 guests." },
    { label: "For Weddings", href: "/destination-wedding/", image: "/weddings.jpg", description: "A magical destination for intimate celebrations." },
  ]} />;
}

export function WellnessPrograms() { return <div className="bg-bg1"><LinkCards title="Choose Your Wellness Package" cards={wellnessLinks} /></div>; }

export function PremiumAmenities() {
  return <section className="max_width py-12 md:py-16"><h2 className="font-aboreto text-primary text-3xl md:text-4xl text-center mb-10">Elevate Your Stay with Our Premium Amenities</h2><ul className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">{["Spacious Living Rooms", "Luxury Bedrooms", "Fine Furnishing", "Free Wi-Fi", "Scenic Sit-out Area", "Private Parking"].map(item => <li key={item} className="border border-primary/15 py-7 px-4 text-primary bg-bg1">{item}</li>)}</ul></section>;
}

export function CafeIntroduction() {
  return <section className="max_width py-12 md:py-16"><div className="grid md:grid-cols-2 gap-8 items-center"><div className="relative aspect-[4/3]"><Image src="/images/Kafuli/Kafuli-cafe-img1.webp" alt="Kafuli Cafe at Soul Storries" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" /></div><div className="space-y-5"><h2 className="font-aboreto text-primary text-3xl">Kafuli Cafe and Restaurant by Soul Storries</h2><p className="text-light leading-relaxed">For the first time, we are opening our doors to guests beyond our stay-in visitors, offering a unique opportunity to immerse yourself in a dining experience at 7,500 ft in the serene heart of the Garhwal Himalayas. With stunning views and a menu crafted to delight your senses, our cafe promises to be a tranquil retreat where nature’s beauty and exquisite cuisine meet. Bookings are now open to reserve your spot for this elevated experience.</p><p className="text-light leading-relaxed">Stay tuned for the first glimpse of Kafuli Cafe and join us for a moment of peaceful indulgence.</p><div className="flex gap-6 flex-wrap"><Link href="/kafuli-cafe/" className="text-primary border-b border-secondary">Explore More</Link><a href="/Cafe-Kafuli.pdf" className="text-primary border-b border-secondary" target="_blank" rel="noopener noreferrer">Download Menu</a></div></div></div></section>;
}

export function LatestStories() { return <LinkCards title="Latest Stories" cards={blogsData.slice(0, 5).map(blog => ({ label: blog.title, href: `/blogs/${blog.slug}/`, image: blog.src, description: blog.description }))} />; }

export function WellnessOverview() {
  const blocks = legacy.supplements["/wellness"] || [];
  return <>{blocks.length > 0 && <section className="max_width py-12"><h2 className="font-aboreto text-primary text-3xl mb-8">Spa and Wellness</h2><div className="max-w-4xl"><ContentBlocks blocks={blocks} /></div></section>}<WellnessPrograms /></>;
}

export function OriginalFilms() {
  return <section className="bg-bg1 py-12 md:py-16"><div className="max_width"><h2 className="font-aboreto text-primary text-3xl md:text-4xl text-center mb-10">Discover Tranquility at Soul Storries</h2><div className="grid md:grid-cols-2 gap-8">{Object.entries(legacy.pages).filter(([path]) => path.startsWith("/tranquility/")).map(([path, page]) => <div key={path}><ContentBlocks blocks={page.blocks} /><Link href={path + "/"} className="inline-block text-primary mt-4 border-b border-secondary">{page.title}</Link></div>)}</div></div></section>;
}
