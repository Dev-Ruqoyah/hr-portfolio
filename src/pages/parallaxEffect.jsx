import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ParallaxSections = () => {
  const containerRef = useRef(null);
  const parallaxRefs = useRef([]);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      smooth: true,
      sync: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Parallax Animation using GSAP
    parallaxRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { y: index % 2 === 0 ? 100 : -100, opacity: 0.5 }, // Initial state
        {
          y: 0, // Moves to natural position
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom top",
            scrub: true, // Smooth effect
          },
        }
      );
    });

    return () => lenis.destroy();
  }, []);

  return (
    <div ref={containerRef} className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center text-5xl font-bold">
        Parallax Scrolling
      </section>

      {/* Parallax Sections */}
      {[1, 2, 3, 4].map((num, index) => (
        <section
          key={num}
          ref={(el) => (parallaxRefs.current[index] = el)}
          className={`h-[500px] flex items-center justify-center text-4xl font-bold ${
            index % 2 === 0 ? "bg-blue-500" : "bg-green-500"
          }`}
        >
          Section {num}
        </section>
      ))}

      {/* Footer */}
      <section className="h-screen flex items-center justify-center text-5xl font-bold bg-gray-800">
        The End
      </section>
    </div>
  );
};

export default ParallaxSections;
