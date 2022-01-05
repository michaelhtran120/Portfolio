import React from "react";
import styles from "./Programming.module.scss";
import  pdata  from "./data.js";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Programming = () => {
    return (
        <section>
            <Container className='p-5 bg-dark' id='work' fluid>
                <h1 className='text-light text-center'>Programming Experience</h1>
                <Container className='my-5'>
                    <Row>
                        {pdata.map((project) => {
                            return (
                                <Col xs={12} sm={8} xl={4}>
                                    <Card className={styles.card}>
                                        <Card.Img className={styles.img}variant='top' src={project.image} />
                                        <Card.Body className={styles.cardBody}>
                                            <Card.Title className={styles.cardTitle}>{project.title}</Card.Title>
                                            <Card.Text>{project.description}</Card.Text>
                                            <Button href={project.repoUrl} target='_blank' variant='outline-primary' className={styles.btnOutline}>
                                                Github Repo
                                            </Button>
                                            {project.liveUrl ? (
                                                <Button
                                                    href={project.liveUrl}
                                                    target='_blank'
                                                    variant='outline-primary'
                                                    className={`${styles.btnOutline} ms-2`}
                                                >
                                                    Live Demo
                                                </Button>
                                            ) : null}
                                        </Card.Body>
                                        <Card.Footer>
                                            <p>Toolkit</p>
                                            {project.toolkit.map((tool) => {
                                                if (project.toolkit.lastIndexOf(tool) === project.toolkit.length - 1) {
                                                    return <span> {tool}</span>;
                                                } else {
                                                    return <span> {tool} -</span>;
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
        </section>
    );
};

export default Programming;
