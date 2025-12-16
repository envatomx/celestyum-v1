// components/VideoBackground.tsx  (full screen coverage)
"use client";

export default function VideoBackground() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="fixed inset-0 w-screen h-screen object-cover z-0 pointer-events-none"
    >
      <source src="/assets/video/bg.webm" type="video/webm" />
    </video>
  );
}