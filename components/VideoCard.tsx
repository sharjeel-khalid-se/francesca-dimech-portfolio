import Image from "next/image";
import { PlayCircle } from "lucide-react";

interface VideoCardProps {
  title: string;
  role: string;
  director: string;
  year: string;
  thumbnailUrl: string;
  category: string;
  description: string;
}

export default function VideoCard({ title, role, director, year, thumbnailUrl, category, description }: VideoCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 cursor-pointer">
      <div className="relative aspect-video bg-gray-200 overflow-hidden">
        {thumbnailUrl ? (
          <Image 
            src={thumbnailUrl} 
            alt={title} 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <PlayCircle size={48} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-xs font-semibold px-2 py-1 rounded-md text-gray-800">
          {category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-gray-900">{title}</h3>
        <p className="text-sm text-indigo-600 mt-1">{role} <span className="text-gray-400">|</span> Directed by {director} <span className="text-gray-400">|</span> {year}</p>
        <p className="text-sm text-gray-500 mt-3 line-clamp-2 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}