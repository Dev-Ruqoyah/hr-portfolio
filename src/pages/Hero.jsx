import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smoothWheel: true,
      smoothTouch: false,
    });

    const animate = (time) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <section ref={heroRef} className="hero h-screen dark:bg-gray-900 text-white py-16 text-center">
      <div className="h-full flex justify-center items-center">
        <div className="max-w-lg mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm <span className="text-blue-500">Rukayat</span>
          </motion.h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Crafting Beautiful and Interactive Web Experiences
          </p>
        </div>
      </div>
    </section>
  );
};


export default Hero