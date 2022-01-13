import React, { Suspense } from "react";
import NavbarComponent from "../Navbar/NavbarComponent";
const Hero = React.lazy(() => {
  return Promise.all([import("../Hero/Hero"), new Promise((resolve) => setTimeout(resolve, 1000))]).then(([moduleExports]) => moduleExports);
});
const Programming = React.lazy(() => import("../Programming/Programming"));
const Design = React.lazy(() => import("../Design/Design"));
const About = React.lazy(() => import("../About/About"));
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

      <About />

      <section id="contact">
        <Contact />
      </section>
    </Suspense>
  );
};

export default Main;
