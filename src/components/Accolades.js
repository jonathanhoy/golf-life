import React from 'react';
import styled from 'styled-components';
import { Card, CardHeading } from '../styles/Card';
import variables from '../styles/variables';
import { firebase, roundData, accoladesBestTourneyResultData } from '../firebase';
import { byParDifferential, byFirstPlayerTotalMargin } from '../helper-functions/sortingFunctions';
import { Link } from 'react-router-dom';
import format from '../helper-functions/format';
import moment from 'moment';

class Accolades extends React.Component {
  constructor() {
    super();
    this.state = {
      roundData: [],
      tourneyResultData: [],
    }
  }

  componentDidMount() {
    const getRoundData = firebase.database().ref(`${roundData}`);
    getRoundData.on('value', (response) => {
      const data = response.val();
      const sortedData = data.sort(byParDifferential);
      const cleanedData = sortedData.slice(0, 3);
      cleanedData.map((item) => {
        item.date = moment(item.date).format('M/D/YY');
        item.image = item.map.toLowerCase().replace(" ", "-");
        return item;
      });
      let newData = [];
      newData = cleanedData;
      this.setState({
        roundData: newData,
      })
    });

    const getTourneyResultData = firebase.database().ref(`${accoladesBestTourneyResultData}`);
    getTourneyResultData.on('value', (response) => {
      const data = response.val();
      const sortedData = data.sort(byFirstPlayerTotalMargin);
      const cleanedData = sortedData.slice(0, 3);
      let newData = [];
      newData = cleanedData;
      this.setState({
        tourneyResultData: newData,
      })
    });
  }

  render() {
    return (
      <>
        <Card>
          <CardHeading>Accolades</CardHeading>
          <AccoladesContainer>
            <h3>Best Courses</h3>
            <AccoladeList className="course">
              {
                this.state.roundData.map((item, index) => {
                  return (
                    <li className={`accolade-item accolade-item-${index + 1}`} key={item.data}>
                      <span>
                        <p className="player">{item.player}</p>
                        <p className="margin">{item.differential}</p>
                      </span>
                      <span>
                        <p className="map">{item.map}</p>
                      </span>
                      <span>
                        <p className="tournament"><span><span className="show-for-small">Tournament</span> #{item.tourney_id}</span><span>Par {item.map_par}</span></p>
                      </span>
                    </li>
                  )
                })
              }
            </AccoladeList>
            <Link to="/courses">See more courses <i className="fa fa-caret-right"></i></Link>
          </AccoladesContainer>
          <AccoladesContainer>
            <h3>Best Tournaments</h3>
            <AccoladeList className="tournament">
              {
                this.state.tourneyResultData.map((item, index) => {
                  return (
                    <li className={`accolade-item accolade-item-${index + 1}`} key={item.data}>
                      <span>
                        <p className="player">{item.first_player}</p>
                        <p className="margin">{format(item.first_total_differential)}</p>
                      </span>
                      <span>
                        <ul>
                          <li><p className="map">{item.map1_name}</p></li>
                          <li><p className="map">{item.map2_name}</p></li>
                          <li><p className="map">{item.map3_name}</p></li>
                        </ul>
                      </span>
                      <span>
                        <p className="tournament"><span><span className="show-for-small">Tournament</span> #{item.id}</span><span>Par {item.total_par}</span></p>
                      </span>
                    </li>
                  )
                })
              }
            </AccoladeList>
            <Link to="/results">See more results <i className="fa fa-caret-right"></i></Link>
          </AccoladesContainer>
        </Card>
      </>
    )
  }
}

const AccoladeList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 0;
  .accolade-item {
    &-1 {
      background-color: ${variables.gold};
      background-image: ${variables.goldGradient};
    }
    &-2 {
      background-color: ${variables.silver};
      background-image: ${variables.silverGradient};
    }
    &-3 {
      background-color: ${variables.bronze};
      background-image: ${variables.bronzeGradient};
    }
    p {
      padding: 0 0.5rem;
      font-weight: 400;
      text-align: center;
    }
    img {
      display: block;
      width: 100%;
    }
    ul {
      list-style: none;
    }
    .player {
      margin-top: 1.5rem;
      font-weight: 700;
      text-align: center;
      font-size: 1.25rem;
    }
    .margin {
      font-weight: 700;
      font-size: 2.5rem;
      margin: 1.5rem;
      text-align: center;
    }
    .tournament {
      display: flex;
      justify-content: space-between;
      background: rgba(0,0,0,0.1);
      margin: 0;
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
  }
  @media (max-width: ${variables.sm}) {
    grid-template-columns: 1fr;
    .accolade-item {
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr;
      span:nth-child(1) {
        grid-column: 1 / 2;
      }
      span:nth-child(2) {
        grid-column: 2 / 3;
      }
      span:nth-child(3) {
        grid-row: 2 / 3;
        grid-column: 1 / 3;
      }
      .player {
        margin-top: 1rem;
      }
      .tournament {
        margin-top: 0;
      }
    }
  }
`;

const AccoladesContainer = styled.div`
  margin-top: 2rem;
`;

export default Accolades;