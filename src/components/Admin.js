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
import shuffle from '../helper-functions/shuffle';


function Admin() {
  const [metaMaps, setMetaMaps] = useState([]);
  const [metaPlayers, setMetaPlayers] = useState([]);
  const [tournamentID, setTournamentID] = useState(0);
  const [shuffledMapOne, setShuffledMapOne] = useState('');
  const [shuffledMapTwo, setShuffledMapTwo] = useState('');
  const [shuffledMapThree, setShuffledMapThree] = useState('');

  const [date, setDate] = useState('');
	const [name, setName] = useState('');
	const [map, setMap] = useState('');
	const [score, setScore] = useState('');

  const [mapOne, setMapOne] = useState('');
  const [mapTwo, setMapTwo] = useState('');
  const [mapThree, setMapThree] = useState('');

  const [playerOneName, setPlayerOneName] = useState('');
  const [playerOneMapOneScore, setPlayerOneMapOneScore] = useState(0);
  const [playerOneMapTwoScore, setPlayerOneMapTwoScore] = useState(0);
  const [playerOneMapThreeScore, setPlayerOneMapThreeScore] = useState(0);

  const [playerTwoName, setPlayerTwoName] = useState('');
  const [playerTwoMapOneScore, setPlayerTwoMapOneScore] = useState(0);
  const [playerTwoMapTwoScore, setPlayerTwoMapTwoScore] = useState(0);
  const [playerTwoMapThreeScore, setPlayerTwoMapThreeScore] = useState(0);

  const [playerThreeName, setPlayerThreeName] = useState('');
  const [playerThreeMapOneScore, setPlayerThreeMapOneScore] = useState(0);
  const [playerThreeMapTwoScore, setPlayerThreeMapTwoScore] = useState(0);
  const [playerThreeMapThreeScore, setPlayerThreeMapThreeScore] = useState(0);

  const [playerFourName, setPlayerFourName] = useState('');
  const [playerFourMapOneScore, setPlayerFourMapOneScore] = useState(0);
  const [playerFourMapTwoScore, setPlayerFourMapTwoScore] = useState(0);
  const [playerFourMapThreeScore, setPlayerFourMapThreeScore] = useState(0);

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

		// axios
		// 	.post(
		// 		'https://sheet.best/api/sheets/cd49cf73-aa1f-462c-a778-5e1c04c6a8ee',
		// 		objt
		// 	)
		// 	.then((response) => {
    //     sucessAlert();
		// 	});
	};

  const handleRNG = (e) => {
    e.preventDefault();
    const arr = shuffle(metaMaps).slice(0, 3);
    setShuffledMapOne(`${arr[0].name} (${arr[0].par})`);
    setShuffledMapTwo(`${arr[1].name} (${arr[1].par})`);
    setShuffledMapThree(`${arr[2].name} (${arr[2].par})`);
  }

	return (
    <Wrapper>
      <PageHeading>Admin</PageHeading>
      <Card>
        <CardHeading>Submit Tournament</CardHeading>
        <h3>Tournament #{tournamentID}</h3>
        <p>{date}</p>
        <Form>
          <button onClick={handleRNG}>RNG</button>
          <p>{shuffledMapOne !== '' && `Maps are ${shuffledMapOne}, ${shuffledMapTwo}, ${shuffledMapThree}`}</p>
          {/* MAPS & TOURNAMENT DATA*/}
          <fieldset className="maps">
            <div>
              <label className="show-for-sr" htmlFor="map-one">Map 1</label>
              <select id="map-one" onChange={(e) => setMapOne(e.target.value)}>
                <option value="" disabled selected>Select course 1</option>
                {
                  metaMaps.map((item) => {
                    return <option value={item.name}>{item.name}</option>
                  })
                }
              </select>
            </div>
            <div>
              <label className="show-for-sr" htmlFor="map-two">Map 2</label>
              <select id="map-two" onChange={(e) => setMapTwo(e.target.value)}>
                <option value="" disabled selected>Select course 2</option>
                {
                  metaMaps.map((item) => {
                    return <option value={item.name}>{item.name}</option>
                  })
                }
              </select>
            </div>
            <div>
              <label className="show-for-sr" htmlFor="map-three">Map 3</label>
              <select id="map-three" onChange={(e) => setMapThree(e.target.value)}>
                <option value="" disabled selected>Select course 3</option>
                {
                  metaMaps.map((item) => {
                    return <option value={item.name}>{item.name}</option>
                  })
                }
              </select>
            </div>
            <div>
              <p>Total</p>
            </div>
          </fieldset>

          {/* PLAYER ONE */}
          <fieldset className="player-one">
            <div>
              <label className="show-for-sr" htmlFor="player-one-name">Name</label>
              <select id="player-one-name" onChange={(e) => setPlayerOneName(e.target.value)}>
                <option value="" disabled selected>Select player</option>
                {
                  metaPlayers.map((name) => {
                    return <option value={name}>{name}</option>
                  })
                }
              </select>
            </div>
            <div>
              <label className="show-for-sr" htmlFor="player-one-map-one-score">Score</label>
              <input id="player-one-map-one-score" type="number" onChange={(e) => setPlayerOneMapOneScore(parseInt(e.target.value))}></input>
            </div>
            <div>
              <label className="show-for-sr" htmlFor="player-one-map-two-score">Score</label>
              <input id="player-one-map-two-score" type="number" onChange={(e) => setPlayerOneMapTwoScore(parseInt(e.target.value))}></input>
            </div>
            <div>
              <label className="show-for-sr" htmlFor="player-one-map-three-score">Score</label>
              <input id="player-one-map-three-score" type="number" onChange={(e) => setPlayerOneMapThreeScore(parseInt(e.target.value))}></input>
            </div>
            <div>
              <p>{(playerOneMapOneScore + playerOneMapTwoScore + playerOneMapThreeScore)}</p>
            </div>
          </fieldset>

          {/* PLAYER TWO */}
          <fieldset className="player-two">
            <div>
              <label className="show-for-sr" htmlFor="player-two-name">Name</label>
              <select id="player-two-name" onChange={(e) => setPlayerTwoName(e.target.value)}>
                <option value="" disabled selected>Select player</option>
                {
                  metaPlayers.map((name) => {
                    return <option value={name}>{name}</option>
                  })
                }
              </select>
            </div>
            <div>
              <label className="show-for-sr" htmlFor="player-two-map-one-score">Score</label>
              <input id="player-two-map-one-score" type="number" onChange={(e) => setPlayerTwoMapOneScore(parseInt(e.target.value))}></input>
            </div>
            <div>
              <label className="show-for-sr" htmlFor="player-two-map-two-score">Score</label>
              <input id="player-two-map-two-score" type="number" onChange={(e) => setPlayerTwoMapTwoScore(parseInt(e.target.value))}></input>
            </div>
            <div>
              <label className="show-for-sr" htmlFor="player-two-map-three-score">Score</label>
              <input id="player-two-map-three-score" type="number" onChange={(e) => setPlayerTwoMapThreeScore(parseInt(e.target.value))}></input>
            </div>
            <div>
              <p>{(playerTwoMapOneScore + playerTwoMapTwoScore + playerTwoMapThreeScore)}</p>
            </div>
          </fieldset>

          {/* PLAYER THREE */}
          <fieldset className="player-three">
            <div>
              <label className="show-for-sr" htmlFor="player-three-name">Name</label>
              <select id="player-three-name" onChange={(e) => setPlayerThreeName(e.target.value)}>
                <option value="" disabled selected>Select player</option>
                {
                  metaPlayers.map((name) => {
                    return <option value={name}>{name}</option>
                  })
                }
              </select>
            </div>
            <div>
              <label className="show-for-sr" htmlFor="player-three-map-one-score">Score</label>
              <input id="player-three-map-one-score" type="number" onChange={(e) => setPlayerThreeMapOneScore(parseInt(e.target.value))}></input>
            </div>
            <div>
              <label className="show-for-sr" htmlFor="player-three-map-two-score">Score</label>
              <input id="player-three-map-two-score" type="number" onChange={(e) => setPlayerThreeMapTwoScore(parseInt(e.target.value))}></input>
            </div>
            <div>
              <label className="show-for-sr" htmlFor="player-three-map-three-score">Score</label>
              <input id="player-three-map-three-score" type="number" onChange={(e) => setPlayerThreeMapThreeScore(parseInt(e.target.value))}></input>
            </div>
            <div>
              <p>{(playerThreeMapOneScore + playerThreeMapTwoScore + playerThreeMapThreeScore)}</p>
            </div>
          </fieldset>

          {/* PLAYER FOUR */}
          <fieldset className="player-four">
            <div>
              <label className="show-for-sr" htmlFor="player-four-name">Name</label>
              <select id="player-four-name" onChange={(e) => setPlayerFourName(e.target.value)}>
                <option value="" disabled selected>Select player</option>
                {
                  metaPlayers.map((name) => {
                    return <option value={name}>{name}</option>
                  })
                }
              </select>
            </div>
            <div>
              <label className="show-for-sr" htmlFor="player-four-map-one-score">Score</label>
              <input id="player-four-map-one-score" type="number" onChange={(e) => setPlayerFourMapOneScore(parseInt(e.target.value))}></input>
            </div>
            <div>
              <label className="show-for-sr" htmlFor="player-four-map-two-score">Score</label>
              <input id="player-four-map-two-score" type="number" onChange={(e) => setPlayerFourMapTwoScore(parseInt(e.target.value))}></input>
            </div>
            <div>
              <label className="show-for-sr" htmlFor="player-four-map-three-score">Score</label>
              <input id="player-four-map-three-score" type="number" onChange={(e) => setPlayerFourMapThreeScore(parseInt(e.target.value))}></input>
            </div>
            <div>
              <p>{(playerFourMapOneScore + playerFourMapTwoScore + playerFourMapThreeScore)}</p>
            </div>
          </fieldset>

          <button type="submit" onClick={handleSubmit}>Submit</button>
        </Form>
      </Card>
    </Wrapper>
  );
}

const Form = styled.form`
  fieldset {
    outline: 1px solid black;
    border: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    > div {
      border: 1px solid black;
    }
    &.maps {
      div:nth-child(1) {
        grid-column: 2 / 3;
      }
    }
  }
`;


export default Admin;
