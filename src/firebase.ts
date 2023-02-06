import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBlLSSh25pGlHuNRUpMlcv5IDoYf53FWnY',
  authDomain: 'netflix-864fc.firebaseapp.com',
  databaseURL: 'https://netflix-864fc-default-rtdb.firebaseio.com',
  projectId: 'netflix-864fc',
  storageBucket: 'netflix-864fc.appspot.com',
  messagingSenderId: '240947248648',
  appId: '1:240947248648:web:84e0f596a484ff7f021bbd',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
