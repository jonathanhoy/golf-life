import React from 'react';
import variables from '../styles/variables';
import Wrapper from '../styles/Wrapper';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
              <Link to="/tournaments">Tournaments</Link>
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
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      color: ${variables.green};
      margin: 0;
      font-size: 2.5rem;
      font-family: ${variables.heading};
    }
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
  @media (max-width: ${variables.sm}) {
    padding: 0.5rem 0;
    nav {
      flex-direction: column;
      justify-content: space-between;
      h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      div {
        display: flex;
        justify-content: space-around;
        width: 100%;
        a {
          margin-left: 0;
        }
      }
    }
  }
`;

export default Header;