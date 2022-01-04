import React from "react";
import styles from "./Hero.module.scss";
import { Container } from "react-bootstrap";

const Hero = () => {
    return (
        <Container className={styles.hero} fluid>
            <h1 className='text-light'>Hello! I'm Michael Tran</h1>
            <h2 className='text-light'>Front End Web Developer Designer</h2>
        </Container>
    );
};

export default Hero;
