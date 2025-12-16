// components/VenueSection.tsx  (fixed: accordion with glass background like dates card)
"use client";

import { title } from "@/components/primitives";
import { Divider } from "@heroui/divider";
import { Accordion, AccordionItem } from "@heroui/accordion";
import Image from "next/image";

export default function VenueSection() {
  return (
    <section id="venue" className="relative z-10 w-full px-6 py-32">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className={title({ size: "lg" })}>VENUE</h2>
        <Divider className="my-10 max-w-md mx-auto" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-start">
          {/* Venue photo with glass overlay */}
          <div className="relative rounded-2xl overflow-hidden h-[500px]">
            <Image
              src="/assets/images/venue.jpg"
              alt="CELESTYUM 2026 venue teaser"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-left">
              <p className="text-white text-4xl font-bold drop-shadow-2xl">
                To Be Announced
              </p>
              <p className="text-white/90 text-xl mt-2">
                An iconic location in Mexico City
              </p>
            </div>
          </div>

          <div className="space-y-10">
            {/* Main description - glass card */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-10 border border-white/10 shadow-2xl">
              <h3 className="text-5xl font-bold leading-tight mb-6">
                A legendary venue in Mexico City
              </h3>
              <p className="text-xl text-white/90 leading-relaxed">
                CELESTYUM 2026 will take place in one of Mexico City's most iconic and historic spaces, carefully selected and transformed into the ultimate temple for electronic music and digital art.
              </p>
              <p className="text-lg text-white/80 mt-6">
                Expect a breathtaking fusion of historic architecture and cutting-edge production — an unforgettable immersive experience.
              </p>
            </div>

            {/* Dates - glass card */}
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-xl">
              <p className="text-2xl font-bold text-white mb-4">
                Festival Dates
              </p>
              <p className="text-xl text-white/90">
                2026 · Mexico City
              </p>
              <p className="text-white/70 mt-4">
                Exact dates and full venue reveal coming soon.
              </p>
            </div>

            {/* Accordion - now with matching glass background */}
            <Accordion 
              variant="splitted" 
              className="rounded-2xl overflow-hidden border border-white/10 shadow-xl"
            >
              <AccordionItem 
                key="1" 
                title="What to expect"
                className="bg-white/5 backdrop-blur-xl px-8 py-6 border-b border-white/10"
              >
                <p className="text-white/90">
                  Maximum immersion · State-of-the-art sound & lighting · 2 main stages · Multiple art zones · Historic architecture meets futuristic production
                </p>
              </AccordionItem>
              <AccordionItem 
                key="2" 
                title="Location"
                className="bg-white/5 backdrop-blur-xl px-8 py-6"
              >
                <p className="text-white/90">
                  Mexico City · Excellent public transport connections · Surrounded by culture, hotels and nightlife
                </p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-white/60 text-xl">
            Venue reveal coming soon...
          </p>
        </div>
      </div>
    </section>
  );
}