import React from 'react';
import styled from 'styled-components';
import { Card, CardHeading } from '../styles/Card';
import variables from '../styles/variables';
import { firebase, accolades_meta } from '../firebase';
import { byParDifferential } from '../helper-functions/sortingFunctions';
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
                this.state.course.map((item, index) => {
                  return (
                    <li className={`course-item course-item-${index + 1}`} key={item.data}>
                      <span>
                        <p className="course-item-player">{item.player}</p>
                        <p className="course-item-date">{item.date}</p>
                      </span>
                      <img className="course-item-image" src={`./assets/maps/${item.image}.png`} alt={`${item.map} Course`}></img>
                      <span>
                        <p className="course-item-map">{item.map}</p>
                        <p className="course-item-score">{item.score} ({item.differential})</p>
                      </span>
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
    text-align: center;
    &-1 {
      background-color: #c1bfbf;
      background-image: linear-gradient(315deg, #c1bfbf 0%, #af8231 74%);
    }
    &-2 {
      background-color: #bdd4e7;
      background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);
    }
    &-3 {
      background-color: #f5d3c8;
      background-image: linear-gradient(315deg, #f5d3c8 0%, #c08552 74%);
    }
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
  @media (max-width: ${variables.sm}) {
    grid-template-columns: 1fr;
    .course-item {
      display: grid;
      align-items: center;
      &-1, &-3 {
        grid-template-columns: 1fr 1fr 2fr;
        span:first-of-type {
          grid-column: 1 / 2;
          grid-row: 1 / 2;
        }
        span:last-of-type {
          grid-column: 2 / 3;
          grid-row: 1 / 2;
        }
        img {
          grid-column: 3 / 4;
          grid-row: 1 / 2;
        }
      }
      &-2 {
        grid-template-columns: 2fr 1fr 1fr;
        span:first-of-type {
          grid-column: 2 / 3;
          grid-row: 1 / 2;
        }
        span:last-of-type {
          grid-column: 3 / 4;
          grid-row: 1 / 2;
        }
        img {
          grid-column: 1 / 2;
          grid-row: 1 / 2;
        }
      }
    }
  }
`;

const AccoladesContainer = styled.div`
  margin-top: 2rem;
`;

export default Accolades;