import React, { Component } from 'react';
import styled from 'styled-components';
import Wrapper from '../styles/Wrapper';
import PageHeading from '../styles/PageHeading';
import BodyText from '../styles/BodyText';

class About extends Component {
  constructor() {
    super();
    this.state = {
      meta: []
    }
  }

  render() {
    return (
      <Wrapper>
        <PageHeading>Overview</PageHeading>
        <Container>
          <BodyText>Volcanoes? Space stations? No, we're not actually playing golf on a volcano or in outer space. The golfing is done in <a href="https://www.team17.com/games/golf-with-your-friends/" target="_blank" rel="noreferrer" aria-label="Go to Team 17 site, opens in a new window.">Golf With Your Friends</a> and well, I am golfing with my friends. And keeping track.</BodyText>
          <BodyText>What started as a simple spreadsheet to calculate scores turned into something bigger. I wanted to gain exposure to data analysis and working with spreadsheets so I started to play around with the data. Soon I wanted a better visual to display the data.</BodyText>
          <BodyText>This project is the result. The site is part-dashboard, part-statistics, and partly for bragging rights. In real-time it tracks data about maps, tournaments, and players. Now my friends and I know which maps we're really not good at (though I hardly need data to know which maps those are).</BodyText>
          <BodyText>I have many ideas swirling around in my head of what I want to achieve with this project but instead of typical development-related roadblocks the challenge lies in data; how to clean it, how to transform it, and what useful information can be gleaned from it. I look forward to what can be achieved.</BodyText>
          <span>
            <BodyText>Thanks for checking out the site!</BodyText>
            <BodyText>Jonathan</BodyText>
          </span>
        </Container>
      </Wrapper>
    )
  }
}

const Container = styled.div`
  max-width: 750px;
  a {
    color: inherit;
    text-decoration: none;
    font-weight: 700;
  }
  span {
    display: inline-block;
    margin-top: 2rem;
  }
`;

export default About;
