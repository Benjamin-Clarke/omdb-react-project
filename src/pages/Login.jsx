import React, { useState } from "react";
//import { auth } from "../firebase/init";

export default function Login() {
  const [register, setRegister] = useState(false);
  return (
    <>
      {register ? (
        <section id="register">
          <div className="container">
            <div className="row">
              <div className="login__wrapper">
                <h1 className="login__title">Register</h1>
                <form action="" className="login__form">
                  <label htmlFor="loginEmail">Email</label>
                  <input
                    type="text"
                    className="login__email"
                    placeholder="Email"
                    id="loginEmail"
                  />
                  <label htmlFor="loginPass">Password</label>
                  <input
                    className="login__pass"
                    type="password"
                    name="loginPass"
                    id="loginPass"
                    placeholder="Password"
                  />
                  <button className="login__submit">Register</button>
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
                <form action="" className="login__form">
                  <label htmlFor="loginEmail">Email</label>
                  <input
                    type="text"
                    className="login__email"
                    placeholder="Email"
                    id="loginEmail"
                  />
                  <label htmlFor="loginPass">Password</label>
                  <input
                    className="login__pass"
                    type="password"
                    name="loginPass"
                    id="loginPass"
                    placeholder="Password"
                  />
                  <button className="login__submit">Submit</button>
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
    </>
  );
}
