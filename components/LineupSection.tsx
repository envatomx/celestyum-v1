// components/LineupSection.tsx  (updated: single detailed paragraph for each artist description)
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
      description: "Berlin collective and label founded in 2009 by Rampa, Adam Port and &ME, Keinemusik has developed a signature sound rooted in deep house with warm textures and minimalist productions that prioritize artistic coherence over fleeting trends. Their catalog and performances showcase solid teamwork and a sharply defined musical identity, building a global community through consistent releases, carefully curated sets and a recognizable sonic aesthetic, the collective's most powerful impact emerges when performing together, cementing their status as a cornerstone of contemporary electronic music.",
    },
    {
      photo: "/assets/images/solomun.jpg",
      logo: "/assets/images/solomun.png",
      description: "Born in Bosnia and raised in Germany, Solomun stands as one of the most influential figures in contemporary house, blending emotional melodies, deep percussion and extended transitions that define his narrative approach to DJing — his label Diynamic has served as a launchpad for new talent and a key driver in expanding his distinctive sound, while his renowned ability to sustain marathon sets, crafting gradual atmospheres and guiding audiences through immersive journeys, has solidified his reputation as one of the most respected DJs of his generation through iconic performances in Ibiza, Boiler Room and major European festivals.",
    },
    {
      photo: "/assets/images/boris.jpg",
      logo: "/assets/images/boris.png",
      description: "German producer and DJ Boris Brejcha pioneered “high-tech minimal,” a personal fusion of techno, minimal and melodic elements characterized by relentless energy, sharp synthesizers and intricate rhythmic structures — his signature joker mask became an iconic symbol of his live project, while consistent releases on his label Fckng Serious and appearances at the world's top festivals have maintained his momentum, delivering direct, structured sets designed for prolonged immersion where he masterfully layers tension and release.",
    },
  ];

  return (
    <section id="lineup" className="relative z-10 w-full px-6 py-32">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className={title({ size: "lg" })}>LINEUP 2026</h2>
        <Divider className="my-10 max-w-md mx-auto" />
        <p className="text-white/80 text-lg mt-6 mb-16">
          First wave confirmed — more to be announced.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {artists.map((artist, index) => (
            <ArtistCard key={index} artist={artist} />
          ))}
        </div>

        {/* Horizontal glass teaser card below the lineup */}
        <div className="mt-20 max-w-4xl mx-auto">
          <Card
            radius="lg"
            className="border-none bg-white/5 backdrop-blur-xl overflow-hidden shadow-2xl"
          >
            <div className="relative h-48 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60" />
              
              <div className="relative z-10 text-center px-12">
                <p className="text-white text-3xl font-bold drop-shadow-2xl mb-2">
                  More world-class artists
                </p>
                <p className="text-white/90 text-xl">
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
      className="border-none h-[600px] overflow-hidden relative group cursor-pointer"
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

      <div className="absolute top-8 left-0 right-0 flex justify-center pointer-events-none z-20">
        <div className="relative w-56 h-20">
          <Image
            src={artist.logo}
            alt="Artist logo"
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      <div
        className={`absolute inset-x-0 bottom-0 p-10 text-center bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-white/90 text-base leading-relaxed max-w-lg mx-auto">
          {artist.description}
        </p>
      </div>
    </Card>
  );
}