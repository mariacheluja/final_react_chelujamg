//importaciones primero arriba de la pagina. Todo lo que necesito de React va aqui.

import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App.jsx"; // Importa el componente principal
import { BrowserRouter } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration, configuración propia.
const firebaseConfig = {
  apiKey: "AIzaSyD66zR0Kl2sfbqKjgYIs6FLkcd79_mBOlw",
  authDomain: "react-comision-47195-chelujamg.firebaseapp.com",
  projectId: "react-comision-47195-chelujamg",
  storageBucket: "react-comision-47195-chelujamg.appspot.com",
  messagingSenderId: "516957693975",
  appId: "1:516957693975:web:6587627b1f8c6abef55452"
};

// Initialize Firebase, no hace falta crearla como constante.
initializeApp(firebaseConfig);

//import "bootstrap/dist/css/bootstrap.min.css"
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
);
