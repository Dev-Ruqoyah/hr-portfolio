import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Hero from "../components/Sections/Hero";
import CompanyWorkScroll from "../components/Sections/CompanyScroll";
import Navbar from "../components/NavBar";
import About from "../components/Sections/About";
import Footer from "../components/Footer";
import StackedProjects from "../components/Sections/projectCards";
import ResumeSection from "../components/Sections/ResumeSection";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <Navbar />
      <div className="relative overflow-x-hidden">
        <Hero />
        <About />
        <StackedProjects />
        <CompanyWorkScroll />
        <ResumeSection />
        {/* <ContactSection/> */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
