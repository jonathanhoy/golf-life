import React, { Component } from 'react';
import { Card, CardList } from '../styles/Card';
import Wrapper from '../styles/Wrapper';
import PageHeading from '../styles/PageHeading';
import { firebase, meta } from '../firebase';
import { byLatestTourney } from '../sortingFunctions';

class LatestTourney extends Component {
  constructor() {
    super();
    this.state = {
      meta: {}
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref(`${meta}`);
    dbRef.on('value', (response) => {
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
      <Wrapper>
        <PageHeading>Latest Tourney</PageHeading>
        <CardList>
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
        </CardList>
      </Wrapper>
    )
  }
}

export default LatestTourney;