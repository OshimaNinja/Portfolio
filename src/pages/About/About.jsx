import React from "react";
import Section from "../../components/Section/Section";
import "./About.scss";
import "../../styles/Elements/elements.scss";
import { ReactComponent as DottedBig } from "../../assets/dotted-big.svg";
import { ReactComponent as DottedSmall } from "../../assets/dotted-small.svg";
import { ReactComponent as Signature } from "../../assets/signature.svg";
import { ReactComponent as Line } from "../../assets/line.svg";
import Button from "../../components/Button/Button";
const About = () => {
  return (
    <>
      <div className="about__background">
        <div className="about__background-dottedbig about__background-element dottedbig">
          <DottedBig />
        </div>
        <div className="about__background-dottedsmall about__background-element dottedsmall">
          <DottedSmall />
        </div>
      </div>
      <div className="about">
        <div className="about__section">
          <Section text="About">About Me</Section>
        </div>
        <div className="about__left">
          <img src="./ab.webp" alt="About" />
        </div>
        <div className="about__right">
          <div className="about-line">
            <Line />
          </div>
          <div className="heading-4 about__heading-4 u-color-primary">
            <span>LET ME INTRODUCE MYSELF</span>
          </div>
          <div className="about__paragraph paragraph--big">
            I'm a{" "}
            <span className="u-color-primary-light">
              Senior Full-stack developer
            </span>{" "}
            and Web development was my hobby since a teenage. At now my hobby becomes
            a job that gives me the freedom and the right to manage my work time and
            place myself. I always try to achieve maximum results because the
            satisfaction of the clients is my top priority. I am truly believing that your task
            will be done honestly, high quality and on time.
          </div>
          <div className="about__signature">
            <Signature />
          </div>
          <div className="about__button">
            <Button type="primary">Hire Me</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
