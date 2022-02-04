import React, { Suspense } from "react";
import Loading from "../Loading/Loading";
import NavbarComponent from "../Navbar/NavbarComponent";
const Hero = React.lazy(() => {
  return Promise.all([import("../Hero/Hero"), new Promise((resolve) => setTimeout(resolve, 2000))]).then(([moduleExports]) => moduleExports);
});
const Programming = React.lazy(() => import("../Programming/Programming"));
const Design = React.lazy(() => import("../Design/Design"));
const About = React.lazy(() => import("../About/About"));
const Contact = React.lazy(() => import("../Contact/Contact"));

const Main = () => {
  return (
    <Suspense fallback={<Loading />}>
      <NavbarComponent />
      <Hero />
      <section id="work">
        <Programming />
        <Design />
      </section>
      <section id="about">
        <About />
        <Contact />
      </section>
    </Suspense>
  );
};

export default Main;
