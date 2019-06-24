import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import Grid from './Grid';
import List from './List';

const gridItemStyles = `
  grid-column: span 1 / -1;
  align-self: end;
`;

const SiteHeader = styled.header`
  position: absolute;
  z-index: 1;
  width: 100%;
  padding: 50px 0;
`;

const NavLink = styled.a`
  font-size: 1.5rem;
`;

const Header = (props) => (
  <SiteHeader>
    <Container>
      <Grid>
        <Grid.Item>
          <h1>ヤコブ</h1>
        </Grid.Item>
        <Grid.Item styles={gridItemStyles}>
          <nav>
            <List>
              <NavLink href="https://jacobproffer.com">履歴書</NavLink>
            </List>
          </nav>
        </Grid.Item>
      </Grid>
    </Container>
  </SiteHeader>
);

export default Header;
