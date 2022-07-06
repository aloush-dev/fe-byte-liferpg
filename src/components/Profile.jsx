import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../Context/User.js";
import styles from "../styles/profile.module.css";
import { getTasks, logoutUser } from "../utils/api.js";

export const Profile = () => {
  const { user, setUser } = useContext(userContext);

  const [taskCount, setTaskCount] = useState(0);

  useEffect(() => {
    getTasks().then(({ data }) => {
      let completedTasks = data.filter((task) => {
        return task.is_complete;
      });
      setTaskCount(completedTasks.length);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h2> Hello, {user.username}</h2>

      <h3>
        You've Completed {taskCount} task{taskCount > 1 ? "s" : ""}
      </h3>

      <h3>You've earned a total of {user.experience} XP</h3>

      <button
        onClick={async () => {
          await logoutUser();
          setUser({});
        }}
        className={styles.navbut}
      >
        <Link to="/">Logout</Link>
      </button>
    </div>
  );
};
