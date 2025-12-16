// app/page.tsx  (updated: Poster section added between Lineup and Venue)
"use client";

import { useEffect } from "react";
import Logo3D from "@/components/Logo3D";
import VideoBackground from "@/components/VideoBackground";
import AboutSection from "@/components/AboutSection";
import LineupSection from "@/components/LineupSection";
import Poster from "@/components/Poster";  // New import
import VenueSection from "@/components/VenueSection";
import TicketsSection from "@/components/TicketsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = (event.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || !href.startsWith("#")) return;

      event.preventDefault();
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <>
      {/* Fixed fullscreen video background - directly in page, behind everything */}
      <VideoBackground />

      {/* HERO SECTION - stays here as requested, NO COMPONENT */}
      <section id="home" className="relative h-screen">
        <Logo3D />
      </section>

      {/* All other sections extracted as components */}
      <AboutSection />
      <LineupSection />
      <Poster />  {/* Poster placed below Lineup, above Venue */}
      <VenueSection />
      <TicketsSection />
      <ContactSection />
    </>
  );
}