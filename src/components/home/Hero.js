import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from '../Container';

const HeroSection = styled.section`
  padding: 50px 0 200px;
`;

const Image = styled.div`
  position: relative;
  max-width: 470px;
  margin: 0 auto;
  background-color: var(--red);
  
  img {
    mix-blend-mode: soft-light;
  }

  &::before {
    position: absolute;
    bottom: -20px;
    left: -20px;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: var(--green);
    content: '';
  }
`;

const Heading = styled.h2`
  position: absolute;
  top: 50%;
  right: -56px;
  transform: translateY(-50%);
  writing-mode: vertical-lr;
  white-space: nowrap;
`;

const Hero = (props) => (
  <HeroSection>
    <Container>
      <figure>
        <Image>
          <img src={props.image} alt={props.imageAlt} />
          <Heading>{props.heading}</Heading>
        </Image>
      </figure>
    </Container>
  </HeroSection>
);

Hero.propTypes = {
  heading: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.isRequired,
};

export default Hero;
