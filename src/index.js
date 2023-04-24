import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css' ;
import App from './App';


import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyDIvhK1rfRCo-CtiLd30UWuhwRi4pMCst0",
  authDomain: "basifinal.firebaseapp.com",
  projectId: "basifinal",
  storageBucket: "basifinal.appspot.com",
  messagingSenderId: "568139500402",
  appId: "1:568139500402:web:c5ec775416d686c6282beb"
};


initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
