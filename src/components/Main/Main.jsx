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
      <Programming />
      <Design />
      <Contact />
    </div>
  );
};

export default Main;
