import React, { Component } from 'react';
import { Card } from '../styles/Card';
import Table from '../styles/Table';
import Wrapper from '../styles/Wrapper';
import PageHeading from '../styles/PageHeading';
import BodyText from '../styles/BodyText';
import { SortButton } from '../styles/Button';
import { firebase, playerData } from '../firebase';
import { 
  byWinsIncreasing, 
  byWinsDecreasing, 
  byWinPercentageIncreasing, 
  byWinPercentageDecreasing,
  byTournamentsPlayedIncreasing,
  byTournamentsPlayedDecreasing,
  byMarginIncreasing,
  byMarginDecreasing,
  byLowestMarginIncreasing,
  byLowestMarginDecreasing,
 } from '../helper-functions/sortingFunctions';
import format from '../helper-functions/format';

class Players extends Component {
  constructor() {
    super();
    this.state = {
      playerData: [],
      active: 'byWinsIncreasing',
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
      const sortedData = cleanedData.sort(byWinPercentageIncreasing);
      this.setState({
        playerData: sortedData,
      })
    });
  }

  handleClick = (e) => {
    const id = e.target.id;
    let newSortedArr = [];
    let temp = this.state.playerData;
     if (id === "byWinsIncreasing") {
      temp.sort(byWinsIncreasing);
    } else if (id === "byWinsDecreasing") {
      temp.sort(byWinsDecreasing);
    } else if (id === "byWinPercentageDecreasing") {
      temp.sort(byWinPercentageDecreasing);
    } else if (id === "byWinPercentageIncreasing") {
      temp.sort(byWinPercentageIncreasing);
    } else if (id === "byTournamentsPlayedIncreasing") {
      temp.sort(byTournamentsPlayedIncreasing);
    } else if (id === "byTournamentsPlayedDecreasing") {
      temp.sort(byTournamentsPlayedDecreasing);
    } else if (id === "byMarginIncreasing") {
      temp.sort(byMarginIncreasing);
    } else if (id === "byMarginDecreasing") {
      temp.sort(byMarginDecreasing);
    } else if (id === "byLowestMarginIncreasing") {
      temp.sort(byLowestMarginIncreasing);
    } else if (id === "byLowestMarginDecreasing") {
      temp.sort(byLowestMarginDecreasing);
    }
    newSortedArr = temp;
    this.setState({
      playerData: newSortedArr,
      active: id,
    })
  }

  render() {
    return (
      <Wrapper>
        <PageHeading>Player Overview</PageHeading>
        <BodyText><span className="show-for-small">Tap</span><span className="hide-for-small">Click</span> the arrows under each heading to sort the table accordingly. <span className="show-for-small-vertical">Rotate your phone or view on a computer for more data.</span></BodyText>
        <Card>
        <Table className="players">
            <caption className="show-for-sr">Players</caption>
            <thead>
              <tr>
                <th><span>Player</span></th>
                <th><span>Wins</span></th>
                <th><span>Tournaments Played</span></th>
                <th><span>Win %</span></th>
                <th><span>Average Margin (Course)</span></th>
                <th><span>Lowest Margin (Course)</span></th>
              </tr>
              <tr>
                <th><span className="show-for-sr">empty cell</span></th>
                <th>
                  <div className="button-group">
                    <SortButton id="byWinsIncreasing" active={this.state.active} onClick={this.handleClick}><i className="fas fa-caret-up "></i></SortButton>
                    <SortButton id="byWinsDecreasing" active={this.state.active} onClick={this.handleClick}><i className="fas fa-caret-down "></i></SortButton>
                  </div>
                </th>
                <th>
                  <div className="button-group">
                    <SortButton id="byTournamentsPlayedIncreasing" active={this.state.active} onClick={this.handleClick}><i className="fas fa-caret-up "></i></SortButton>
                    <SortButton id="byTournamentsPlayedDecreasing" active={this.state.active} onClick={this.handleClick}><i className="fas fa-caret-down "></i></SortButton>
                  </div>
                </th>
                <th>
                  <div className="button-group">
                    <SortButton id="byWinPercentageIncreasing" active={this.state.active} onClick={this.handleClick}><i className="fas fa-caret-up "></i></SortButton>
                    <SortButton id="byWinPercentageDecreasing" active={this.state.active} onClick={this.handleClick}><i className="fas fa-caret-down "></i></SortButton>
                  </div>
                </th>
                <th>
                  <div className="button-group">
                    <SortButton id="byMarginIncreasing" active={this.state.active} onClick={this.handleClick}><i className="fas fa-caret-up "></i></SortButton>
                    <SortButton id="byMarginDecreasing" active={this.state.active} onClick={this.handleClick}><i className="fas fa-caret-down "></i></SortButton>
                  </div>
                </th>
                <th>
                  <div className="button-group">
                    <SortButton id="byLowestMarginIncreasing" active={this.state.active} onClick={this.handleClick}><i className="fas fa-caret-up "></i></SortButton>
                    <SortButton id="byLowestMarginDecreasing" active={this.state.active} onClick={this.handleClick}><i className="fas fa-caret-down "></i></SortButton>
                  </div>
                </th>
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
                      <td>{player.lowest_margin}</td>
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
