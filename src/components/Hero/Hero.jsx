import React from "react";
import { Container } from "react-bootstrap";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <Container className={styles.hero} fluid>
        <div className={styles["overlay"]}></div>
        <h1 className="text-light">Hello! I'm Michael Hoan Tran</h1>
        <h2 className="text-light">Front End Web Developer Designer</h2>
      </Container>
    </>
  );
};

export default Hero;
