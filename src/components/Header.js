import React from 'react';
import styled from 'styled-components';
import screen from 'superior-mq';
import Container from './Container';
import Grid from './Grid';
import List from './List';
import Link from './Link';
import { ReactComponent as Logo } from './svg/logo.svg';

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

  ${screen.below('1281px', `
    padding: 75px 0;
  `)}

  ${screen.below('1024px', `
    padding: 50px 0;
  `)}

  ${screen.below('768px', `
    padding: 25px 0;
  `)}
`;

const SkipLink = styled.a`
  position: fixed;
  top: -2.5em;
  left: 50%;
  transform: translateX(-50%);
  transition: top .5s ease-in-out;

  &:focus {
    top: 0;
  }
`;

const LogoWrap = styled.div`
  width: 40px;
  height: 40px;

  svg {
    width: 100%;
    height: 100%;
  }

  ${screen.below('768px', `
    width: 30px;
    height: 30px;
  `)}
`;

const ContactText = styled.p`
  display: inline-block;
  padding: 0;
  margin: 0;
  line-height: 1;

  ${screen.below('768px', `
    writing-mode: vertical-lr;
  `)}
`;

const Header = (props) => (
  <SiteHeader>
    <Container>
      <SkipLink href="#content">本文へスキップ</SkipLink>
      <Grid>
        <Grid.Item span={2}>
          <LogoWrap>
            <Logo />
          </LogoWrap>
        </Grid.Item>
        <Grid.Item styles={gridItemStyles}>
          <nav arial-label="primary">
            <List>
              <Link href="mailto:hello@jacobproffer.com">
                <ContactText>コンタクト</ContactText>
              </Link>
            </List>
          </nav>
        </Grid.Item>
      </Grid>
    </Container>
  </SiteHeader>
);

export default Header;
