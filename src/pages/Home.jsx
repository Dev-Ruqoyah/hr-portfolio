import ParallaxSections from "./parallaxEffect";
import CardStack from "./parallaxEffect";
import Hero from "./Hero";
import CompanyWorkScroll from "./CompanyScroll";
import Navbar from "../components/NavBar";
import About from "./About";
import Footer from "../components/Footer";
import ProjectsSection from "./projectCards";
import StackedProjects from "./projectCards";
import ContactSection from "./Contact";
import ResumeSection from "./ResumeSection";


const Home = () => {
  return (
    <>
      <Navbar />
      <div className="relative overflow-x-hidden">
        <Hero/>
       <About/>
        <StackedProjects/>
         <CompanyWorkScroll/>
         <ResumeSection/>
         {/* <ContactSection/> */}
        <Footer/>
      </div>
    </>
  );
};

export default Home;
