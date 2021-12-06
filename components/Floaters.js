

import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Floaters = () => {

    useEffect(() => {
      
        gsap.to(".parallax-bg", {
            scrollTrigger: {
              scrub: true
            },
            y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
            ease: "none"
          });
    }, [])
  return(

  <div>
    <div id="parallax-bg-2" className="parallax-bg " data-speed=".10">
      <div id="bg-2-1"></div>
      <div id="bg-2-2"></div>
      <div id="bg-2-3"></div>
      <div id="bg-2-4"></div>
    </div>
    <div id="parallax-bg-1" className="parallax-bg " data-speed=".5">
      <div id="bg-1-1"></div>
      <div id="bg-1-2"></div>
      <div id="bg-1-3"></div>
      <div id="bg-1-4"></div>
      <div id="bg-1-5"></div>
    </div>
  </div>
  )
};

export default Floaters;
