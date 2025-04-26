"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import project1 from "../../assets/project3.png";
import project2 from "../../assets/project1.png";
import project3 from "../../assets/project2.png";
import project4 from "../../assets/project5.png";
import project6 from "../../assets/project6.png";
import project5 from "../../assets/project4.png";
import project7 from "../../assets/project7.png";
import Header from "../Header";
import { Element } from "react-scroll";

const projects = [
  {
    title: "RecipeAI",
    description: "An AI-powered recipe generator...",
    link: "https://hr-recipyai.web.app/",
    image: project1,
    stack: ["React", "Tailwind", "Firebase"],
  },
  {
    title: "Mentors Dashboard",
    description: "A Dashboard Interface...",
    link: "https://hr-flickfetch.web.app/",
    image: project7,
    stack: ["Nextjs", "Tailwind","Framer Motion"],
  },
  {
    title: "FlickFetch Platform",
    description: "A movie discovery platform...",
    link: "https://hr-flickfetch.web.app/",
    image: project2,
    stack: ["React", "TMDB API", "CSS"],
  },
  {
    title: "Ebook Site",
    description: "A simple ebook browsing platform...",
    link: "https://hr-shelfy.web.app/",
    image: project3,
    stack: ["React", "Tailwind", "Google API"],
  },
  {
    title: "Shoe Site",
    description: "A stylish e-commerce shoe site...",
    link: "https://hrshoewebsite.vercel.app/",
    image: project4,
    stack: ["Bootstrap", "JavaScript"],
  },
  {
    title: "Question App",
    description: "A custom quiz management app...",
    link: "https://hr-quizapp.web.app/",
    image: project5,
    stack: ["React", "Context API"],
  },
  {
    title: "Dictionary App",
    description: "A web-based dictionary app...",
    link: "https://hr-dictionaryapp.web.app/",
    image: project6,
    stack: ["React", "API", "Tailwind"],
  },
];

const stackColors = {
  React: "bg-blue-600",
  Nextjs:"bg-black/60 text-white",
  Tailwind: "bg-cyan-500",
  Firebase: "bg-yellow-500 text-black",
  "TMDB API": "bg-green-500",
  CSS: "bg-indigo-500",
  HTML: "bg-orange-500",
  JavaScript: "bg-yellow-300 text-black",
  Bootstrap: "bg-purple-600",
  "Context API": "bg-pink-500",
  API: "bg-teal-500",
  "Framer Motion" : "bg-red-500",
  "Google API" : "bg-blue-500"
};

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
    <Element name="peoject">

    
    <section
      id="projects"
      ref={containerRef}
      className="relative py-20 w-screen bg-gray-900 h-[100vh]  flex items-center overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <Header header={"My Projects"} />

        <div className="relative w-full overflow-hidden">
          <div ref={projectsRef} className="flex space-x-8 w-max">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-[300px] md:w-[380px] bg-gradient-to-tr from-[#1f2937] to-[#111827] rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:scale-105 hover:shadow-3xl"
              >
                {/* Project Image */}
                <div className="h-[180px] w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <div className="p-5 text-white">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">
                    {project.description}
                  </p>
                  {/* Stack Badges */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.stack.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          stackColors[tech] || "bg-white/10 text-gray-200"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4">
                    <span className="inline-block text-sm px-3 py-1 bg-white/10 rounded-full text-gray-200 group-hover:bg-white/20 transition">
                      View Project →
                    </span>
                  </div>
                </div>

                {/* Optional shine effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="shine absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 animate-shine" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
    </Element>
  );
}
