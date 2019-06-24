import React from 'react';
import styled from 'styled-components';
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
              <Link link="https://jacobproffer.com">履歴書</Link>
            </List>
          </nav>
        </Grid.Item>
      </Grid>
    </Container>
  </SiteHeader>
);

export default Header;
