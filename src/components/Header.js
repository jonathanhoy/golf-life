import React from 'react';
import variables from '../styles/variables';
import Wrapper from '../styles/Wrapper';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <Wrapper>
          <nav>
            <h1>Golf With Your Friends</h1>
            <div>
              <Link to="/">Home</Link>
              {/* <Link to="/players">Players</Link> */}
              <Link to="/tournaments">Past Tournaments</Link>
            </div>
          </nav>
        </Wrapper>
      </StyledHeader>     
    )
  }
}

const StyledHeader = styled.header`
  background: ${variables.white};
  padding: 1.5rem 0;
  h1 {
    color: ${variables.green};
    margin: 0;
    font-size: 2.5rem;
    font-family: ${variables.heading};
    @media (max-width: ${variables.sm}) {
        font-size: 2rem;
    }
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      a {
        color: ${variables.green};
        font-family: ${variables.heading};
        font-size: 1.25rem;
        text-decoration: none;
        margin-left: 1.5rem;
        font-weight: 600;
      }
    }
  }
`;

export default Header;