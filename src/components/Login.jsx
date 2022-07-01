import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../Context/User.js";
import styles from "../styles/login.module.css";

export const Login = () => {
  const { setUser } = useContext(userContext);

  const [userToBuild, setUserToBuild] = useState({
    username: "",
    password: "",
  });

  const [signUp, setSignUp] = useState(false);

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

  const handleSignUp = () => {
    setSignUp(true);
  };

  return (
    <>
      {signUp ? (
        "Sign Up Then Idiot"
      ) : (
        <div className={styles.logincontainer}>
          <div className={styles.loginCard}>
            <form onSubmit={handleSubmit}>
              <div className={styles.formElement}>
                <div className={styles.formLabel}>
                  <label>Username </label>
                </div>
                <div className={styles.formInput}>
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
              </div>
              <div className={styles.formElement}>
                <div className={styles.formLabel}>
                  <label>Password </label>
                </div>
                <div className={styles.formInput}>
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
              </div>
              <div>
                <button>Submit</button>
              </div>
            </form>
          </div>
          <div>
            <button onClick={handleSignUp}> Sign Up</button>
          </div>
        </div>
      )}
    </>
  );
};
