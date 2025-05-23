import { useState } from "react";
import { motion } from "framer-motion";
import Header from "../Header";
import { Element } from "react-scroll";

const CompanyWorkScroll = () => {
  const [selectedCompany, setSelectedCompany] = useState("Sunmence");

  const workExperience = {
    Sunmence: {
      role: "Frontend Developer",
      dates: "Oct 2023 - Dec 2024",
      details: [
        "Developed and optimized user interfaces using React.",
        "Built reusable UI components for scalability.",
        "Integrated APIs and ensured smooth frontend-backend communication.",
        "Optimized website performance for better user experience.",
        "Implemented animations with Framer Motion for enhanced interactivity.",
      ],
    },
    BuggyBillions: {
      role: "Frontend Instructor & Developer",
      dates: "July 2023 - Dec 2023",
      details: [
        "Taught frontend development classes to students.",
        "Mentored junior developers on real-world projects.",
        "Collaborated with a team of developers on live applications.",
        "Designed interactive UI components for projects.",
        "Provided code reviews and best practice guidance.",
      ],
    },
  };

  return (
    <Element name="experience">

    <div id="experience" className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6">
        <Header header={"Work Experience"}/>
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-10">
        {/* Sidebar with Company Names */}
        <div className="w-full md:w-1/4 bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col gap-6">
          {Object.keys(workExperience).map((company) => (
            <motion.button
              key={company}
              onClick={() => setSelectedCompany(company)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-3 text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out ${
                selectedCompany === company
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-blue-500 hover:bg-blue-500 hover:text-white"
              }`}
            >
              {company}
            </motion.button>
          ))}
        </div>

        {/* Work Experience Details */}
        <motion.div
          key={selectedCompany}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-3/4 bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col gap-6"
        >
          <h2 className="text-3xl font-semibold text-blue-600">{selectedCompany}</h2>
          <h3 className="text-xl font-medium text-gray-300">{workExperience[selectedCompany].role}</h3>
          <p className="text-sm text-gray-500">{workExperience[selectedCompany].dates}</p>
          <ul className="list-disc space-y-4 text-gray-300 pl-6">
            {workExperience[selectedCompany].details.map((detail, index) => (
              <motion.li key={index} whileHover={{ x: 5 }} className="hover:text-blue-500">
                {detail}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
    </Element>
  );
};

export default CompanyWorkScroll;
