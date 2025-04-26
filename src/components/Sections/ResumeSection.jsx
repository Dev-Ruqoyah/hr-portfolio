import { motion } from "framer-motion";
import { Download } from "lucide-react";
import Header from "../Header";
import { Element } from "react-scroll";

const ResumeSection = () => {
  return (
    <Element name="resume">

    <section
      id="resume"
      className="py-20 bg-gray-900 text-center relative overflow-hidden"
    >
      {/* Gradient Glow Effects */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-950 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-600 opacity-20 rounded-full blur-3xl z-0" />

      <div className="container relative z-10 mx-auto px-6">
        <Header header={"Download My Resume"}/>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg text-gray-300 mb-6"
        >
          You can download my most recent resume from the link below.
        </motion.p>

        {/* Resume Highlights */}
        <ul className="text-gray-400 text-sm md:text-base mb-6 space-y-2">
          <li>💼 2+ years of experience in frontend development</li>
          <li>🌐 Built responsive websites with React, Tailwind, and Framer Motion</li>
          <li>🚀 Passionate about creating beautiful and user-friendly UIs</li>
        </ul>

        {/* Download Button */}
        <motion.a
          href="/Hamzat_Resume.pdf"
          download="Hamzat-Rukayat-Resume"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-full hover:bg-blue-500 transition-all duration-300"
        >
          <Download size={20} />
          Download Resume
        </motion.a>

        {/* View Online Link */}
        <p className="text-sm text-gray-400 mt-4">
          Prefer to preview?{" "}
          <a
            href="/Hamzat_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-400 transition"
          >
            View online instead
          </a>
        </p>
      </div>
    </section>
    </Element>
  );
};

export default ResumeSection;
