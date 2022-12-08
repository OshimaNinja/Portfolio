import React from "react";
import "./Footer.scss";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin.svg";
import { ReactComponent as Whatsapp } from "../../assets/whatsapp.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__icons">
        <div className="footer__icons-icon">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ninjaoshima"
          >
            <Github />
          </a>
        </div>
        <div className="footer__icons-icon">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/oshimaninja/"
          >
            <Linkedin />
          </a>
        </div>
        <div className="footer__icons-icon">
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:ninja.oshima@gmail.com"
          >
            <Whatsapp />
          </a>
        </div>
      </div>
      <div className="footer__text">
        &copy; 2022 - Oshima Shohei All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
