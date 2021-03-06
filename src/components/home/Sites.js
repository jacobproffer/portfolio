import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import PropTypes from 'prop-types';
import Section from '../Section';
import Container from '../Container';
import Grid from '../Grid';
import Link from '../Link';

const siteList = [
  {
    id: 1,
    title: 'tickets.proffer.dev',
    link: 'https://tickets.proffer.dev',
    tag: 'Hugo'
  },
  {
    id: 2,
    title: 'jacobproffer.com',
    link: 'https://jacobproffer.com',
    tag: 'Hugo'
  }
];

const gridStyles = `
  grid-row-gap: 60px;
  
  ${screen.below('768px', `
    grid-row-gap: 30px;
  `)}
`;

const gridItemStyles = `
  grid-column: 4 / -1;

  ${screen.below('768px', `
    grid-column: 1 / -1;
  `)}
`;

const SiteLink = styled(Link)`
  position: relative;
  display: block;
  width: 100%;
`;

const SiteTag = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  color: var(--green);
  font-size: 1rem;

  ${screen.below('768px', `
    font-size: .75rem;
  `)}

  ${screen.below('375px', `
    display: none;
  `)}
`;

const Sites = (props) => (
  <Section>
    <Container>
      <Grid styles={gridStyles}>

        {props.heading &&
          <Grid.Item span={3}>
            <header>
              <h2>{props.heading}</h2>
            </header>
          </Grid.Item>
        }
        
        {siteList.map(item => (
          <Grid.Item key={item.id} styles={gridItemStyles}>
            <SiteLink href={item.link} target="_blank" rel="noreferrer noopener">
              {item.title}
              <SiteTag>{item.tag}</SiteTag>
            </SiteLink>
          </Grid.Item>
        ))}
      </Grid>
    </Container>
  </Section>
);

Sites.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default Sites;