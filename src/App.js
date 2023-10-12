import "./App.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { SignIn } from "./components/organisms/SignIn";
import { ChatRoom } from "./components/organisms/ChatRoom";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXIXNDnHTo28ftN4PXepPV8crDByFjm6A",
  authDomain: "super-chat-7c28f.firebaseapp.com",
  projectId: "super-chat-7c28f",
  storageBucket: "super-chat-7c28f.appspot.com",
  messagingSenderId: "512524730743",
  appId: "1:512524730743:web:cc88af9a20f9e7f12e6172",
  measurementId: "G-N5C5Z6M1WE",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <section>{user ? <ChatRoom db={db} /> : <SignIn auth={auth} />}</section>
    </div>
  );
}

export default App;
