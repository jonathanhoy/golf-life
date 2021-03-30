import React from 'react';
import variables from '../styles/variables';
import Wrapper from '../styles/Wrapper';
import { Button } from '../styles/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      showNav: false,
    }
  }  

  handleClick = () => {
    this.setState({
      showNav: true,
    })
    if (this.state.showNav === false) {
      this.setState({
        showNav: true,
      })
    } else {
      this.setState({
        showNav: false,
      })
    }
  }

  handleClose = () => {
    this.setState({
      showNav: false,
    })
  }

  render() {
    return (
      <StyledHeader showNav={this.state.showNav}>
        <Wrapper>
          <div className="container">
            <h1>Golf Life 🏌🏻‍♂️</h1>
            <Button className="mobile-nav-toggle" onClick={this.handleClick}>
              <i className="fas fa-bars fa-fw"></i>
              <i className="fas fa-times fa-fw"></i>
            </Button>
            <nav>
              <div>
                <Link onClick={this.handleClose} to="/">Home</Link>
                <Link onClick={this.handleClose} to="/tournaments">Tournaments</Link>
                <Link onClick={this.handleClose} to="/players">Players</Link>
                <Link onClick={this.handleClose} to="/maps">Maps</Link>
              </div>
            </nav>
          </div>
        </Wrapper>
      </StyledHeader>     
    )
  }
}

const StyledHeader = styled.header`
  background: ${variables.white};
  padding: 0.5rem 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: ${variables.boxshadow};
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    color: ${variables.green};
    margin: 0;
    font-size: 2.5rem;
    font-family: ${variables.heading};
    position: relative;
    z-index: 10;
  }
  .mobile-nav-toggle {
    .fa-bars {
      display: ${props => props.showNav ? 'none' : 'block'};
    }
    .fa-times {
      display: ${props => props.showNav ? 'block' : 'none'};
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
  @media (max-width: ${variables.sm}) {
    padding: 0.5rem 0;
    nav {
      position: absolute;
      top: ${props => props.showNav ? '0' : '-180px'};
      opacity: ${props => (props.showNav === true ? '1' : '0')};
      left: 0;
      right: 0;
      background: white;
      box-shadow: ${variables.boxshadow};
      transition: all 0.3s ease-in-out;
      h1 {
        font-size: 2rem;
        margin-bottom: 1rem;
      }
      div {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        flex-direction: column;
        width: 95%;
        margin: 0 auto;
        padding: 4rem 0 1rem;
        a {
          margin: 0.5rem 0;
        }
      }
    }
  }
`;

export default Header;