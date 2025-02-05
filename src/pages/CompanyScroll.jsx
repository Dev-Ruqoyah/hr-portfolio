import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CompanyWorkScroll = () => {
  const containerRef = useRef(null);
  const workRef = useRef(null);

  useEffect(() => {
    let sections = gsap.utils.toArray(".work-item");
  
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
      },
    });
  
    ScrollTrigger.refresh(); // Ensure GSAP recalculates
  
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  

  return (
    <div ref={containerRef} className="h-screen w-full flex items-center bg-gray-100 overflow-hidden">
      {/* Fixed Company Name */}
      <div className="w-1/4 h-full flex items-center justify-center text-4xl font-bold text-blue-500 bg-white shadow-lg">
        Sunmence
      </div>

      {/* Scrolling Work Details */}
      <div ref={workRef} className="w-3/4 h-full flex items-center overflow-hidden">
        <div className="flex space-x-20">
          {[
            "Frontend Development",
            "Built UI Components",
            "Integrated APIs",
            "Optimized Performance",
            "Implemented Animations",
          ].map((work, index) => (
            <div
              key={index}
              className="work-item w-[300px] h-[200px] bg-white shadow-lg border rounded-xl flex items-center justify-center text-xl font-semibold"
            >
              {work}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyWorkScroll;
