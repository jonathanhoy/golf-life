import React, { Component } from 'react';
import styled from 'styled-components';
import { firebase, records, meta } from '../firebase';
import { byLatestTourney, byLatestTourneyAndMapCount } from '../sortingFunctions';

class LatestTourney extends Component {
  constructor() {
    super();
    this.state = {
      mapOne: [],
      mapTwo: [],
      mapThree: [],
      map: "",
      par: 0,
      players: [],
      meta: {}
    }
  }

  componentDidMount() {

    const dbRefMeta = firebase.database().ref(`${meta}`);
    dbRefMeta.on('value', (response) => {
      const data = response.val();
      // Sort data to get latest tournament
      const sortedData = data.sort(byLatestTourney);
      let newMeta = {};
      newMeta = sortedData[0];
      this.setState({
        meta: newMeta,
      })
    });
  }

  render() {
    return (
      <>
        <h2>Latest Tourney</h2>
        <Card>
          <h3>Tournament #{this.state.meta.tourney_id}</h3>
          <table>
            <tbody>
              <tr>
                <th>Player</th>
                <th>{this.state.meta.map1_name}<br/>({this.state.meta.map1_par})</th>
                <th>{this.state.meta.map2_name}<br/>({this.state.meta.map2_par})</th>
                <th>{this.state.meta.map3_name}<br/>({this.state.meta.map3_par})</th>
                <th>Total<br/>({this.state.meta.total_par})</th>
              </tr>
              <tr>
                <td>{this.state.meta.first_player}</td>
                <td>{this.state.meta.first_map1_score}</td>
                <td>{this.state.meta.first_map2_score}</td>
                <td>{this.state.meta.first_map3_score}</td>
                <td>{this.state.meta.first_total}</td>
              </tr>
              <tr>
                <td>{this.state.meta.second_player}</td>
                <td>{this.state.meta.second_map1_score}</td>
                <td>{this.state.meta.second_map2_score}</td>
                <td>{this.state.meta.second_map3_score}</td>
                <td>{this.state.meta.second_total}</td>
              </tr>
              <tr>
                <td>{this.state.meta.third_player}</td>
                <td>{this.state.meta.third_map1_score}</td>
                <td>{this.state.meta.third_map2_score}</td>
                <td>{this.state.meta.third_map3_score}</td>
                <td>{this.state.meta.third_total}</td>
              </tr>
              {
                this.state.meta.total_players > 3 && (
                  <tr>
                    <td>{this.state.meta.fourth_player}</td>
                    <td>{this.state.meta.fourth_map1_score}</td>
                    <td>{this.state.meta.fourth_map2_score}</td>
                    <td>{this.state.meta.fourth_map3_score}</td>
                    <td>{this.state.meta.fourth_total}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </Card>
      </>
    )
  }
}

const Card = styled.div`
  table {
    margin: 0 auto;
    th, td {
      padding: 10px 15px;
      outline: 1px solid black;
      width: 20%;
    }
    tr td:last-of-type {
      font-weight: 700;
    }
  }
`;

export default LatestTourney;