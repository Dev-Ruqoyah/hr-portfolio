import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6 px-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Copyright Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg font-semibold text-white"
        >
          © {new Date().getFullYear()} Hamzat <span className="text-blue-500">Rukayat</span>. <br /> <p className="text-sm">All Rights Reserved.</p>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-4 mt-4 md:mt-0"
        >
          {[
            { icon: <Github size={24} />, link: "https://github.com/Dev-Ruqoyah" },
            { icon: <Linkedin size={24} />, link: "www.linkedin.com/in/hamzat-rukayat-abiodun" },
            { icon: <Twitter size={24} />, link: "https://x.com/Hamzat2822" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#60a5fa" }}
              className="transition duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
