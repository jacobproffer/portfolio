import styled from 'styled-components';
import screen from 'superior-mq';

const Container = styled.div`
  max-width: var(--container);
  margin: auto;

  ${screen.below('1280px', `
    padding: 0 40px;
  `)}
`;

export default Container;
