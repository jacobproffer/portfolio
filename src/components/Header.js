import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import Container from './Container';
import Grid from './Grid';
import List from './List';
import Link from './Link';

const gridItemStyles = `
  grid-column: span 2 / -1;
  align-self: end;
  text-align: right;
`;

const SiteHeader = styled.header`
  position: absolute;
  z-index: 1;
  width: 100%;
  padding: 100px 0;

  ${screen.below('1280px', `
    padding: 75px 0;
  `)}

  ${screen.below('1024px', `
    padding: 50px 0;
  `)}

  ${screen.below('768px', `
    padding: 25px 0;
  `)}
`;

const Header = (props) => (
  <SiteHeader>
    <Container>
      <Grid>
        <Grid.Item span={2}>
          <h1>ヤコブ</h1>
        </Grid.Item>
        <Grid.Item styles={gridItemStyles}>
          <nav arial-label="primary">
            <List>
              <Link href="https://jacobproffer.com" target="_blank" rel="noreferrer noopener">ブログ</Link>
            </List>
          </nav>
        </Grid.Item>
      </Grid>
    </Container>
  </SiteHeader>
);

export default Header;
