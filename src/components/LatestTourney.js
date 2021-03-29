import React, { Component } from 'react';
import { Card, CardHeading } from '../styles/Card';
import { firebase, meta } from '../firebase';
import { byLatestTourney } from '../sortingFunctions';
import { Link } from 'react-router-dom';

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
      <>
        <Card>
          <CardHeading>Latest Result</CardHeading>
          <h3>Tournament #{this.state.meta.tourney_id}</h3>
          <p>{this.state.meta.date}</p>
          <table className="tournament">
            <tbody>
              <tr>
                <th>Player</th>
                <th><span className="show-for-small-vertical">Map 1</span><span className="hide-for-small-vertical">{this.state.meta.map1_name}</span><br/>({this.state.meta.map1_par})</th>
                <th><span className="show-for-small-vertical">Map 2</span><span className="hide-for-small-vertical">{this.state.meta.map2_name}</span><br/>({this.state.meta.map2_par})</th>
                <th><span className="show-for-small-vertical">Map 3</span><span className="hide-for-small-vertical">{this.state.meta.map3_name}</span><br/>({this.state.meta.map3_par})</th>
                <th>Total<br/>({this.state.meta.total_par})</th>
              </tr>
              <tr>
                <td>{this.state.meta.first_player}</td>
                <td data-below-par={this.state.meta.first_map1_under_par}>{this.state.meta.first_map1_score}</td>
                <td data-below-par={this.state.meta.first_map2_under_par}>{this.state.meta.first_map2_score}</td>
                <td data-below-par={this.state.meta.first_map3_under_par}>{this.state.meta.first_map3_score}</td>
                <td data-below-par={this.state.meta.first_total_under_par}>{this.state.meta.first_total}</td>
              </tr>
              <tr>
                <td>{this.state.meta.second_player}</td>
                <td data-below-par={this.state.meta.second_map1_under_par}>{this.state.meta.second_map1_score}</td>
                <td data-below-par={this.state.meta.second_map2_under_par}>{this.state.meta.second_map2_score}</td>
                <td data-below-par={this.state.meta.second_map3_under_par}>{this.state.meta.second_map3_score}</td>
                <td data-below-par={this.state.meta.second_total_under_par}>{this.state.meta.second_total}</td>
              </tr>
              <tr>
                <td>{this.state.meta.third_player}</td>
                <td data-below-par={this.state.meta.third_map1_under_par}>{this.state.meta.third_map1_score}</td>
                <td data-below-par={this.state.meta.third_map2_under_par}>{this.state.meta.third_map2_score}</td>
                <td data-below-par={this.state.meta.third_map3_under_par}>{this.state.meta.third_map3_score}</td>
                <td data-below-par={this.state.meta.third_total_under_par}>{this.state.meta.third_total}</td>
              </tr>
              {
                this.state.meta.total_players > 3 && (
                  <tr>
                    <td>{this.state.meta.fourth_player}</td>
                    <td data-below-par={this.state.meta.fourth_map1_under_par}>{this.state.meta.fourth_map1_score}</td>
                    <td data-below-par={this.state.meta.fourth_map2_under_par}>{this.state.meta.fourth_map2_score}</td>
                    <td data-below-par={this.state.meta.fourth_map3_under_par}>{this.state.meta.fourth_map3_score}</td>
                    <td data-below-par={this.state.meta.fourth_total_under_par}>{this.state.meta.fourth_total}</td>
                  </tr>
                )
              }
            </tbody>
          </table>
          <Link to="/tournaments">See more tournaments</Link>
        </Card>
      </>
    )
  }
}

export default LatestTourney;
