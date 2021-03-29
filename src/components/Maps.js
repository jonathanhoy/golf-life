import React, { Component } from 'react';
// import { Card, CardList } from '../styles/Card';
import Wrapper from '../styles/Wrapper';
import PageHeading from '../styles/PageHeading';
// import { firebase, meta } from '../firebase';
// import { byLatestTourney } from '../sortingFunctions';

class Maps extends Component {
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
        <PageHeading>🚧 Map data coming soon 🚧</PageHeading>
      </Wrapper>
    )
  }
}

export default Maps;
