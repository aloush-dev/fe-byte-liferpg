import { useState, useContext, useEffect } from "react";
import { userContext } from "../Context/User.js";
import styles from "../styles/login.module.css";
import { loginUser, getProfile } from "../utils/api.js";
import { SignUp } from "./SignUp.jsx";

export const Login = () => {
  const { setUser } = useContext(userContext);

  const [signUp, setSignUp] = useState(false);
  const [userToBuild, setUserToBuild] = useState({
    username: "",
    password: "",
  });
  useEffect(() => {
    const checkLogIn = async () => {
      let loggedIn = await getProfile();
      return loggedIn;
    };
    checkLogIn().then((data) => setUser({ ...data.data  }))
  }, [setUser]);
  
  const handleSubmit = (event) => {
    event.preventDefault();

    loginUser(userToBuild)
      .then((response) => {
        if (response.status === 202) {
          getProfile().then(({ data }) => {
            setUser(data);
          });
        }
      })
      .catch((err) => {
        alert("Incorrect username or password");
        console.log(err);
      });
    setUserToBuild({ username: "", password: "" });
  };

  const handleSignUp = () => {
    setSignUp(true);
  };

  useEffect(() => {
    const checkLogIn = async () => {
      let loggedIn = await getProfile();
      return loggedIn;
    };
    checkLogIn().then(({data}) => {
      return setUser(data);
    });
  });


  return (
    
    <>

      {signUp ? (
        <SignUp />
      ) : (
        <div className={styles.logincontainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formElement}>
              <div className={styles.formLabel}></div>
              <div className={styles.formInput}>
                <input
                  placeholder="username"
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
              <div className={styles.formLabel}></div>
              <div className={styles.formInput}>
                <input
                  placeholder="password"
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
          <div>
            <button onClick={handleSignUp}> Sign Up</button>
          </div>
        </div>
      )}
    </>
  );
};
