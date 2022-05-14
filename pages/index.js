import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { ThemeProvider } from "styled-components";
import Meta from "../components/meta";
import NavigationBar from "../components/nav";
import { selectedTheme } from "../constants/utilities";
import Contact from "../sections/contact";
import Education from "../sections/education";
import Footer from "../sections/footer";
import MyHome from "../sections/home";
import Projects from "../sections/projects";
import Skills from "../sections/skills";
import { GlobalStyles } from "../theme/globalStyles";

export default function Home() {
  useEffect(() => {
    const WebFontLoader = require("webfontloader");
    WebFontLoader.load({
      google: {
        families: [selectedTheme.font],
      },
    });
  }, []);

  return (
    <div className="font">
      <ThemeProvider theme={selectedTheme}>
        <GlobalStyles />
        <Meta />
        <NavigationBar />
        <MyHome />
        <Container>
          <Projects />
          <Skills />
          <Education />
          <Contact />
          <Footer />
        </Container>
      </ThemeProvider>
    </div>
  );
}
