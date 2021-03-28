import styled from 'styled-components';

const Card = styled.div`
  display: inline-block;
  background: rgba(211,211,211,0.8);
  padding: 1rem;
  table {
    margin: 0 auto;
    width: 500px;
    th, td {
      padding: 10px 5px;
      outline: 1px solid black;
      width: 20%;
    }
    th {
      vertical-align: top;
    }
    tr td:last-of-type {
      font-weight: 700;
    }
  }
`;

const CardList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
`;

export { Card, CardList };