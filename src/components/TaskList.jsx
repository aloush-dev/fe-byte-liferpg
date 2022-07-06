import { useContext, useEffect, useState } from "react";
import { userContext } from "../Context/User";
import styles from "../styles/tasklist.module.css";
import { getTasks, postTask } from "../utils/api";
import { TaskListCard } from "./TaskListCard";
import { GrSend } from "react-icons/gr";

export const TaskList = () => {
  const { user, setUser } = useContext(userContext);
  const [tasks, setTasks] = useState([]);

  const [taskToPost, setTaskToPost] = useState({
    task_name: "",
    task_difficulty: 1,
  });

  function handleSubmit(event) {
    event.preventDefault();

    postTask(taskToPost).then(({ data }) => {
      setUser((oldUser) => {
        const newUser = { ...oldUser };
        return newUser;
      });
      if (!data) {
        alert("Could not add task, please try again");
      }
    });

    setTaskToPost({ task_name: "", task_difficulty: 1 });
  }

  useEffect(() => {
    getTasks().then(({ data }) => {
      setTasks(
        data.filter((task) => {
          return !task.is_complete;
        })
      );
    });
  }, [user]);

  return (
    <div className={styles.container}>
      <div className={styles.tasknav}></div>
      <div className={styles.newtaskcontainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.postcomment}>
            <div className={styles.inputcontainer}>
              <textarea
                placeholder="Write a new task!"
                className={styles.inputfield}
                required
                onChange={(event) => {
                  setTaskToPost((oldTask) => {
                    const newTask = { ...oldTask };
                    newTask.task_name = event.target.value;
                    return newTask;
                  });
                }}
                value={taskToPost.task_name}
                type="text"
              ></textarea>
              <div className={styles.rightarea}>
                <select
                  onChange={(event) => {
                    setTaskToPost((oldTask) => {
                      const newTask = { ...oldTask };
                      newTask.task_difficulty = event.target.value;
                      return newTask;
                    });
                  }}
                >
                  <option value={1}>Very Easy</option>
                  <option value={2}>Easy</option>
                  <option value={3}>Medium</option>
                  <option value={4}>Hard</option>
                  <option value={5}>Very Hard</option>
                </select>
                <button className={styles.inputbutton}>
                  <GrSend />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <ul>
        {tasks.map((task, index) => {
          return <TaskListCard setTasks={setTasks} task={task} key={index} />;
        })}
      </ul>
    </div>
  );
};
