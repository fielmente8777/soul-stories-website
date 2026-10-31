import Image from "next/image";
import Link from "next/link";
import source from "@/data/source-completion.json";

export function CafeMenu() {
  const categories = ["Soups", "Lunch/ Dinner", "Rice & accompaniments", "Breads"];
  return <section className="max_width py-12 md:py-16"><div className="max-w-4xl mx-auto space-y-6"><p className="text-primary">Guests reviews 4.8 (75+ Reviews)</p><h2 className="font-aboreto text-primary text-3xl">A Dining Experience Like No Other – Now Open to All!</h2><h3 className="font-aboreto text-primary text-2xl">Welcome to a feast above the clouds.</h3><ul className="flex flex-wrap gap-6 text-light"><li>Ethereal Ambience</li><li>By Reservation only</li><li>Valley View Terrace</li></ul><p className="text-light">Every craving, deliciously satisfied</p><h2 className="font-aboreto text-primary text-3xl">Cafe Menu</h2><p className="text-light">Please confirm menu availability and current prices when reserving.</p><div className="grid md:grid-cols-2 gap-10">{source.menus.map((items, i) => <div key={i}><h3 className="font-aboreto text-primary text-2xl mb-4">{categories[i]}</h3><ul>{items.map(item => <li key={item} className="py-3 border-b border-primary/15 text-primary">{item}</li>)}</ul></div>)}</div><a href="/Cafe-Kafuli.pdf" className="inline-block border-b border-secondary text-primary">Download the café menu</a></div></section>;
}

export function AdvisoryBoard() {
  return <section className="bg-bg1 py-12 md:py-16"><div className="max_width space-y-8"><div className="max-w-3xl space-y-4"><h2 className="font-aboreto text-primary text-3xl">True healing begins where the soul finds peace</h2><p className="text-light">A transformative wellness retreat, designed by experts at Soul Storries</p></div><h2 className="font-aboreto text-primary text-3xl">Advisory Board Members</h2><div className="grid md:grid-cols-2 gap-6">{source.advisors.map(person => <article key={person.name} className="bg-white p-6 space-y-3 border border-primary/10"><Image src={person.image} alt={person.name} width={240} height={280} className="h-64 w-auto object-cover mb-4" /><h3 className="font-aboreto text-primary text-2xl">{person.name}</h3>{person.details.map(detail => <p key={detail} className="text-light leading-relaxed">{detail}</p>)}</article>)}</div><div className="space-y-4"><h2 className="font-aboreto text-primary text-2xl">What we offer</h2><p className="text-light">Villa accommodation, personalised wellness programmes, treatments and therapies.</p><p className="text-light">Original published accommodation rates: Rs. 15,000 + GST / per night; Rs. 60,000 + GST / per night; Rs. 30,000 + GST / per night. Please contact reservations to confirm the rate for your villa and dates.</p><Link href="/contact-us/" className="inline-block text-primary border-b border-secondary">For your customized package contact</Link></div></div></section>;
}

export function AboutMilestones() {
  return <section className="max_width py-12 md:py-16 space-y-10"><h2 className="font-aboreto text-primary text-3xl md:text-4xl max-w-4xl">Discover a magical world where tranquility and wonder<br />spark endless enchantment.</h2><div className="grid sm:grid-cols-3 gap-6">{[["300+", "Happy Guests"], ["500+", "dinners served"], ["25+", "five star review"]].map(([value,label]) => <div key={label} className="bg-bg1 p-8 text-center"><p className="text-4xl text-primary font-aboreto">{value}</p><p className="text-light mt-3">{label}</p></div>)}</div><h2 className="font-aboreto text-primary text-3xl">We&apos;re Proud to Create Delicious Dishes &amp; Deserts</h2></section>;
}

export function NearbyServices() {
  return <section className="max_width py-10"><h2 className="font-aboreto text-primary text-3xl mb-6">Nearby Services</h2><div className="grid sm:grid-cols-2 gap-6 text-light"><p>Kafuli Cafe — 30 meters away</p><p>Grill Restro &amp; Bars — 30 meters away</p></div></section>;
}
