import styled from 'styled-components';
import variables from './variables';

const Card = styled.div`
  background: rgba(225,225,225,1);
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
      font-size: 0.75rem;
      margin-left: 0.5rem;
      /* color: red; */
    }
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
      &[data-below-par=true] {
        color: ${variables.belowPar};
      }
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
    &.maps {
      tr:nth-child(1) {
        padding-bottom: 0;
      }
      tr:nth-child(2) {
        th {
          padding-top: 0;
        }
      }
      th {
        .button-group {
          white-space: nowrap;
          button {
            background: none;
            border: none;
            position: relative;
            z-index: 5;
            i {
              color: ${variables.white};
              font-size: 1.5rem;
              pointer-events: none;
            }
          }
        }
      }
      th:first-of-type {
        width: 15%;
      }
      th:not(:first-of-type) {
        width: calc(85% / 6); 
      }
      td:last-of-type {
        font-weight: 400;
      }
      @media (max-width: ${variables.smVertical}) {
        tr {
          th:nth-child(5),
          th:nth-child(6),
          th:nth-child(7),
          td:nth-child(5),
          td:nth-child(6),
          td:nth-child(7) {
            display: none;
          }
          th:first-of-type, th:not(:first-of-type) {
            width: 25%;
          }
        }
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