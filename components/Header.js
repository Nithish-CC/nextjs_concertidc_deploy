import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import { BiEnvelope } from "react-icons/bi";

const Header = (props) => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      name: "Services",
      route: "/services",
    },
    {
      name: "edi",
      route: "/edi",
    },
    {
      name: "team",
      route: "/team",
    },
    {
      name: "faq",
      route: "/faq",
    },
    {
      name: "blog",
      route: "/blog",
    },
  ];
  const openSidebar = () => {
    document.getElementById("mySidebar").style.width = "256px";
  };

  const closeSidebar = () => {
    document.getElementById("mySidebar").style.width = "0px";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setNav(true);
      } else {
        setNav(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo(0, 5000);
  };

return(
    <nav class="navbar navbar-expand-lg navbar-default fixed-top" id="header-menu">
        <div class="container">
          <a class="navbar-brand offset-md-1" href="index.html">
            <img src="images/SVG/IDC_NavLogo.svg" class="logo-nav mr-3 nav-link active" alt="logo"/>
          </a>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav nav-content">
              <li class="nav-item">
                <a class="nav-link text-dark font-weight-bold text-uppercase"
                  href="services.html">Services</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-dark font-weight-bold text-uppercase"
                  href="EDI.html">EDI</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-dark font-weight-bold text-uppercase"
                  href="team.html">Team</a
                >
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-dark font-weight-bold text-uppercase"
                  href="faq.html">FAQ</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-dark font-weight-bold text-uppercase"
                  href="blog.html">Blog</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link text-dark font-weight-bold text-uppercase"
                  href="#contact-form">
                  <i class="far fa-envelope fa-lg"></i>
                </a>
              </li>
            </ul>
          </div>
          <div id="mySidebar" class="sidebar">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
            <a href="services.html">Services</a>
            <a href="EDI.html">EDI</a>
            <a href="team.html">Team</a>
            <a href="faq.html">FAQ</a>
            <a href="blog.html">blog</a>
            <a href="#contact-form">
              <i class="far fa-envelope"></i>
            </a>
          </div>
          <div id="main">
            <button class="openbtn d-none" onclick="openNav()">☰</button>
          </div>
        </div>
      </nav>
)
};
export default Header;
