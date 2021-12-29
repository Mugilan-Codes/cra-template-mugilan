// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// REF: https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA45vxq5FwDXyRqby2E-AsOg4Iexmv7mYs',
  authDomain: 'cra-template-mugilan.firebaseapp.com',
  projectId: 'cra-template-mugilan',
  storageBucket: 'cra-template-mugilan.appspot.com',
  messagingSenderId: '116878559690',
  appId: '1:116878559690:web:a37d549646abe44280e733',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
// export const storage = getStorage(app);
