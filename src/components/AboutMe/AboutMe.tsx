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
  AboutMeSections,
  AboutMeTopic,
} from "./AboutMeStyles";

const AboutMe = () => {
  return (
    <AboutMeContainer id="aboutme">
      <AboutMeMain>
        <AboutMeBody>
          <p>
            I'm passionate about tidy code and design. Maintainable work improves productivity and
            positivity.
          </p>
          <p>
            I'm always looking to learn more about what I don't know and improve upon what I do.
          </p>
        </AboutMeBody>
        <AboutMeSections>
          <AboutMeSection>
            <AboutMeHeader>Front-end developer</AboutMeHeader>
            <AboutMeTopic>Languages I speak</AboutMeTopic>
            <AboutMeInfo>HTML, CSS, SCSS, JavaScript, TypeScript</AboutMeInfo>
            <AboutMeTopic>Tools I know</AboutMeTopic>
            <AboutMeInfo>
              React, Angular, three.js, GSAP, Bootstrap, Tailwind, GitHub, SharePoint, WordPress
            </AboutMeInfo>
          </AboutMeSection>
          <AboutMeSection>
            <AboutMeHeader>Back-end developer</AboutMeHeader>
            <AboutMeTopic>Languages I speak</AboutMeTopic>
            <AboutMeInfo>Java, JavaScript, C, C++, Python</AboutMeInfo>
            <AboutMeTopic>Tools I know</AboutMeTopic>
            <AboutMeInfo>Node.js, SQL, NoSQL, JPA, RESTful</AboutMeInfo>
          </AboutMeSection>
          <AboutMeSection>
            <AboutMeHeader>Designer</AboutMeHeader>
            <AboutMeInfo>
              This section is still under construction! I don't yet have a lot of experience with
              design, and I'm learning more constantly.
            </AboutMeInfo>
            <AboutMeTopic>Tools I know</AboutMeTopic>
            <AboutMeInfo>Adobe XD, Figma</AboutMeInfo>
          </AboutMeSection>
        </AboutMeSections>
      </AboutMeMain>
    </AboutMeContainer>
  );
};

export default AboutMe;
