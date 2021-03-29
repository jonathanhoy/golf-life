import React from 'react';
import styled from 'styled-components';
import { Card, CardHeading } from '../styles/Card';
import { firebase, accolades_meta } from '../firebase';
import { byParDifferential } from '../sortingFunctions';
import { Link } from 'react-router-dom';

import moment from 'moment';

class Accolades extends React.Component {
  constructor() {
    super();
    this.state = {
      course: [],
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref(`${accolades_meta}`);
    dbRef.on('value', (response) => {
      const data = response.val();
      const sortedData = data.sort(byParDifferential);
      // const cleanedData = sortedData
      // .filter((item) => {
      //   if (item.differential == sortedData[0].differential) {
      //     return item;
      //   }
      // })
      const cleanedData = sortedData.slice(0, 3);
      cleanedData.map((item) => {
        item.date = moment(item.date).format('M/D/YY');
        item.image = item.map.toLowerCase().replace(" ", "-");
        return item;
      });
      let newCourse = [];
      newCourse = cleanedData;
      this.setState({
        course: newCourse,
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
            <Course>
              {
                this.state.course.map((item) => {
                  return (
                    <li className="course-item" key={item.data}>
                      <p className="course-item-player">{item.player}</p>
                      <p className="course-item-date">{item.date}</p>
                      <img className="course-item-image" src={`./assets/maps/${item.image}.png`} alt={`${item.map} Course`}></img>
                      <p className="course-item-map">{item.map}</p>
                      <p className="course-item-score">{item.score} ({item.differential})</p>
                    </li>
                  )
                })
              }
            </Course>
            <Link to="/maps">See more maps <i className="fa fa-chevron-right"></i></Link>
          </AccoladesContainer>
          <AccoladesContainer>
            {/* <h3>Best Differential</h3> */}
            <h3>More accolades coming soon...</h3>
          </AccoladesContainer>
        </Card>
      </>
    )
  }
}

const Course = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  margin-top: 1rem;
  margin-bottom: 0;
  .course-item {
    background: lightgrey;
    text-align: center;
    p {
      padding: 0 0.5rem;
      font-weight: 400;
    }
    .course-item-player {
      font-weight: 700;
    }
    img {
      display: block;
      width: 100%;
    }
  }
`;

const AccoladesContainer = styled.div`
  margin-top: 2rem;
`;

export default Accolades;