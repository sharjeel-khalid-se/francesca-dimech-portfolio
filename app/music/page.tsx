"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Disc3, ExternalLink, Users, Music4, Headphones } from "lucide-react";

// Placeholder images - replace with her actual project images later
import AlbumCover from "@/assets/music_placeholder.jpg";

export default function MusicPage() {
  // Authentic Recent Compositions[cite: 5]
  const compositions = [
    {
      id: 1,
      title: "O Fargam i Valletta / From Margam to Valletta",
      date: "August 2020",
      description:
        "A commission from Cynfas / Art and Music to respond musically to a piece of art in the collection of Amgueddfa Cymru - National Museum Wales. Explores connections between 19th Century Welsh photographer Richard Calvert Jones and Malta.",
      link: "https://museum.wales/cynfas/article/2355/O-Fargam-i-Valletta/?fbclid=IwAR3iwuaB0tEEzqK0SHbCBU4WzvZl1Ddiqzw0p5eVAtkL7dEb8mTF2bp3OYs",
      linkLabel: "Read Article on Cynfas",
    },
    {
      id: 2,
      title: "Undersound - Symbols",
      date: "January 17, 2020",
      description:
        "Collaboration with Undersound (Gareth E). Released on NexGen Music Group (Catalogue: NXGEXT10).",
      link: "https://www.youtube.com/watch?v=uzqHKkmvgTY",
      linkLabel: "Watch on YouTube",
    },
    {
      id: 3,
      title: "I Am A Mole / Twrch Mewn Twll",
      date: "Recent",
      description:
        "Music composed and performed by Francesca for Theatr Genedlaethol Cymru / Pontio. Supported by Arts Council Wales.",
      link: "https://www.pontio.co.uk/Online/default.asp?doWork::WScontent::loadArticle=Load&BOparam::WScontent::loadArticle::article_id=9109F46D-F404-47A4-9B64-95791F753A38&BOparam::WScontent::loadArticle::context_id=169F005F-E4BB-448D-9933-0850F8658BC4",
      linkLabel: "View Project",
    },
    {
      id: 4,
      title: "Anti Social Network_Rhubarb",
      date: "Recent",
      description: "Music/video written, produced & performed by F. Dimech.",
      link: "#",
      linkLabel: "Details Pending",
    },
  ];

  // Authentic Bands & Ensembles[cite: 5]
  const bands = [
    { name: "The School (Elefant Records)", url: "http://theschoolband.com/" },
    {
      name: "Swingin' Bill's Vintage Revue",
      url: "https://swinginbill.co.uk/",
    },
    {
      name: "Quiet Marauder (Bubblewrap Collective)",
      url: "http://www.quietmarauder.co.uk/",
    },
    {
      name: "Hail! The Planes (Shape Records)",
      url: "https://hailtheplanes.bandcamp.com/",
    },
    {
      name: "Messiah Dub Club",
      url: "https://www.facebook.com/profile.php?id=647152448734813",
    },
    { name: "Inc.A", url: "http://www.incawales.co.uk/" },
    {
      name: "Let's Dance (A Bowie Celebration)",
      url: "https://www.facebook.com/letsdanceabowiecelebration/",
    },
    { name: "Tendons", url: "https://tendonsmusic.bandcamp.com/" },
    {
      name: "Maddie & The Pandas",
      url: "http://www.maddieandthepandas.co.uk/",
    },
    { name: "Supergoose", url: "http://www.gooseband.co.uk/" },
    { name: "Dan's People", url: "https://www.facebook.com/danspeople/" },
    {
      name: "Siobhan McCrudden",
      url: "http://www.greengathering.org.uk/siobhan-mccrudden/",
    },
    { name: "Pagan Wanderer Lu", url: "https://paganwandererlu.bandcamp.com/" },
    { name: "Tricky Dicky and Francesca Dimech Duo", url: null },
    { name: "Kitty and the Lads", url: null },
    { name: "Eugene Capper Band", url: null },
    { name: "EE Band", url: null },
    { name: "SumAsya", url: null },
  ];

  // Authentic Collaborations[cite: 5]
  const collaborations = [
    { name: "Wonderbrass", url: "http://www.wonderbrass.org.uk/" },
    { name: "Jason Yarde", url: "http://joyandears.com/" },
    { name: "Claude Deppa", url: "https://en.wikipedia.org/wiki/Claude_Deppa" },
    { name: "King Django", url: "http://kingdjango.com/" },
    { name: "Shhh...Apes!", url: "https://shhhapes.com/" },
    { name: "El Goodo", url: "https://www.facebook.com/elgoodomusic/" },
    {
      name: "Richard James",
      url: "https://en.wikipedia.org/wiki/Richard_James_(musician)",
    },
    { name: "Geraint Rhys", url: "http://www.geraintrhys.com/" },
    { name: "Junior Bill", url: "https://www.facebook.com/juniorbillmusic" },
    { name: "My Name Is Ian", url: "http://mynameisian.com/" },
    { name: "Stiwdio Dafydd & The Omi Palone Singers", url: null },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white pb-20 md:pb-0">
      {/* --- HERO / LATEST RELEASE SECTION --- */}
      <section className="pt-24 md:pt-32 pb-12 px-4 sm:px-6 lg:px-8 border-b border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Project Image */}
            <div className="w-full md:w-1/3 max-w-sm shrink-0 relative aspect-square rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src={AlbumCover}
                alt="Francesca's Word Salad"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Info & Links */}
            <div className="w-full md:w-2/3 flex flex-col">
              <div className="inline-flex items-center gap-2 text-violet-600 font-bold uppercase tracking-widest text-xs mb-4">
                <Disc3 size={14} /> Artist & Composer
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
                Francesca Dimech
              </h1>
              <p className="text-gray-600 font-medium text-sm md:text-base mb-6 leading-relaxed">
                Singer (mezzo-soprano), trumpeter, guitarist, bassist and
                harmonium player. She also enjoys making gamelan and accordion,
                autoharp and port socket.
                <br />
                <br />
                As well as performing solo as{" "}
                <strong className="text-gray-900">
                  Francesca's Word Salad
                </strong>
                , she writes for her own name (Traditional and original Welsh
                language folk). Francesca is a composer and plays in multiple
                bands as a live performer and session musician.
              </p>

              {/* Real External Links instead of fake audio player */}
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a
                  href="https://www.youtube.com/watch?v=l5zlSyHAHjo&list=PL8780DFE2EFC637A9"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-3.5 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors"
                >
                  Watch YouTube Playlist
                </a>
                <a
                  href="https://soundcloud.com/user-890931115"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-3.5 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors"
                >
                  <Headphones size={18} /> Listen on SoundCloud
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DISCOGRAPHY / COMPOSITIONS --- */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Recent Compositions
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              Theatrical scores, gallery commissions, and collaborative
              projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {compositions.map((comp) => (
              <div
                key={comp.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all flex flex-col h-full"
              >
                <span className="text-xs font-bold text-violet-600 tracking-wider uppercase mb-3 block">
                  {comp.date}
                </span>
                <h3 className="font-bold text-gray-900 text-xl leading-tight mb-4">
                  {comp.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-6 flex-grow leading-relaxed">
                  {comp.description}
                </p>
                {comp.link !== "#" ? (
                  <a
                    href={comp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-800 transition-colors mt-auto"
                  >
                    {comp.linkLabel} <ExternalLink size={14} />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-gray-400 mt-auto">
                    {comp.linkLabel}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- BANDS & COLLABORATIONS --- */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-violet-600 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Bands */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-violet-200" size={28} />
              <h2 className="text-2xl md:text-3xl font-bold">
                Bands & Ensembles
              </h2>
            </div>
            <p className="text-violet-100 mb-8 text-sm md:text-base leading-relaxed">
              Francesca is currently an active member of numerous groups
              spanning genres from indie pop to experimental theatrical rock.
            </p>
            <div className="flex flex-wrap gap-3">
              {bands.map((band, idx) =>
                band.url ? (
                  <a
                    key={idx}
                    href={band.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm font-medium transition-colors flex items-center gap-2"
                  >
                    {band.name}{" "}
                    <ExternalLink size={12} className="opacity-70" />
                  </a>
                ) : (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-black/10 border border-transparent rounded-full text-sm font-medium opacity-80 cursor-default"
                  >
                    {band.name}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Collaborations */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Music4 className="text-violet-200" size={28} />
              <h2 className="text-2xl md:text-3xl font-bold">Collaborations</h2>
            </div>
            <p className="text-violet-100 mb-8 text-sm md:text-base leading-relaxed">
              She has performed and recorded alongside acclaimed artists and
              collectives across the UK and beyond.
            </p>
            <div className="flex flex-wrap gap-3">
              {collaborations.map((collab, idx) =>
                collab.url ? (
                  <a
                    key={idx}
                    href={collab.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-sm font-medium transition-colors flex items-center gap-2"
                  >
                    {collab.name}{" "}
                    <ExternalLink size={12} className="opacity-70" />
                  </a>
                ) : (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-black/10 border border-transparent rounded-full text-sm font-medium opacity-80 cursor-default"
                  >
                    {collab.name}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
