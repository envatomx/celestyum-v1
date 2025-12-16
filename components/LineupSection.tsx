// components/LineupSection.tsx  (smaller text sizes)
"use client";

import { title } from "@/components/primitives";
import { Divider } from "@heroui/divider";
import { Card } from "@heroui/card";
import Image from "next/image";
import { useState } from "react";

export default function LineupSection() {
  const artists = [
     {
      photo: "/assets/images/keinemusik.jpg",
      logo: "/assets/images/keinemusik.png",
      description: "Berlin collective founded in 2009 by Rampa, Adam Port and &ME. Known for deep house with warm textures and minimalist productions that prioritize artistic coherence. Their carefully curated sets and strong teamwork have built a global community and made them a cornerstone of contemporary electronic music.",
    },
    {
      photo: "/assets/images/solomun.jpg",
      logo: "/assets/images/solomun.png",
      description: "Bosnian-German house legend blending emotional melodies, deep percussion and extended transitions. Through Diynamic label and marathon sets, he crafts immersive journeys. Iconic performances in Ibiza, Boiler Room and major festivals have cemented his status as one of the most respected DJs of his generation.",
    },
    {
      photo: "/assets/images/boris.jpg",
      logo: "/assets/images/boris.png",
      description: "German producer who pioneered “high-tech minimal” — a fusion of techno, minimal and melodic elements with relentless energy and intricate rhythms. His joker mask became iconic. Consistent releases on Fckng Serious and major festival appearances deliver structured, high-impact sets.",
    },
  ];

  return (
    <section id="lineup" className="relative z-10 w-full px-6 py-32">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className={title({ size: "md" })}>LINEUP 2026</h2>
        <Divider className="my-10 max-w-md mx-auto" />
        <p className="text-white/80 text-base mt-6 mb-16">
          First wave confirmed — more to be announced.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {artists.map((artist, index) => (
            <ArtistCard key={index} artist={artist} />
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto">
          <Card
            radius="lg"
            className="border-none bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl"
          >
            <div className="relative h-40 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60" />
              
              <div className="relative z-10 text-center px-12">
                <p className="text-white text-sm font-bold drop-shadow-2xl mb-2">
                  More world-class artists
                </p>
                <p className="text-white/90 text-base">
                  to be announced soon...
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function ArtistCard({ artist }: { artist: { photo: string; logo: string; description: string } }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      isPressable
      radius="lg"
      className="border-none h-[500px] overflow-hidden relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      <Image
        alt="Artist performing"
        className={`object-cover w-full h-full transition-all duration-700 ${
          isHovered ? "brightness-100 scale-110" : "brightness-50 blur-md"
        }`}
        src={artist.photo}
        fill
      />

      <div className="absolute top-6 left-0 right-0 flex justify-center pointer-events-none z-20">
        <div className="relative w-48 h-16">
          <Image
            src={artist.logo}
            alt="Artist logo"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      <div
        className={`absolute inset-x-0 bottom-0 p-8 text-center bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-white/90 text-xs leading-relaxed max-w-md mx-auto">
          {artist.description}
        </p>
      </div>
    </Card>
  );
}