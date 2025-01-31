import {Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import MovieInfo from "./pages/MovieInfo";
import Login from "./pages/Login";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase/init";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  
  function signIn(e, auth, email, password) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        console.log(user);
        
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage)
      });
  }

  function signUp(e, auth, email, password) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setUser(user);
        console.log(user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
        // ..
      });
  }

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // Logged in...
          setUser(user)
        } else {
          // Not logged in...
          setUser(null)
          navigate("/login");
        }

      }),
    [navigate]
  )

  return (
    <div className="App">
        <Routes>
        <Route path="/login" exact element={<Login signIn={signIn} signUp={signUp}/>} />
        <Route path="/" exact element={<Home user={user}/>} />
        <Route path="/search" element={<Search user={user}/>} />
        <Route path="/search/:id" element={<MovieInfo user={user}/>} />
        </Routes>
    </div>
  );
}

export default App;
