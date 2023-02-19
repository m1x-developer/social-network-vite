import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDSmrtG62NLE8F31ezimLS9D9RNCnfNro0',
  authDomain: 'social-f8bd3.firebaseapp.com',
  projectId: 'social-f8bd3',
  storageBucket: 'social-f8bd3.appspot.com',
  messagingSenderId: '379125998203',
  appId: '1:379125998203:web:532fa6cc51ac4ace6fb8de',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
