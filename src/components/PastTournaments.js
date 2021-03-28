import React, { Component } from 'react';
import { Card, CardList } from '../styles/Card';
import Wrapper from '../styles/Wrapper';
import PageHeading from '../styles/PageHeading';
import { firebase, meta } from '../firebase';
import { byLatestTourney } from '../sortingFunctions';

class PastTournaments extends Component {
  constructor() {
    super();
    this.state = {
      meta: []
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref(`${meta}`);
    dbRef.on('value', (response) => {
      const data = response.val();
      // Sort data to get latest tournament
      const sortedData = data.sort(byLatestTourney);
      let newMeta = [];
      newMeta = [...sortedData];
      // eslint-disable-next-line
      const cleanedMeta = newMeta.filter((tourney) => {
        if (tourney !== undefined && tourney.tourney_id >= 1) {
          return tourney;
        }
      })
      this.setState({
        meta: cleanedMeta,
      })
    });
  }

  render() {
    return (
      <Wrapper>
        <PageHeading>History</PageHeading>
        <CardList>
          {(this.state.meta).map((tournament) => {
              return (
                <Card>
                  <h3>Tournament #{tournament.tourney_id}</h3>
                  <p>{tournament.date}</p>
                  <table>
                    <tbody>
                      <tr>
                        <th>Player</th>
                        <th>{tournament.map1_name}<br/>({tournament.map1_par})</th>
                        <th>{tournament.map2_name}<br/>({tournament.map2_par})</th>
                        <th>{tournament.map3_name}<br/>({tournament.map3_par})</th>
                        <th>Total<br/>({tournament.total_par})</th>
                      </tr>
                      <tr>
                        <td>{tournament.first_player}</td>
                        <td>{tournament.first_map1_score}</td>
                        <td>{tournament.first_map2_score}</td>
                        <td>{tournament.first_map3_score}</td>
                        <td>{tournament.first_total}</td>
                      </tr>
                      <tr>
                        <td>{tournament.second_player}</td>
                        <td>{tournament.second_map1_score}</td>
                        <td>{tournament.second_map2_score}</td>
                        <td>{tournament.second_map3_score}</td>
                        <td>{tournament.second_total}</td>
                      </tr>
                      <tr>
                        <td>{tournament.third_player}</td>
                        <td>{tournament.third_map1_score}</td>
                        <td>{tournament.third_map2_score}</td>
                        <td>{tournament.third_map3_score}</td>
                        <td>{tournament.third_total}</td>
                      </tr>
                      {
                        tournament.total_players > 3 && (
                          <tr>
                            <td>{tournament.fourth_player}</td>
                            <td>{tournament.fourth_map1_score}</td>
                            <td>{tournament.fourth_map2_score}</td>
                            <td>{tournament.fourth_map3_score}</td>
                            <td>{tournament.fourth_total}</td>
                          </tr>
                        )
                      }
                    </tbody>
                  </table>
                </Card>
              )
          })}
        </CardList>
      </Wrapper>
    )
  }
}

export default PastTournaments;
