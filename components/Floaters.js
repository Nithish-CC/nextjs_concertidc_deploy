/** @format */

import { useEffect } from "react";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Floaters = ({ data }) => {
    useEffect(() => {
        gsap.to(".parallax-bg", {
            scrollTrigger: {
                scrub: true,
            },
            y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
            ease: "none",
        });
    }, []);
    return (
        <div>
            <div id="parallax-bg-2" className="parallax-bg " data-speed=".10">
                <div id="bg-2-1" style={{backgroundImage:`url(${data.float_micro_one.url})`}}></div>
                <div id="bg-2-2" style={{backgroundImage:`url(${data.float_micro_two.url})`}}></div>
                <div id="bg-2-3" style={{backgroundImage:`url(${data.float_micro_one.url})`}}></div>
                <div id="bg-2-4" style={{backgroundImage:`url(${data.float_micro_one.url})`}}></div>
            </div>
            <div id="parallax-bg-1" className="parallax-bg " data-speed=".5">
                <div id="bg-1-1" style={{backgroundImage:`url(${data.float_one.url})`}}></div>
                <div id="bg-1-2" style={{backgroundImage:`url(${data.float_two.url})`}}></div>
                <div id="bg-1-3" style={{backgroundImage:`url(${data.float_three.url})`}}></div>
                <div id="bg-1-4" style={{backgroundImage:`url(${data.float_four.url})`}}></div>
                <div id="bg-1-5" style={{backgroundImage:`url(${data.float_five.url})`}}></div>
            </div>
        </div>
    );
};

export default Floaters;
