import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
  apiKey: 'AIzaSyBlLSSh25pGlHuNRUpMlcv5IDoYf53FWnY',
  authDomain: 'netflix-864fc.firebaseapp.com',
  databaseURL: 'https://netflix-864fc-default-rtdb.firebaseio.com',
  projectId: 'netflix-864fc',
  storageBucket: 'netflix-864fc.appspot.com',
  messagingSenderId: '240947248648',
  appId: '1:240947248648:web:84e0f596a484ff7f021bbd',
});

const auth = getAuth(app);
