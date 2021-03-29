import React from 'react';
import styled from 'styled-components';

import Wrapper from '../styles/Wrapper';
import variables from '../styles/variables';

import Leaderboard from './Leaderboard';
import LatestTourney from './LatestTourney';
import Accolades from './Accolades';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <Wrapper>
        <Grid>
          <div>
            <Leaderboard />
          </div>
          <div>
            <Accolades />
          </div>
          <div>
            <LatestTourney />
          </div>
        </Grid>
      </Wrapper>
    )
  }
}

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.5rem;
  @media (max-width: ${variables.sm}) {
    grid-template-columns: 1fr;
  }
`;

export default Home;