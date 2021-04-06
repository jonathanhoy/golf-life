import React, { Component } from 'react';
import { Card, CardHeading } from '../styles/Card';
import Table from '../styles/Table';
import { firebase, playerData } from '../firebase';
import { byWinsIncreasing } from '../helper-functions/sortingFunctions';
import { Link } from 'react-router-dom';

class Leaderboard extends Component {
  constructor() {
    super();
    this.state = {
      leaderboardData: []
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref(`${playerData}`);
    dbRef.on('value', (response) => {
      const data = response.val();
      // Sort data to get latest tournament
      const sortedData = data.sort(byWinsIncreasing);
      let newData = {};
      // eslint-disable-next-line
      const filteredData = sortedData.filter((item) => {
          if (item !== null) {
              return item;
          };
      })
      newData = filteredData;
      this.setState({
        leaderboardData: newData,
      })
    });
  }

  render() {
    return (
      <>
        <Card>
          <CardHeading>Standings</CardHeading>
          <Table className="wins">
            <caption className="show-for-sr">Leaderboard</caption>
            <thead>
              <tr>
                <th>Player</th>
                <th>Wins</th>
                <th>Tournaments played</th>
                <th>Win %</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.leaderboardData.map((player) => {
                  return (
                    <tr key={player.player}>
                      <td>{player.player}</td>
                      <td>{player.total_wins}</td>
                      <td>{player.games_played}</td>
                      <td>{(player.win_rate).toFixed(3)}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
          <Link to="/players">See more players <i className="fa fa-caret-right"></i></Link>
        </Card>
      </>
    )
  }
}

export default Leaderboard;