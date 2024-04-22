import React, { useState } from "react";
import { auth } from "../firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleRegisterSubmit(e, auth, email, password) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
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

  function handleSignIn(e, auth, email, password) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/", {state:{email:email}});
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage)
      });
  }

  return (
    <div className="login__page">
      {register ? (
        <section id="register">
          <div className="container">
            <div className="row">
              <div className="login__wrapper">
                <h1 className="login__title">Register</h1>
                <form action="" className="login__form" name="RegisterForm">
                  <label htmlFor="loginEmail">Email</label>
                  <input
                    type="text"
                    className="login__email"
                    placeholder="Email"
                    id="loginEmail"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <label htmlFor="loginPass">Password</label>
                  <input
                    className="login__pass"
                    type="password"
                    name="loginPass"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <button
                    className="login__submit"
                    type="submit"
                    onClick={(e) =>
                      handleRegisterSubmit(e, auth, email, password)
                    }
                  >
                    Register
                  </button>
                  <hr className="login__divider" />
                </form>
                <p
                  className="register__text"
                  onClick={() => setRegister(false)}
                >
                  Already have an account?
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section id="login">
          <div className="container">
            <div className="row">
              <div className="login__wrapper">
                <h1 className="login__title">Login</h1>
                <form action="" className="login__form" name="LoginForm">
                  <label htmlFor="loginEmail">Email</label>
                  <input
                    type="text"
                    className="login__email"
                    placeholder="Email"
                    id="loginEmail"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <label htmlFor="loginPass">Password</label>
                  <input
                    className="login__pass"
                    type="password"
                    name="loginPass"
                    id="loginPass"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  <button
                    className="login__submit"
                    onClick={(e) => handleSignIn(e, auth, email, password)}
                  >
                    Sign In
                  </button>
                  <hr className="login__divider" />
                </form>
                <p className="login__text">Or sign up using</p>
                <p className="login__signup" onClick={() => setRegister(true)}>
                  SIGN UP
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    <div/>
    </div>
  );
}
