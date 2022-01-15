import React, { useState } from "react";
import dData from "./data.js";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "./Design.module.scss";
const AbodeModal = React.lazy(() => import("./AbodeModal/AbodeModal"));

const Design = () => {
  //   const [isPibuOpen, setIsPibuOpen] = useState(false);
  const [isAbodeOpen, setIsAbodeOpen] = useState(false);

  const btnHandler = (project) => {
    if (project.title === "Abode") {
      return () => {
        setIsAbodeOpen(true);
      };
    }
    // else if (project.title === "Pibu") {
    //     return () => {
    //       setIsPibuOpen(true);
    //     };
    //   }
    // }
  };

  return (
    <section>
      <Container className="p-md-5 p-xs-0 pt-5 pb-5 bg-light" id="work" fluid>
        <h1 className={styles.designTitle}>Design Work</h1>
        <Container className="my-5">
          <Row className="justify-content-center gy-2">
            {dData.map((project, index) => {
              return (
                <Col key={index} xs={10} md={6} lg={4}>
                  <Card>
                    <LazyLoadImage src={project.image} alt={`${project.title} cover`} effect="blur" width="100%" />
                    <Card.Body>
                      <Card.Title>{project.title}</Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                      <Button variant="outline-primary" onClick={btnHandler(project)}>
                        Project Overview
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
        <AbodeModal showModal={isAbodeOpen} toggleModal={() => setIsAbodeOpen(false)} />
      </Container>
    </section>
  );
};

export default Design;
