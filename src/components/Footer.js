import React from 'react';
import styled from 'styled-components';
import variables from '../styles/variables';
import Wrapper from '../styles/Wrapper';

class Footer extends React.Component {
  render() {
    return (
      <StyledFooter>
        <Wrapper>
          <p>Golf Life in no way claims ownership of any intellectual property associated with Golf With Your Friends.</p>
          <p>&copy; Jonathan Hoy, 2021</p>
        </Wrapper>
      </StyledFooter>     
    )
  }
}

const StyledFooter = styled.footer`
  margin: 3rem 0;
  p {
    margin: 0;
    font-size: 0.75rem;
    font-family: ${variables.body};
    color: ${variables.white};
    line-height: 1rem;
  }
`;

export default Footer;