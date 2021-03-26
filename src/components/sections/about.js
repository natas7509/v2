import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  h4 {
    margin: 1rem 0;
  }

  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '◇';
        position: absolute;
        left: 0;
        color: var(--aqua);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 2rem 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    background-color: var(--aqua);
    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
    transition: var(--transition);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;
      clip-path: polygon(0% 0%, 80% 0%, 100% 20%, 100% 80%, 100% 100%, 20% 100%, 0% 80%, 0% 20%);
    }

    .img {
      position: relative;
      mix-blend-mode: multiply;
      transition: var(--transition);
    }
  }
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(sourceInstanceName: { eq: "images" }, relativePath: { eq: "about.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, traceSVG: { color: "#64ffda" }) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'HTML & (S)CSS',
    'Adobe CC',
    'WordPress',
    'Gatsby',
    'Figma',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledPic>
          <div className="wrapper">
            <Img fluid={data.avatar.childImageSharp.fluid} alt="Avatar" className="img" />
          </div>
        </StyledPic>
        <StyledText>
          <div>
            <p>I am a Frontend Developer / Graphic Designer based in New York.</p>

            <p>
              I recently graduated with a degree in Multimedia Programming with a specialization in
              Frontend Web Development and Graphic Design. I enjoy working across various programs
              and platforms creating in Sketch or XD, and finishing with Javascript / React / Node /
              Firebase to name a few.
            </p>
            <p>
              In my recent internship at iOne Digital (a subsidiary of Interactive One), I was able
              to apply this skill set in the development of personalized landing pages and digital
              marketing campaigns.
            </p>

            <p>
              I also find WordPress development to be engaging as well, especially theme
              customization and incorporating raw coding techniques to create a unique end product.
              Having the opportunity to work on the WordPress VIP platform during my internship was
              invaluable, as it gave me an inside look on how the platform operates at an enterprise
              level.
            </p>

            <h4>Here are a few technologies I've been working with recently</h4>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>
      </div>
    </StyledAboutSection>
  );
};

export default About;
