import styled from 'styled-components';
import variables from './variables';

const Card = styled.div`
  background: ${variables.grey};
  padding: 1rem;
  box-shadow: ${variables.boxshadow};
  width: 100%;
  height: 100%;
  h3 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    font-family: ${variables.body};
    color: ${variables.black};
    text-transform: uppercase;
  }
  p {
    font-family: ${variables.body};
    color: ${variables.black};
    font-weight: 700;
    font-size: 1rem;
    margin: 0.5rem 0;
  }
  a {
    font-family: ${variables.body};
    color: ${variables.green};
    font-weight: 700;
    font-size: 1rem;
    margin: 1.25rem 0 0.25rem 0;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    text-transform: uppercase;
    i {
      font-size: 1rem;
      margin-left: 0.5rem;
    }
  }
  select, input[type="number"]  {
    font-family: ${variables.body};
    color: ${variables.black};
    font-size: 1rem;
  }
`;

const CardList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  margin: 0;
  @media (max-width: ${variables.sm}) {
    grid-template-columns: 1fr;
  }
`;

const CardHeading = styled.h2`
  color: ${variables.black};
  font-family: ${variables.heading};
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 2rem;
`;

export { Card, CardList, CardHeading };