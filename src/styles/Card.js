import styled from 'styled-components';
import variables from './variables';

const Card = styled.div`
  display: inline-block;
  background: rgba(225,225,225,1);
  padding: 1rem;
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
    th, td {
      padding: 8px 5px;
      border: 1px solid black;
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
        &:last-of-type {
          width: 20%;
        }
      }
      th:nth-child(2),
      td:nth-child(2) {
        border-right: none;
      }
      th:nth-child(3),
      td:nth-child(3) {
        border-left: none;
        border-right: none;
      }
      th:nth-child(4),
      td:nth-child(4) {
        border-left: none;
      }
      tr td:last-of-type {
        font-weight: 400;
      }
    }
    &.tournament {
      th:nth-child(2),
      td:nth-child(2) {
        border-right: none;
      }
      th:nth-child(3),
      td:nth-child(3),
      th:nth-child(4),
      td:nth-child(4) {
        border-left: none;
        border-right: none;
      }
      th:nth-child(5),
      td:nth-child(5) {
        border-left: none;
      }
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