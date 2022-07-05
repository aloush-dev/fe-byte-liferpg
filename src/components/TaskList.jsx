import { useEffect, useState } from "react";
import styles from "../styles/tasklist.module.css";
import { getTasks, postTask } from "../utils/api";
import { TaskListCard } from "./TaskListCard";

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const [taskToPost, setTaskToPost] = useState({
    task_name: "",
    task_difficulty: 1,
  });

  function handleSubmit(event) {
    event.preventDefault();

    postTask(taskToPost).then((data) => {
      if (data.status === 202) {
        alert("Task Added");
      } else {
        alert("Could not add task, please try again");
      }
    });

    setTaskToPost({ task_name: "", task_difficulty: 1 });
  }

  useEffect(() => {
    getTasks().then(({ data }) => {
      setTasks(data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.newtaskcontainer}>
        <form onSubmit={handleSubmit}>
          <div className={styles.postcomment}>
            <label>
              <div className={styles.label}>New Task</div>
              <div className={styles.inputcontainer}>
                <textarea
                  placeholder="Wow, what an amazing post!"
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
                <button className={styles.inputbutton}>Post</button>
              </div>
            </label>
          </div>
        </form>
      </div>

      <ul>
        {tasks.map((task, index) => {
          return <TaskListCard task={task} key={index} />;
        })}
      </ul>
    </div>
  );
};
