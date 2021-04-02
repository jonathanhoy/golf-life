import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Wrapper from '../styles/Wrapper';
import PageHeading from '../styles/PageHeading';
import BodyText from '../styles/BodyText';
import { Card, CardHeading } from '../styles/Card';
import swal from '@sweetalert/with-react';
import { firebase, tournamentData } from '../firebase';
import moment from 'moment';


function Admin() {
  const [tournamentID, setTournamentID] = useState(0);
  const [date, setDate] = useState('');
	const [name, setName] = useState('');
	const [map, setMap] = useState('');
	const [score, setScore] = useState('');

  useEffect(() => {
    // Get length of tournament data node to determine current tournament's ID
    const dbRef = firebase.database().ref(`${tournamentData}`);
    dbRef.on('value', (response) => {
      const data = response.val();
      setTournamentID(data.length);
    });

    // Get current date and set it
    setDate(moment().format('M/D/YY'));
  });

  const sucessAlert = () => {
    swal(
      <div>
        <h2>Success!</h2>
        <p>Tournament results have been uploaded.</p>
      </div>
    )
  }

	const handleSubmit = (e) => {
		e.preventDefault();

		const objt = { name, map, score };

		axios
			.post(
				'https://sheet.best/api/sheets/cd49cf73-aa1f-462c-a778-5e1c04c6a8ee',
				objt
			)
			.then((response) => {
        sucessAlert();
			});
	};

	return (
    <Wrapper>
      <PageHeading>Admin</PageHeading>
      <Card>
        <CardHeading>Submit Tournament</CardHeading>
        <form>
          <h3>Tournament #{tournamentID}</h3>
          <p>{date}</p>
          <label htmlFor="tournament">Tournnament</label>
          <input id="tournament" onChange={(e) => setName(e.target.value)}></input>
          <label htmlFor="name">Name</label>
          <input id="name" onChange={(e) => setName(e.target.value)}></input>
          <label htmlFor="map">Map</label>
          <input id="map" onChange={(e) => setMap(e.target.value)}></input>
          <label htmlFor="score">Score</label>
          <input id="score" onChange={(e) => setScore(e.target.value)}></input>
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </Card>
    </Wrapper>
  );
}


export default Admin;
