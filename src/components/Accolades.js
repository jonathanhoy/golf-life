import React from 'react';
import styled from 'styled-components';
import variables from '../styles/variables';
import { Card, CardHeading } from '../styles/Card';
import PageHeading from '../styles/PageHeading';
import { firebase, accolades_meta, ccolades_best_differential } from '../firebase';
import { byParDifferential } from '../sortingFunctions';

import moment, { normalizeUnits } from 'moment';

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
      const cleanedData = sortedData
      .filter((item) => {
        if (item.differential == sortedData[0].differential) {
          return item;
        }
      })
      .map((item) => {
        item.date = moment(item.date).format('M/D/YY');
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
            <h3>Best Course</h3>
            <Course>
              {
                this.state.course.map((item) => {
                  return (
                    <li>
                      <p>{item.player}</p>
                      <p>🏆</p>
                      <p>{item.map}</p>
                      <p>{item.score} ({item.differential})</p>
                    </li>
                  )
                })
              }
            </Course>
          </AccoladesContainer>
          <AccoladesContainer>
            <h3>Best Differential</h3>
          </AccoladesContainer>
        </Card>
      </>
    )
  }
}

const Course = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
`;

const AccoladesContainer = styled.div`
  margin-top: 2rem;
`;

export default Accolades;