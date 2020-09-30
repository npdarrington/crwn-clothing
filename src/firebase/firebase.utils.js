import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyANgNrdI9yg850iD4LsApUu1ETHPdVNYCk',
	authDomain: 'crwn-db-586a2.firebaseapp.com',
	databaseURL: 'https://crwn-db-586a2.firebaseio.com',
	projectId: 'crwn-db-586a2',
	storageBucket: 'crwn-db-586a2.appspot.com',
	messagingSenderId: '70930633537',
	appId: '1:70930633537:web:80f4beab2f83f3960747c0',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
