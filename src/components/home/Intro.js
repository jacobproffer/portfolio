import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import PropTypes from 'prop-types';
import Section from '../Section';
import Container from '../Container';
import Grid from '../Grid';

const gridStyles = `
  ${screen.below('768px', `
    grid-row-gap: 20px;
  `)}
`;

const IntroSection = styled(Section)`
  p {
    font-size: 1.25rem;
    line-height: 32px;

    &:first-of-type {
      margin-top: 0;
    }

    &:last-of-type {
      margin-bottom: 0;
    }

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
      <Grid styles={gridStyles}>

        {props.heading &&
          <IntroHeader>
            <header>
              <h2>{props.heading}</h2>
            </header>
          </IntroHeader>
        }

        {props.children &&
          <IntroContent>
            {props.children}
          </IntroContent>
        }
        
      </Grid>
    </Container>
  </IntroSection>
);

Intro.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Intro;
