import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Grid from './Grid';
import List from './List';

const footerList = [
  {
    id: 1,
    title: 'Github',
    link: 'https://github.com/jacobproffer',
  },
  {
    id: 2,
    title: 'Dribbble',
    link: 'https://dribbble.com/jacobproffer',
  }
];

const isExternal = (url) => url.match(/^(https?:)?\/\/|mailto:/);

const gridItemStyles = `
  grid-column: span 2 / -1;
  align-self: end;
  text-align: right;
`;

const StyledFooter = styled.footer`
  padding-bottom: 50px;
`;

const Footer = (props) => (
  <StyledFooter>
    <Container>
      <Grid>
        <Grid.Item span={3}>
          <nav>
            <List>
              {footerList.map(item => (
                <li key={item.id}>
                  <a href={item.link} target={isExternal(item.link) ? '_blank' : undefined}>
                    {item.title}
                  </a>
                </li>
              ))}
            </List>
          </nav>
        </Grid.Item>
        <Grid.Item styles={gridItemStyles}>
          <a href="https://github.com">Repository</a>
        </Grid.Item>
      </Grid>
    </Container>
  </StyledFooter>
);

export default Footer;
