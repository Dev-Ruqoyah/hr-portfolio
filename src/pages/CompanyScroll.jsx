import { useState } from "react";
import { motion } from "framer-motion";

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
    <div id="experience" className="min-h-screen flex flex-col items-center justify-center bg-gray-900  px-5">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Work Experience</h1>
      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8">
        {/* Sidebar with Company Names */}
        <div className="w-full md:w-1/3 bg-gray-700 shadow-lg rounded-lg p-6 flex flex-col gap-4">
          {Object.keys(workExperience).map((company) => (
            <motion.button
              key={company}
              onClick={() => setSelectedCompany(company)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`w-full py-3 text-lg font-semibold rounded-lg transition-all duration-300 ${
                selectedCompany === company
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-blue-500"
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
          className="w-full md:w-2/3 bg-gray-800 shadow-lg rounded-lg p-8 flex flex-col gap-4"
        >
          <h2 className="text-2xl font-bold text-blue-600">{selectedCompany}</h2>
          <h3 className="text-lg font-medium text-gray-100">{workExperience[selectedCompany].role}</h3>
          <p className="text-sm text-gray-100">{workExperience[selectedCompany].dates}</p>
          <ul className="list-disc space-y-2 text-gray-100 pl-5">
            {workExperience[selectedCompany].details.map((detail, index) => (
              <motion.li key={index} whileHover={{ x: 5 }}>
                {detail}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyWorkScroll;