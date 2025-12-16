// components/AboutSection.tsx  (all text sizes reduced - no xl, smaller and elegant)
"use client";

import { title } from "@/components/primitives";
import { Card, CardHeader, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { useState } from "react";

export default function AboutSection() {
  const features = [
    {
      title: "2 Main Stages",
      image: "https://thumbs.dreamstime.com/b/massive-crowd-edm-festival-people-dance-to-electronic-music-stage-lights-laser-beams-create-vibrant-energy-large-screens-show-359689060.jpg",
      short: "Two monumental main stages.",
      full: "CELESTYUM features two massive main stages with state-of-the-art production, custom sound systems, synchronized lighting, lasers and large-scale LED installations for unforgettable headliner performances.",
    },
    {
      title: "Digital Art Exhibition",
      image: "https://interactive-features.eventmarketer.com/panorama-music-festival-activations-engage-fans-with-digital-art-dive-bars-dunk-contests/assets/8qvT2SxV0F/panorama-day3-mg-4407-2560x1707.jpeg",
      short: "Immersive digital art installations.",
      full: "A curated exhibition of interactive digital art transforms the venue into a living gallery with generative visuals, real-time pieces and works by world-renowned digital artists.",
    },
    {
      title: "Onchain Ticketing",
      image: "https://jingdailyculture.com/wp-content/uploads/2022/09/nft-ticketing-1-1-1240x698.jpg",
      short: "Secure blockchain-powered ticketing.",
      full: "All tickets are issued on-chain on the Base blockchain for maximum security, transparency and speed. This modern system ensures seamless entry, eliminates fraud and provides a fully digital, future-proof ticketing experience.",
    },
    {
      title: "Livestreaming",
      image: "https://qtxasset.com/cdn-cgi/image/w=384,h=216,f=auto,fit=crop,g=0.5x0.5/https://qtxasset.com/quartz/qcloud4/media/image/LIB10%281%29.jpg?VersionId=vqYG7Z5MG.Bi5rhx_s3q718NQgcKroNk",
      short: "Global multi-stage livestream.",
      full: "Professional high-quality livestream brings the full festival energy to fans worldwide with dedicated camera crews and production.",
    },
    {
      title: "Nightclub Stages",
      image: "https://djmag.com/sites/default/files/styles/djm_23_1005x565/public/2024-07/Mexico-City-HEADER%201.jpg.webp?itok=6m5lQbXg1211578669",
      short: "Stages hosted by top Mexico City clubs.",
      full: "Multiple stages curated and hosted by Mexico City's iconic nightclubs, bringing their unique sounds, residents and intimate vibes directly into the festival.",
    },
    {
      title: "Road To & After Parties",
      image: "https://media.npr.org/assets/img/2012/05/30/demf2012-7a4c4b0c27ace75ae12f25a360cd10a88ba6b722.jpg?s=1100&c=50&f=jpeg",
      short: "Citywide pre-parties and afters.",
      full: "Official 'Road To' pre-parties build hype across the city weeks in advance, while exclusive after-parties with surprise guests keep the energy going deep into the night.",
    },
  ];

  return (
    <section id="about" className="relative z-10 w-full px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <h2 className={title({ size: "md" }) + " text-center mb-16"}>
          CELESTYUM EXPERIENCE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: { title: string; image: string; short: string; full: string } }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      isPressable
      isHoverable
      className="h-[450px] overflow-hidden relative group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)}
    >
      <Image
        removeWrapper
        alt={feature.title}
        className={`z-0 w-full h-full object-cover transition-all duration-700 ${
          isHovered ? "brightness-100 blur-0 scale-110" : "brightness-60 blur-lg"
        }`}
        src={feature.image}
      />

      <CardHeader className="absolute z-10 top-6 left-6 flex-col items-start">
        <p className="text-xs text-white/70 uppercase font-bold">Feature</p>
        <h4 className="text-white font-bold text-2xl drop-shadow-2xl">
          {feature.title}
        </h4>
      </CardHeader>

      <CardFooter className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/90 via-black/70 to-transparent py-10 px-6 backdrop-blur-md border-t border-white/20">
        <p className="text-white/95 text-sm leading-relaxed text-center max-w-md mx-auto">
          {isHovered ? feature.full : feature.short}
        </p>
      </CardFooter>
    </Card>
  );
}