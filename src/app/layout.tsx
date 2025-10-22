import type { Metadata } from "next";
import { Montserrat, Aboreto } from "next/font/google";
import "./globals.css";
import "./style.scss";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

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
  title: "Soul Storries Mussoorie: Luxury Villas with Spa and Wellness Retreat in Nature",
  description: "Soul Storries Mussoorie: Luxury Villas with Spa and Wellness Retreat in Nature",
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
      </body>
    </html>
  );
}
