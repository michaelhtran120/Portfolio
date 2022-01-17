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
import PersonaOne from '../../../assets/Pibu/PersonaOne.jpg'
import PersonaTwo from '../../../assets/Pibu/PersonaTwo.jpg'
import PersonaOneJ from '../../../assets/Pibu/PersonaOneJourney.jpg'
import PersonaTwoJ from '../../../assets/Pibu/PersonaTwoJourney.jpg'
import Userflow from '../../../assets/Pibu/Userflow.jpg'
import LowFidelityMap from '../../../assets/Pibu/LowFidelityMap.jpg'
import MidFidelityWireframes from '../../../assets/Pibu/MidFidelityWireframes.jpg'

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

        {/* Step 1 - Research */}
        <Container className='p-2 px-5' fluid>
          <hr />
          <h1 >Step 1: Research</h1>
          <Row className='py-4 align-items-center'>
            <Col md={7}>
              <h3>Understanding the Market</h3>
              <p className='lh-lg'>
                For those unfamiliar to the skincare industry, it is a multi-billion dollar multifaceted industry that promotes health and self-care. In order to begin assisting our client, we needed to deep dive into what made this industry into what it is today as well as potential future growth.
              </p>
              <p className='lh-lg'>
                Most projections saw the entire skincare market growing to about $180 billion by 2025. Although the skincare industry is in the billions, our focus was on the skincare device part of the industry, which only accounts for a small fraction of the entire market. The device market was valued at $9.1 billion in 2018 and projected for about $18 billion by 2024. This would account for about 10% of the total market. (This number includes devices ranging from personal use to clinical use)
              </p>
              <p className='lh-lg'>
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
              <p className='lh-lg'>
                We began with a general research of the skin care industry and its history to find out what questions were the best thing to ask potential customers in the market. We then created a survey to quickly gather quantitative data to see how people view the industry, their habits, needs and desires in relation to skin care. This survey provided insight to which demographic of the market that would be most responsive to Pibu's entrance to the market. We then reached out to several participants for a more in depth interview to get qualitative data for analysis.
              </p>
              <p className='lh-lg'>
                Clarisonic, a skincare device brand that had a 14% share of the device market, was determined a major competitor of our clients. Several of our interviewees noted their use of Clarisonic as part of the skincare regimen. During this time of our research, Clarisonic announced that they would be shutting down. This gave our client an opening to capture more of the market with a major competitor leaving.
              </p>
            </Col>
          </Row>
          <Row className='align-items-center'>
            <Col className='order-sm-1 order-md-0 pb-5' md={6}>
              <h3 className='pb-3'>Competitive Analysis</h3>
              <p className='lh-lg'>
                The final step of our initial research was focused on conducting a competitive analysis on companies our client considered direct competition. Per our client, they believe Foreo and Meejee as there two main competitors. The competitive analysis helped us see how we could potentially help our client be different and compete from both a business and user-centered design point of view.
              </p>
              <Button variant='outline-primary' size='lg' href='https://www.figma.com/file/Q1n1ZQTPz1EwYEPVSfWmL9/Pibu-Competitive-Analysis?node-id=203%3A16' target='_blank' className={styles.outlineBtn}>Competitive Analysis</Button>
            </Col>
            <Col className='pb-5'>
              <LazyLoadImage src={Foreo} alt='Foreo web page screenshot' width='100%' effect='blur' />
            </Col>
          </Row>
          <Row className='py-3'>
            <h3>Mapping The Data</h3>
            <Col>
              <p className='lh-lg'>
                After gathering all the qualitative and quantitative data from the survey, interviews and competitive analysis, we proceeded to use the affinity diagram process to organize our findings. By grouping similar thoughts and feelings, we were able to extrapolate several key factors that we believe our client should target with their product.
              </p>
              <Button variant='outline-primary' size='lg' href='https://www.figma.com/file/atohJ3HW5vJM5e5loP6UT3/Pibu-Affinity-Map?node-id=0%3A1' target='_blank' className={styles.outlineBtn}>Affinity Map</Button>
            </Col>
          </Row>
        </Container>

        {/* Section 2 - Understanding Data and Brand Dev */}
        <Container className='p-2 px-5' fluid>
          <hr />
          <h1 >Step 2: Understanding The Data & Brand Development</h1>
          <p className='lh-lg'>
            With the data organized and sorted, we were able to deduce common pain points, desires and triggers from all the participants involved in our research. This is how we began to define the scope with our client in regards to determining a solution to their problem.
          </p>
          <Row className='py-4 gy-4 align-items-start'>
            <Col md={6} lg={3} className={styles.painPointCol}>
              <LazyLoadImage src={PricingIcon} effect='blur' width='100px' alt='dollar sign icon' className='pb-2' />
              <h4 className='pb-4'>Pricing/Value</h4>
              <p className='lh-lg'>
                Pricing was often brought up as a barrier to adding new skin care products to user’s regimen. Often question if the value is worth the price.
              </p>
            </Col>
            <Col md={6} lg={3} className={styles.painPointCol}>
              <LazyLoadImage src={TrustIcon} effect='blur' width='100px' alt='dollar sign icon' className='pb-2' />
              <h4 className='pb-4'>Informative / Trust</h4>
              <p className='lh-lg'>
                Provide true and relative product information such as ingredients used. Focus on the copy development  to establish trust.
              </p>
            </Col>
            <Col md={6} lg={3} className={styles.painPointCol}>
              <LazyLoadImage src={MarketingIcon} effect='blur' width='100px' alt='dollar sign icon' className='pb-2' />
              <h4 className='pb-4'>Branding/Marketing</h4>
              <p className='lh-lg'>
                Simple branding and target marketing towards major concerns for user needs. Aim to address user skin care necessities.
              </p>
            </Col>
            <Col md={6} lg={3} className={styles.painPointCol}>
              <LazyLoadImage src={OptimizationIcon} effect='blur' width='100px' alt='dollar sign icon' className='pb-2' />
              <h4 className='pb-4'>Optimization</h4>
              <p className='lh-lg'>Reduce user friction via optimization of site usability. Use of established e-commerce practices and focus on information architecture.
              </p>
            </Col>
          </Row>
          <hr />
          <Row className='py-4 gy-4'>
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
          <hr />
          <h3>Narrowing The Scope</h3>
          <br />
          <h5 className={styles.boldText}>The Problem:</h5>
          <p className='lh-lg'>How do we establish brand trustworthiness, reputability, and convey the product’s value through Pibu's website content and design?
          </p>
          <br />
          <h5 className={styles.boldText}>Possible Solutions:</h5>
          <p className='lh-lg'>We can bring forth value and trust to potential customers through user centered design, a positive experience through branding and reducing usability friction.</p>
          <hr />
          <Row className='py-3'>
            <Col>
              <h3 className='pb-3'>Brand Development</h3>
              <p className='lh-lg'>The client requested that our team help them with their brand development. We worked with our client to develop several mood board options and from there we were able to narrow down to a few color palettes, imagery selections and illustrations to determine the direction of their branding that would address the problem established above.  This help set the foundation of how we would design the UI elements of their website and how we would develop copy to match the brand tone.</p>
              <Button variant='outline-primary' size='lg' href='https://www.figma.com/file/PzClFyddeYeK3IP1azQpML/Mood-Board?node-id=17%3A2' target='_blank' className={styles.outlineBtn}>Mood Board</Button>
            </Col>
          </Row>
          <Row className='py-4'>
            <h3>Personas | Journey | Maps | Flow</h3>
            <p className='lh-lg'>Two personas were created based on our findings that would give us a basis for who we are designing for and help explain to our client who the target audience their branding should be focused on. We included a journey map with our personas to better help our client understand potential users in their target market. By building this narrative, it provided a better basis to design from while reminding our client of the direction that we were heading. If changes were to be made, we can always reference back to this narrative to make sure we were still align with addressing their customer base. A preliminary user flow was created to give a idea of the layout and navigation.
            </p>
            <LazyLoadImage src={PersonaOne} effect='blur' width='100%' alt='Persona One - The Casual, Derek Cin' />
            <LazyLoadImage src={PersonaOneJ} effect='blur' width='100%' alt='Persona one journey map' />
            <LazyLoadImage src={PersonaTwo} effect='blur' width='100%' alt='Persona Two - The Research, Casey Gilbert' />
            <LazyLoadImage src={PersonaTwoJ} effect='blur' width='100%' alt='Persona two journey map' />
            <LazyLoadImage src={Userflow} effect='blur' width='100%' alt='User flow map' />
          </Row>
        </Container>

        {/* Section 3 - Ideate/Test */}
        <Container className='p-5'>
          <hr />
          <h1 >Step 3: Iterations And Testing</h1>
          <Row className='py-5'>
            <Col>
              <h3 className='pb-3'>Ideating</h3>
              <p className='lh-lg'>
                Beginning with hand drawn low-fidelity wireframes, we quickly iterated on the various mobile screens. Between the three of us, we had envision various possibilities in how we would design the information architecture for our client's website. With the Pibu's brand in mind, we decided to take inspiration from similar brands and see how we could take elements and adapt it to Pibu's website design.
              </p>
              <p className='lh-lg'>
                Once our team had a set of wireframes we felt confident in sharing with our client, we ran a quick round of user testing with a few participants to see if general functionality such as navigation or the location of certain UI elements were intuitive. This initial testing feedback influenced what changes or details were needed for our mid-fidelity wireframes as it help identify what users expect in regards to location of UI elements and general usability.
              </p>
              <LazyLoadImage src={LowFidelityMap} effect='blur' alt='Low Fidelity wireframe mapping' width='100%' />
              <LazyLoadImage src={MidFidelityWireframes} effect='blur' alt='Mid Fidelity Wireframe examples' width='100%' />
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className='pb-3'>Testing</h3>
              <p className='lh-lg'>
                In tandem with my team iterating on wireframe designs, the client was also working out the details of the information, photos and illustrations they wanted to display. The client had envision how they wanted to organize their home page based on their preference while our team was using the data we collected to organize information in a more comprehensive way per the information the client provided. In order to make progress in the design that would satisfy the client, we ran an A/B test of an iteration with our client's suggestions and an iteration with what we saw would best deliver their content.
              </p>
              <Button variant='outline-primary' size='lg' href='https://www.figma.com/file/Vdb0C4PvZy3VuxtUybupa7/Pibu-A-B-Test' target="_blank" className={styles.outlineBtn}>A/B Test</Button>
              <p className='pt-3 lh-lg'>
                Participants response showed that neither design was preferred over the other, but the responses explained how different aspects of each design were preferred. Some responses were helpful in giving us a direction for the design. With this feedback, we were able to begin discussing on the hi-fidelity designs with our client. This is when the client began to provide final product shots, illustrations and content that we could utilize in the design to really show exactly how the final design will look appear.
              </p>
            </Col>
          </Row>
        </Container>

        {/* Section 4 - Final Design*/}
        <Container className='p-5'>
          <hr />
          <h1 className='py-5'>Step 4: Final Design, Responsive Web & Support</h1>
          <Row className='py-3'>
            <Col lg={6}>
              <h3>Final Iteration</h3>
              <p className='lh-lg'>
                During our final stretch of iterations, we began to collaborate more with the client to get their feedback. Implementation of the final photos and illustrations began to show what the final design would look like for our client, which helped them in providing more succinct feedback in regards the design elements. We wanted to make sure we can include as much of the details the client preferred, but without sacrificing usability.
              </p>
              <p className='lh-lg'>
                A final usability test of the final prototype was conducted with a few previous test participants and new participants in order to iron out any additional usability issues that may have been missed earlier in the design process or any changes made by our client during the final stretch.
              </p>
              <p className='lh-lg'>
                Our team would revisit the focus of our design to address the problem originally stated. With emphasis on copy and information architecture, our team was able to bring forth the value of Pibu to potential customers, provide informative product details to help build trust into Pibu's brand and reduce usability friction through iterative design.
              </p>
            </Col>
            <Col lg={6}>
              <iframe className={styles.mobilePrototype} title='mobile prototype' src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FOBkk6p9ihILZU03YB6oOzn%2FPibu-Mobile-Prototype%3Fnode-id%3D1481%253A3150%26scaling%3Dscale-down%26page-id%3D543%253A510%26starting-point-node-id%3D1481%253A3150" allowfullscreen></iframe></Col>
          </Row>
          <hr />
          <Row className='py-3'>
            <Col>
              <h3>Responsive Web / Desktop Wireframes</h3>
              <p className='lh-lg'>
                Our team also created high fidelity desktop wireframes to accompany the mobile wireframes. This was to show our client and the developer the client would hire how the design layout would adjust accordingly from mobile to desktop or when a browser would be resized.
              </p>
              <Button variant='outline-primary' size='lg' href='https://www.figma.com/proto/bDmtioB0mv8MXEhV4HjlKc/Pibu-Desktop-Proto?kind=&node-id=1441%3A3130&scaling=scale-down' target='_blank' className={styles.outlineBtn}>Desktop Prototype</Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Post Deliverable Support</h3>
              <p className='lh-lg'>
                After our team compiled the final deliverables (developer handoff) to our client, we remain vigilant in supporting our client with any design needs. We continued to provide any small design changes requested per the client’s request until they completed their launch of their website
              </p>
              <Button variant='outline-primary' size='lg' href='www.officialpibu.com' className={styles.outlineBtn}>Link To Live Site</Button>
              <p className='lh-lg pt-3'>
                After official publication, our team did a top down analysis of the website. Our team noted any usability issues we encountered and compiled a power point for our client suggesting updates and/or changes to further optimize their site.
              </p>
            </Col>
          </Row>
        </Container>

        {/* section 5 - retrospect */}
        <Container className='p-5'>
          <hr />
          <h1>Retrospective</h1>
          <h3>What Went Well</h3>
          <ul className={styles.retroList}>
            <li>
              Diverse group of survey and interview participants (ethnicity, location, gender etc), which gave us variety of responses and help reduce bias.
            </li>
            <li>
              We were able to help the client develop their branding and provided consultation in regards to their business endeavors throughout the project.
            </li>
            <li>
              Identifying each designers strength and letting each take lead in respective sections of the project allowed us to provide final deliverables on time.
            </li>
          </ul>
          <h3>What Didn't Go Well</h3>
          <ul className={styles.retroList}>
            <li>
              Client was on a strict and short timeline and we were unable to do extensive testing of interactive prototypes and other testing of the design.
            </li>
            <li>
              Client was unclear of their exact design needs and required more assistance than what was initially stated.
            </li>
            <li>
              Inability to work with developer directly and had to communicate through our client to explain certain design.
            </li>
          </ul>
          <h3>What Can Be Improved</h3>
          <ul className={styles.retroList}>
            <li>
              Better establishment of project parameters in the early stages could have improved our timeline in regards to design and testing.
            </li>
            <li>
              Work with client on finding a developer that would best fit their needs and can help reduce communication friction.
            </li>
            <li>
              Setting collaboration time with the entire team (creative time). This is to separate business time from design time.
            </li>
          </ul>

        </Container>
      </Modal.Body>
    </Modal>
  )
}

export default PibuModal
