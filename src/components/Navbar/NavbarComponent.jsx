import React from "react";
import logo from "../../assets/Logo.jpg";
import styles from "./Navbar.module.scss";
import * as Icon from "react-bootstrap-icons";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

const NavbarComponent = () => {
    return (
        <Navbar bg='light' expand={false}>
            <Container fluid>
                <Navbar.Brand href='#'>
                    <img src={logo} className={styles.logo} alt='logo' />
                </Navbar.Brand>
                <Nav className='d-none d-md-flex flex-row justify-content-end flex-grow-1 align-items-center'>
                    <a href='#work' className={styles.navLink}>
                        Work
                    </a>
                    <a href='#about' className={styles.navLink}>
                        About
                    </a>
                    <a href='#contact' className={styles.navLink}>
                        Contact
                    </a>
                    <a href='https://github.com/michaelhtran120' target='_blank' rel='noopener noreferrer' className={`${styles.navLinkIcon}`}>
                        <Icon.Github size={28} />
                    </a>
                    <a
                        href='https://www.linkedin.com/in/michaelhtran120/'
                        target='_blank'
                        rel='noopener noreferrer'
                        className={`${styles.navLinkIcon}`}
                    >
                        <Icon.Linkedin size={28} />
                    </a>
                </Nav>
                {/* Mobile Nav */}
                <Navbar.Toggle className='d-md-none' aria-controls='offcanvasNavbar' />
                <Navbar.Offcanvas id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel' placement='end'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id='offcanvasNavbarLabel'>
                            <img src={logo} className={styles.logo} alt='logo' />
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='d-flex flex-column justify-content-between'>
                        <Nav className='justify-content-end pe-3'>
                            <a href='#work' className={styles.navLink}>
                                Work
                            </a>
                            <a href='#about' className={styles.navLink}>
                                About
                            </a>
                            <a href='#contact' className={styles.navLink}>
                                Contact
                            </a>
                        </Nav>
                        <Nav className='flex-row justify-content-around'>
                            <a
                                href='https://github.com/michaelhtran120'
                                target='_blank'
                                rel='noopener noreferrer'
                                className={`${styles.navLinkIcon}`}
                            >
                                <Icon.Github size={28} />
                            </a>
                            <a
                                href='https://www.linkedin.com/in/michaelhtran120/'
                                target='_blank'
                                rel='noopener noreferrer'
                                className={`${styles.navLinkIcon}`}
                            >
                                <Icon.Linkedin size={28} />
                            </a>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
