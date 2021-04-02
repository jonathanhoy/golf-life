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
  const [metaMaps, setMetaMaps] = useState('');
  const [metaPlayers, setMetaPlayers] = useState('');
  const [tournamentID, setTournamentID] = useState(0);
  const [date, setDate] = useState('');
	const [name, setName] = useState('');
	const [map, setMap] = useState('');
	const [score, setScore] = useState('');

  // Get length of tournament data node to determine current tournament's ID
  useEffect(() => {
    const tournament = firebase.database().ref(`${tournamentData}`);
    tournament.on('value', (response) => {
      const data = response.val();
      setTournamentID(data.length);
    });
  });

  // Get current date and set it
  useEffect(() => {
    setDate(moment().format('M/D/YY'));
  }, []);
  
  // Get map and player information from Firebase
  useEffect(() => {
    const meta = firebase.database().ref(`/tournament_meta`);
    meta.on('value', (response) => {
      const data = response.val();
      let { maps, players } = data;
      maps = maps.slice(1);
      players = players.slice(1);
      setMetaMaps(maps);
      setMetaPlayers(players);
    });
  }, [])

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
