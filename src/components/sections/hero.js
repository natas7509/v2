import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;

  h1 {
    margin: 0 0 30px 4px;
    color: var(--aqua);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h2 {
    font-weight: 500;
    color: var(--text);
  }

  h3 {
    color: var(--lightest-text);
    margin-top: 10px;
    line-height: 0.9;
    font-weight: 400;
  }

  span {
    font-family: var(--font-mono);
    color: var(--aqua);
    font-size: var(--fz-heading);
  }

  p {
    margin: 20px 0 0;
    max-width: 500px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hi, I'm</h1>;
  const two = <h2 className="big-heading">Jon Darling</h2>;
  const three = (
    <h3 className="medium-heading">
      I design <span>&</span> bui things for the web
    </h3>
  );
  const four = (
    <p>
      I'm a Frontend Developer from New York, specializing in building websites, applications, and
      tech that make life easier.
    </p>
  );
  const five = (
    <a href={`mailto:${email}`} className="email-link">
      Contact Me
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
              <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </StyledHeroSection>
  );
};

export default Hero;
