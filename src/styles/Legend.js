import styled from 'styled-components';
import variables from '../styles/variables';

const Legend = styled.div`
  position: relative;
  z-index: 15;
  margin-bottom: 1rem;
  button {
    background: none;
    border: 2px solid ${variables.black};
    color: ${variables.black};
    background: none;
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
  @media (max-width: ${variables.smVertical}) {
    ul {
      grid-template-columns: 1fr;
      grid-gap: 0;
      p {
        margin: 0.25rem 0;
      }
    }
  }
`;

export default Legend;