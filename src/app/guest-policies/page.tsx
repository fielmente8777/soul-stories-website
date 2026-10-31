import type { Metadata } from "next";
import { GuestInformation } from "@/components/content/GuestInformation";
import { contact } from "@/utils/constent";

export const metadata: Metadata = { title: "Guest Policies & FAQs | Soul Storries", description: "Check-in, payment, cancellation, extra beds and house policies published by Soul Storries.", alternates: { canonical: "https://soulstorries.com/guest-policies/" } };
export default function GuestPolicies() {
  return <main><section className="max_width py-12"><h1 className="font-aboreto text-primary text-4xl mb-6">Guest Policies & FAQs</h1><p className="text-light max-w-3xl leading-relaxed">The following information brings together the guest policies published by Soul Storries. Contact our reservations team at <a className="text-primary underline" href={`mailto:${contact.email}`}>{contact.email}</a> to confirm the terms applicable to your dates and package.</p></section><GuestInformation /></main>;
}
