import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    //Firebase login logic
  };

  const register = (e) => {
    e.preventDefault();

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
          <button type="submit" onClick={signIn} className="login__sign-btn">
            Sign In
          </button>
        </form>
        <p>
          By Singing-in you agree to AMAZON FAKE CLONE Conditions of Use & sale.
          Please see our Privacy Notice, our Cookie Notice and our
          Interest-Based Ads Notice.
        </p>

        <button onClick={register} className="login__register-btn">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
