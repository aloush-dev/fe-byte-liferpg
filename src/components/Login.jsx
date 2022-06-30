import { useState, useContext } from "react";
import { userContext } from "../Context/User.js";
import styles from "../styles/login.module.css";


export const Login = () => {
  const { setUser } = useContext(userContext);
  const [userToBuild, setUserToBuild] = useState({
    username: "",
    password: "",
  });
  const validUser = [
    { username: "nathan", password: "123" },
    { username: "andy", password: "456" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    const filteredUsers = validUser.filter((user) => {
      return userToBuild.username === user.username;
    });
    if (
      filteredUsers.length === 1 &&
      filteredUsers[0].password === userToBuild.password
    ) {
      setUser((oldUser) => {
        const newUser = { ...oldUser };
        newUser.username = userToBuild.username;
        return newUser;
      });
    } else {
      alert("Please enter valid username or password");
    }

    setUserToBuild({ username: "", password: "" });
  };
  return (
    <form onSubmit={handleSubmit} className={styles.loginCard}>
        <div className={styles.formElement}>
        <label>Username </label>
      <input
        type="text"
        value={userToBuild.username}
        onChange={(event) => {
          setUserToBuild((oldUser) => {
            const newUser = { ...oldUser };
            newUser.username = event.target.value;
            return newUser;
          });
        }}
      ></input>
      </div>
      <div className={styles.formElement}>
      <label>Password </label>
      <input
        type="password"
        value={userToBuild.password}
        onChange={(event) => {
          setUserToBuild((oldUser) => {
            const newUser = { ...oldUser };
            newUser.password = event.target.value;
            return newUser;
          });
        }}
      ></input>
      </div>
      <button>Submit</button>
    </form>
  );
};
