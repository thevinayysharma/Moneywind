import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { projectAuth } from "../firebase/config";
import "../App.css";

const Authentication = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (isSignIn) {
      projectAuth
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          setEmail("");
          setPassword("");
        })
        .catch((err) => {
          toast.error(err.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          });
        });
    } else {
      projectAuth
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
          setEmail("");
          setPassword("");
        })
        .catch((err) => {
          toast.error(err.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
          });
        });
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Moneywind: Expense Tracker</h1>
        <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2> <br/>
        <div className="form">
          <p> </p>
          <form className="auth-form" onSubmit={handelSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">{isSignIn ? "Sign In" : "Sign Up"}</button>
            <button
              onClick={() => {
                setEmail("guest@sigin.com");
                setPassword("12345678");
              }}
            >
              Test Login
            </button>
          </form>
          {isSignIn ? (
            <p style={{ color: "black" }}>
              New user ?{" "}
              <span
                style={{
                  color: "#03203c",
                  cursor: "pointer",
                  textDecoration: "underline"
                }}
                onClick={() => {
                  setIsSignIn(false);
                  setEmail("");
                  setPassword("");
                }}
              >
                Register
              </span>
            </p>
          ) : (
            <p style={{ color: "black" }}>
              <span
                style={{
                  color: "#03203c",
                  cursor: "pointer",
                  textDecoration: "underline"
                }}
                onClick={() => {
                  setIsSignIn(true);
                  setEmail("");
                  setPassword("");
                }}
              >
                Sing In
              </span>
            </p>
          )}
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
