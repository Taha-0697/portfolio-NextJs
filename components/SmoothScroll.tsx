"use client";

import Lenis from "lenis";
import { ReactNode, useEffect } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {

  useEffect(() => {
    let lenis: Lenis | null 

    (async () => {
      const Lenis = (await import("lenis")).default;

      lenis = new Lenis({
        duration: 1.2,
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    })();

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return children;
}