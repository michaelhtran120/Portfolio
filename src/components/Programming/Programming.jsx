// React & Library imports
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ScrollAnimation from "react-animate-on-scroll";

// Styles import
import styles from "./Programming.module.css";

// Data import
import pdata from "./data.js";

const Programming = () => {
  return (
    <Container className="p-md-5 p-0 pt-5 pb-5 bg-dark" id="work" fluid>
      <ScrollAnimation animateIn="fadeInDown" animateOut="fadeOutDown" duration={1.5}>
        <h1 className={styles.programmingTitle}>Programming Work</h1>
      </ScrollAnimation>
      <Row className="gx-2 gx-lg-3 gy-lg-4 gy-2 my-5 mx-3 justify-content-center justify-content-lg-start">
        {pdata.map((project) => {
          return (
            <Col key={project.id} xs={10} sm={6} lg={4}>
              <ScrollAnimation animateIn="fadeInUpBig" duration={1} delay={500}>
                <Card className={styles.card}>
                  <Card.Header className={styles.cardHeader}>
                    <LazyLoadImage className={styles.img} src={project.image} alt={`${project.title} screen shot`} effect="blur" />
                  </Card.Header>
                  <Card.Body className={styles.cardBody}>
                    <Card.Title className={styles.cardTitle}>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Button href={project.repoUrl} target="_blank" variant="outline-primary" className={styles.btnOutline}>
                      Github Repo
                    </Button>
                    {project.liveUrl ? (
                      <Button href={project.liveUrl} target="_blank" variant="outline-primary" className={`${styles.btnOutline} ms-2`}>
                        Live Demo
                      </Button>
                    ) : null}
                  </Card.Body>
                  <Card.Footer className={styles.cardFooter}>
                    {project.toolkit.map((tool, index) => {
                      if (project.toolkit.lastIndexOf(tool) === project.toolkit.length - 1) {
                        return <span key={index}> {tool}</span>;
                      } else {
                        return <span key={index}> {tool} -</span>;
                      }
                    })}
                  </Card.Footer>
                </Card>
              </ScrollAnimation>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Programming;
