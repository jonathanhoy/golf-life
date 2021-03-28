import styled from 'styled-components';
import variables from './variables';

const Card = styled.div`
  display: inline-block;
  background: rgba(225,225,225,1);
  padding: 1rem;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.65); 
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.65);
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
  table {
    margin: 0 auto;
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    tr:first-of-type {
      background: ${variables.green};
    }
    tr:nth-child(2n+1) {
      background: lightgrey;
    }
    th, td {
      padding: 8px 5px;
      font-family: ${variables.body};
      font-size: 1rem;
    }
    th {
      background: ${variables.green};
      color: ${variables.white};
      vertical-align: top;
      &:first-of-type {
        width: 20%;
        text-align: left;
      }
      &:last-of-type {
        width: 20%;
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
      th {
        width: auto;
        &:first-of-type,
        &:nth-child(2),
        &:last-of-type {
          width: 20%;
        }
      }
      tr td:last-of-type {
        font-weight: 400;
      }
    }
    &.tournament {
    }
  }
  @media (max-width: ${variables.smVertical}) {

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