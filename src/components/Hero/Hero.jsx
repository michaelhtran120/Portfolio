// React imports & library imports
import React from "react";
import { Container } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";

// CSS import
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <Container className={styles.hero} fluid>
        <div className={styles["overlay"]} />
        <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight" duration={1.5} delay={500}>
          <h1 className="text-light">Hello! I'm Michael Hoan Tran</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" animateOut="fadeOutLeft" duration={1.5} delay={500} className="text-light">
          <h2>Full-Stack Developer | UX Designer</h2>
        </ScrollAnimation>
        <a href="#work" className="scrolldown">&#8671;</a>
      </Container>
    </>
  );
};

export default Hero;
