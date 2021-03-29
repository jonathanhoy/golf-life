import React from 'react';
import styled from 'styled-components';
import variables from '../styles/variables';
import { Card } from '../styles/Card';
import PageHeading from '../styles/PageHeading';
import { firebase, accolades_best_course } from '../firebase';

import moment from 'moment';

class Accolades extends React.Component {
  constructor() {
    super();
    this.state = {
      meta: {},
    }
  }

  componentDidMount() {
    const dbRef = firebase.database().ref(`${accolades_best_course}`);
    dbRef.on('value', (response) => {
      const data = response.val();
      let newMeta = {};
      newMeta = data[1];
      newMeta.date = moment(newMeta.date).format('M/D/YY');
      this.setState({
        meta: newMeta,
      })
    });
  }

  render() {
    return (
      <>
        <PageHeading>Accolades</PageHeading>
          <Container>
            <Card>
              <h3>Best Course</h3>
              <p>{this.state.meta.player}</p>
              <p>{this.state.meta.map}</p>
              <p>{this.state.meta.score} ({this.state.meta.differential})</p>
            </Card>
            <Card>
              <h3>Best Course</h3>
              <p>{this.state.meta.player}</p>
              <p>{this.state.meta.map}</p>
              <p>{this.state.meta.score} ({this.state.meta.differential})</p>
            </Card>

          </Container>
      </>
    )
  }
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
`;

export default Accolades;