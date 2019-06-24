import React from 'react';
import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';

const StyledLink = styled.a`
  position: relative;
  font-size: 1.5rem;
  // font-weight: 900;
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