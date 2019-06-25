import React from 'react';
import styled, {css} from 'styled-components';
import screen from 'superior-mq';
import PropTypes from 'prop-types';

const StyledLink = styled.a`
  position: relative;
  font-size: 1.5rem;
  text-transform: uppercase;

  &::before {
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--red);
    transition: background-color .5s ease-in-out;
    content: '';
  }

  &:hover {
    &::before {
      background-color: var(--green);
    }
  }

  ${screen.below('1024px', `
    font-size: 1rem;
  `)}

  ${props => props.styles && css`
    ${props.styles}
  `}
`;

const Link = (props) => (
  <StyledLink href={props.link} target="_blank" rel="noreferrer noopener">
    {props.children}
  </StyledLink>
);

Link.propTypes = {
  link: PropTypes.string,
  children: PropTypes.node,
};

export default Link;