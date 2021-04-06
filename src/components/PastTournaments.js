import React, { Component } from 'react';
import { Card, CardList } from '../styles/Card';
import Table from '../styles/Table';
import Wrapper from '../styles/Wrapper';
import PageHeading from '../styles/PageHeading';
import BodyText from '../styles/BodyText';
import { firebase, tournamentData } from '../firebase';
import { byLatestTourney } from '../helper-functions/sortingFunctions';

class PastTournaments extends Component {
  constructor() {
    super();
    this.state = {
      tournamentData: []
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref(`${tournamentData}`);
    dbRef.on('value', (response) => {
      const data = response.val();
      // Sort data to get latest tournament
      const sortedData = data.sort(byLatestTourney);
      let newData = [];
      newData = [...sortedData];
      // eslint-disable-next-line
      const cleanedData = newData.filter((tourney) => {
        if (tourney !== undefined && tourney.id >= 1) {
          return tourney;
        }
      })
      this.setState({
        tournamentData: cleanedData,
      })
    });
  }

  render() {
    return (
      <Wrapper>
        <PageHeading>Results</PageHeading>
        <BodyText>Tournaments are cumulative scores over three randomly picked courses.</BodyText>
        <CardList>
          {(this.state.tournamentData).map((tournament) => {
              return (
                <Card key={tournament.id}>
                  <h3>Tournament #{tournament.id}</h3>
                  <p>{tournament.date}</p>
                  <Table className="tournament">
                    <caption className="show-for-sr">Tournament results</caption>
                    <thead>
                      <tr>
                        <th>Player</th>
                        <th><span className="show-for-small-vertical">1</span><span className="hide-for-small-vertical">{tournament.map1_name}</span><br/>({tournament.map1_par})</th>
                        <th><span className="show-for-small-vertical">2</span><span className="hide-for-small-vertical">{tournament.map2_name}</span><br/>({tournament.map2_par})</th>
                        <th><span className="show-for-small-vertical">3</span><span className="hide-for-small-vertical">{tournament.map3_name}</span><br/>({tournament.map3_par})</th>
                        <th>Total<br/>({tournament.total_par})</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr data-immaculate-victory={tournament.immaculate_victory}>
                        <td>{tournament.first_player}</td>
                        <td data-below-par={tournament.first_map1_under_par}>{tournament.first_map1_score}</td>
                        <td data-below-par={tournament.first_map2_under_par}>{tournament.first_map2_score}</td>
                        <td data-below-par={tournament.first_map3_under_par}>{tournament.first_map3_score}</td>
                        <td data-below-par={tournament.first_total_under_par}>{tournament.first_total}</td>
                      </tr>
                      <tr>
                        <td>{tournament.second_player}</td>
                        <td data-below-par={tournament.second_map1_under_par}>{tournament.second_map1_score}</td>
                        <td data-below-par={tournament.second_map2_under_par}>{tournament.second_map2_score}</td>
                        <td data-below-par={tournament.second_map3_under_par}>{tournament.second_map3_score}</td>
                        <td data-below-par={tournament.second_total_under_par}>{tournament.second_total}</td>
                      </tr>
                      <tr>
                        <td>{tournament.third_player}</td>
                        <td data-below-par={tournament.third_map1_under_par}>{tournament.third_map1_score}</td>
                        <td data-below-par={tournament.third_map2_under_par}>{tournament.third_map2_score}</td>
                        <td data-below-par={tournament.third_map3_under_par}>{tournament.third_map3_score}</td>
                        <td data-below-par={tournament.third_total_under_par}>{tournament.third_total}</td>
                      </tr>
                      {
                        tournament.total_players > 3 && (
                          <tr>
                            <td>{tournament.fourth_player}</td>
                            <td data-below-par={tournament.fourth_map1_under_par}>{tournament.fourth_map1_score}</td>
                            <td data-below-par={tournament.fourth_map2_under_par}>{tournament.fourth_map2_score}</td>
                            <td data-below-par={tournament.fourth_map3_under_par}>{tournament.fourth_map3_score}</td>
                            <td data-below-par={tournament.fourth_total_under_par}>{tournament.fourth_total}</td>
                          </tr>
                        )
                      }
                    </tbody>
                  </Table>
                </Card>
              )
          })}
        </CardList>
      </Wrapper>
    )
  }
}

export default PastTournaments;
