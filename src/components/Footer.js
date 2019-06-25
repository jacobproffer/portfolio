import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import Container from './Container';
import Grid from './Grid';
import List from './List';
import Link from './Link';

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

const gridItemStyles = `
  grid-column: span 2 / -1;
  align-self: end;
  text-align: right;
`;

const StyledFooter = styled.footer`
  padding-bottom: 100px;

  ${screen.below('1280px', `
    padding-bottom: 75px;
  `)}

  ${screen.below('1024px', `
    padding-bottom: 50px;
  `)}
`;

const ListItem = styled.li`
  display: inline-block;
  
  &:not(:last-of-type) {
    margin-right: 25px;
  }
`;

const Footer = (props) => (
  <StyledFooter>
    <Container>
      <Grid>
        <Grid.Item span={3}>
          <nav>
            <List>
              {footerList.map(item => (
                <ListItem key={item.id}>
                  <Link link={item.link}>
                    {item.title}
                  </Link>
                </ListItem>
              ))}
            </List>
          </nav>
        </Grid.Item>
        <Grid.Item styles={gridItemStyles}>
          <Link link="https://github.com">Repository</Link>
        </Grid.Item>
      </Grid>
    </Container>
  </StyledFooter>
);

export default Footer;
