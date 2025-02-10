import ParallaxSections from "./parallaxEffect";
import CardStack from "./parallaxEffect";
import Hero from "./Hero";
import Projects from "./projectCards";
import HorizontalScroll from "./HOrizontai";
import StackingCards from "./projectCards";
import CompanyWorkScroll from "./CompanyScroll";
import Navbar from "../components/NavBar";
import About from "./About";
import Footer from "../components/Footer";
import ProjectsSection from "./projectCards";
import StackedProjects from "./projectCards";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="relative">
        <Hero/>
        <About/>
        {/* <StackingCards /> */}
        <StackedProjects/>
        <CompanyWorkScroll/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
