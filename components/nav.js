import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../public/images/logo.png";
import Image from "next/image";
import Social from "../components/social";
import Scrollspy from "react-scrollspy";

function NavigationBar() {
  return (
    <Scrollspy
      className="m-0 p-0"
      items={["projects", "skills", "education", "contact"]}
      currentClassName="current-menu"
    >
      <Navbar
        collapseOnSelect
        expand="md"
        fixed="top"
        style={{ backgroundColor: "#143e49" }}
      >
        <Container>
          <Navbar.Brand href="#">
            <span className="logo-container">
              <Image src={logo} width={30} height={30} alt="Logo" />
              <span className="title-text-color ms-1">Arabin</span>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle
            className="toggler"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#projects">
                <span className="nav-text">Projects</span>
              </Nav.Link>
              <Nav.Link href="#skills">
                <span className="nav-text">Skills</span>
              </Nav.Link>
              <Nav.Link href="#education">
                <span className="nav-text">Education</span>
              </Nav.Link>
              <Nav.Link href="#contact">
                <span className="nav-text">Contact</span>
              </Nav.Link>
            </Nav>
            <Social />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Scrollspy>
  );
}

export default NavigationBar;
