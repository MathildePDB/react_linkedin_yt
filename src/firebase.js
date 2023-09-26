import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCA5irw5sjIzpkxYMv_FgMjVFxO03wJWBo",
    authDomain: "linkedin-clone-yt-1d252.firebaseapp.com",
    projectId: "linkedin-clone-yt-1d252",
    storageBucket: "linkedin-clone-yt-1d252.appspot.com",
    messagingSenderId: "837945142038",
    appId: "1:837945142038:web:28e17566b83b8f4d0f3e37"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
