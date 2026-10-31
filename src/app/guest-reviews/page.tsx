import type { Metadata } from "next";
import source from "@/data/source-completion.json";
export const metadata: Metadata = { title: "Guest Reviews | Soul Storries", alternates: { canonical: "https://soulstorries.com/guest-reviews/" } };
export default function GuestReviews() {
  return <main className="max_width py-12 md:py-16"><h1 className="font-aboreto text-primary text-3xl md:text-5xl mb-6">Hear it from our guests</h1><p className="text-light mb-4">Guest experiences shared on the original Soul Storries website.</p><p className="text-light mb-10">Original villa guest rating: 4.9 (80+ Reviews)</p><div className="grid md:grid-cols-2 items-start gap-8">{source.reviews.map(review => <figure key={review.author} className="bg-bg1 border border-primary/10 p-6 md:p-8"><blockquote className="text-light leading-relaxed whitespace-pre-line">{review.text}</blockquote><figcaption className="text-primary font-semibold mt-6">{review.author}</figcaption></figure>)}</div></main>;
}
