import styled from 'styled-components';
import variables from '../styles/variables';

const Legend = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
  z-index: 15;
  margin-bottom: 1rem;
  button {
    background: none;
    border: none;
    color: ${variables.white};
    background: ${variables.green};
    text-transform: uppercase;
    font-family: ${variables.body};
    font-size: 1rem;
    font-weight: 700;
    padding: 0.25rem 0.5rem;
  }
  ul {
    display: ${props => props.legendVisible === true ? 'grid': 'none'};
    list-style: none;
    background: ${variables.greyAlt};
    padding: 0.5rem;
    width: 100%;
    grid-template-columns: ${props => props.items && `repeat(${props.items}, 1fr)`};
    grid-gap: 1rem;
    margin: 1rem 0 0 0;
    li {
      p {
        color: ${variables.black};
        display: block;
        font-weight: 400;
        span {
          font-weight: 700;
          display: block;
          margin-bottom: 0.25rem;
        }
      }
    }
  }
`;

export default Legend;