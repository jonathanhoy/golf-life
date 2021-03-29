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

const records = '1mDdt2Y3_Yb-0ByOOQhbiAJ1rsv0E7ct41vRdyoBE64s/match_record/';
const meta = '1mDdt2Y3_Yb-0ByOOQhbiAJ1rsv0E7ct41vRdyoBE64s/tourney_meta/';
const wins = '1mDdt2Y3_Yb-0ByOOQhbiAJ1rsv0E7ct41vRdyoBE64s/leaderboard/';
const accolades_best_course = '1mDdt2Y3_Yb-0ByOOQhbiAJ1rsv0E7ct41vRdyoBE64s/accolades_best_course/';

export {firebase, records, meta, wins, accolades_best_course};