import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="about py-20 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white"
    >
      <div className="grid md:grid-cols-2 px-8">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-500 mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Me
          </motion.h3>

          {/* Introduction */}
          <motion.p
            className="text-md  text-gray-300 mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Hi, I'm <b>Hamzat <span className="text-blue-500">Rukayat</span></b>, a passionate Frontend Developer who specializes
            in creating dynamic, responsive, and interactive web applications. I
            focus on building delightful user experiences using modern
            technologies and design principles.
          </motion.p>

          {/* Skills Highlight */}
          <div className="">
         
            <p className="   text-gray-300 max-w-3xl mx-auto">
              I am proficient in building fast, accessible, and scalable
              applications. My expertise includes working with modern frontend
              technologies like React, Next.js, TypeScript, and Tailwind CSS, as
              well as collaborating in version-controlled environments using
              Git. I continuously strive to improve my skills and stay updated
              with industry trends.
            </p>
          </div>
        </div>
        {/* Technologies & Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12 mt-12">
          {/* React */}
          <motion.div
            className="tech-card p-6 bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/react.svg"
              alt="React"
              className="mx-auto w-10 h-10 mb-4"
            />
            <p className="text-lg font-semibold text-gray-100">React</p>
          </motion.div>

          {/* JavaScript */}
          <motion.div
            className="tech-card p-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/javascript.svg"
              alt="JavaScript"
              className="mx-auto w-10 h-10 mb-4"
            />
            <p className="text-lg font-semibold text-gray-100">JavaScript</p>
          </motion.div>

          {/* TypeScript */}
          <motion.div
            className="tech-card p-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/typescript.svg"
              alt="TypeScript"
              className="mx-auto w-10 h-10 mb-4"
            />
            <p className="text-lg font-semibold text-gray-100">TypeScript</p>
          </motion.div>

          {/* Tailwind CSS */}
          <motion.div
            className="tech-card p-6 bg-gradient-to-r from-teal-500 to-green-400 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/tailwindcss.svg"
              alt="Tailwind CSS"
              className="mx-auto w-10 h-10 mb-4"
            />
            <p className="text-lg font-semibold text-gray-100">Tailwind CSS</p>
          </motion.div>

          {/* Git */}
          <motion.div
            className="tech-card p-6 bg-gradient-to-r from-gray-600 to-gray-900 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@v4/icons/git.svg"
              alt="Git"
              className="mx-auto w-10 h-10 mb-4"
            />
            <p className="text-lg font-semibold text-gray-100">Git</p>
          </motion.div>

          {/* Next.js */}
          <motion.div
            className="tech-card p-6 bg-gradient-to-r from-gray-800 to-gray-400 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://cdn.jsdelivr.net/npm/simple-icons@4.25.0/icons/next-dot-js.svg"
              alt="Next.js"
              className="mx-auto w-10 h-10 mb-4"
            />
            <p className="text-lg font-semibold text-gray-100">Next.js</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
