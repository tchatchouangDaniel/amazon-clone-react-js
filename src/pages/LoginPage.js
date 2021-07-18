import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import "./login.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);
  const history = useHistory();
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      });
    //Firebase login logic
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        setRegistered(true);
        setTimeout(() => {
          history.push("/");
        }, 3000);
      })
      .catch((error) => alert(error.message));
    //Firebase register logic
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="logo"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        {registered ? (
          <>
            <h1>Success Register auto redirection...</h1>
            <Link to="/">
              <button className="login__sign-btn">
                Return to store Manually
              </button>
            </Link>
          </>
        ) : (
          <>
            <h1>Sign-In</h1>
            <form action="#">
              <div className="login__form-group">
                <h5>Email</h5>
                <input
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login__form-group">
                <h5>Password</h5>
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                onClick={signIn}
                className="login__sign-btn"
              >
                Sign In
              </button>
            </form>
            <p>
              By Singing-in you agree to AMAZON FAKE CLONE Conditions of Use &
              sale. Please see our Privacy Notice, our Cookie Notice and our
              Interest-Based Ads Notice.
            </p>

            <button onClick={register} className="login__register-btn">
              Create your Amazon Account
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
