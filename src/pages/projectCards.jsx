"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import project1 from "../assets/project3.png"
import project2 from "../assets/project1.png"
import project3 from "../assets/project2.png"
import project4 from "../assets/project5.png"
import project5 from "../assets/project4.png"

const projects = [
  {
    title: "RecipeAI",
    description: "An AI-powered recipe generator that suggests recipes based on user-provided ingredients.",
    link: "https://hr-recipyai.web.app/",
    image: project1 ,
  },
  {
    title: "FlickFetch Platform",
    description: "A movie discovery platform built with React, providing links to official movie sites.",
    link: "https://hr-flickfetch.web.app/",
    image: project2,
  },
  {
    title: "Ebook Site",
    description: "A simple, sign-up-free ebook browsing and reading platform.",
    link: "https://hr-shelfy.web.app/",
    image: project3,
  },
  {
    title: "Shoe Site",
    description: "A stylish and responsive e-commerce shoe site built with HTML, CSS, JS, and Bootstrap.",
    link: "https://hrshoewebsite.vercel.app/",
    image: project4,
  },
  {
    title: "Question App",
    description: "A web app that allows users to create and manage custom questions.",
    link: "https://hr-quizapp.web.app/",
    image: project5,
  },
];

export default function HorizontalProjects() {
  const containerRef = useRef(null);
  const projectsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Ensure width calculation is correct
    let totalScrollWidth =
      projectsRef.current.scrollWidth - containerRef.current.clientWidth;

    gsap.to(projectsRef.current, {
      x: () => -totalScrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${totalScrollWidth}`,
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true, // Ensures recalculation on resize
      },
    });

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-20 bg-gray-900  flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-16">
          My Projects
        </h2>

        <div className="relative w-full overflow-hidden">
          <div
            ref={projectsRef}
            className="flex space-x-8 w-max"
          >
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[300px] md:w-[400px] bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-gray-300 text-sm">{project.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
