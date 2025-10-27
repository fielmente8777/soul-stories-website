import type { Metadata } from "next";
import { Montserrat, Aboreto } from "next/font/google";
import "./globals.css";
import "./style.scss";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Script from "next/script";
import Call from "@/components/ContactButton/Call";
import { contact } from "@/utils/constent";
import Whatsapp from "@/components/ContactButton/WhatsApp";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"],
});

const aboreto = Aboreto({
  subsets: ["latin"],
  variable: "--font-aboreto",
  weight: ["400"],
});

export const metadata: Metadata = {
  title:
    "Soul Storries Mussoorie: Luxury Villas with Spa and Wellness Retreat in Nature",
  description:
    "Soul Storries Mussoorie: Luxury Villas with Spa and Wellness Retreat in Nature",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${aboreto.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
        <Call callNumber={contact.phone[0]} />
        <Whatsapp whatsAppNumber={contact.phone[0]} />
        {/* <!-- Eazbot Script (Next.js) --> */}
        <Script id="chatbot-config" strategy="afterInteractive">
          {`
          window.eazbotConfig = {
            ndid: "4f14df46-bcfa-43da-8d99-0c6c414445ba",
            hid: "71711659",
          };
        `}
        </Script>
        <Script
          src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
