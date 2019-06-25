import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import PropTypes from 'prop-types';
import Container from '../Container';
import Grid from '../Grid';

const gridItemStyles = `
  grid-column: 4 / -1;
`;

const IntroSection = styled.section`
  padding-bottom: 168px;

  ${screen.below('1280px', `
    padding-bottom: 126px;
  `)}

  ${screen.below('1024px', `
    padding-bottom: 84px;
  `)}

  p {
    margin-top: 0;
    font-size: 1.125rem;
    line-height: 32px;
  }
`;

const Intro = (props) => (
  <IntroSection>
    <Container>
      <Grid>
        <Grid.Item span={3}>
          <header>
            <h3>{props.heading}</h3>
          </header>
        </Grid.Item>
        <Grid.Item styles={gridItemStyles}>
          {props.children}
        </Grid.Item>
      </Grid>
    </Container>
  </IntroSection>
);

Intro.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Intro;
