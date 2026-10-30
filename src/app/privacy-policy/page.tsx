import type { Metadata } from "next";
import { contact } from "@/utils/constent";

export const metadata: Metadata = { title: "Privacy & Enquiry Information | Soul Storries", alternates: { canonical: "https://soulstorries.com/privacy-policy/" } };
export default function PrivacyInformation() {
  return <main className="max_width py-12 md:py-20"><article className="max-w-3xl soul-rich-text"><h1 className="font-aboreto text-primary text-4xl mb-8">Privacy & Enquiry Information</h1><h2>Enquiries</h2><p>The enquiry form asks for your name, email address, phone number, preferred dates, villa and number of guests. These details, together with the page from which you submit the enquiry, are sent to the Eazotel contact system used for Soul Storries enquiries.</p><h2>Website tools</h2><p>This website includes Google Tag Manager, Microsoft Clarity and an Eazotel chat widget. Links to WhatsApp, social media and map services take you to those services.</p><h2>Privacy questions</h2><p>For information about how Soul Storries handles your enquiry, or to ask about your submitted information, contact <a href={`mailto:${contact.email}`}>{contact.email}</a> or <a href={`tel:${contact.phone[0].replaceAll(" ", "")}`}>{contact.phone[0]}</a>.</p></article></main>;
}
