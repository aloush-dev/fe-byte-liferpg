import { useContext, useState } from "react";
import { userContext } from "../Context/User.js";
import styles from "../styles/profile.module.css";
import { getTasks } from "../utils/api.js";

export const Profile = () => {
  const { user } = useContext(userContext);

  const [changePass, setChangePass] = useState(false);
  const [taskCount, setTaskCount] = useState(0);


  getTasks().then(({ data }) => {
    data.forEach((task)=>{
      if (task.is_complete) {
        setTaskCount(+1);
      }})
  });

  return (
    <div className={styles.container}>
      <h2> Hello, {user.username}</h2>

      <h3>
        You've Completed {taskCount} task{taskCount > 1 ? "s" : ""}
      </h3>

      <h3>You've earned a total of {user.experience} XP</h3>


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
