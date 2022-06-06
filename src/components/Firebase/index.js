// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNSdpGHo9AUM6ZchHA81GxTP4PCBT1U2M",
  authDomain: "cocktail-gocong.firebaseapp.com",
  databaseURL:
    "https://cocktail-gocong-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cocktail-gocong",
  storageBucket: "cocktail-gocong.appspot.com",
  messagingSenderId: "911095820570",
  appId: "1:911095820570:web:cf3359a0a4e41c346abca3",
  measurementId: "G-Q1B4E2020B",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
