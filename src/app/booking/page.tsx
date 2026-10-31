import type { Metadata } from "next";
import Form1 from "@/components/forms/Form1";
import { GuestInformation } from "@/components/content/GuestInformation";

export const metadata: Metadata = { title: "Booking Enquiry | Soul Storries Mussoorie", alternates: { canonical: "https://soulstorries.com/booking/" } };
export default function Booking() {
  return <main><section className="max_width py-12 md:py-20"><h1 className="font-aboreto text-primary text-4xl md:text-5xl mb-6">Plan Your Stay</h1><p className="text-light max-w-3xl mb-10 leading-relaxed">Choose your dates, preferred villa and number of guests. Our reservations team will confirm availability and pricing. Submitting this enquiry does not confirm a booking or take payment.</p><div className="bg-bg1 p-4 md:p-8 rounded-sm"><Form1 /></div></section><GuestInformation /></main>;
}
