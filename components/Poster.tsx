// components/Poster.tsx
"use client";

import { Card, CardFooter } from "@heroui/card";
import Image from "next/image";

export default function Poster() {
  return (
    <section className="relative z-10 w-full px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <Card isFooterBlurred radius="lg" className="border-none overflow-hidden shadow-2xl">
          {/* Full poster image */}
          <Image
            alt="CELESTYUM Phase 1 Lineup"
            className="object-cover w-full"
            src="/assets/images/poster.jpg"
            width={1200}
            height={1800}
            priority
          />

          {/* Blurred glass footer with large centered text */}
          <CardFooter className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent py-12 px-8 backdrop-blur-md border-t border-white/20">
            <div className="w-full text-center">
              <p className="text-white text-6xl md:text-7xl font-bold drop-shadow-2xl">
                PHASE 1 LINEUP
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
