import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from '../Container';

const HeroSection = styled.section`
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.black};
`;

const Hero = (props) => (
  <HeroSection>
    <Container>
      <h1>{props.heading}</h1>
    </Container>
  </HeroSection>
);

Hero.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Hero;
