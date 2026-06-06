"use client"

import Image from "next/image";
import Link from "next/link";
import { 
  Play, 
  Clapperboard, 
  Music, 
  Users, 
  PenTool, 
  ArrowRight, 
  Calendar,
  ChevronRight
} from "lucide-react";
import HeroImage from '../assets/francesca-dimech_1_hero_image.jpg'
import MusicImage from '../assets/music_placeholder.jpg'
import Acting from '../assets/acting.jpg'
import Teaching from '../assets/teaching.jpg'
import Writing from '../assets/blas-cartref-mockup2.png'
import WordSalad from '../assets/world_salad.jpg'

import { useDispatch } from "react-redux";
import {playTrack} from '@/redux/slicers/audioSlice'


export default function Home() {
  const dispatch = useDispatch()

  const handleListen = () => {
    dispatch(playTrack({ 
      url: "/audio/word-salad-sample.mp3", // Make sure this file exists in your public/audio folder
      title: "Francesca's Word Salad" 
    }));
  };

  const disciplines = [
    {
      title: "Acting", // Updated to match mobile mockup
      description: "Stage, screen, and vocal performance history spanning classical Shakespeare to modern animation.",
      icon: Clapperboard,
      link: "/actor",
      image: Acting
    },
    {
      title: "Music",
      description: "Experimental jazz compositions, solo piano works, and theatrical soundscapes.",
      icon: Music,
      link: "/music",
      image: MusicImage
    },
    {
      title: "Teaching",
      description: "Movement and vocal workshops designed for aspiring performers and corporate communication.",
      icon: Users,
      link: "/teaching",
      image: Teaching
    },
    {
      title: "Writing",
      description: "Original plays, cultural essays, and scripts focused on social dynamics and performance art.",
      icon: PenTool,
      link: "/writing",
      image: Writing
    }
  ];

  return (
    <div className="flex flex-col min-h-screen pb-20 md:pb-0"> 
      {/* pb-20 ensures content isn't hidden behind the mobile bottom nav */}
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-16 md:h-[80vh] md:min-h-[600px] flex items-center justify-center bg-gray-800 border-b border-gray-100 md:border-none">
        {/* Desktop Background Image (Hidden on mobile for cleaner look) */}
        <div className="md:block absolute inset-0 overflow-hidden">
          <Image 
            src={HeroImage} 
            alt="Francesca Dimech Performing" 
            fill 
            className="object-cover opacity-40"
            priority
          />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto md:mt-10">
          
          {/* Mobile Badge */}
          <div className="md:hidden inline-flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full text-gray-600 text-xs font-bold tracking-wider uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500"></span> Available for Projects
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-3 md:mb-4">
            Francesca Dimech
          </h1>
          <p className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.2em] md:tracking-[0.3em] text-gray-300 uppercase mb-10">
            Actor • Musician • Teacher • Writer
          </p>
          
          {/* Responsive Buttons: Stacked pills on mobile, side-by-side squares on desktop */}
          <div className="flex flex-col md:flex-row gap-3 w-full max-w-xs sm:max-w-md md:max-w-none md:w-auto">
            {/* Added onClick handler here */}
            <button 
              onClick={handleListen}
              className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-3.5 bg-gray-900 md:bg-violet-600 text-white font-semibold rounded-full md:rounded-md hover:bg-gray-800 md:hover:bg-violet-700 transition-colors"
            >
              <Play size={18} fill="currentColor" /> Listen to Latest Release
            </button>
            <Link 
              href="/contact"
              className="flex items-center justify-center w-full md:w-auto px-8 py-3.5 bg-white md:bg-white/10 md:backdrop-blur-md border border-gray-200 md:border-white/20 text-gray-900 md:text-white font-semibold rounded-full md:rounded-md hover:bg-gray-50 md:hover:bg-white/20 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* --- PROFESSIONAL DISCIPLINES --- */}
      <section className="py-12 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="flex items-center justify-between mb-6 md:mb-16 md:text-center md:justify-center">
            <div>
              <h2 className="text-lg md:text-base font-bold text-gray-900 md:text-violet-600 tracking-wide md:uppercase mb-1 md:mb-2">
                Professional Disciplines
              </h2>
              <p className="hidden md:block text-gray-500 max-w-2xl mx-auto text-lg">
                A creative practice rooted in performance, education, and literary exploration. Select a domain below to explore specific portfolios.
              </p>
            </div>
          </div>

          {/* Mobile List View */}
          <div className="flex flex-col md:hidden border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
            {disciplines.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link 
                  key={index} 
                  href={item.link} 
                  className={`flex items-center justify-between p-4 bg-white hover:bg-gray-50 active:bg-gray-100 transition-colors ${
                    index !== disciplines.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 text-gray-600 p-2.5 rounded-lg">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <span className="font-bold text-gray-900">{item.title}</span>
                  </div>
                  <ChevronRight size={20} className="text-gray-400" />
                </Link>
              );
            })}
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-4 gap-6">
            {disciplines.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link key={index} href={item.link} className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48 bg-gray-100 overflow-hidden">
                    <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur p-2 rounded-lg text-violet-600 shadow-sm">
                      <Icon size={20} strokeWidth={2.5} />
                    </div>
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                      {item.description}
                    </p>
                    <span className="text-sm font-semibold text-violet-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                      Explore Portfolio <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* --- FEATURED MEDIA / PROJECTS --- */}
      {/* --- FEATURED MEDIA / PROJECTS --- */}
      <section className="py-12 md:py-24 bg-gray-50 px-4 sm:px-6 lg:px-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex items-end justify-between mb-6 md:mb-12">
            <div>
              <span className="hidden md:inline-block text-xs font-bold bg-white border border-gray-200 px-2.5 py-1 rounded-md text-gray-600 uppercase tracking-wider mb-4">
                Latest Work
              </span>
              <h2 className="text-lg md:text-3xl font-bold text-gray-900 md:mb-2">Featured Media</h2>
              <p className="hidden md:block text-gray-500 text-base max-w-xl">
                Recent work from across the spectrum—from anti-folk music to musical theatre development.
              </p>
            </div>
            <Link href="/actor" className="text-sm font-semibold text-violet-600 md:text-gray-900 md:hover:text-violet-600 md:bg-white md:border md:border-gray-200 md:px-5 md:py-2.5 md:rounded-md transition-colors flex items-center gap-1">
              View All <ChevronRight size={16} className="md:hidden" />
            </Link>
          </div>

          {/* Mobile Horizontal Scroll */}
          <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 scrollbar-hide">
            {/* Project 1 (Mobile) */}
            <div className="min-w-[280px] snap-center bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="relative aspect-video bg-gray-200">
                <Image src={WordSalad} alt="Francesca's Word Salad" fill className="object-cover" />
              </div>
              <div className="p-4">
                <span className="text-[10px] font-bold text-violet-600 uppercase tracking-wider mb-1 block">Live Music</span>
                <h3 className="font-bold text-gray-900 truncate">Francesca's Word Salad</h3>
              </div>
            </div>
           
          </div>

          {/* Desktop Grid View */}
          <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-row hover:shadow-md transition-shadow">
              <div className="relative w-2/5 bg-gray-100">
                <Image src={WordSalad} alt="Word Salad Album" fill className="object-cover" />
              </div>
              <div className="p-8 w-3/5 flex flex-col justify-center">
                <span className="text-xs font-bold text-violet-600 tracking-wider uppercase mb-2">Anti-Folk / Indiepop</span>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Francesca's Word Salad</h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed line-clamp-3">
                  Original folk/anti-folk/indiepop containing a mixture of macabre ballads, pathetic stalkery and unrequited love songs, reverse mermaids and zombie firefighters.
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <button onClick={handleListen} className="flex items-center gap-2 bg-violet-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-violet-700 transition-colors">
                    <Play size={16} fill="currentColor" /> Listen
                  </button>
                </div>
              </div>
            </div>
            
          
          </div>
        </div>
      </section>

      {/* --- AVAILABILITY CTA --- */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        
        {/* Mobile View CTA */}
        <div className="md:hidden flex flex-col items-center text-center max-w-sm mx-auto bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Interested in collaborating?
          </h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Available for film, commercial voiceover, and private workshops worldwide.
          </p>
          <Link 
            href="/contact" 
            className="w-full px-6 py-3.5 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
          >
            Send a Message
          </Link>
        </div>

        {/* Desktop View CTA */}
        <div className="hidden md:block max-w-4xl mx-auto bg-violet-50 rounded-[2rem] border border-violet-100 p-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-violet-100 text-violet-600 text-xs font-bold tracking-wider uppercase mb-6">
            <Calendar size={14} /> Availability 2026
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to collaborate on your next project?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Francesca is currently accepting inquiries for theatrical productions, recording sessions, and private workshop bookings for the upcoming season.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-3.5 bg-violet-600 text-white font-semibold rounded-md hover:bg-violet-700 transition-colors"
            >
              Get In Touch
            </Link>
            <a 
              href="/Francesca_Dimech_CV.pdf" 
              download="Francesca_Dimech_CV.pdf"
              className="px-8 py-3.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-50 transition-all"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}