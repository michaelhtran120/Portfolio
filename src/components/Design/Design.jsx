import React, { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import AbodeModal from "./AbodeModal/AbodeModal.jsx";
import dData from "./data.js";

const Design = () => {
//   const [isPibuOpen, setIsPibuOpen] = useState(false);
  const [isAbodeOpen, setIsAbodeOpen] = useState(false);

  const btnHandler = (project) => {
    if (project.title === "Abode") {
      return () => {
        setIsAbodeOpen(true);
      } 
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
        <h1 className="text-center">Design Experience</h1>
        <Container className="my-5">
          <Row className="justify-content-center gy-2">
            {dData.map((project) => {
              return (
                <Col xs={10} md={6} lg={4}>
                  <Card>
                    <Card.Img variant="top" src={project.image} />
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
