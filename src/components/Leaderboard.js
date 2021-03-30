import React, { Component } from 'react';
import { Card, CardHeading } from '../styles/Card';
import Table from '../styles/Table';
import { firebase, wins } from '../firebase';
import { byWinPercentage } from '../helper-functions/sortingFunctions';
import { Link } from 'react-router-dom';

class Leaderboard extends Component {
  constructor() {
    super();
    this.state = {
      wins: []
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref(`${wins}`);
    dbRef.on('value', (response) => {
      const data = response.val();
      // Sort data to get latest tournament
      const sortedData = data.sort(byWinPercentage);
      let newWins = {};
      // eslint-disable-next-line
      const filteredWins = sortedData.filter((item) => {
          if (item !== null) {
              return item;
          };
      })
      newWins = filteredWins;
      this.setState({
        wins: newWins,
      })
    });
  }

  render() {
    return (
      <>
        <Card>
          <CardHeading>Standings</CardHeading>
          <Table className="wins">
            <tbody>
              <tr>
                <th>Player</th>
                <th>Wins</th>
                <th>Tournaments played</th>
                <th>Win %</th>
              </tr>
              {
                this.state.wins.map((player) => {
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