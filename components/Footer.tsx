import Link from "next/link";
import { Mail, User, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FA] border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <div className="bg-violet-600 p-2 rounded-lg text-white">
                <User size={20} />
              </div>
              <span className="text-lg font-bold text-violet-600">
                Francesca Dimech
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-xs">
              Multi-faceted performing artist specializing in acting, music composition, and creative education.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li><Link href="/" className="hover:text-violet-600">Home</Link></li>
              <li><Link href="/actor" className="hover:text-violet-600">Actor/Voiceover</Link></li>
              <li><Link href="/music" className="hover:text-violet-600">Music</Link></li>
              <li><Link href="/teaching" className="hover:text-violet-600">Teaching</Link></li>
              <li><Link href="/writing" className="hover:text-violet-600">Writing</Link></li>
              <li><Link href="/contact" className="hover:text-violet-600">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Management */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">
              Management
            </h3>
            <div className="space-y-1 text-sm text-gray-500 font-medium">
              <p>Avenue Talent Agency</p>
              <p>contact@avenuetalent.com</p>
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer"
                className="text-violet-600 hover:text-violet-700 flex items-center gap-1 mt-3"
              >
                Direct Management Link <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Column 4: Follow */}
          <div className="md:col-span-2">
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">
              Follow
            </h3>
            <div className="flex space-x-5">
<Link href="/contact" className="text-gray-600 hover:text-violet-600 transition-colors"><Mail size={20} strokeWidth={1.5} /></Link>            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Row */}
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-medium">
            &copy; {new Date().getFullYear()} Francesca Dimech. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500 font-medium">
            <Link href="#" className="hover:text-gray-900">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-900">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}