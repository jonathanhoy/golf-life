import React, { Component } from 'react';
import { Card, CardList } from '../styles/Card';
import Wrapper from '../styles/Wrapper';
import PageHeading from '../styles/PageHeading';
import BodyText from '../styles/BodyText';
import { firebase, maps } from '../firebase';
import { 
  byAvgDifferentialIncreasing, 
  byAvgDifferentialDecreasing, 
  byAvgScoreIncreasing, 
  byAvgScoreDecreasing,
  byParIncreasing,
  byParDecreasing,
  byLowestScoreIncreasing,
  byLowestScoreDecreasing,
  byHighestScoreIncreasing,
  byHighestScoreDecreasing,
} from '../helper-functions/sortingFunctions';

class Maps extends Component {
  constructor() {
    super();
    this.state = {
      meta: []
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref(`${maps}`);
    dbRef.on('value', (response) => {
      const data = response.val();
      // Sort data to get latest tournament
      const sortedData = data.sort(byAvgDifferentialIncreasing);
      let newMeta = [];
      newMeta = [...sortedData];
      // eslint-disable-next-line
      const cleanedMeta = newMeta
      .filter((course) => {
        if (course !== undefined) {
          return course;
        }
      })
      .map((course) => {
        if (typeof course.avg_differential === 'number' && typeof course.avg_score === 'number') {
          course.avg_differential = course.avg_differential.toFixed(2);
          course.avg_score = course.avg_score.toFixed(2);
          return course;
        }
      })
      this.setState({
        meta: cleanedMeta,
      })
    });
  }

  handleClick = (e) => {
    const id = e.target.id;
    let newSortedArr = [];
    let temp = this.state.meta;
    if (id === "byAvgDifferentialIncreasing") {
      temp.sort(byAvgDifferentialIncreasing);
    } else if (id === "byAvgDifferentialDecreasing") {
      temp.sort(byAvgDifferentialDecreasing);
    } else if (id === "byAvgScoreIncreasing") {
      temp.sort(byAvgScoreIncreasing);
    } else if (id === "byAvgScoreDecreasing") {
      temp.sort(byAvgScoreDecreasing);
    } else if (id === "byParIncreasing") {
      temp.sort(byParIncreasing);
    } else if (id === "byParDecreasing") {
      temp.sort(byParDecreasing);
    } else if (id === "byLowestScoreIncreasing") {
      temp.sort(byLowestScoreIncreasing);
    } else if (id === "byLowestScoreDecreasing") {
      temp.sort(byLowestScoreDecreasing);
    } else if (id === "byHighestScoreIncreasing") {
      temp.sort(byHighestScoreIncreasing);
    } else if (id === "byHighestScoreDecreasing") {
      temp.sort(byHighestScoreDecreasing);
    }
    newSortedArr = temp;
    this.setState({
      meta: newSortedArr,
    })
  }

  render() {
    return (
      <Wrapper>
        <PageHeading>Map Statistics</PageHeading>
        <BodyText>This page provides statistics for each map. Click the buttons under each heading to sort the table accordingly. Average Differential is the default sorting method and is the best indicator for determining the most difficult maps. <span className="show-for-small-vertical">Rotate your phone or view on a desktop for more statistics.</span></BodyText>
        <Card>
          <table className="maps">
            <tbody>
              <tr>
                <th><span>Map</span></th>
                <th><span>Par</span></th>
                <th><span>Avg. Score</span></th>
                <th><span className="hide-for-small-vertical">Avg. Differential</span><span className="show-for-small-vertical">Avg. Diff</span></th>
                <th><span>Lowest Score</span></th>
                <th><span>Highest Score</span></th>
                <th><span>Rounds Played</span></th>
              </tr>
              <tr>
                <th></th>
                <th>
                  <div className="button-group">
                    <button id="byParDecreasing" onClick={this.handleClick}><i className="fas fa-caret-up "></i></button>
                    <button id="byParIncreasing" onClick={this.handleClick}><i className="fas fa-caret-down "></i></button>
                  </div>
                </th>
                <th>
                  <div className="button-group">
                    <button id="byAvgScoreDecreasing" onClick={this.handleClick}><i className="fas fa-caret-up "></i></button>
                    <button id="byAvgScoreIncreasing" onClick={this.handleClick}><i className="fas fa-caret-down "></i></button>
                  </div>
                </th>
                <th>
                    <div className="button-group">
                      <button id="byAvgDifferentialDecreasing" onClick={this.handleClick}><i className="fas fa-caret-up "></i></button>
                      <button id="byAvgDifferentialIncreasing" onClick={this.handleClick}><i className="fas fa-caret-down "></i></button>
                    </div>
                </th>
                <th>
                    <div className="button-group">
                      <button id="byLowestScoreDecreasing" onClick={this.handleClick}><i className="fas fa-caret-up "></i></button>
                      <button id="byLowestScoreIncreasing" onClick={this.handleClick}><i className="fas fa-caret-down "></i></button>
                    </div>
                </th>
                <th>
                  <div className="button-group">
                    <button id="byHighestScoreDecreasing" onClick={this.handleClick}><i className="fas fa-caret-up "></i></button>
                    <button id="byHighestScoreIncreasing" onClick={this.handleClick}><i className="fas fa-caret-down "></i></button>
                  </div>
                </th>
                <th></th>
              </tr>
              {
                this.state.meta.map((course) => {
                  return (
                    <tr key={course.map}>
                      <td>{course.map}</td>
                      <td>{course.par}</td>
                      <td>{course.avg_score}</td>
                      <td>{course.avg_differential}</td>
                      <td>{course.min_score}</td>
                      <td>{course.max_score}</td>
                      <td>{course.rounds_played}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </Card>
      </Wrapper>
    )
  }
}

export default Maps;
