import React, { Component } from 'react';
import { firebase, records } from '../firebase';
import { byLatestTourneyAndMapCount } from '../sortingFunctions';

class Tournaments extends Component {
  constructor() {
    super();
    this.state = {
      tournaments: [],
      formattedTournaments: [],
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref(`${records}`);
    dbRef.on('value', (response) => {
      const newState = [];
      const data = response.val();

      const sortedData = data.sort(byLatestTourneyAndMapCount);
      console.log('i am sorted', sortedData);

      for (let key in sortedData) {
        newState.push(sortedData[key]);
      }

      this.setState({
        tournaments: newState
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tournaments !== this.state.tournaments) {
      // console.log('i am prev', prevState.tournaments);
      // console.log('i am new', this.state.tournaments);
    }
  }

  render() {
    return (
      <>
        <h2>Tournaments</h2>
        {/* {this.state.books.tournaments((tournament) => {
          <li>{tournament}</li>
        })} */}
      </>
    )
  }
}

export default Tournaments;