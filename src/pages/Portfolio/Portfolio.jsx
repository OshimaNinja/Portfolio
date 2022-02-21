import React from "react";
import "./Portfolio.scss";
import { ReactComponent as DottedBig } from "../../assets/dotted-big.svg";
import { ReactComponent as Line } from "../../assets/line.svg";
import { ReactComponent as External } from "../../assets/external.svg";
import Section from "../../components/Section/Section";
const Portfolio = () => {
  return (
    <>
      <div className="portfolio__background">
        <div className="portfolio__background-dottedbig portfolio__background-element dottedbig">
          <DottedBig />
        </div>
      </div>
      <div className="portfolio">
        <div className="portfolio__section">
          <Section text="Portfolio">Portfolio</Section>
        </div>
        <div className="portfolio__1">
          <div className="portfolio__left">
            <div className="portfolio-line">
              <Line />
            </div>
            <div className="heading-4 portfolio__heading-4 u-color-primary">
              <span>PROJECT</span>
            </div>
            <div className="heading-1 portfolio__heading-1">
              <span className="u-color-primary">Online</span> Meetups
            </div>
            <div className="paragraph portfolio__paragraph">
              <span className="u-color-primary-light">Online Meetups</span> is a
              Web Application that is a communication platform for organized
              communities. It brings the real time messaging capabilities of
              Slack together with the distributed video meeting capability of
              Zoom. It does for organized communities what Microsoft Teams does
              for organizations
            </div>
            <div className="portfolio__icons">
              <div className="portfolio__icons-icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://onlinemeetups.app"
                >
                  <External />
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio__right">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://arihant-jain-09.github.io/discord-clone/"
            >
              <img src="/onlinemeetups.png" alt="discord" />
            </a>
          </div>
        </div>
        <div className="portfolio__2">
          <div className="portfolio__2-right">
            <div className="portfolio-line">
              <Line />
            </div>
            <div className="heading-4 portfolio__heading-4 u-color-primary">
              <span>PROJECT</span>
            </div>
            <div className="heading-1 portfolio__heading-1">
              <span className="u-color-primary">Koyfin</span> WEB SITE{" "}
            </div>
            <div className="paragraph portfolio__paragraph">
              <span className="u-color-primary-light">The goal</span> was to
              create a platform for managing access for employees who are
              working in offices. Mobile phone, in this case, is becoming a pass
              card. Here I worked as a Full-Stack developer using MERN stack. We
              have complicated API, several servers written on Node.js/Express
              and React/Redux front-end part. I have worked here as a part of
              the development team, creating main dashboard and it's
              functionality.
            </div>
            <div className="portfolio__icons">
              <div className="portfolio__icons-icon">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://app.koyfin.com/"
                >
                  <External />
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio__2-left">
            <a
              target="_blank"
              rel="noreferrer"
              href="http://burgurly.azurewebsites.net/"
            >
              <img src="koyfin.png" alt="burgurly" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
