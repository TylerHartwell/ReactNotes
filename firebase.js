
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC9E3mGPH_yxFP5DPQqKbRhY0veZuzEerU",
  authDomain: "react-notes-24795.firebaseapp.com",
  projectId: "react-notes-24795",
  storageBucket: "react-notes-24795.appspot.com",
  messagingSenderId: "810966786909",
  appId: "1:810966786909:web:42f4088bbc0e373395beb4"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")