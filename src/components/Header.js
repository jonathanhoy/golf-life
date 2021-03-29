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
            <h1>Golf Life 🏌🏻‍♂️</h1>
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
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.65); 
  box-shadow: 0px 5px 10px 0px rgba(0,0,0,0.65);
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
      align-items: flex-start;
      h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      div {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        a {
          margin-left: 0;
          margin-right: 1.5rem;
        }
      }
    }
  }
`;

export default Header;