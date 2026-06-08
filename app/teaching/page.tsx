"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  HeartHandshake,
  ShieldCheck,
  ExternalLink,
  Recycle,
  Globe2,
} from "lucide-react";

export default function TeachingPage() {
  // Authentic Partner Organizations mapped from provided URLs
  const partners = [
    {
      name: "Community Music Wales",
      url: "https://www.communitymusicwales.co.uk/",
    },
    { name: "Innovate Trust", url: "https://innovate-trust.org.uk/" },
    { name: "Ategi", url: "https://www.ategi.org.uk/" },
    { name: "Care Cymru", url: "https://carecymru.com/" },
    { name: "Learning Disability Wales", url: "https://www.ldw.org.uk/" },
    {
      name: "Gig Buddies Cymru",
      url: "https://www.ldw.org.uk/project/ffrindiau-gigiau-gig-buddies/",
    },
    {
      name: "Splott Community Volunteers",
      url: "https://splottcommunityvolunteers.co.uk/",
    },
    { name: "Musaic Minds", url: "https://www.musaicminds.co.uk/" },
  ];

  // Workshop Gallery Images - Currently using placeholders,
  // replace with sliced images from her original massive photo dump
  const galleryImages = [
    {
      id: 1,
      src: "/teaching/20160625-112250.jpg",
      alt: "Instrument building workshop",
    },
    { id: 2, src: "/teaching/20160611-121230.jpg", alt: "Recycled drum making" },
    { id: 3, src: "/teaching/20160625-124002.jpg", alt: "Community parade" },
    { id: 4, src: "/teaching/20160625-132016.jpg", alt: "Welsh language workshop" },
    {
      id: 5,
      src: "/teaching/20160625-124002.jpg",
      alt: "Children playing homemade instruments",
    },
    { id: 6, src: "/teaching/20160702-112023.jpg", alt: "Throwaway music session" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white pb-20 md:pb-0">
      {/* --- HEADER / PEDAGOGICAL STATEMENT --- */}
      <section className="pt-24 md:pt-32 pb-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-violet-100 px-3 py-1.5 rounded-full text-violet-700 text-xs font-bold tracking-wider uppercase mb-6">
              <BookOpen size={14} /> Teaching Approach
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
              Empowering through Inclusive Music
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed mb-4 font-medium">
              Francesca specializes in running bilingual music workshops for
              people with learning disabilities.
            </p>
            <p className="text-base text-gray-500 leading-relaxed mb-8 italic">
              Arbenigwraig mewn cynnal gweithdai cerddoriaeth dwyieithog ar
              gyfer pobl ag anableddau dysgu.
            </p>

            {/* Qualifications / Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-gray-200">
              <div className="flex flex-col">
                <ShieldCheck size={24} className="text-violet-600 mb-2" />
                <span className="text-sm font-bold text-gray-900 uppercase">
                  Enhanced DBS
                </span>
                <span className="text-xs text-gray-500 mt-1">
                  Fully Checked
                </span>
              </div>
              <div className="flex flex-col">
                <ShieldCheck size={24} className="text-violet-600 mb-2" />
                <span className="text-sm font-bold text-gray-900 uppercase">
                  Public Liability
                </span>
                <span className="text-xs text-gray-500 mt-1">
                  Full Insurance
                </span>
              </div>
              <div className="flex flex-col">
                <Globe2 size={24} className="text-violet-600 mb-2" />
                <span className="text-sm font-bold text-gray-900 uppercase">
                  Bilingual
                </span>
                <span className="text-xs text-gray-500 mt-1">
                  Welsh & English
                </span>
              </div>
              <div className="flex flex-col">
                <HeartHandshake size={24} className="text-violet-600 mb-2" />
                <span className="text-sm font-bold text-gray-900 uppercase">
                  First Aid
                </span>
                <span className="text-xs text-gray-500 mt-1">Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT: ARCHIVE & SIDEBAR --- */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Workshop Archive Gallery */}
          <div className="lg:col-span-8">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Workshop Archive
              </h2>
              <p className="text-gray-500 text-sm md:text-base">
                Captured moments from community workshops and instrument
                building sessions.
              </p>
            </div>

            {/* Masonry-style Grid for her photos */}
            <div className="columns-1 sm:columns-2 gap-4 space-y-4">
              {galleryImages.map((img) => (
                <div
                  key={img.id}
                  className="relative rounded-2xl overflow-hidden bg-gray-100 break-inside-avoid border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  {/* Note: In production, remove width/height if using layout="responsive" or fill, 
                      but for standard img tags or Next/Image with generic placeholders, standard styling applies */}
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <button className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-full hover:bg-gray-200 transition-colors text-sm">
                + Load More Archive Photos
              </button>
            </div>
          </div>

          {/* Right Column: Projects & Partners (Replaces fake upcoming sessions) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Featured Project: Throwaway Music */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-violet-600 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Recycle size={20} className="text-violet-200" />
                  <span className="text-xs font-bold uppercase tracking-wider text-violet-200">
                    Featured Project
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-1">Throwaway Music</h3>
                <p className="text-sm text-violet-200 italic">
                  Offerynnau Sbwriel
                </p>
              </div>
              <div className="p-6 bg-gray-50">
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Interactive street & hiking workshops about waste and
                  recycling, through building instruments from recycled
                  materials in workshop sessions.
                </p>
                <p className="text-xs text-gray-500 leading-relaxed mb-6 italic border-l-2 border-violet-300 pl-3">
                  Gweithdai stryd a cherdded am wastraff ac ailgylchu, drwy
                  adeiladu offerynnau o ddeunyddiau wedi'u hailgylchu mewn
                  sesiynau gweithdy.
                </p>

                <a
                  href="http://www.facebook.com/throwawaymusic"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-xl hover:border-violet-600 hover:text-violet-600 transition-colors text-sm"
                >
                  Follow on Facebook
                </a>
              </div>
            </div>

            {/* Organizations & Partners List */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Partner Organizations
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Francesca regularly collaborates with:
              </p>

              <div className="space-y-2">
                {partners.map((partner, index) => (
                  <a
                    key={index}
                    href={partner.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-violet-50 group transition-colors border border-transparent hover:border-violet-100"
                  >
                    <span className="text-sm font-semibold text-gray-700 group-hover:text-violet-700 transition-colors">
                      {partner.name}
                    </span>
                    <ExternalLink
                      size={14}
                      className="text-gray-400 group-hover:text-violet-600"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Teaching Inquiry CTA */}
            <div className="bg-gray-900 rounded-3xl p-6 text-center">
              <h3 className="text-lg font-bold text-white mb-2">
                Host a Workshop?
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                Available for community sessions, private groups, and
                institutional bookings.
              </p>
              <Link
                href="/contact"
                className="inline-block w-full px-4 py-3 bg-violet-600 text-white font-bold rounded-xl hover:bg-violet-700 transition-colors text-sm"
              >
                Inquire about availability
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
