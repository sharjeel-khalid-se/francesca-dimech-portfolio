"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { playTrack } from "@/redux/slicers/audioSlice";
import { 
  Play, 
  Download, 
  ExternalLink,
  Clapperboard,
  Mic,
  MonitorPlay,
  Languages,
  ArrowUpRight,
  X
} from "lucide-react";

// Placeholder images - replace with her actual video thumbnails later
import Placeholder1 from '@/assets/Screenshot 2026-06-06 092455.png';
import Placeholder2 from '@/assets/circle-of-fifths_orig.jpg';
import Placeholder3 from '@/assets/enogh_is_enogh.jpg';
import Placeholder4 from '@/assets/Screenshot 2026-06-06 094115.png';

export default function ActorPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState('All');

  // Video Portfolio Data mapped exactly from her old site
  const videos = [
    {
      id: 1,
      title: "Character Acting Showreel 2021",
      category: "Screen",
      role: "Various Roles",
      director: "Showreel",
      year: "2021",
      image: Placeholder1,
      description: "A comprehensive showcase of character acting for screen and television.",
      youtubeUrl : "https://www.youtube.com/embed/1HP-7CWB1Ok"
    },
    {
      id: 2,
      title: "Circle of Fifths",
      category: "Theatre",
      role: "Actor/Musician",
      director: "National Theatre Wales",
      year: "2022/2024/2025",
      image: Placeholder2,
      description: "Live theatrical performance incorporating acting and musical instrumentation.",
      youtubeUrl : "https://www.youtube.com/embed/oIqht17bDYE"
    },
    {
      id: 3,
      title: "Enough is Enough",
      category: "Theatre",
      role: "Performer",
      director: "Be Aware Productions",
      year: "Recent",
      image: Placeholder3,
      description: "A theatrical production focusing on poignant social themes.",
      youtubeUrl : "https://www.youtube.com/embed/oIqht17bDYE"
    },
    {
      id: 4,
      title: "Why I'm Done With Online Dating",
      category: "Comedy",
      role: "Lead",
      director: "BBC Sesh",
      year: "Recent",
      image: Placeholder4,
      description: "Short comedy sketch. 'Nice one mate, I'm impressed'.",
      youtubeUrl : "https://www.youtube.com/embed/oIqht17bDYE"
    }
  ];

  // Voiceover Portfolio Data
  const voiceovers = [
    {
      id: 1,
      title: "English Commercial Voice Reel",
      style: "Commercial / Energetic / Clear",
      url: "/audio/english-vo.aac"
    },
    {
      id: 2,
      title: "Cymraeg Commercial Voice Reel",
      style: "Native Welsh / Troslais Masnachol",
      url: "/audio/welsh-vo.mp3"
    },
    {
      id: 3,
      title: "Podcast Interview: Bringing Dreams to Life",
      style: "Interview with Simon Lewis",
      url: "/audio/podcast-interview.aac"
    }
  ];

  const filteredVideos = activeTab === 'All' 
    ? videos 
    : videos.filter(v => v.category === activeTab);

  const handlePlayVoiceover = (title: string, url: string) => {
    dispatch(playTrack({ title, url }));
  };

  return (
    <div className="flex flex-col min-h-screen bg-white pb-20 md:pb-0">
      
      {/* --- HEADER SECTION --- */}
      <section className="pt-20 md:pt-32 pb-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col lg:flex-row gap-10 lg:items-start justify-between">
            {/* Main Content */}
            <div className="flex-1 max-w-3xl">
              
              {/* Desktop Badge */}
              <div className="hidden md:inline-flex items-center gap-2 bg-violet-50 px-3 py-1.5 rounded-full text-violet-700 text-xs font-bold tracking-wider uppercase mb-6">
                <Clapperboard size={14} /> Acting & Voiceover
              </div>

              {/* Mobile Badge & Title */}
              <div className="md:hidden flex items-center gap-2 text-violet-600 font-bold uppercase tracking-widest text-xs mb-3">
                <Clapperboard size={14} /> Actor / VO
              </div>
              
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4 md:mb-6">
                <span className="md:hidden block">Francesca Dimech</span>
                <span className="hidden md:block">Performance & Voice</span>
              </h1>

              {/* Mobile Meta Tags */}
              <div className="md:hidden flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-md">Bilingual (English/Welsh)</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-md">Actor-Musician</span>
              </div>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                Francesca Dimech is a multi-instrumentalist actor-musician and voiceover artist. 
                With extensive experience across television, theatre, and presenting live events, 
                she brings a versatile range of emotional depth and technical precision to every project.
                <br /><br />
                <span className="font-semibold text-gray-900">Actio / Troslais:</span> Actores, cerddor ac artist troslais yw Francesca Dimech sy wedi ymddangos ar deledu, theatr ac wedi cyflwyno sawl digwyddiad byw.
              </p>

              {/* Responsive Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <a 
                  href="https://app.spotlight.com/9492-8979-9003" 
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 bg-violet-600 text-white font-semibold rounded-md hover:bg-violet-700 transition-colors w-full sm:w-auto"
                >
                  <Download size={18} /> Download Spotlight CV
                </a>
                <Link 
                  href="/contact" 
                  className="flex items-center justify-center px-6 py-3.5 bg-white border border-gray-200 text-gray-900 font-semibold rounded-md hover:bg-gray-50 transition-colors w-full sm:w-auto"
                >
                  Contact Agency
                </Link>
              </div>
            </div>

            {/* Casting / Management Card (Desktop & Tablet) */}
            <div className="hidden lg:block w-80 bg-gray-50 rounded-2xl p-8 border border-gray-100 shrink-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-violet-100 p-2.5 rounded-lg text-violet-600">
                  <MonitorPlay size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Representation</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">Direct Industry Inquiries</p>
                </div>
              </div>
              
              <div className="space-y-4 text-sm mb-8">
                <p className="text-gray-600">
                  <strong className="text-gray-900 block mb-1">JK's Management</strong>
                  info@jksperformanceacademy.co.uk
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600 mb-2"><strong className="text-gray-900">Spotlight PIN:</strong> 9492-8979-9003</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a href="https://www.imdb.com/name/nm10528515/" target="_blank" rel="noreferrer" className="flex items-center justify-between px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-semibold text-gray-700 hover:border-violet-600 hover:text-violet-600 transition-colors">
                  IMDb Profile <ExternalLink size={14} />
                </a>
                <a href="https://www.voquent.com/voice-actor/37901/" target="_blank" rel="noreferrer" className="flex items-center justify-between px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-semibold text-gray-700 hover:border-violet-600 hover:text-violet-600 transition-colors">
                  Voquent Profile <ExternalLink size={14} />
                </a>
                <a href="https://sites.gravyforthebrain.com/website/francescadimech" target="_blank" rel="noreferrer" className="flex items-center justify-between px-4 py-2 bg-white border border-gray-200 rounded-md text-sm font-semibold text-gray-700 hover:border-violet-600 hover:text-violet-600 transition-colors">
                  Gravy For The Brain <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- ON-SCREEN REELS SECTION --- */}
      <section className="py-12 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MonitorPlay size={20} className="text-violet-600 hidden md:block" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Reels & Clips</h2>
              </div>
              <p className="text-gray-500 text-sm md:text-base">Selected works from screen acting, theatre, and comedy.</p>
            </div>
            
            {/* Tabs */}
            <div className="flex overflow-x-auto scrollbar-hide pb-2 md:pb-0 gap-2 w-full md:w-auto">
              {['All', 'Screen', 'Theatre', 'Comedy'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap px-5 py-2 text-sm font-semibold rounded-full transition-colors ${
                    activeTab === tab 
                      ? "bg-violet-600 text-white" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredVideos.map((video) => (
              <div  key={video.id} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col">
                <div onClick={() => setActiveVideo(video.youtubeUrl)} className="relative aspect-video bg-gray-200 cursor-pointer overflow-hidden">
                  <Image src={video.image} alt={video.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      <Play size={24} className="text-violet-600 ml-1" fill="currentColor" />
                    </div>
                  </div>
                  <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-gray-700">
                    {video.category}
                  </span>
                </div>
                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{video.title}</h3>
                  <p className="text-xs font-semibold text-violet-600 uppercase tracking-wider mb-3">
                    {video.role} • {video.year}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">
                    {video.description}
                  </p>
                  <span className="text-xs text-gray-400 mt-auto">Directed by {video.director}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- VOICEOVER PORTFOLIO SECTION --- */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-10 md:mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-2xl shadow-sm mb-4 text-violet-600">
              <Mic size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Voiceover Portfolio</h2>
            <p className="text-gray-500 text-sm md:text-lg max-w-2xl mx-auto">
              Specializing in commercial narration, bilingual English/Welsh recordings, and character voices from a professional home studio setup.
            </p>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm p-2 md:p-4 mb-8">
            {voiceovers.map((vo, index) => (
              <div 
                key={vo.id} 
                className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 md:p-6 hover:bg-gray-50 transition-colors rounded-xl md:rounded-2xl ${
                  index !== voiceovers.length - 1 ? 'border-b border-gray-50' : ''
                }`}
              >
                <div className="flex items-start gap-4 mb-4 sm:mb-0">
                  <div className="mt-1 bg-violet-100 text-violet-600 p-2 rounded-full shrink-0">
                    {vo.title.includes("Cymraeg") ? <Languages size={18} /> : <Mic size={18} />}
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900">{vo.title}</h3>
                    <p className="text-xs md:text-sm text-gray-500 mt-1">{vo.style}</p>
                  </div>
                </div>
                <button 
                  onClick={() => handlePlayVoiceover(vo.title, vo.url)}
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-2.5 bg-gray-100 hover:bg-violet-600 text-gray-700 hover:text-white text-sm font-bold rounded-full transition-all"
                >
                  <Play size={16} fill="currentColor" /> Listen
                </button>
              </div>
            ))}
          </div>

          {/* Custom Demo CTA */}
          <div className="bg-violet-600 rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left text-white shadow-lg">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg md:text-xl font-bold mb-2">Need a custom demo for your project?</h3>
              <p className="text-violet-200 text-sm md:text-base">Available for fast turnaround auditions globally via Source Connect.</p>
            </div>
            <Link 
              href="/contact" 
              className="px-8 py-3.5 bg-white text-violet-600 font-bold rounded-md md:rounded-full hover:bg-gray-50 transition-colors w-full md:w-auto flex items-center justify-center gap-2"
            >
              Send Inquiry <ArrowUpRight size={18} />
            </Link>
          </div>

        </div>
      </section>

{/* --- VIDEO POPUP MODAL --- */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)} // Background pe click karne se band ho jayega
        >
          <div 
            className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Video area click karne se band na ho
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-violet-600 text-white rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            {/* YouTube iframe */}
            <iframe
              src={`${activeVideo}?autoplay=1`} // autoplay=1 se video khud chal jayegi
              title="YouTube video player"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      
    </div>
  );
}