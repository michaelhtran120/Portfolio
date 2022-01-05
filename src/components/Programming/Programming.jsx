import React from "react";
import styles from "./Programming.module.scss";
import marcipeSPA from "../../assets/marecipe-spa.png";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Programming = () => {
    return (
        <section>
            <Container className='p-5 bg-dark text-center' id='work' fluid>
                <h1 className='text-light'>Programming Experience</h1>
                <Container className='my-5'>
                    <Row>
                        <Col xs={12} sm={8} xl={4}>
                            <Card className={styles.card}>
                                <Card.Img variant='top' src={marcipeSPA} />
                                <Card.Body className={styles.cardBody}>
                                    <Card.Title className={styles.cardTitle}>MaRecipe SPA</Card.Title>
                                    <Card.Text>
                                        Macro Recipe single page application that allows users to granularly control their macro nutrients.
                                    </Card.Text>
                                    <Button
                                        href='https://github.com/michaelhtran120/MaRecipe-SPA'
                                        target='_blank'
                                        variant='outline-primary'
                                        className={styles.btnOutline}
                                    >
                                        Github Repository
                                    </Button>
                                </Card.Body>
                                <Card.Footer>Toolkit: React | TypeScript | Bootstrap | Sass | Jest</Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
};

export default Programming;
