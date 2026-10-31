import type { Metadata } from "next";
import { legacy } from "@/lib/legacy";
import { contact } from "@/utils/constent";

export const metadata: Metadata = { title: "Cancellation Policy | Soul Storries", alternates: { canonical: "https://soulstorries.com/cancellation-policy/" } };
export default function CancellationPolicy() {
  const items = legacy.faqs.filter(faq => /cancellation|Future Credit Note/.test(faq.question));
  return <main className="max_width py-12 md:py-20"><div className="max-w-3xl"><h1 className="font-aboreto text-primary text-4xl mb-8">Cancellation Policy</h1>{items.map(item => <section key={item.question} className="mb-8"><h2 className="text-primary text-xl font-semibold mb-4">{item.question}</h2><div className="soul-rich-text" dangerouslySetInnerHTML={{ __html: item.answer }} /></section>)}<p className="text-light">For help with your reservation or Future Credit Note, contact <a href={`mailto:${contact.email}`} className="text-primary underline">{contact.email}</a>.</p></div></main>;
}
