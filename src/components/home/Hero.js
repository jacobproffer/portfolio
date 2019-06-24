import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import PropTypes from 'prop-types';
import Container from '../Container';
import Grid from '../Grid';

const HeroBlock = styled.div`
  padding: 100px 0 182px;

  ${screen.below('1280px', `
    padding: 75px 0 136px;
  `)}

  ${screen.below('1024px', `
    padding: 50px 0 91px;
  `)}
`;

const Image = styled(Grid.Item)`
  position: relative;
  background-color: var(--red);
  grid-column: 4 / span 4;

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

const Figure = styled.figure`
  position: relative;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: soft-light;
  }
`;

const Heading = styled.h2`
  position: absolute;
  top: 50%;
  right: -75px;
  transform: translateY(-50%);
  writing-mode: vertical-lr;
  white-space: nowrap;

  ${screen.below('1280px', `
    right: -57px;
  `)}

  ${screen.below('1024px', `
    right: -38px;
  `)}
`;

const Hero = (props) => (
  <HeroBlock>
    <Container>
      <Grid>
        <Image>
          <Figure>
            <img src={props.image} alt={props.imageAlt} />
          </Figure>
          <Heading>{props.heading}</Heading>
        </Image>
      </Grid>
    </Container>
  </HeroBlock>
);

Hero.propTypes = {
  heading: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.isRequired,
};

export default Hero;
