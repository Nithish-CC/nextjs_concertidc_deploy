/** @format */

import { useEffect } from "react";
import client from "../lib/sanity";
import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Floaters({ data }) {
    //const { floaterData } = data;
    console.log(data)
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
            {/* <div id="parallax-bg-2" className="parallax-bg " data-speed=".10">
                <div id="bg-2-1" style={{ backgroundImage: `url(${floaterData.float_micro_one.url})` }}></div>
                <div id="bg-2-2" style={{ backgroundImage: `url(${floaterData.float_micro_two.url})` }}></div>
                <div id="bg-2-3" style={{ backgroundImage: `url(${floaterData.float_micro_three.url})` }}></div>
                <div id="bg-2-4" style={{ backgroundImage: `url(${floaterData.float_micro_four.url})` }}></div>
            </div> */}
            <div id="parallax-bg-1" className="parallax-bg " data-speed=".5">
                <div id="bg-1-1"></div>
                <div id="bg-1-2"></div>
                <div id="bg-1-3"></div>
                <div id="bg-1-4"></div>
                <div id="bg-1-5"></div>
            </div>
        </div>
    );
};

const floaterQuery = `*\[_type == "floaters"\][0] {
    float_four {
        ...asset->
      },
      float_micro_four {
        ...asset->
      },
      float_micro_one {
        ...asset->
      },
      float_micro_three {
        ...asset->
      },
      float_micro_two {
        ...asset->
      },
      float_one {
        ...asset->
      },
      float_three {
        ...asset->
      },
      float_two {
        ...asset->
      },
      float_five {
        ...asset->
      },
      "repoURL":repoURL {
        current
      },
      title, 
}`;
export async function getStaticProps() {
    const floaterData = await client.fetch(floaterQuery);
    const data = { floaterData };
    console.log(data);
    return {
        props: {
            data,
        },
        revalidate: 1,
    };
}
