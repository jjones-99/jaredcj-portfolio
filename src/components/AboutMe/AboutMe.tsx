import React from "react";
import {
  AboutMeBody,
  AboutMeContainer,
  AboutMeHeader,
  AboutMeInfo,
  AboutMeList,
  AboutMeListItem,
  AboutMeMain,
  AboutMeSection,
  AboutMeTopic,
} from "./AboutMeStyles";

const AboutMe = () => {
  return (
    <AboutMeContainer>
      <AboutMeMain>
        <AboutMeBody>
          <p>I'm Jared!</p>
          <p>I'm passionate about tidy code and design. Things that are easy to maintain improve productivity and positivity.</p>
          <p>I'm always looking to learn more about what I don't know and improve upon what I do.</p>
        </AboutMeBody>
        <AboutMeSection>
          <AboutMeHeader>I do front-end development.</AboutMeHeader>
          <AboutMeTopic>Languages I speak</AboutMeTopic>
          <AboutMeInfo>HTML, CSS, SCSS, JavaScript, TypeScript</AboutMeInfo>
          <AboutMeTopic>Tools I know</AboutMeTopic>
          <AboutMeInfo>
            React, Angular, three.js, GSAP, Bootstrap, Tailwind, GitHub, SharePoint, WordPress
          </AboutMeInfo>
        </AboutMeSection>
        <AboutMeSection>
          <AboutMeHeader>I do back-end development.</AboutMeHeader>
          <AboutMeTopic>Languages I speak</AboutMeTopic>
          <AboutMeInfo>Java, JavaScript, C, C++, Python</AboutMeInfo>
          <AboutMeTopic>Tools I know</AboutMeTopic>
          <AboutMeInfo>Node.js, SQL, NoSQL, JPA, RESTful</AboutMeInfo>
        </AboutMeSection>
        <AboutMeSection>
          <AboutMeHeader>I want to learn about design.</AboutMeHeader>
          <AboutMeTopic>Tools I know</AboutMeTopic>
          <AboutMeInfo>Adobe XD, Figma</AboutMeInfo>
        </AboutMeSection>
      </AboutMeMain>
    </AboutMeContainer>
  );
};

export default AboutMe;
