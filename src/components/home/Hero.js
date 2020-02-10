import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import PropTypes from 'prop-types';
import Container from '../Container';
import Grid from '../Grid';

const HeroBlock = styled.section`
  padding: 100px 0 182px;

  ${screen.below('1281px', `
    padding: 75px 0 136px;
  `)}

  ${screen.below('1024px', `
    padding: 50px 0 91px;
  `)}

  ${screen.below('768px', `
    padding: 25px 0 65px;
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

  ${screen.below('768px', `
    grid-column: 3 / span 6;
  `)}
`;

const Figure = styled.div`
  position: relative;
  width: 100%;

  img {
    mix-blend-mode: soft-light;
  }
`;

const Heading = styled.header`
  position: absolute;
  top: 50%;
  right: -75px;
  transform: translateY(-50%);
  writing-mode: vertical-lr;
  white-space: nowrap;

  ${screen.below('1281px', `
    right: -57px;
  `)}

  ${screen.below('1024px', `
    right: -38px;
  `)}

  ${screen.below('480px', `
    right: -19px;
  `)}
`;

const Hero = (props) => (
  <HeroBlock>
    <Container>
      <Grid>
        <Image>

          {props.image &&
            <Figure>
              <img src={props.image} alt={props.imageAlt} />
            </Figure>
          }

          {props.heading &&
            <Heading lang="ja">
              <h1>{props.heading}</h1>
            </Heading>
          }
          
        </Image>
      </Grid>
    </Container>
  </HeroBlock>
);

Hero.propTypes = {
  heading: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
};

export default Hero;
