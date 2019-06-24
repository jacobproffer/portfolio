import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from '../Container';
import Grid from '../Grid';

const gridItemStyles = `
  grid-column: 4 / -1;
`;

const IntroSection = styled.section`
  padding-bottom: 168px;

  p {
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
