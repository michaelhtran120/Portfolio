import React from "react";
import styles from "./Footer.module.css";
import { Nav } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer class={styles["footer"]}>
      <div className="p-5 pb-2">
        <span>&#169; {date} - Michael Hoan Tran</span>
      </div>
      <Nav className="ms-auto p-1 pb-3 flex-row justify-content-center">
        <a href="https://github.com/michaelhtran120" target="_blank" rel="noopener noreferrer" className={`${styles.navLinkIcon}`}>
          <Icon.Github size={28} />
        </a>
        <a href="https://www.linkedin.com/in/michaelhtran120/" target="_blank" rel="noopener noreferrer" className={`${styles.navLinkIcon}`}>
          <Icon.Linkedin size={28} />
        </a>
      </Nav>
    </footer>
  );
};

export default Footer;
