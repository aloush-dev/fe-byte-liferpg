import { useContext, useEffect, useState } from "react";
import { userContext } from "../Context/User.js";
import styles from "../styles/profile.module.css";
import { getProfile, getTasks } from "../utils/api.js";

export const Profile = () => {
  const { user } = useContext(userContext);

  const [changePass, setChangePass] = useState(false);
  const [taskCount, setTaskCount] = useState(0);
  const [profile, setProfile] = useState({});

  getProfile().then(({ data }) => {
    setProfile(data);
  });

  getTasks().then(({ data }) => {
    data.map((task) => {
      if (task.is_complete) {
        setTaskCount(+1);
      }
      return task;
    });
  });

  console.log(profile)

  return (
    <div className={styles.container}>
      <h2> Hello, {user.username}</h2>

      <h3>
        You've Completed {taskCount} task{taskCount > 1 ? "s" : ""}
      </h3>

      <h3>You've earned a total of {profile.experience} XP</h3>


      <button
        onClick={() => {
          setChangePass(true);
        }}
      >
        Change Password
      </button>
      <div>
        {changePass ? (
          <form className={styles.changepass}>
            <input placeholder="enter new password"></input>
            <input placeholder="confirm new password"></input>
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
