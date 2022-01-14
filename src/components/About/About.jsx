import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ProfilePic from "../../assets/profile.JPEG";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section id="about" className="bg-dark text-light">
      <Container className="py-5">
        <Row className="align-items-center justify-content-center">
          <Col md={5}>
            <LazyLoadImage src={ProfilePic} alt="Michael Profile" effect="blur" width="100%" className={styles.profilePic} />
          </Col>
          <Col md={7} className="d-flex flex-column justify-content-center pt-5 pt-sm-0">
            <h1 className="text-center pt-5 pt-md-0 pb-5">Who am I?</h1>
            <p>
              A creative professional with a strong analytical prowess and problem-solving capacity is interested in growing his skills and knowledge
              through collaboration with both internal and external stakeholders to effectively plan, create, develop, and launch products.
            </p>
            <p>Currently enrolled in Nucamp full stack boot camp and working as a front end developer intern with Biscuits N Groovy.</p>
            <p>Some interests of mine is gaming, music, fitness and dance. Always open to learning and exploring new things!</p>
            <p>
              Visit my{" "}
              <a href="https://github.com/michaelhtran120" target="_blank" rel="noreferrer">
                Github
              </a>{" "}
              to see all my projects!
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
