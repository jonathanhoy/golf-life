import React, { Component } from 'react';
import { Card, CardList } from '../styles/Card';
import Table from '../styles/Table';
import Wrapper from '../styles/Wrapper';
import PageHeading from '../styles/PageHeading';
import BodyText from '../styles/BodyText';
import { firebase, playerData } from '../firebase';
import { byWinPercentage } from '../helper-functions/sortingFunctions';
import format from '../helper-functions/format';

class Players extends Component {
  constructor() {
    super();
    this.state = {
      playerData: []
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref(`${playerData}`);
    dbRef.on('value', (response) => {
      const data = response.val();
      // eslint-disable-next-line
      const cleanedData = data.filter((player) => {
        if (player !== undefined) {
          player.avg_differential = format(Math.floor(player.avg_differential));
          player.win_rate = player.win_rate.toFixed(3);
          return player;
        }
      })
      const sortedData = cleanedData.sort(byWinPercentage);
      this.setState({
        playerData: sortedData,
      })
    });
  }

  render() {
    return (
      <Wrapper>
        <PageHeading>Players</PageHeading>
        <BodyText>Click on a player's name to see more information about that player.</BodyText>
        <Card>
        <Table className="maps">
            <caption className="show-for-sr">Courses</caption>
            <thead>
              <tr>
                <th><span>Player</span></th>
                <th><span>Wins</span></th>
                <th><span>Tournaments Played</span></th>
                <th><span>Win %</span></th>
                <th><span>Average Margin</span></th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.playerData.map((player) => {
                  return (
                    <tr key={player.id}>
                      <td>{player.player}</td>
                      <td>{player.total_wins}</td>
                      <td>{player.games_played}</td>
                      <td>{player.win_rate}</td>
                      <td>{player.avg_differential}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </Card>
      </Wrapper>
    )
  }
}

export default Players;
