import styled from 'styled-components';
import screen from 'superior-mq';

const Container = styled.div`
  max-width: var(--container);
  margin: auto;

  ${screen.below('1281px', `
    padding: 0 40px;
  `)}

  ${screen.below('1024px', `
    padding: 0 20px;
  `)}
`;

export default Container;
