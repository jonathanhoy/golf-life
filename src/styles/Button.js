import styled from 'styled-components';
import variables from './variables';

const Button = styled.button`
  background: none;
  box-shadow: none;
  border: none;
  position: relative;
  z-index: 10;
  padding: 0;
  i {
    color: ${variables.green};
    font-size: 2rem;
  }
  @media (min-width: ${variables.sm}) {
    display: none;
  }
`;

const SortButton = styled.button`
  background: ${props => props.id === props.active ? variables.white : 'none'};
  border: none;
  position: relative;
  z-index: 5;
  padding: 0;
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 2px;
  i {
    font-size: 1.5rem;
    pointer-events: none;
    color: ${props => props.id === props.active ? variables.green : variables.white};
  }
`;

export { Button, SortButton };