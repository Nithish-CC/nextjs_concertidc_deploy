import React, { useState, useEffect, useRef } from "react";
import { gsap, Linear } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const isServer = typeof window === "undefined";
const WOW = !isServer ? require("wow.js") : null;

export const HomePageAnimation = () => {
  return (
    <div>
      {useEffect(() => {
        new WOW().init();
        gsap.from(".globe-pic", {
          scrollTrigger: {
            trigger: "#the-globe",
            toggleActions: "play none none reset",

            markers: false,

            start: "top 75%",
            end: "bottom 100%",
            scrub: 0.35,
          },
          y: "220vh",

          ease: "power2.Out",
        });

        gsap.from(".unicorn-img", {
          scrollTrigger: {
            trigger: "#the-unicorn",
            toggleActions: "play none none reset",
            markers: false,
            start: "top 75%",
            end: "bottom 90%",
            scrub: 0.35,
          },
          y: "220vh",
          ease: "power2.Out",
        });

        gsap.from(".octopus-img", {
          scrollTrigger: {
            trigger: "#the-octopus",
            toggleActions: "play none none reset",
            markers: false,
            start: "top 75%",
            end: "bottom 90%",
            scrub: 0.35,
          },
          y: "220vh",
          ease: Linear.easeNone,
        });

        gsap.from(".mountain-img", {
          scrollTrigger: {
            trigger: "#the-mountain",
            toggleActions: "play none none reset",
            markers: false,
            start: "top 20%",
            end: "bottom 25%",
            scrub: 0.35,
          },
          y: "120vh",
          ease: "power2.out",
        });

        gsap.from(".bounceInLeft", {
          scrollTrigger: {
            trigger: ".bounceInLeft",
            toggleActions: "play none none none",
            markers: false,
            start: "top 75%",
            end: "bottom 10%",
          },
          x: "-120vw",

          ease: "power2.out",
        });

        gsap.from(".bounceInRight", {
          scrollTrigger: {
            trigger: ".bounceInRight",
            toggleActions: "play none none none",
            markers: false,
            start: "top 75%",
            end: "bottom 10%",
          },
          x: "120vw",

          ease: "power2.out",
        });
      }, [])}
    </div>
  );
};
