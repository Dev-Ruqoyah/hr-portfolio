import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const StackingCards = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  const projects = [
    {
      title: "FlickFetch Platform",
      description: "A movie discovery platform built with React, providing links to official movie sites for more information.",
      link: "https://hr-flickfetch.web.app/",
      image: "https://via.placeholder.com/250x150" // Image for project one
    },
    {
      title: "Project Two",
      description: "Description for project two.",
      link: "https://example.com/project-two",
      image: "https://via.placeholder.com/250x150" // Image for project two
    },
    {
      title: "Project Three",
      description: "Description for project three.",
      link: "https://example.com/project-three",
      image: "https://via.placeholder.com/250x150" // Image for project three
    },
    {
      title: "Project Four",
      description: "Description for project four.",
      link: "https://example.com/project-four",
      image: "https://via.placeholder.com/250x150" // Image for project four
    },
    {
      title: "Project Five",
      description: "Description for project five.",
      link: "https://example.com/project-five",
      image: "https://via.placeholder.com/250x150" // Image for project five
    },
  ];

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    gsap.to(cardsRef.current, {
      xPercent: (index) => index * 79,
      yPercent: (index) => index * 2,
      opacity: 1,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="h-screen p-8 w-full flex items-start justify-start overflow-hidden bg-gray-900">
      <div className="relative flex">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="absolute w-[250px] h-[350px] bg-gray-100 shadow-lg border rounded-xl flex flex-col items-center justify-center text-pink-500 text-6xl font-bold"
            style={{
              top: `${index * 40}px`,
              left: `${index * 20}px`,
              zIndex: 10 + index,
            }}
          >
            <img src={project.image} alt={project.title} className="w-full h-40 text-sm  object-cover rounded-t-xl" />
            <h3 className="text-black text-xl font-semibold mt-4 ">{project.title}</h3>
            <p className="text-black text-[13px] font-light mb-2 p-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline text-sm"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackingCards;
