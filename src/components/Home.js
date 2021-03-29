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
          <div className="leaderboard">
            <Leaderboard />
          </div>
          <div className="accolades">
            <Accolades />
          </div>
          <div className="latest">
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
  padding-top: 2rem;
  .leaderboard {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }
  .accolades {
    grid-row: 1 / 3;
    grid-column: 2 / 3;
  }
  @media (max-width: ${variables.sm}) {
    grid-template-columns: 1fr;
    .accolades {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
  }
`;

export default Home;