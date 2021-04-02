import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBmqp-g-_2n2KFGGMcC5Q_lqV_0-1nKO4g",
    authDomain: "golf-with-your-friends.firebaseapp.com",
    databaseURL: "https://golf-with-your-friends-default-rtdb.firebaseio.com",
    projectId: "golf-with-your-friends",
    storageBucket: "golf-with-your-friends.appspot.com",
    messagingSenderId: "1060942413495",
    appId: "1:1060942413495:web:aeda273cf6506af5a61732",
    measurementId: "G-QQBTGVWXDK"
};
firebase.initializeApp(config);

const tournamentData = '1uh4KVYzMEADn9PfI22Zxyq9Ial6arK0cOVcJ_T4z6oU/tournament_data/';
const leaderboardData = '1uh4KVYzMEADn9PfI22Zxyq9Ial6arK0cOVcJ_T4z6oU/leaderboard_data/';
const roundData = '1uh4KVYzMEADn9PfI22Zxyq9Ial6arK0cOVcJ_T4z6oU/round_data/';
const accoladesBestDiffData = '1uh4KVYzMEADn9PfI22Zxyq9Ial6arK0cOVcJ_T4z6oU/accolades_best_diff_data/';
const mapsData = '1uh4KVYzMEADn9PfI22Zxyq9Ial6arK0cOVcJ_T4z6oU/map_data/';

export {
    firebase,
    tournamentData,
    leaderboardData,
    roundData,
    accoladesBestDiffData,
    mapsData,
};