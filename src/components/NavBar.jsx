import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-scroll";

const Navbar = () => {
  // Initialize darkMode based on localStorage, defaulting to light mode
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Sync darkMode with the document's class and localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          {/* Brand Name */}
          <motion.a
            href="#"
            className="text-2xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <i>Hamzat Rukayat</i>
          </motion.a>

          {/* Navigation Links */}
          <motion.ul
            className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <li>
              <Link to="about" smooth={true} duration={500} className="hover:text-blue-500 transition cursor-pointer">
                About
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} className="hover:text-blue-500 transition cursor-pointer">
                Projects
              </Link>
            </li>
            <li>
              <Link to="experience" smooth={true} duration={500} className="hover:text-blue-500 transition cursor-pointer">
                Experience
              </Link>
            </li>
          </motion.ul>

          {/* Social Media & Dark Mode Toggle */}
          <div className="flex items-center space-x-8">
            {/* Social Icons */}
            <div className="hidden md:flex space-x-3 text-gray-600 dark:text-gray-300">
              <a
                href="https://github.com/Dev-Ruqoyah"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6 hover:text-blue-500 transition" />
              </a>
              <a
                href="www.linkedin.com/in/hamzat-rukayat-abiodun"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6 hover:text-blue-500 transition" />
              </a>
              <a
                href="https://x.com/Hamzat2822"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-6 h-6 hover:text-blue-500 transition" />
              </a>
            </div>

            <button className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full">
              <a href="mailto:hamzatrukayat2822@gmail.com">
                {" "}
                <Mail className="w-6 h-6 text-blue-500" />
              </a>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
