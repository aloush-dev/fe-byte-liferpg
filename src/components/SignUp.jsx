import React, { useContext } from "react";
import styles from "../styles/signup.module.css";
import { useState } from "react";
import { createUser } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { userContext } from "../Context/User";

export const SignUp = () => {
  const { setUser } = useContext(userContext);

  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  let navigate = useNavigate();

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (id === "username") {
      setUsername(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
    }

    const newUser = {
      username: username,
      password: password,
      email: email,
    };
    setUsername("");
    setPassword("");
    setConfirmPassword("");
    setEmail("");

    createUser(newUser).then((data) => {
      setUser({ username: username });
      navigate("/tasks");
    });
  };

  return (
    <>
      <div className={styles.signupcontainer}>
        <form onSubmit={handleSubmit}>
          <h2>Sign up</h2>
          <div className={styles.formElement}>
            <div className={styles.formLabel}>
              <input
                type="text"
                id="username"
                placeholder="Choose Username"
                required
                onChange={(event) => handleInputChange(event)}
              ></input>
            </div>
          </div>
          <div className={styles.formElement}>
            <div className={styles.formLabel}>
              <input
                type="text"
                id="email"
                placeholder="Enter Email"
                required
                onChange={(event) => handleInputChange(event)}
              ></input>
            </div>
          </div>
          <div className={styles.formElement}>
            <div className={styles.formLabel}>
              <input
                type="password"
                id="password"
                placeholder="Choose Password"
                required
                onChange={(event) => handleInputChange(event)}
              ></input>{" "}
            </div>
          </div>
          <div className={styles.formElement}>
            <div className={styles.formLabel}>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Re-enter Password"
                required
                onChange={(event) => handleInputChange(event)}
              ></input>
            </div>{" "}
          </div>

          <button>Submit</button>
        </form>
      </div>
    </>
  );
};
