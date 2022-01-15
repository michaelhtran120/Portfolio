import React from "react";
import abodeCover from "../../../assets/Abode/abodeCover.jpg";
import abodeSect1 from "../../../assets/Abode/AbodeSect1.jpg";
import abodeSect2 from "../../../assets/Abode/AbodeSect2.jpg";
import abodePersonaOne from "../../../assets/Abode/AbodePersonaOne.jpg";
import abodePersonaTwo from "../../../assets/Abode/AbodePersonaTwo.jpg";
import abodeUserflowOne from "../../../assets/Abode/AbodeUserflowOne.jpg";
import abodeUserflowTwo from "../../../assets/Abode/AbodeUserflowTwo.jpg";
import abodeUserflowThree from "../../../assets/Abode/AbodeUserflowThree.jpg";
import LowToHighOne from "../../../assets/Abode/LowToHighOne.jpg";
import LowToHighTwo from "../../../assets/Abode/LowToHighTwo.jpg";
import MockUp from "../../../assets/Abode/MockUp.jpg";
import BreakPointLowFidelity from "../../../assets/Abode/BreakPointLowFidelity.jpg";
import TestRefineModal from "../../../assets/Abode/TestRefineModal.jpg";
import TestRefineHome from "../../../assets/Abode/TestRefineHome.jpg";
import AnimationOne from "../../../assets/Abode/AnimationOne.gif";
import AnimationTwo from "../../../assets/Abode/AnimationTwo.gif";

import styles from "./AbodeModal.module.scss";
import { Col, Container, Image, Modal, Row } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const AbodeModal = ({ showModal, toggleModal }) => {
  return (
    <Modal show={showModal} fullscreen={"xl-down"} size="xl" onHide={() => toggleModal()}>
      <Modal.Header closeButton>
        <Modal.Title>Abode - UX / UI Design</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <LazyLoadImage src={abodeCover} alt='cover' effect="blur" width="100%" />
        <LazyLoadImage src={abodeSect1} alt='coverTwo' effect="blur" width="100%" />
        <LazyLoadImage src={abodeSect2} alt='summary' effect="blur" width="100%" />
        <Container className="py-5 px-5">
          <Row className="justify-content-center">
            <Col>
              <h1>Objective</h1>
              <br />
              <h3>Problem Statement</h3>
              <p>
                Getting started in the real estate market is difficult for new home buyers given the vast amount of options and information there is
                to consider when making a purchase.
              </p>
              <h3 className="mt-5">Possible Solution</h3>
              <p>
                Design a responsive web app that is intuitive an easy to use for first new buyers entering the real estate market. Abode is designed
                in a way that provides the user to search for their exact needs, to bookmark properties of interest and the ability to compare
                properties of interest to see which fits their needs better.
              </p>
            </Col>
          </Row>
          <hr />
          <Row className="mt-5">
            <h1>Research & Understanding The Data</h1>
            <p>
              Initial research was done on real estate market to have a better understanding of general parameters buyers and renters look for.
              Through surveys and user interviews, I was able to infer the given motivations, goals and frustrations of potential users. With this
              data on hand, the next step was to create personas that I could reference during the ideate and iteration phase.
            </p>
            <Col md={6}></Col>
          </Row>
        </Container>
        <LazyLoadImage src={abodePersonaOne} alt='Persona One Details' effect="blur" width="100%" />
        <LazyLoadImage src={abodePersonaTwo} alt='Persona Two Details' effect="blur" width="100%" />
        <Container className='px-5'>
          <Row className="mt-5">
            <h1>Ideate & Iterate</h1>
            <p className="py-3">
              By understanding the users motivations, goals and frustrations, I can begin to envision the structure of Abode. With the provided user
              stories, I began to map out user flows and rapid prototype wireframes of the core features. This includes designing different
              breakpoints for tablet and desktop.
            </p>
          </Row>
          <LazyLoadImage src={abodeUserflowOne} alt='Userflow One' effect="blur" width="100%" />
          <LazyLoadImage src={abodeUserflowTwo} alt='Userflow Two' effect="blur" width="100%" />
          <LazyLoadImage src={abodeUserflowThree} alt='Userflow Three' effect="blur" width="100%" />
          <hr />
          <Row className="mt-5">
            <h1 className="py-3">Rapid Prototyping - Wireframes</h1>
            <Col lg={6}>
              <LazyLoadImage src={LowToHighOne} alt='Low to high fidelity drawings of search results feature' effect="blur" width="100%" />
            </Col>
            <Col lg={6}>
              <LazyLoadImage src={LowToHighTwo} alt='Low to high fidelity drawings of property listing feature' effect="blur" width="100%" />
            </Col>
          </Row>
          <hr />
          <Row className="mt-5 mb-3 justify-content-center">
            <h1>Breakpoints Examples</h1>
            <p className="py-2">
              Low fidelity drawings of break point designs. Top left sketch is a tablet break point and top right is a desktop breakpoint. Both break
              points will utilize a modal window to display property details when a user clicks on a property.
            </p>
            <Col xs={12} xl={12}>
              <LazyLoadImage src={BreakPointLowFidelity} alt='low fidelity drawings for tablet and desktop break points' effect="blur" width="100%" />
            </Col>
          </Row>
        </Container>
        <LazyLoadImage src={MockUp} alt='high fidelity mock ups' effect="blur" width="100%" />
        <Container>
          <Row className="px-5 mt-5">
            <h1>Refining The Design</h1>
            <p className="py-3">
              Through user testing, peer review and mentor guidance, I utilize the feedback to further refine my design into a final prototype. Below
              you will find two examples of some of the design changes implemented and the reasoning behind the changes.
            </p>
            <Col>
              <Row>
                <Col lg={6}>
                  <p className="text-center lead">Home Screen</p>
                  <LazyLoadImage src={TestRefineHome} alt='Comparing home page wireframes after user testing' effect="blur" width="100%" />
                  <p className="p-3">
                    The home screen design changes shifts the user’s attention towards the search function and the recommended property listings. By
                    having a minimal design, the user’s focus gravitates to the sections that contrast from the background.
                  </p>
                </Col>
                <Col lg={6}>
                  <p className="text-center lead">Modal</p>
                  <LazyLoadImage src={TestRefineModal} alt='Comparing modal page wireframes after user testing' effect="blur" width="100%" />
                  <p className="p-3">
                    The design changes on the above screens shifted towards design trends of having a full modal window rather than an overlay and
                    having a full width button at the bottom. Another optimization was changing the opacity of the the selected section. This created
                    a better contrast for text legibility.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />
          <Row className="my-3 px-5 justify-content-around">
            <h1 className="py-5">Animations & Final Prototype</h1>
            <Col xs={8} md={4} className="py-xs-3 py-sm-0">
              <LazyLoadImage src={AnimationOne} alt='animation GIF showing user sign up flow' effect="blur" width="100%" />
            </Col>
            <Col xs={8} md={4}>
              <LazyLoadImage src={AnimationTwo} alt='Animation GIF showing map feature and property profile flow' effect="blur" width="100%" />
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center ">
            <Col xs={12} md={6}>
              <h3 className="py-5 p-lg-5 text-center">
                <a href="https://projects.invisionapp.com/share/5NW9UDRJ3QP#/screens">Link To Interactive Prototype</a>
              </h3>
            </Col>
          </Row>
          <hr />
          <Row className={`${styles.retrospective} p-5`}>
            <h1 className="py-3">Retrospective</h1>
            <h3>What Went Well</h3>
            <ul>
              <li>
                Interviews and testing with users currently in search of a new home for purchase or for rent helped steer my design choices better
                than those who were not actively searching.
              </li>
              <li>
                By reviewing competitive responsive web applications prior to rapid prototyping, this allowed me to take different elements that were
                appealing and combining them into a new and different layouts.
              </li>
              <li>Going through multiple testing sessions and getting feedback from other designers helped me refine the design.</li>
            </ul>
            <h3>What Didn't Go Well</h3>
            <ul>
              <li>Very narrow sample size for user testing and user interviews, which provided a skewed perception of the housing market.</li>
              <li>Initial design was much more complicated with too many elements fighting for attention.</li>
              <li>Doubts in design choices such as color palette and UI elements led to late changes across the entire design.</li>
            </ul>
            <h3>What Can Be Improved</h3>
            <ul>
              <li>
                Finding a wider range of participants for user interviews and testing or utilizing surveys more in order to get a better sample size
                of different users. (The users I worked with were all based in California, which is a skewed market compared to many other states.
              </li>
              <li>Testing earlier in the design process in order to identify problems and frustrations quicker.</li>
              <li>
                Refine the style guide elements such as color palette and UI elements prior to high-fidelity wireframing to avoid design overhaul.
              </li>
            </ul>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default AbodeModal;
