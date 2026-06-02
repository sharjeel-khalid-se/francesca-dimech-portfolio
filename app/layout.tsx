import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux/ReduxProvider";
// import GlobalAudioPlayer from "@/components/GlobalAudioPlayer"; //  build this later
import Navbar from '@/components/Navbar'
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Francesca Dimech | Portfolio",
  description: "Actor , Musician and Creative Educator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ReduxProvider>
          {/* Navbar Here */}
          <Navbar/>
          {children}
          <Footer/>
          {/* Global Audio Player */}
        </ReduxProvider>
      </body>
    </html>
  );
}
