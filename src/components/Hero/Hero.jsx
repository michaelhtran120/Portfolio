import React from "react";
import { Container } from "react-bootstrap";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <>
      <Container className={styles.hero} fluid>
        <h1 className="text-light">Hello! I'm Michael Tran</h1>
        <h2 className="text-light">Front End Web Developer Designer</h2>
      </Container>
    </>
  );
};

export default Hero;
