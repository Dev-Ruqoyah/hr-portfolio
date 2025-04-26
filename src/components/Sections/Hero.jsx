import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Lottie from "lottie-react";
import coderAnimation from "../../assets/cod.json"; // Path to your Lottie file
import { Link } from "react-scroll";

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

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section
      ref={heroRef}
      className="relative hero h-screen mt-8 dark:bg-gray-900 text-white py-16 text-center overflow-hidden"
    >
      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: false,
          background: {
            color: "transparent",
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
          particles: {
            color: {
              value: "#38bdf8",
            },
            links: {
              enable: true,
              color: "#38bdf8",
              distance: 120,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
            },
            size: {
              value: { min: 1, max: 3 },
            },
            opacity: {
              value: 0.3,
            },
          },
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Main Content */}
      <div className="h-full flex flex-col justify-center items-center relative z-10 px-4">
        {/* Lottie Animation */}
        <Lottie
          animationData={coderAnimation}
          loop
          className="w-64 h-64 md:w-72 md:h-72 mb-4"
        />

        {/* Title */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-blue-500">Rukayat</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-gray-300 text-left md:text-center mb-6 max-w-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A frontend developer turning ideas into elegant and powerful digital
          experiences. I design with intention, code with precision, and build
          with purpose.
        </motion.p>

        {/* CTA */}
        <Link to="resume" smooth={true} duration={600}>
        <motion.a
          href="#resume"
          className="inline-block mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold rounded-full shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Let's Work Together
        </motion.a>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
