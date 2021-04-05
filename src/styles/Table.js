import styled from 'styled-components';
import variables from './variables';

const Table = styled.table`
  margin: 0 auto;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  tr[data-immaculate-victory=true] {
    background: ${variables.gold};
  }
  tr:first-of-type {
    background: ${variables.green};
  }
  tr:nth-child(2n+1) {
    background: ${variables.greyAlt};
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
    th {
      width: 20%;
      white-space: nowrap;
    }
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
    tbody tr th {
      padding-top: 0;
    }
    @media (max-width: ${variables.smVertical}) {
      tr {
        th:nth-child(3),
        th:nth-child(6),
        th:nth-child(7),
        td:nth-child(3),
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
  &.players {
    td:last-of-type {
      font-weight: 400;
    }
    @media (max-width: ${variables.smVertical}) {
      tr {
        th:nth-child(4),
        td:nth-child(4),
        th:nth-child(6),
        td:nth-child(6) {
          display: none;
        }
        th:first-of-type, th:not(:first-of-type) {
          width: 25%;
        }
      }
    }
  }
`;

export default Table;