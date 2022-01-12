import React from "react";
import Contact from "../Contact/Contact";
import Design from "../Design/Design";
import Hero from "../Hero/Hero";
import NavbarComponent from "../Navbar/NavbarComponent";
import Programming from "../Programming/Programming";

const Main = () => {
  return (
    <div>
      <NavbarComponent />
      <Hero />
      <section id="work">
        <Programming />
      </section>
      <Design />
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Main;
