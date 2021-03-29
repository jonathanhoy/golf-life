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

export default Button;