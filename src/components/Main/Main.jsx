import React from "react";
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
            <Design/>
        </div>
    );
};

export default Main;
