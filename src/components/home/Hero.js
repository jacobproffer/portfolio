import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from '../Container';
import Grid from '../Grid';

const HeroBlock = styled.div`
  padding: 50px 0 200px;
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
  right: -56px;
  transform: translateY(-50%);
  writing-mode: vertical-lr;
  white-space: nowrap;
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
