"use client";

import { ReactNode, useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    if (!lenisRef.current?.lenis) return;

    // Sync Lenis and ScrollTrigger
    lenisRef.current.lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenisRef.current.lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
    };
  }, []);

  return (
    <ReactLenis ref={lenisRef} root options={{ duration: 1.2 }}>
      <div className="relative w-full min-h-screen">{children}</div>
    </ReactLenis>
  );
}
