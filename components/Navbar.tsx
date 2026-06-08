"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { 
  Home, 
  Clapperboard, 
  Music, 
  BookOpen, 
  PenTool, 
  Zap, 
  User 
} from "lucide-react";
import Profile from '../assets/francesca-dimech_1_hero_image.jpg'

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Acting", path: "/actor", icon: Clapperboard },
    { name: "Music", path: "/music", icon: Music },
    { name: "Teaching", path: "/teaching", icon: BookOpen },
    { name: "Writing", path: "/writing", icon: PenTool },
  ];

  return (
    <>
      {/* --- DESKTOP NAVBAR --- */}
      <nav className="hidden md:block sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo Area */}
            <div className="flex items-center gap-3">
              <div className="bg-violet-600 p-2 rounded-lg text-white">
                <User size={24} />
              </div>
              <Link href="/" className="text-xl font-bold tracking-tight text-violet-600">
                Francesca Dimech
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`text-sm transition-colors ${
                      isActive 
                        ? "font-bold text-gray-900" 
                        : "font-medium text-gray-500 hover:text-violet-600"
                    }`}
                  >
                    {link.name === "Acting" ? "Actor/Voiceover" : link.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className={`text-sm transition-colors ${
                  pathname === "f/contact" ? "font-bold text-gray-900" : "font-medium text-gray-500 hover:text-violet-600"
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Desktop CTA & Avatar */}
            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-md hover:bg-violet-700 transition-colors"
              >
                Hire / Book
              </Link>
              <div className="h-10 w-10 rounded-full bg-gray-200 overflow-hidden border border-gray-200">
                {/* Replace with actual avatar image later */}
                <Image 
                  src={Profile} 
                  alt="Profile" 
                  width={40} 
                  height={40} 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MOBILE TOP HEADER --- */}
      <div className="md:hidden sticky top-0 z-50 bg-white px-4 py-4 flex justify-between items-center border-b border-gray-100">
        <div className="bg-[#1C1C1E] p-2 rounded-xl text-white">
          <Zap size={24} />
        </div>
        <Link
          href="/contact"
          className="px-6 py-2 bg-violet-600 text-white text-sm font-bold rounded-full hover:bg-violet-700 transition-colors"
        >
          BOOK
        </Link>
      </div>

      {/* --- MOBILE BOTTOM NAV --- */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe z-50">
        <div className="flex justify-around items-center h-20 px-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                  isActive ? "text-violet-600" : "text-gray-500"
                }`}
              >
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span className={`text-[11px] ${isActive ? "font-semibold" : "font-medium"}`}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}   