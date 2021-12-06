
import client from "../../lib/sanity";
import { Navbar, Container, Nav,Button } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import styles from "../../styles/Home.module.css";


export default function Service({ data }) {
    const { siteHeaderData, homepageData } = data;

    // Check your browser console for output
    console.log({ siteHeaderData, homepageData });
    return (
        <React.Fragment>
            <div style={{ backgroundColor: homepageData.color }}>
                <Navbar style={{ backgroundColor: "transparent" }} variant="light">
                    <Container>
                        <Navbar.Brand href="#home">Logo</Navbar.Brand>
                        <Nav className="me-auto">
                            {siteHeaderData &&
                                siteHeaderData.length &&
                                siteHeaderData.map((nav) => {
                                    return (
                                        <Nav.Link className={styles.nav}>
                                            <Link href={`${nav.repoURL.current}`}>
                                                <a>{nav.title}</a>
                                            </Link>
                                        </Nav.Link>
                                    );
                                })}
                        </Nav>
                    </Container>
                </Navbar>
                <Container>
                    <main className={styles.main}>
                        <h1 className={styles.title}>{homepageData.title}</h1>
                        <br></br>
                        <h2 className={styles.title}>{homepageData.subtitle}</h2>
                        <br></br>
                        <img src={homepageData.imagesecond.url} style={{ objectFit: "contain",width:'122%'}} />
                        <Container>
                            <h5
                                className={styles.description}
                                style={{
                                    marginTop: "-25%",
                                    marginLeft: "10%",
                                    marginRight: "18%",
                                    position: "absolute",
                                    zIndex: 1,
                                }}>
                                {homepageData.textsecond}
                            </h5>
                        </Container>
                    </main>
                </Container>
            </div>

            {/* Second Background Color */}
            <div style={{ backgroundImage: `url(${homepageData.backgroundimagesecond.url})` }}>
                <img
                    src={homepageData.imagethird.url}
                    style={{
                        objectFit: "contain",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        width: "50%",
                        height: "50%",
                    }}
                />
                <Container>
                    <h1 className={styles.title} style={{ color: "white" }}>
                        {homepageData.titlefourth}
                    </h1>
                    <h5 className={styles.description} style={{ color: "white" }}>
                        {homepageData.subtitlefourth}
                    </h5>
                   
                     <Button variant="light" style={{
                        objectFit: "contain",
                        display: "block",
                        marginLeft: "auto",
                        marginRight: "auto",
                    }}><Link style={{color:'black',fontWeight:700}} href={homepageData.url}>Home</Link></Button>
                </Container>
            </div>
        </React.Fragment>
    );
    // rest of component
}

// Create a query called siteHeaderQuery
const siteHeaderQuery = `*\[_type == "siteheader"\] {
  title,
  repoURL {
    current
  }
}`;

// Create a query called serviceHeaderQuery
const serviceHeaderQuery = `*\[_type == "services"\][0] {
  backgroundimagesecond{ ...asset->}
  ,color
  ,imagesecond{
    ...asset->
  },imagethird{
    ...asset->
  },subtitle,subtitlefourth,textsecond,title,titlefourth,url
}`;

export async function getStaticProps() {
    const homepageData = await client.fetch(serviceHeaderQuery);
    const siteHeaderData = await client.fetch(siteHeaderQuery);

    const data = { homepageData, siteHeaderData };

    if(!data){
      return{
        notFound: true
      }
    }else{
      return {
        props: {
            data,
        },
        revalidate: 1,
    };
    }
  
}
