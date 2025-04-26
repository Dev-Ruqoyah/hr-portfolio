import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Lenis Smooth Scroll
    const lenis = new Lenis({
      smooth: true,
      direction: "vertical", // Vertical scroll triggers horizontal movement
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP Horizontal Scroll
    gsap.to(sectionsRef.current, {
      xPercent: -100 * (sectionsRef.current.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        start: "top top",
        end: () => `+=${window.innerWidth * (sectionsRef.current.length - 1)}`, // Dynamic end
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div ref={containerRef} className="flex h-full">
        {["Section 1", "Section 2", "Section 3", "Section 4", "Section 5", "Section 6"].map((text, i) => (
          <div
            key={i}
            ref={(el) => (sectionsRef.current[i] = el)}
            className="w-[25vw] h-full flex items-center justify-center text-white text-4xl font-bold"
            style={{ background: `hsl(${i * 60}, 80%, 50%)` }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScroll;
