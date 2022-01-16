import React from 'react'

//Image imports
import PibuCover from '../../../assets/Pibu/LandingPage.jpg'
import ResearchGraph from '../../../assets/Pibu/ResearchGraph.jpg'
import Foreo from '../../../assets/Pibu/Foreo.jpg'
import PricingIcon from '../../../assets/Pibu/pricing-icon.svg'
import TrustIcon from '../../../assets/Pibu/trust-icon.svg'
import MarketingIcon from '../../../assets/Pibu/marketing-icon.svg'
import OptimizationIcon from '../../../assets/Pibu/optimization-icon.svg'
import AvatarOne from '../../../assets/Pibu/avatarone.svg'
import AvatarTwo from '../../../assets/Pibu/avatartwo.svg'
import AvatarThree from '../../../assets/Pibu/avatarthree.svg'
import AvatarFour from '../../../assets/Pibu/avatarfour.svg'

//Library Imports
import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Sass import
import styles from "./PibuModal.module.scss";

const PibuModal = ({ showModal, toggleModal }) => {
  return (
    <Modal show={showModal} fullscreen={'xl-down'} size={'xl'} onHide={() => toggleModal()}>
      <Modal.Header closeButton>
        <Modal.Title>Pibu - UX & Branding</Modal.Title>
      </Modal.Header>
      <Modal.Body className={`${styles.PibuModal} p-0`}>
        <LazyLoadImage src={PibuCover} alt='Pibu cover' width="100%" effect='blur' />
        <Container fluid>
          <h1 className='pt-5 ps-2 text-center'>Summary</h1>
          <Row className='pt-5 justify-content-around text-center'>
            <Col md={2}>
              <h3>Team</h3>
              <p>Three Designers</p>
            </Col>
            <hr className='d-md-none' />
            <Col md={3}>
              <h3>Responsibility</h3>
              <p> Research, Wireframing, Prototyping, User Testing, Copywriting, Information, Architecture</p>
            </Col>
            <hr className='d-md-none' />
            <Col md={2}>
              <h3>Timeframe</h3>
              <p>10 Weeks</p>
            </Col>
            <hr className='d-md-none' />
            <Col md={2}>
              <h3>Tools</h3>
              <p>Figma, Adobe Photoshop, Adobe Illustrator, Notion and Google Workspace</p>
            </Col>
          </Row>
          <hr />
          <Row className='p-2 p-md-5'>
            <Col md={3}>
              <h3>Task:</h3>
            </Col>
            <Col md={9}>
              <p className='lead'>Help a young company build their brand and website to compete in the skin care market.
              </p>
            </Col>
          </Row>
          <Row className='px-2 px-md-5 pb-5'>
            <Col md={3}>
              <h3>Approach:</h3>
            </Col>
            <Col md={9}>
              <p className='lead'>Examine skin care market to determine the desires and needs of our client’s user base. Utilize data to build a brand and design an aesthetically appealing E-commerce website that reflects the data observed.
              </p>
            </Col>
          </Row>
        </Container>
        <Container className='p-2 px-5' fluid>
          <hr />
          <h1 >Step 1: Research</h1>
          <Row className='py-4 align-items-center'>
            <Col md={7}>
              <h3>Understanding the Market</h3>
              <p>For those unfamiliar to the skincare industry, it is a multi-billion dollar multifaceted industry that promotes health and self-care. In order to begin assisting our client, we needed to deep dive into what made this industry into what it is today as well as potential future growth. </p>
              <p>
                Most projections saw the entire skincare market growing to about $180 billion by 2025. Although the skincare industry is in the billions, our focus was on the skincare device part of the industry, which only accounts for a small fraction of the entire market. The device market was valued at $9.1 billion in 2018 and projected for about $18 billion by 2024. This would account for about 10% of the total market. (This number includes devices ranging from personal use to clinical use)
              </p>
              <p>
                The goal of research here is so we could better aide our client in competing in the device market of this industry. Our first initial meeting with the client, we wanted to understand their interest in this market and why they decided to be players in this industry. With their goal in mind , we laid out plans to find out how the market is currently trending.
              </p>
            </Col>
            <Col>
              <LazyLoadImage src={ResearchGraph} effect='blur' alt="Skincare market graph" width="100%" />
            </Col>
          </Row>
          <Row className='py-4 align-items-center'>
            <Col>
              <h3>Asking Questions</h3>
              <p>
                We began with a general research of the skin care industry and its history to find out what questions were the best thing to ask potential customers in the market. We then created a survey to quickly gather quantitative data to see how people view the industry, their habits, needs and desires in relation to skin care. This survey provided insight to which demographic of the market that would be most responsive to Pibu's entrance to the market. We then reached out to several participants for a more in depth interview to get qualitative data for analysis.
              </p>
              <p>
                Clarisonic, a skincare device brand that had a 14% share of the device market, was determined a major competitor of our clients. Several of our interviewees noted their use of Clarisonic as part of the skincare regimen. During this time of our research, Clarisonic announced that they would be shutting down. This gave our client an opening to capture more of the market with a major competitor leaving.
              </p>
            </Col>
          </Row>
          <Row className='align-items-center'>
            <Col className='order-sm-1 order-md-0 pb-5' md={6}>
              <h3 className='pb-3'>Competitive Analysis</h3>
              <p>The final step of our initial research was focused on conducting a competitive analysis on companies our client considered direct competition. Per our client, they believe Foreo and Meejee as there two main competitors. The competitive analysis helped us see how we could potentially help our client be different and compete from both a business and user-centered design point of view.
              </p>
              <Button variant='outline-primary' href='https://www.figma.com/file/Q1n1ZQTPz1EwYEPVSfWmL9/Pibu-Competitive-Analysis?node-id=203%3A16' target='_blank' className={styles.outlineBtn}>Competitive Analysis</Button>
            </Col>
            <Col className='pb-5'>
              <LazyLoadImage src={Foreo} alt='Foreo web page screenshot' width='100%' effect='blur' />
            </Col>
          </Row>
          <Row className='py-3'>
            <h3>Mapping The Data</h3>
            <Col>
              <p>
                After gathering all the qualitative and quantitative data from the survey, interviews and competitive analysis, we proceeded to use the affinity diagram process to organize our findings. By grouping similar thoughts and feelings, we were able to extrapolate several key factors that we believe our client should target with their product.
              </p>
              <Button variant='outline-primary' href='https://www.figma.com/file/atohJ3HW5vJM5e5loP6UT3/Pibu-Affinity-Map?node-id=0%3A1' target='_blank' className={styles.outlineBtn}>Affinity Map</Button>
            </Col>
          </Row>
        </Container>
        <Container className='p-2 px-5' fluid>
          <hr />
          <h1 >Step 2: Understanding The Data & Brand Development</h1>
          <p>With the data organized and sorted, we were able to deduce common pain points, desires and triggers from all the participants involved in our research. This is how we began to define the scope with our client in regards to determining a solution to their problem.
          </p>
          <Row className='py-4 gy-4 align-items-start'>
            <Col md={6} lg={3} className={styles.painPointCol}>
              <LazyLoadImage src={PricingIcon} effect='blur' width='100px' alt='dollar sign icon' className='pb-2' />
              <h4 className='pb-4'>Pricing/Value</h4>
              <p>Pricing was often brought up as a barrier to adding new skin care products to user’s regimen. Often question if the value is worth the price.
              </p>
            </Col>
            <Col md={6} lg={3} className={styles.painPointCol}>
              <LazyLoadImage src={TrustIcon} effect='blur' width='100px' alt='dollar sign icon' className='pb-2' />
              <h4 className='pb-4'>Informative / Trust</h4>
              <p>Provide true and relative product information such as ingredients used. Focus on the copy development  to establish trust.

              </p>
            </Col>
            <Col md={6} lg={3} className={styles.painPointCol}>
              <LazyLoadImage src={MarketingIcon} effect='blur' width='100px' alt='dollar sign icon' className='pb-2' />
              <h4 className='pb-4'>Branding/Marketing</h4>
              <p>Simple branding and target marketing towards major concerns for user needs. Aim to address user skin care necessities.
              </p>
            </Col>
            <Col md={6} lg={3} className={styles.painPointCol}>
              <LazyLoadImage src={OptimizationIcon} effect='blur' width='100px' alt='dollar sign icon' className='pb-2' />
              <h4 className='pb-4'>Optimization</h4>
              <p>Reduce user friction via optimization of site usability. Use of established e-commerce practices and focus on information architecture.
              </p>
            </Col>
          </Row>
          <hr/>
          <Row className='py-4 gy-4 align-items-start'>
            <Col md={6} lg={3} className={styles.personaCol}>
              <LazyLoadImage src={AvatarOne} alt='Avatar of a girl' effect='blur' width='200px' className='pb-3' />
              <blockquote><i>“Price point; hesitant to invest because not sure if money will pay off ”</i> - K.L.
              </blockquote>
            </Col>
            <Col md={6} lg={3} className={styles.personaCol}>
              <LazyLoadImage src={AvatarTwo} alt='Avatar of a girl' effect='blur' width='200px' className='pb-3' />
              <blockquote><i>“If brand can hit word of mouth and have a purpose of making a person feel better - a sense of authenticity”</i> - J.G.
              </blockquote>
            </Col>
            <Col md={6} lg={3} className={styles.personaCol}>
              <LazyLoadImage src={AvatarThree} alt='Avatar of a girl' effect='blur' width='200px' className='pb-3' />
              <blockquote><i>“I actively searched out info on google and maybe look at Youtube videos and reviews. I don’t use Instagram, because I feel like a lot of stuff on there is fake and not informative."</i> - K.W.
              </blockquote>
            </Col>
            <Col md={6} lg={3} className={styles.personaCol}>
              <LazyLoadImage src={AvatarFour} alt='Avatar of a girl' effect='blur' width='200px' className='pb-3' />
              <blockquote><i>“Prefer the convenience, the ability to quickly find exactly what I want and the express checkout is a plus”</i> - A.H.
              </blockquote>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  )
}

export default PibuModal
