import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

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
const auth = firebase.auth();
const firestore = firebase.firestore();
// const analytics = getAnalytics(app);

const [user] = useAuthState(auth);

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
