import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Wrapper from '../styles/Wrapper';
import PageHeading from '../styles/PageHeading';
import BodyText from '../styles/BodyText';
import { Card, CardHeading } from '../styles/Card';
import swal from '@sweetalert/with-react';

const sucessAlert = () => {
  swal(
    <div>
      <h2>Success!</h2>
      <p>Tournament results have been uploaded.</p>
    </div>
  )
}

function Admin() {
	const [name, setName] = useState('');
	const [map, setMap] = useState('');
	const [score, setScore] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();

		const objt = { name, map, score };

		axios
			.post(
				'https://sheet.best/api/sheets/cd49cf73-aa1f-462c-a778-5e1c04c6a8ee',
				objt
			)
			.then((response) => {
				// console.log(response);
        sucessAlert();
			});
	};

	return (
    <Wrapper>
      <PageHeading>Admin</PageHeading>
      <Card>
        <CardHeading>Submit Tournament</CardHeading>
        <form>
          <label for="name">Name</label>
          <input id="name" onChange={(e) => setName(e.target.value)}></input>
          <label for="map">Map</label>
          <input id="map" onChange={(e) => setMap(e.target.value)}></input>
          <label for="score">Score</label>
          <input id="score" onChange={(e) => setScore(e.target.value)}></input>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </Card>
    </Wrapper>
  );
}


export default Admin;
