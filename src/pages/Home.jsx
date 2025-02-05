import ParallaxSections from "./parallaxEffect";
import CardStack from "./parallaxEffect";
import Hero from "./Hero";
import Projects from "./stackCards";
import HorizontalScroll from "./HOrizontai";
import StackingCards from "./stackCards";
import CompanyWorkScroll from "./CompanyScroll";
import Navbar from "../components/NavBar";
import About from "./About";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="relative">
        <Hero/>
        <About/>

        <StackingCards />
        <CompanyWorkScroll id="experience"/>
      </div>
    </>
  );
};

export default Home;
