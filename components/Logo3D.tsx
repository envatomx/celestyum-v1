"use client";

import { useEffect } from "react";

export default function Logo3D() {
  useEffect(() => {
    if (!customElements.get("model-viewer")) {
      import("@google/model-viewer").catch(() => {});
    }
  }, []);

  return (
    // @ts-ignore
    <model-viewer
      className="absolute inset-0 z-10"
      src="/assets/models/logo.glb"
      ar
      auto-rotate
      auto-rotate-delay="0"
      auto-rotate-speed="10"
      camera-controls
      touch-action="pan-y"
      exposure="1"
      shadow-intensity="1"
      aria-label="CELESTYUM 3D logo"
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
      }}
    />
  );
}