import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Header from "../Header";
import { Element } from "react-scroll";

const techStack = [
  {
    name: "React",
    color: "from-[#61DBFB] to-[#0B82B9]",
    icon: "react",
  },
  {
    name: "JavaScript",
    color: "from-yellow-400 to-yellow-600",
    icon: "javascript",
  },
  {
    name: "TypeScript",
    color: "from-blue-600 to-blue-800",
    icon: "typescript",
  },
  {
    name: "Tailwind CSS",
    color: "from-cyan-400 to-cyan-600",
    icon: "tailwindcss",
  },
  { name: "Git", color: "from-red-500 to-red-800", icon: "git" },
  {
    name: "Next.js",
    color: "from-gray-700 to-gray-900",
    icon: "next-dot-js",
  },
];

const About = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 25,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <Element name="about">

   
    <section
      id="about"
      name="about"
      className="about py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
    >
      <div className="grid md:grid-cols-2 px-8">
        {/* Left: Text Content */}
        <div className="container mx-auto px-6">
          <Header header={"About me"} />

          <motion.p
            className="text-md text-gray-300 mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Hi, I'm{" "}
            <b>
              Hamzat <span className="text-blue-500">Rukayat</span>
            </b>
            , a passionate Frontend Developer who specializes in creating
            dynamic, responsive, and interactive web applications. I focus on
            building delightful user experiences using modern technologies and
            design principles.
          </motion.p>

          <p className="text-gray-300 max-w-3xl mx-auto">
            I am proficient in building fast, accessible, and scalable
            applications. My expertise includes working with modern frontend
            technologies like React, Next.js, TypeScript, and Tailwind CSS, as
            well as collaborating in version-controlled environments using Git.
            I continuously strive to improve my skills and stay updated with
            industry trends.
          </p>
        </div>

        {/* Right: Auto-Scrolling or Grid */}
        <motion.div
          className="mt-16 relative overflow-hidden sm:overflow-visible"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {/* For small screens (scroll) */}
          <motion.div className="flex gap-6 w-max sm:hidden" animate={controls}>
            {[...techStack, ...techStack].map((tech, i) => (
              <motion.div
                key={i}
                className="min-w-[180px] p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 hover:border-white/20 hover:backdrop-blur-lg"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                    className={`bg-gradient-to-r ${tech.color} p-4 rounded-full shadow-inner`}
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/${tech.icon}.svg`}
                      alt={tech.name}
                      className="w-8 h-8 filter brightness-0 invert"
                    />
                  </div>
                  <p className="text-lg font-semibold text-gray-100">
                    {tech.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* For medium and up (grid) */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                className={`group relative p-6 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-white/20 hover:backdrop-blur-lg`}
                whileHover={{ rotateX: 4, rotateY: -4 }}
                whileTap={{ scale: 0.95 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div
                    className={`bg-gradient-to-r ${tech.color} p-4 rounded-full shadow-inner`}
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/${tech.icon}.svg`}
                      alt={tech.name}
                      className="w-8 h-8 filter brightness-0 invert"
                    />
                  </div>
                  <p className="text-lg font-semibold text-gray-100">
                    {tech.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
    </Element>
  );
};

export default About;
