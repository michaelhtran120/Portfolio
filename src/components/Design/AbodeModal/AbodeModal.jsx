import React from "react";
import abodeCover from "../../../assets/abodeCover.jpg";
import abodeSect1 from "../../../assets/AbodeSect1.jpg";
import abodeSect2 from "../../../assets/AbodeSect2.jpg";
import { Col, Container, Image, Modal, Row } from "react-bootstrap";

const AbodeModal = ({ showModal, toggleModal }) => {
    return (
        <Modal show={showModal} fullscreen={"lg-down"} size='lg' onHide={() => toggleModal()}>
            <Modal.Header closeButton>
                <Modal.Title>Abode - UX / UI Design</Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-0'>
                <Image src={abodeCover} style={{ width: "100%" }} fluid />
                <Image src={abodeSect1} style={{ width: "100%" }} fluid />
                <Image src={abodeSect2} style={{ width: "100%" }} fluid />
                <Container className='py-5 px-5'>
                    <Row className='justify-content-center'>
                        <Col>
                            <h1>Objective</h1>
                            <br />
                            <h3>Problem Statement</h3>
                            <p>
                                Getting started in the real estate market is difficult for new home buyers given the vast amount of options and
                                information there is to consider when making a purchase.
                            </p>
                            <h3 className='mt-5'>Possible Solution</h3>
                            <p>
                                Design a responsive web app that is intuitive an easy to use for first new buyers entering the real estate market.
                                Abode is designed in a way that provides the user to search for their exact needs, to bookmark properties of interest
                                and the ability to compare properties of interest to see which fits their needs better.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <h3>Research & Understanding The Data</h3>
                        <p>
                            Initial research was done on real estate market to have a better understanding of general parameters buyers and renters
                            look for. Through surveys and user interviews, I was able to infer the given motivations, goals and frustrations of
                            potential users. With this data on hand, the next step was to create personas that I could reference during the ideate and
                            iteration phase.
                        </p>
                        <Col md={6}>
                            <Image/>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
};

export default AbodeModal;
