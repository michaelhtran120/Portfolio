import React, { Suspense } from "react";
import NavbarComponent from "../Navbar/NavbarComponent";
const Hero = React.lazy(() => import("../Hero/Hero"));
const Programming = React.lazy(() => import("../Programming/Programming"));
const Design = React.lazy(() => import("../Design/Design"));
const Contact = React.lazy(() => import("../Contact/Contact"));

const Main = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <NavbarComponent />
      <Hero />
      <section id="work">
        <Programming />
      </section>
      <Design />
      <section id="about">About Me</section>
      <section id="contact">
        <Contact />
      </section>
    </Suspense>
  );
};

export default Main;
