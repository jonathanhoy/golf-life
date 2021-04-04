import React, { Component } from 'react';
import { Card } from '../styles/Card';
import Table from '../styles/Table';
import Wrapper from '../styles/Wrapper';
import PageHeading from '../styles/PageHeading';
import BodyText from '../styles/BodyText';
import Legend from '../styles/Legend';
import { SortButton } from '../styles/Button';
import { firebase, mapsData } from '../firebase';
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
  byRoundsPlayedIncreasing,
  byRoundsPlayedDecreasing,
} from '../helper-functions/sortingFunctions';

class Maps extends Component {
  constructor() {
    super();
    this.state = {
      mapsData: [],
      active: 'byAvgDifferentialIncreasing',
      legendVisible: false,
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref(`${mapsData}`);
    dbRef.on('value', (response) => {
      const data = response.val();
      // Sort data to get latest tournament
      const sortedData = data.sort(byAvgDifferentialIncreasing);
      let newData = [];
      newData = [...sortedData];
      const cleanedData = newData
      // eslint-disable-next-line
      .filter((course) => {
        if (course !== undefined) {
          return course;
        }
      })
      // eslint-disable-next-line
      .map((course) => {
        if (typeof course.avg_differential === 'number' && typeof course.avg_score === 'number') {
          course.avg_differential = Math.ceil(course.avg_differential);
          course.avg_score = Math.ceil(course.avg_score);
          return course;
        }
      })
      this.setState({
        mapsData: cleanedData,
      })
    });
  }

  handleClick = (e) => {
    const id = e.target.id;
    let newSortedArr = [];
    let temp = this.state.mapsData;
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
    } else if (id === "byRoundsPlayedIncreasing") {
      temp.sort(byRoundsPlayedIncreasing);
    } else if (id === "byRoundsPlayedDecreasing") {
      temp.sort(byRoundsPlayedDecreasing);
    }
    newSortedArr = temp;
    this.setState({
      mapsData: newSortedArr,
      active: id,
    })
  }

  toggleLegend = () => {
    this.setState(prevState => (
      {
        legendVisible: !prevState.legendVisible,
      }
    ))
  }

  format = (score, par = null) => {
    if (par === null) {
      // formatting avg diff
      const res = score;
      if (res > 0) {
        return `+${res}`;
      }
      if (res < 0) {
        return `-${res}`;
      }
      return `E`;
    } else if (par !== null) {
      // formatting lowest score diff
      const res = score - par;
      if (res > 0) {
        return `${score} (+${res})`;
      }
      if (res < 0) {
        return `${score} (${res})`;
      }
      return `${score} (E)`;
    }
  }

  render() {
    return (
      <Wrapper>
        <PageHeading>Course Overview</PageHeading>
        <BodyText><span className="show-for-small">Tap</span><span className="hide-for-small">Click</span> the arrows under each heading to sort the table accordingly. <span className="show-for-small-vertical">Rotate your phone or view on a computer for more data.</span></BodyText>
        <Card>
          <Legend items={5} legendVisible={this.state.legendVisible}>
            <button onClick={this.toggleLegend}>{this.state.legendVisible ? 'Hide legend' : 'Show legend' }</button>
            <ul>
              <li>
                <p><span>Par</span> Total par for a course.</p>
              </li>
              <li>
                <p><span>Average Score</span> Average score for all players for a course.</p>
              </li>
              <li>
                <p><span>Average Margin</span> Average score's difference above or below the par for a course.</p>
              </li>
              <li>
                <p><span>Lowest/Highest Score</span> Single lowest/highest recorded score for a course.</p>
              </li>
              <li>
                <p><span>Rounds Played</span> Total number of times a course has been played by all players.</p>
              </li>
            </ul>
          </Legend>
          <Table className="maps">
            <caption className="show-for-sr">Courses</caption>
            <thead>
              <tr>
                <th><span>Course</span></th>
                <th><span>Par</span></th>
                <th><span>Average Score</span></th>
                <th><span>Average Margin</span></th>
                <th><span>Lowest Score</span></th>
                <th><span>Highest Score</span></th>
                <th><span>Rounds Played</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th><span className="show-for-sr">empty cell</span></th>
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
                <th>
                  <div className="button-group">
                    <SortButton id="byRoundsPlayedDecreasing" active={this.state.active} onClick={this.handleClick}><i className="fas fa-caret-up "></i></SortButton>
                    <SortButton id="byRoundsPlayedIncreasing" active={this.state.active} onClick={this.handleClick}><i className="fas fa-caret-down "></i></SortButton>
                  </div>
                </th>
              </tr>
              {
                this.state.mapsData.map((course) => {
                  return (
                    <tr key={course.map}>
                      <td>{course.map}</td>
                      <td>{course.par}</td>
                      <td>{course.avg_score}</td>
                      <td>{this.format(course.avg_differential)}</td>
                      <td>{this.format(course.min_score, course.par)}</td>
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
