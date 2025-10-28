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
      <head>
        {/* <!-- Google Tag Manager --> */}
        <Script id="gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html:`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KXJ9P266');`
        }} />
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body
        className={`${montserrat.variable} ${aboreto.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KXJ9P266"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
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
