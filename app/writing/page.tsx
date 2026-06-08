"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { 
  PenTool, 
  Languages, 
  BookText, 
  ExternalLink,
  Subtitles,
  GraduationCap,
  Briefcase,
  ShoppingCart,
  ArrowUpRight
} from "lucide-react";

// Placeholders for the images from the design
import GloverPlaceholder from '@/assets/acting.jpg'; // Replace with a relevant image for the musical
import DelythCover from '@/assets/blas-cartref-mockup2.png'; // Replace with her notebook images

export default function WritingPage() {
  
  // Authentic Client List
  const clients = [
    "S4C", "BBC", "ITV Wales", "Gorilla", "Cwmni Da", 
    "Cardiff University", "Open University", "The New Theatre", 
    "Cardiff Council", "Vale of Glamorgan Council"
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white pb-20 md:pb-0">
      
      {/* --- HEADER SECTION --- */}
      <section className="pt-24 md:pt-32 pb-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-violet-100 px-3 py-1.5 rounded-full text-violet-700 text-xs font-bold tracking-wider uppercase mb-6">
              <PenTool size={14} /> Writing & Translation
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
              Writing, Translation & Subtitling
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-4 font-medium">
              Exploring the intersections of Welsh heritage, original musical theatre, and professional media translation.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              Professional Welsh language translator and television subtitler since 2008, specializing in closed captioning, open captions, conformation, and editing.
            </p>
          </div>

        </div>
      </section>

      {/* --- MAIN CONTENT: TWO COLUMN LAYOUT --- */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Projects & Archives */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* FEATURED WRITING: GLOVER */}
            <div>
              <div className="flex items-center gap-2 mb-8">
                <BookText size={20} className="text-violet-600" />
                <h2 className="text-2xl font-bold text-gray-900">Featured Writing</h2>
              </div>

              <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-10 shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center gap-2 bg-violet-50 px-3 py-1 rounded-full text-violet-600 text-[10px] font-bold tracking-wider uppercase mb-6">
                  Musical Theatre Development
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">
                  Glover: A New Musical
                </h3>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
                  Original Book & Concept by Francesca Dimech
                </p>

                <div className="prose prose-violet max-w-none text-gray-600 leading-relaxed space-y-6">
                  <p>
                    <strong className="text-gray-900">Glover</strong> is a family musical theatre show currently in development. It is based on a story my beloved Nana Rosa told me about her early years in the city. 
                  </p>
                  <p>
                    She worked as a glove maker for a Czechoslovakian businessman living in Cyncoed named Mr Altschul who supplied gloves to M&S and other large retailers. Mr Altschul employed immigrant women as seamstresses. Problems arose when their wages were cut, and as immigrant women, many were afraid to speak out and stand up for themselves in fear of losing their precious jobs. 
                  </p>
                  
                  {/* Blockquote styling matching the Visily design */}
                  <blockquote className="border-l-4 border-violet-600 pl-6 py-2 my-8 text-xl italic font-serif text-gray-900 bg-violet-50 rounded-r-xl">
                    "But my fearless Nana Rosa was not going to stand for this. Her war hero father had brought her up to stand up for herself and fight against injustice."
                  </blockquote>

                  <p>
                    She tracked down and convinced her co-workers to unite and form a union. They put down their needles and refused to work until their wages were restored, eventually winning the battle!
                  </p>
                  <p>
                    I loved hearing this story but always assumed it was exaggerated. I was going through her papers after she died and came across diaries, poems and a newspaper clipping from <em>The News of the World</em> about the glovemaking incident – proving it did happen! I researched the event further, spoke to family members, the Glove Makers Guild and even tracked down a woman (now living in Southampton) who made gloves for the same employer at the same time. I also researched the trade union movement at the time and contemporary protest music – thus <em>Glover</em> was born!
                  </p>
                </div>
              </div>
            </div>

            {/* PUBLISHED WORKS: DELYTH DIRGEL */}
            <div>
              <div className="flex items-center gap-2 mb-8 border-t border-gray-100 pt-12">
                <ShoppingCart size={20} className="text-violet-600" />
                <h2 className="text-2xl font-bold text-gray-900">Published Works</h2>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-100">
                <div className="w-full md:w-1/3 relative aspect-[3/4] bg-white rounded-xl shadow-md overflow-hidden shrink-0">
                  <Image src={DelythCover} alt="Delyth Dirgel Welsh Learner Notebooks" fill className="object-cover" />
                </div>
                <div className="w-full md:w-2/3">
                  <span className="text-xs font-bold text-violet-600 tracking-wider uppercase mb-2 block">Delyth Dirgel</span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">Welsh Learner Stationery</h3>
                  <p className="text-gray-600 mb-2 leading-relaxed">
                    A series of notebooks and stationery specifically designed for Welsh Learners.
                  </p>
                  <p className="text-gray-500 italic mb-6 text-sm">
                    Cyfres o lyfrau nodiadau a deunydd ysgrifennu ar gyfer dysgwyr Cymraeg.
                  </p>
                  <a 
                    href="https://www.amazon.co.uk/stores/Delyth-Dirgel/author/B0BYYGSL3D" 
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white font-bold rounded-full hover:bg-violet-700 transition-colors text-sm"
                  >
                    Shop on Amazon <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar Profile */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Translator Profile */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Professional Profile</h3>
              
              <div className="mb-6 pb-6 border-b border-gray-100">
                <p className="text-sm text-gray-600 leading-relaxed">
                  <strong className="text-gray-900">Francesca Dimech</strong> is a professional Welsh language translator and television subtitler with over 15 years of freelance experience across broadcast and institutional media.
                </p>
              </div>

              {/* Education & Training */}
              <div className="space-y-4 mb-8">
                <div className="flex gap-3 items-start">
                  <GraduationCap size={18} className="text-violet-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">BA(Hons) Welsh & Media Studies</h4>
                    <p className="text-xs text-gray-500 mt-1">University of Wales, Lampeter (2006)</p>
                    <p className="text-[11px] text-violet-600 italic mt-1">Specializing in subtitling and translation</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start pt-2">
                  <Languages size={18} className="text-violet-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">Professional Translation Refresher</h4>
                    <p className="text-xs text-gray-500 mt-1">Testun (Oct 2014)</p>
                  </div>
                </div>
              </div>

              {/* Experience Timeline */}
              <div className="space-y-5">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">Experience</h4>
                
                <div className="relative pl-4 border-l-2 border-violet-100">
                  <div className="absolute w-2 h-2 bg-violet-600 rounded-full -left-[5px] top-1.5"></div>
                  <h5 className="text-sm font-bold text-gray-900">Freelance Subtitler</h5>
                  <p className="text-[10px] text-violet-600 font-bold uppercase tracking-wider mb-1">2014 - Present</p>
                  <p className="text-xs text-gray-500 leading-relaxed">Specializing in television and internet content, closed captioning, open captions, conformation, editing and proofreading using WINCAPS.</p>
                </div>
                
                <div className="relative pl-4 border-l-2 border-violet-100">
                  <div className="absolute w-2 h-2 bg-violet-600 rounded-full -left-[5px] top-1.5"></div>
                  <h5 className="text-sm font-bold text-gray-900">Freelance Translator</h5>
                  <p className="text-[10px] text-violet-600 font-bold uppercase tracking-wider mb-1">2008 - Present</p>
                </div>

                <div className="relative pl-4 border-l-2 border-transparent">
                  <div className="absolute w-2 h-2 bg-gray-300 rounded-full -left-[5px] top-1.5"></div>
                  <h5 className="text-sm font-bold text-gray-600">Previous Subtitler Roles</h5>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">2007 - 2019</p>
                  <p className="text-xs text-gray-500 leading-relaxed">Roles held at Capsiwn, Testun, and Cwmni Acen.</p>
                </div>
              </div>

            </div>

            {/* Clients List */}
            <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 shadow-sm">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Recent Clients</h3>
              <div className="flex flex-wrap gap-2">
                {clients.map((client, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-white border border-gray-200 rounded-md text-xs font-semibold text-gray-700">
                    {client}
                  </span>
                ))}
              </div>
            </div>

            {/* LinkedIn CTA */}
            <div className="bg-violet-600 rounded-3xl p-6 text-center shadow-md">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-white/20 rounded-full text-white mb-4">
                <Briefcase size={18} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Translation Services</h3>
              <p className="text-sm text-violet-100 mb-6 leading-relaxed">
                Available for freelance Welsh translation, subtitling, and script editing. 
              </p>
              <a 
                href="https://www.linkedin.com/in/francesca-dimech-05251435/" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 bg-white text-violet-600 font-bold rounded-xl hover:bg-gray-50 transition-colors text-sm"
              >
                Connect on LinkedIn <ArrowUpRight size={16} />
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}