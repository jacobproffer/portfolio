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
  },
];

const StyledFooter = styled.footer`
  padding-bottom: 100px;

  ${screen.below('1280px', `
    padding-bottom: 75px;
  `)}

  ${screen.below('1024px', `
    padding-bottom: 50px;
  `)}

  ${screen.below('768px', `
    padding-bottom: 25px;
  `)}
`;

const SocialLinks = styled(Grid.Item)`
  grid-column: span 3;

  ${screen.below('768px', `
    grid-column: span 8;
  `)}
`;

const RepoLink = styled(Grid.Item)`
  grid-column: span 2 / -1;
  align-self: end;
  text-align: right;

  ${screen.below('768px', `
    grid-column: -1;
  `)}
`;

const ListItem = styled.li`
  display: inline-block;
  
  &:not(:last-of-type) {
    margin-right: 25px;

    ${screen.below('768px', `
      margin-right: 15px;
    `)}
  }
`;

const Footer = (props) => (
  <StyledFooter>
    <Container>
      <Grid>
        <SocialLinks>
          <nav>
            <List>
              {footerList.map(item => (
                <ListItem key={item.id}>
                  <Link href={item.link} target="_blank" rel="noreferrer noopener">
                    {item.title}
                  </Link>
                </ListItem>
              ))}
            </List>
          </nav>
        </SocialLinks>
        <RepoLink>
          <Link href="https://github.com/jacobproffer/portfolio" target="_blank" rel="noreferrer noopener">Repository</Link>
        </RepoLink>
      </Grid>
    </Container>
  </StyledFooter>
);

export default Footer;
