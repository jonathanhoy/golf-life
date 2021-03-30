import React, { Component } from 'react';
import styled from 'styled-components';
// import { Card, CardList } from '../styles/Card';
// import Table from '../styles/Table';
import Wrapper from '../styles/Wrapper';
import PageHeading from '../styles/PageHeading';
import BodyText from '../styles/BodyText';
// import { firebase, meta } from '../firebase';
// import { byLatestTourney } from '../sortingFunctions';

class About extends Component {
  constructor() {
    super();
    this.state = {
      meta: []
    }
  }

  // componentDidMount() {
  //   const dbRef = firebase.database().ref(`${meta}`);
  //   dbRef.on('value', (response) => {
  //     const data = response.val();
  //     // Sort data to get latest tournament
  //     const sortedData = data.sort(byLatestTourney);
  //     let newMeta = [];
  //     newMeta = [...sortedData];
  //     // eslint-disable-next-line
  //     const cleanedMeta = newMeta.filter((tourney) => {
  //       if (tourney !== undefined && tourney.tourney_id >= 1) {
  //         return tourney;
  //       }
  //     })
  //     this.setState({
  //       meta: cleanedMeta,
  //     })
  //   });
  // }

  render() {
    return (
      <Wrapper>
        <PageHeading>Overview</PageHeading>
        <Container>
          <BodyText>Volcanoes? Space stations? No, we're not actually golfing on a volcano or in outer space. The golfing in question is done in <a href="https://www.team17.com/games/golf-with-your-friends/" target="_blank" rel="noreferrer" aria-label="Go to Team 17 site, opens in a new window.">Golf With Your Friends</a> and well, I am golfing with my friends. And keeping track.</BodyText>
          <BodyText>What started as a simple spreadsheet to calculate scores over a few rounds of golf for bragging rights turned into something bigger. I wanted to gain exposure to data analysis and working with spreadsheets so I started to play around with the data and eventually realized that an interface could be created.</BodyText>
          <BodyText>The site tracks data about maps, tournaments, and players and how all of these factors weave together. Now my friends and I know which maps we're really not good at (though I hardly need data to know which maps those are).</BodyText>
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
