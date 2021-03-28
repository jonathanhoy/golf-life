import styled from 'styled-components';
import variables from './variables';

const Card = styled.div`
  display: inline-block;
  background: rgba(211,211,211,0.8);
  padding: 1rem;
  h3 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    font-family: ${variables.body};
    color: ${variables.white};
    text-transform: uppercase;
  }
  p {
    font-family: ${variables.body};
    color: ${variables.white};
    font-weight: 700;
    font-size: 1rem;
    margin: 0.5rem 0;
  }
  table {
    margin: 0 auto;
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    th, td {
      padding: 10px 5px;
      border: 1px solid black;
      width: 20%;
      font-family: ${variables.body};
      font-size: 1rem;
    }
    th {
      vertical-align: top;
      &:first-of-type {
        text-align: left;
      }
    }
    td {
      &:first-of-type {
        text-align: left;
      }
    }
    tr td:last-of-type {
      font-weight: 700;
    }
    &.wins {
      tr td:last-of-type {
        font-weight: 400;
      }
    }
  }
`;

const CardList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  @media (max-width: ${variables.sm}) {
    grid-template-columns: 1fr;
  }
`;

export { Card, CardList };