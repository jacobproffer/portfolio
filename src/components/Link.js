import styled, {css} from 'styled-components';
import screen from 'superior-mq';

const Link = styled.a`
  position: relative;
  font-size: 1.5rem;
  text-transform: uppercase;

  &::before {
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--red);
    transition: background-color .5s ease-in-out;
    content: '';
  }

  &:hover {
    &::before {
      background-color: var(--green);
    }
  }

  ${screen.below('1024px', `
    font-size: 1rem;
  `)}

  ${screen.below('768px', `
    font-size: .9rem;
  `)}

  ${props => props.styles && css`
    ${props.styles}
  `}
`;

export default Link;