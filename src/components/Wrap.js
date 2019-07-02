import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Wrap = styled.div`
  animation: ${fadeIn} 1s;
  animation-fill-mode: both;
`;

export default Wrap;