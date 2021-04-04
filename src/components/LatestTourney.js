import React, { Component } from 'react';
import { Card, CardHeading } from '../styles/Card';
import Table from '../styles/Table';
import { firebase, tournamentData } from '../firebase';
import { byLatestTourney } from '../helper-functions/sortingFunctions';
import { Link } from 'react-router-dom';

class LatestTourney extends Component {
  constructor() {
    super();
    this.state = {
      tournamentData: {}
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref(`${tournamentData}`);
    dbRef.on('value', (response) => {
      const data = response.val();
      // Sort data to get latest tournament
      const sortedData = data.sort(byLatestTourney);
      let newData = {};
      newData = sortedData[0];
      this.setState({
        tournamentData: newData,
      })
    });
  }

  render() {
    return (
      <>
        <Card>
          <CardHeading>Latest Result</CardHeading>
          <h3>Tournament #{this.state.tournamentData.id}</h3>
          <p>{this.state.tournamentData.date}</p>
          <Table className="tournament">
            <tbody>
              <tr>
                <th>Player</th>
                <th><span className="show-for-small-vertical">Course 1</span><span className="hide-for-small-vertical">{this.state.tournamentData.map1_name}</span><br/>({this.state.tournamentData.map1_par})</th>
                <th><span className="show-for-small-vertical">Course 2</span><span className="hide-for-small-vertical">{this.state.tournamentData.map2_name}</span><br/>({this.state.tournamentData.map2_par})</th>
                <th><span className="show-for-small-vertical">Course 3</span><span className="hide-for-small-vertical">{this.state.tournamentData.map3_name}</span><br/>({this.state.tournamentData.map3_par})</th>
                <th>Total<br/>({this.state.tournamentData.total_par})</th>
              </tr>
              <tr>
                <td>{this.state.tournamentData.first_player}</td>
                <td data-below-par={this.state.tournamentData.first_map1_under_par}>{this.state.tournamentData.first_map1_score}</td>
                <td data-below-par={this.state.tournamentData.first_map2_under_par}>{this.state.tournamentData.first_map2_score}</td>
                <td data-below-par={this.state.tournamentData.first_map3_under_par}>{this.state.tournamentData.first_map3_score}</td>
                <td data-below-par={this.state.tournamentData.first_total_under_par}>{this.state.tournamentData.first_total}</td>
              </tr>
              <tr>
                <td>{this.state.tournamentData.second_player}</td>
                <td data-below-par={this.state.tournamentData.second_map1_under_par}>{this.state.tournamentData.second_map1_score}</td>
                <td data-below-par={this.state.tournamentData.second_map2_under_par}>{this.state.tournamentData.second_map2_score}</td>
                <td data-below-par={this.state.tournamentData.second_map3_under_par}>{this.state.tournamentData.second_map3_score}</td>
                <td data-below-par={this.state.tournamentData.second_total_under_par}>{this.state.tournamentData.second_total}</td>
              </tr>
              <tr>
                <td>{this.state.tournamentData.third_player}</td>
                <td data-below-par={this.state.tournamentData.third_map1_under_par}>{this.state.tournamentData.third_map1_score}</td>
                <td data-below-par={this.state.tournamentData.third_map2_under_par}>{this.state.tournamentData.third_map2_score}</td>
                <td data-below-par={this.state.tournamentData.third_map3_under_par}>{this.state.tournamentData.third_map3_score}</td>
                <td data-below-par={this.state.tournamentData.third_total_under_par}>{this.state.tournamentData.third_total}</td>
              </tr>
              {
                this.state.tournamentData.total_players > 3 && (
                  <tr>
                    <td>{this.state.tournamentData.fourth_player}</td>
                    <td data-below-par={this.state.tournamentData.fourth_map1_under_par}>{this.state.tournamentData.fourth_map1_score}</td>
                    <td data-below-par={this.state.tournamentData.fourth_map2_under_par}>{this.state.tournamentData.fourth_map2_score}</td>
                    <td data-below-par={this.state.tournamentData.fourth_map3_under_par}>{this.state.tournamentData.fourth_map3_score}</td>
                    <td data-below-par={this.state.tournamentData.fourth_total_under_par}>{this.state.tournamentData.fourth_total}</td>
                  </tr>
                )
              }
            </tbody>
          </Table>
          <Link to="/results">See more results <i className="fa fa-caret-right"></i></Link>
        </Card>
      </>
    )
  }
}

export default LatestTourney;
