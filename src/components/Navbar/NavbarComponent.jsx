import React from "react";
// import logo from "../../assets/Logo.jpg";
import logoMini from "../../assets/logo-mini.svg";
import * as Icon from "react-bootstrap-icons";
import { Container, Nav, Navbar } from "react-bootstrap";

// Styles import
import styles from "./Navbar.module.css";

const NavbarComponent = () => {
  return (
    <Navbar sticky="top" bg="light" expand="sm" className={styles["scroll-nav"]}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logoMini} className={styles.logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle className="d-md-none" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto align-items-center">
            <a href="#work" className={styles.navLink}>
              Work
            </a>
            <a href="#about" className={styles.navLink}>
              About
            </a>
          </Nav>

          <Nav className="ms-auto flex-row justify-content-center">
            <a href="https://github.com/michaelhtran120" target="_blank" rel="noopener noreferrer" className={`${styles.navLinkIcon}`}>
              <Icon.Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/michaelhtran120/" target="_blank" rel="noopener noreferrer" className={`${styles.navLinkIcon}`}>
              <Icon.Linkedin size={28} />
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
