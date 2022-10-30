import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyB7CK3DKA8xGKrN0kqI5sy05hBvdsYEmos",
  authDomain: "react-netflux-1c36d.firebaseapp.com",
  projectId: "react-netflux-1c36d",
  storageBucket: "react-netflux-1c36d.appspot.com",
  messagingSenderId: "953461536820",
  appId: "1:953461536820:web:d1f4ac486aa993671df261"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;