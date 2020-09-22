import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { socialMedia } from '@config';
import { Side } from '@components';
import { Icon } from '@components/icons';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  color: var(--lightest-text);

  &:before {
    content: '';
    display: block;
    width: 1px;
    height: 3rem;
    margin: 1rem auto;
    background-color: var(--line);
  }

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 3rem;
    margin: 0 0 22rem 0;
    background-color: var(--line);
  }

  li {
    padding: 10px;

    &:last-of-type {
      margin-bottom: 1rem;
    }

    a {
      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

const Social = ({ isHome }) => (
  <Side isHome={isHome} orientation="right">
    <StyledSocialList>
      {socialMedia &&
        socialMedia.map(({ url, name }, i) => (
          <li key={i}>
            <a href={url} aria-label={name}>
              <Icon name={name} />
            </a>
          </li>
        ))}
    </StyledSocialList>
  </Side>
);

Social.propTypes = {
  isHome: PropTypes.bool,
};

export default Social;
