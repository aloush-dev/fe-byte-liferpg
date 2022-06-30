import { useState, useContext } from "react";
import { userContext } from "../Context/User.js";

export const Login = () => {
  const { setUser } = useContext(userContext);
  const [userToBuild, setUserToBuild] = useState({ username: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser((oldUser) => {
      const newUser = { ...oldUser };
      newUser.username = userToBuild.username;
      return newUser;
    });
    setUserToBuild({ username: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
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
      <button>Submit</button>
    </form>
  );
};
