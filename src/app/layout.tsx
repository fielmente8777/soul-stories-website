import Call from "@/components/ContactButton/Call";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { WebProvider } from "@/context-api/WebContext";
import { contact } from "@/utils/constent";
import type { Metadata } from "next";
import { Aboreto, Montserrat } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./style.scss";

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
  title: "Soul Storries | Luxury Villas & Wellness Estate in Mussoorie",
  description:
    "Escape to Soul Storries — Mussoorie’s luxury wellness estate offering designer villas, spa, Kafuli Café, and serene Himalayan experiences. Book your stay today.",
  keywords: [
    "luxury villas Mussoorie",
    "Soul Storries Mussoorie",
    "boutique estate Mussoorie",
    "Himalayan wellness retreat",
    "Kafuli Café Mussoorie",
    "luxury stay Dehradun hills",
    "spa and wellness Mussoorie",
    "villa stay Uttarakhand",
    "romantic getaway Mussoorie",
    "Himalayan resort",
    "family villa Mussoorie",
    "terrace bar Mussoorie",
    "Mussoorie bonfire retreat",
  ],
  alternates: {
    canonical: "https://landing.soulstorries.com/",
    languages: {
      "en-US": "https://landing.soulstorries.com/",
    },
  },
  openGraph: {
    title: "Soul Storries | Luxury Villas & Wellness Estate in Mussoorie",
    description:
      "Experience Soul Storries — luxury villas, Kafuli Café, and Himalayan wellness at 7,500 ft in Mussoorie. A boutique retreat of comfort, serenity, and soul.",
    images: [
      {
        url: "https://landing.soulstorries.com/images/soulstorries-og.webp",
        width: 1200,
        height: 630,
        alt: "Soul Storries — Luxury Villas & Wellness Estate in Mussoorie",
      },
    ],
    siteName: "Soul Storries",
    type: "website",
    url: "https://landing.soulstorries.com/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soul Storries | Luxury Villas & Wellness Estate in Mussoorie",
    description:
      "Escape to Soul Storries — a luxury wellness estate featuring private villas, Kafuli Café, and spa experiences in the heart of Mussoorie.",
    images: ["https://landing.soulstorries.com/images/soulstorries-og.webp"],
    site: "@soulstorries",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          type="text/javascript"
          id="clarity"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "u0gt4nzazl");`,
          }}
        />

        {/* <!-- Google Tag Manager --> */}
        <Script
          id="gtm"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KXJ9P266');`,
          }}
        />
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
        <WebProvider>
          <Navbar />
          {children}
          <Footer />
          <Call callNumber={contact.phone[0]} />
          <Whatsapp whatsAppNumber={contact.phone[0]} />
        </WebProvider>
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
