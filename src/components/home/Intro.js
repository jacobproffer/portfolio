import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from '../Container';
import Grid from '../Grid';

const gridItemStyles = `
  grid-column: 4 / -1;
`;

const IntroSection = styled.section`
  padding-bottom: 200px;
`;

const Intro = (props) => (
  <IntroSection>
    <Container>
      <Grid>
        <Grid.Item span={3}>
          <h3>{props.heading}</h3>
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
