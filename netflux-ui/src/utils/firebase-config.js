import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCHxd1A6GfrA71GRrYDlbz93acOR_3l3vM",
  authDomain: "react-netflux.firebaseapp.com",
  projectId: "react-netflux",
  storageBucket: "react-netflux.appspot.com",
  messagingSenderId: "793307063986",
  appId: "1:793307063986:web:c6e92f2818670567908bab",
  measurementId: "G-FPTPC4C7XN"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);