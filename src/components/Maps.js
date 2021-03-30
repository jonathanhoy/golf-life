import React, { Component } from 'react';
import { Card } from '../styles/Card';
import Table from '../styles/Table';
import Wrapper from '../styles/Wrapper';
import PageHeading from '../styles/PageHeading';
import BodyText from '../styles/BodyText';
import { SortButton } from '../styles/Button';
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
      meta: [],
      active: 'byAvgDifferentialIncreasing',
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
      const cleanedMeta = newMeta
      // eslint-disable-next-line
      .filter((course) => {
        if (course !== undefined) {
          return course;
        }
      })
      // eslint-disable-next-line
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
      active: id,
    })
  }

  render() {
    return (
      <Wrapper>
        <PageHeading>Map Statistics</PageHeading>
        <BodyText>Click the buttons under each heading to sort the table accordingly. Average Differential is the default sorting method. <span className="show-for-small-vertical">Rotate your phone or view on a desktop for more statistics.</span></BodyText>
        <Card>
          <Table className="maps">
            <tbody>
              <tr>
                <th><span>Map</span></th>
                <th><span>Par</span></th>
                <th><span>Avg. Score</span></th>
                <th><span className="hide-for-small">Avg. Differential</span><span className="show-for-small">Avg. Diff</span></th>
                <th><span>Lowest Score</span></th>
                <th><span>Highest Score</span></th>
                <th><span>Rounds Played</span></th>
              </tr>
              <tr>
                <th></th>
                <th>
                  <div className="button-group">
                    <SortButton id="byParDecreasing" active={this.state.active} onClick={this.handleClick}><i className="fas fa-caret-up "></i></SortButton>
                    <SortButton id="byParIncreasing" active={this.state.active} onClick={this.handleClick}><i className="fas fa-caret-down "></i></SortButton>
                  </div>
                </th>
                <th>
                  <div className="button-group">
                    <SortButton id="byAvgScoreDecreasing" active={this.state.active} onClick={this.handleClick}><i className="fas fa-caret-up "></i></SortButton>
                    <SortButton id="byAvgScoreIncreasing" active={this.state.active} onClick={this.handleClick}><i className="fas fa-caret-down "></i></SortButton>
                  </div>
                </th>
                <th>
                    <div className="button-group">
                      <SortButton id="byAvgDifferentialDecreasing" active={this.state.active} onClick={this.handleClick}><i className="fas fa-caret-up "></i></SortButton>
                      <SortButton id="byAvgDifferentialIncreasing" active={this.state.active} onClick={this.handleClick}><i className="fas fa-caret-down "></i></SortButton>
                    </div>
                </th>
                <th>
                    <div className="button-group">
                      <SortButton id="byLowestScoreDecreasing" active={this.state.active} onClick={this.handleClick}><i className="fas fa-caret-up "></i></SortButton>
                      <SortButton id="byLowestScoreIncreasing" active={this.state.active} onClick={this.handleClick}><i className="fas fa-caret-down "></i></SortButton>
                    </div>
                </th>
                <th>
                  <div className="button-group">
                    <SortButton id="byHighestScoreDecreasing" active={this.state.active} onClick={this.handleClick}><i className="fas fa-caret-up "></i></SortButton>
                    <SortButton id="byHighestScoreIncreasing" active={this.state.active} onClick={this.handleClick}><i className="fas fa-caret-down "></i></SortButton>
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
          </Table>
        </Card>
      </Wrapper>
    )
  }
}

export default Maps;
