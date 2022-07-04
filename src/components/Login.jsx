import { useState, useContext, useEffect } from "react";
import { userContext } from "../Context/User.js";
import styles from "../styles/login.module.css";
import { loginUser, getProfile } from "../utils/api.js";
import { SignUp } from "./SignUp.jsx";

export const Login = () => {
  const { setUser } = useContext(userContext);

  const [userToBuild, setUserToBuild] = useState({
    username: "",
    password: "",
  });

  const [signUp, setSignUp] = useState(false);

  useEffect(() => {
    const checkLogIn = async () => {
      let loggedIn = await getProfile()
      console.log(loggedIn)
      return loggedIn
    }
    checkLogIn().then((data) => setUser({ username: data.data.username }))
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    setUser((oldUser) => {
      const newUser = { ...oldUser };
      newUser.username = userToBuild.username;
      return newUser;
    });

    loginUser(userToBuild).then((response) => {
      if (response.status === 202) {
        setUser({ username: userToBuild.username });
      } else {
        alert("Username or password is incorrect");
      }
    });
    setUserToBuild({ username: "", password: "" });
  };

  const handleSignUp = () => {
    setSignUp(true);
  };



  return (
    <>
      {signUp ? (
        <SignUp />
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
