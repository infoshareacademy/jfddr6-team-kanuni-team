import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAk-6r1G3o-y453GDjL29jeIZIx-QmNBgc",
  authDomain: "kanuni-team-project.firebaseapp.com",
  projectId: "kanuni-team-project",
  storageBucket: "kanuni-team-project.appspot.com",
  messagingSenderId: "472788930603",
  appId: "1:472788930603:web:0d2de4da7380efa1609a6e",
  measurementId: "G-Z8H1N1MDZV"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;