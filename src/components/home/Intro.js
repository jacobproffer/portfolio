import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import PropTypes from 'prop-types';
import Section from '../Section';
import Container from '../Container';
import Grid from '../Grid';

const IntroSection = styled(Section)`
  p {
    margin: 0;
    font-size: 1.125rem;
    line-height: 32px;

    ${screen.below('768px', `
      font-size: 1rem;
    `)}
  }
`;

const IntroHeader = styled(Grid.Item)`
  grid-column: span 3;

  ${screen.below('768px', `
    grid-column: 1 / -1;
  `)}
`;

const IntroContent = styled(Grid.Item)`
  grid-column: 4 / -1;

  ${screen.below('768px', `
    grid-column: 1 / -1;
  `)}
`;

const Intro = (props) => (
  <IntroSection>
    <Container>
      <Grid>
        <IntroHeader>
          <header>
            <h3>{props.heading}</h3>
          </header>
        </IntroHeader>
        <IntroContent>
          {props.children}
        </IntroContent>
      </Grid>
    </Container>
  </IntroSection>
);

Intro.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Intro;
