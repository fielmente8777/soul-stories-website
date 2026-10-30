import { legacy } from "@/lib/legacy";
import Link from "next/link";

export function GuestInformation() {
  return <section className="bg-bg1 py-12 md:py-16"><div className="max_width"><h2 className="font-aboreto text-primary text-3xl md:text-4xl text-center mb-10">Frequently Asked Questions</h2><div className="grid md:grid-cols-2 gap-x-10 gap-y-4">{legacy.faqs.map(faq => <details key={faq.question} className="border-b border-primary/20 py-4"><summary className="cursor-pointer text-primary font-semibold leading-relaxed">{faq.question}</summary><div className="soul-rich-text text-light mt-4" dangerouslySetInnerHTML={{ __html: faq.answer }} /></details>)}</div></div></section>;
}

export function EstateDistances() {
  return <section className="max_width py-12 md:py-16"><h2 className="font-aboreto text-primary text-3xl md:text-4xl mb-5 text-center">Places of Interest</h2><p className="text-light text-center mb-8">Distances from Soul Storries, as listed by the estate. Travel distance can vary by route.</p><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8">{legacy.distances.map(item => <div key={item.place} className="flex justify-between gap-6 py-4 border-b border-primary/15"><span className="text-primary">{item.place}</span><span className="text-light whitespace-nowrap">{item.distance}</span></div>)}</div><div className="text-center mt-8"><Link className="text-primary border-b border-secondary pb-1" href="/nearby-places/">Explore nearby attractions</Link></div></section>;
}
