import VideoBackground from "@/components/VideoBackground";
import Logo3D from "@/components/Logo3D";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* background video */}
      <VideoBackground />

      {/* 3D logo */}
      <Logo3D />
    </section>
  );
}
