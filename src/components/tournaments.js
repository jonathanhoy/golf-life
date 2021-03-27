import React, { Component } from 'react';
import { firebase, records } from '../firebase';

class Tournaments extends Component {
  constructor() {
    super();
    this.state = {
      tournaments: [],
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref(records);
    dbRef.on('value', (response) => {
      console.log('I AM RES', response.val());
    });
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