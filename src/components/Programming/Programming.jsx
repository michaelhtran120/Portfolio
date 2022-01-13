import React from "react";
import pdata from "./data.js";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "./Programming.module.scss";

const Programming = () => {
  return (
    <Container className="p-md-5 p-xs-0 pt-5 pb-5 bg-dark" id="work" fluid>
      <h1 className="text-light text-center">Programming Work</h1>
      <Container fluid className="my-5">
        <Row className="gx-2 gx-lg-3 gy-lg-4 gy-2 justify-content-center justify-content-lg-start">
          {pdata.map((project) => {
            return (
              <Col key={project.id} xs={10} sm={6} lg={4} xl={3}>
                <Card className={styles.card}>
                  <LazyLoadImage className={styles.img} src={project.image} alt={`${project.title} screen shot`} effect="blur" />
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
                  <Card.Footer>
                    {project.toolkit.map((tool, index) => {
                      if (project.toolkit.lastIndexOf(tool) === project.toolkit.length - 1) {
                        return <span key={index}> {tool}</span>;
                      } else {
                        return <span key={index}> {tool} -</span>;
                      }
                    })}
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
};

export default Programming;
