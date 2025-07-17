import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Goals from "./goals/Goals";

import FloatingButtons from "./Components/FloatingButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "D4 Interactive",
  description: "Digital Marketing Agencey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Next.js will automatically render metadata.title, etc. */}
        <meta
          name="google-site-verification"
          content="lg0Dv0msTjtBoja6UwTnhLRaoT0_JEtd82Apsee2oFw"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-black via-[#AA2428] to-black text-white min-h-screen`}
      >
        <Navbar />
        {children}

        <FloatingButtons />
        <Goals />
        <Footer />
      </body>
    </html>
  );
}
