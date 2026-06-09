import Link from "next/link";
import { Mail, ExternalLink, Headphones, MonitorPlay } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FA] border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4">
          {/* Column 1: Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-violet-600 w-8 h-8 rounded-lg flex items-center justify-center text-white font-black tracking-tighter">
                FD
              </div>
              <span className="text-lg font-bold text-gray-900">
                Francesca Dimech
              </span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Multi-faceted performing artist specializing in acting, music
              composition, teaching, and professional translation.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li>
                <Link
                  href="/"
                  className="hover:text-violet-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/actor"
                  className="hover:text-violet-600 transition-colors"
                >
                  Actor/Voiceover
                </Link>
              </li>
              <li>
                <Link
                  href="/music"
                  className="hover:text-violet-600 transition-colors"
                >
                  Music
                </Link>
              </li>
              <li>
                <Link
                  href="/teaching"
                  className="hover:text-violet-600 transition-colors"
                >
                  Teaching
                </Link>
              </li>
              <li>
                <Link
                  href="/writing"
                  className="hover:text-violet-600 transition-colors"
                >
                  Writing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-violet-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Representation */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">
              Representation
            </h3>
            <div className="space-y-2 text-sm text-gray-500 font-medium">
              <p className="text-gray-900 font-bold">JK's Management</p>
              <a
                href="mailto:info@jksperformanceacademy.co.uk"
                className="hover:text-violet-600 transition-colors block"
              >
                info@jksperformanceacademy.co.uk
              </a>
              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="https://app.spotlight.com/9492-8979-9003"
                  target="_blank"
                  rel="noreferrer"
                  className="text-violet-600 hover:text-violet-700 flex items-center gap-1 w-fit"
                >
                  <MonitorPlay size={14} /> Spotlight Profile{" "}
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Follow / Socials */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/francesca-dimech-05251435/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-[#0A66C2] transition-colors"
                aria-label="LinkedIn"
              >
                Linkedin
              </a>
              <a
                href="https://soundcloud.com/user-890931115"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-[#ff5500] transition-colors"
                aria-label="SoundCloud"
              >
                <Headphones size={20} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.facebook.com/francescaswordsalad"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-[#1877F2] transition-colors"
                aria-label="Facebook"
              >
                <p>Facebook</p>
              </a>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-violet-600 transition-colors"
                aria-label="Contact via Email"
              >
                <Mail size={20} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Row */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} Francesca Dimech. All rights
            reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500 font-medium">
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
