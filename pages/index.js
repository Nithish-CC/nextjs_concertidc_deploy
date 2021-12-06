/** @format */
import { useState, useEffect } from "react";
import client from "../lib/sanity";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import React from "react";
import Floaters from "../components/Floaters";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { BiEnvelope } from "react-icons/bi";
import { HomePageAnimation as Homepageanimation } from "../components/Animations/Homeanimation";

export default function Home({ data }) {
    const { siteHeaderData, homepageData } = data;
    const [nav, setNav] = useState(false);
    const [str, setStr] = useState("");
    const [stringSectionOneHeading, setSectionOneHeading] = useState([]);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= 80) {
                setNav(true);
            } else {
                setNav(false);
            }
        });
    }, []);

    useEffect(() => {}, [homepageData]);

    const handleClick = () => {
        window.scrollTo(0, 5000);
    };

    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
    }
    // Check your browser console for output
    console.log({ siteHeaderData, homepageData });

    const blueBackgroundImg = {
        "--backgroundImage": `url(${homepageData.background_blue_image.url})`,
    };

    const sharkImg = {
        "--sharkbackgroundImage": `url(${homepageData.shark_image.url})`,
    };

    const mountainImg = {
      "--mountainbackgroundImage": `url(${homepageData.mountain_background_image.url})`,
    };

    return (
        <React.Fragment>
            <div id="home-page" className="wrapper">
                <nav
                    className="navbar navbar-expand-lg navbar-default fixed-top"
                    style={nav ? { backgroundColor: "#ffffff " } : { backgroundColor: "transparent" }}
                    id="header-menu">
                    <div className="container">
                        <a className="navbar-brand offset-md-1" href="index.html">
                            <img
                                src="https://www.theidcgroup.com/images/svg/IDC-Nav-Logo.svg"
                                className="logo-nav mr-3 nav-link active"
                                alt="logo"
                            />
                        </a>

                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav nav-content">
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-dark font-weight-bold text-uppercase"
                                        href="services.html">
                                        Services
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark font-weight-bold text-uppercase" href="EDI.html">
                                        EDI
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark font-weight-bold text-uppercase" href="team.html">
                                        Team
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark font-weight-bold text-uppercase" href="faq.html">
                                        FAQ
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark font-weight-bold text-uppercase" href="blog.html">
                                        Blog
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link text-dark font-weight-bold text-uppercase"
                                        href="#contact-form">
                                        <BiEnvelope />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div id="mySidebar" className="sidebar">
                            <a className="closebtn" onClick={closeNav}>
                                ×
                            </a>
                            <a href="services.html">Services</a>
                            <a href="EDI.html">EDI</a>
                            <a href="team.html">Team</a>
                            <a href="faq.html">FAQ</a>
                            <a href="blog.html">blog</a>
                            <a href="#contact-form">
                                <i className="far fa-envelope"></i>
                            </a>
                        </div>

                        <div id="main">
                            <button className="openbtn d-none" onClick={() => openNav()}>
                                ☰
                            </button>
                        </div>
                    </div>
                </nav>
                <Homepageanimation />
                {/* <!-- Unicorn Section --> */}
                <section className="sections z-unicorn_index" id="the-unicorn">
                    <div className="container">
                        <div className="row pin h-100">
                            <div className="col-sm-6">
                                <div
                                    className="unicorn-img inner-img"
                                    style={{
                                        backgroundImage: `url(${homepageData.urnicorn_image.url})`,
                                        zIndex: 7,
                                    }}></div>
                            </div>
                            <div
                                className="col-sm-5 inner-text order-2  text-right ml-n5"
                                style={{ zIndex: 8, position: "relative" }}>
                                <div className="inner-title">
                                    <h1>
                                        {homepageData.section_one_heading.split(" ").map((el, index) => {
                                            let text;
                                            text = el + "\n";
                                            return text;
                                        })}
                                    </h1>
                                </div>
                                <div className="inner-para">
                                    <h3 className="text-white">{homepageData.section_one_Homepage_subtitle}</h3>
                                    <button className="btn-double-outline float-right">
                                        <span>
                                            <a href="services.html">Learn What we do</a>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Octopus Section --> */}
                <section className="sections" id="the-octopus">
                    <div className="octopus-blue-img inner-img w-100" style={blueBackgroundImg}>
                        <div className="container outer">
                            <div className="row justify-content-center h-100">
                                <div className="col-sm-6 inner-text octopus-content" style={{ zIndex: 9 }}>
                                    <div className="inner-title">
                                        <h1>{homepageData.section_two_Homepage_Title}</h1>
                                    </div>
                                    <div className="inner-para">
                                        <h3 className="text-white">{homepageData.section_two_Homepage_subtitle}</h3>
                                        <button className="btn-double-outline mx-auto my-4">
                                            <span>
                                                {" "}
                                                <a href="team.html">Meet the Team</a>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="col-sm-6 octopus-img align-self-center" style={sharkImg}></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Two Hand Section */}
                <section className="sections" id="the-hands">
                    <div className="hands-img inner-img">
                        <div className="container outer">
                            <div className="row h-100  pin mt-5">
                                <div className="offset-lg-2 col-lg-8 inner-text text-center">
                                    <div className="inner-title">
                                        <h1 className="mb-0">{homepageData.Section_three_title}</h1>
                                        <h2 className="text-white">
                                            <span className="hands-title-span">
                                                {homepageData.section_three_Homepage_title_two}
                                            </span>
                                        </h2>
                                    </div>
                                    <div className="inner-para">
                                        <h4 className="text-white font-weight-light">
                                            {homepageData.Section_three_homepage_subtitle}
                                        </h4>
                                        <button className="btn-double-outline mx-auto my-4">
                                            <span>
                                                {" "}
                                                <a href="team.html">Meet the Team</a>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-6 p-0 wow bounceInLeft">
                                    <img src={homepageData.left_hand_image.url} className="custom-iwidth" />
                                </div>
                                <div className="col-sm-6 p-0 wow bounceInRight">
                                    <img src={homepageData.right_hand_image.url} className="custom-iwidth" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Mountain Section --> */}
                <section className="sections" id="the-mountain">
                    <div className="mountain-img inner-img" style={mountainImg}></div>
                    <div className="container outer">
                        <div className="row h-100 pin-outer">
                            <div
                                className="col-sm-6 align-self-top text-lg-right"
                                style={{ position: "relative", zIndex: 12 }}>
                                <h1 className="text-white-outline">
                                    {homepageData.Section_four_title.split(" ").map((el, index) => {
                                        let text;
                                        text = `${el}\n`;
                                        console.log(text)
                                        return text;
                                    })}
                                </h1>
                                <p className="text-white">
                                {homepageData.section_four_Homepage_subtitle.split(".").map((el, index) => {
                                        let text;
                                        text = `${el}.\n`;
                                        console.log(text)
                                        return text;
                                    })}</p>
                            </div>
                            <Floaters />
                            <div className="col-sm-6 col-lg-5  align-self-top" id="contact-form" style={{ zIndex: 13 }}>
                                <form
                                    name="homeContact"
                                    method="POST"
                                    data-aos="fade"
                                    data-netlify="true"
                                    id="form-submit">
                                    <div className="form-group row">
                                        <div className="col-md-6 mb-3 mb-lg-0">
                                            <input
                                                name="FirstName"
                                                type="text"
                                                className="form-control"
                                                placeholder="First name"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <input
                                                name="LastName"
                                                type="text"
                                                className="form-control"
                                                placeholder="Last name"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <input
                                                name="email"
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <textarea
                                                name="Message"
                                                className="form-control"
                                                rows="8"
                                                placeholder="Write your message here"></textarea>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-xs-12 col-md-12">
                                            <button className="btn-double-outline" type="submit">
                                                <span>Tell us About Yourself</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* footer */}
                <div className="footer-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 align-self-center">
                                <p className="text-white mb-0 mt-0">© 2019 IDC, Inc. All rights reserved</p>
                            </div>
                            <div className="col-sm-6 align-self-center">
                                <ul className="list-unstyled footer-links d-flex  justify-content-sm-end mb-0">
                                    <li>
                                        <a className="text-white active" href="index.html">
                                            HOME
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="https://www.theidcgroup.com/services.html">
                                            SERVICES
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="EDI.html">
                                            EDI
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-white" href="team.html">
                                            TEAM
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <Row>
                    
                    <div style={{ zIndex: 3 }}>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col md="6">
                                    <h1
                                        className={styles.title}
                                        style={{ color: "white", marginTop: "20% !important" }}>
                                        {homepageData.BRING_YOUR_BIG_IDEA_TO_US_title}
                                    </h1>
                                    <h3 className={styles.description} style={{ color: "white" }}>
                                        {homepageData.Homepage_subtitle_If_you_have_a_great_idea}
                                    </h3>
                                </Col>
                                <Col md="6">
                                    <img
                                        src={homepageData.whale_Homepage_image.url}
                                        style={{ width: "80%", height: "100%" }}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Row> */}
                {/* <Row>
                    <div style={{ zIndex: 3, margin: "4rem 0" }}>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col md="12">
                                    <h1
                                        className={styles.CREATE_A_RELATIONSHIP_title}
                                        style={{ color: "white", marginTop: "20% !important", textAlign: "center" }}>
                                        {homepageData.CREATE_A_RELATIONSHIP_title}
                                    </h1>
                                    <h3 className={styles.description} style={{ color: "white", margin: "2rem 0" }}>
                                        {homepageData.Homepage_subtitle_BUILT_TO_LAST}
                                    </h3>
                                    <h3 className={styles.description} style={{ color: "white", margin: "2rem 0" }}>
                                        {homepageData.Homepage_subtitle_At_IDC_we_ve_always_got_your_back}
                                    </h3>
                                </Col>
                            </Row>
                        </Container>
                        <Row>
                            <Col md="6">
                                <img
                                    src={homepageData.two_hand_Homepage_image.url}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </Col>
                            <Col md="6">
                                <img
                                    src={homepageData.background_three_image.url}
                                    style={{ width: "100%", height: "100%" }}
                                />
                            </Col>
                        </Row>
                    </div>
                </Row> */}
            </div>
        </React.Fragment>
    );
}

// Create a query called siteHeaderQuery
const siteHeaderQuery = `*\[_type == "siteheader"\] {
  title,
  repoURL {
    current
  }
}`;

// Create a query called homepageQuery
const homepageQuery = `*\[_type == "homepage"\][0] {
    Section_four_title,
    Section_three_homepage_subtitle,
    Section_three_title, 
    Whats_URL_Services_Page, 
    Whats_URL_fank_Page, 
    Whats_URL_team_Page, 
    background_blue_image{
      ...asset->
    },
    "ctaUrl": cta {
      current
          },
    left_hand_image{
      ...asset->
    },
    mountain_background_image{
      ...asset->
    },
    "repoURL": repoURL {
      current
    },
    right_hand_image{
      ...asset->
    },
    section_four_Homepage_subtitle, 
    section_one_Homepage_subtitle, 
    section_one_heading, 
    section_three_Homepage_title_two, 
    section_two_Homepage_Title, 
    section_two_Homepage_subtitle, 
    shark_image{
      ...asset->
    },
    title,
    urnicorn_image{
      ...asset->
    }  
}`;

export async function getStaticProps() {
    const homepageData = await client.fetch(homepageQuery);
    const siteHeaderData = await client.fetch(siteHeaderQuery);

    const data = { homepageData, siteHeaderData };
    console.log(data);
    return {
        props: {
            data,
        },
        revalidate: 1,
    };
}
