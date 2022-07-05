import { useContext, useState } from "react";
import { FiCircle, FiCheckCircle } from "react-icons/fi";
import star from "../assets/icons/star.png";
import { userContext } from "../Context/User";
import styles from "../styles/tasklistcard.module.css";
import { profileUpdate, updateTask } from "../utils/api";

export const TaskListCard = ({ task, setTasks }) => {
  const { user, setUser } = useContext(userContext);
  const [isHovered, setIsHovered] = useState(false);

  function handleSubmit(taskInfo) {
    setTasks((oldTasks) => {
      return oldTasks.filter((task) => {
        return task.id !== taskInfo.id;
      });
    });

    updateTask(taskInfo.id)
      .then(({ data }) => {
        if (data) {
          profileUpdate({
            experience: user.experience + taskInfo.task_difficulty * 10,
            currency: user.currency + taskInfo.task_difficulty * 20,
          }).then(({ data }) => {
            setUser(data)
          });
        }
      })
      .catch((err) => {
        alert("Couldn't mark task as complete, please try again.");
        setTasks((oldTasks) => {
          const newTasks = { ...oldTasks };
          newTasks.push(task);
          return newTasks;
        });
      });
  }

  return (
    <>
      <li className={styles.taskcard}>
        <p>{task.task_name}</p>
        <div className={styles.taskcardright}>
          <div>
            {task.task_difficulty === 1 ? (
              <img src={star} alt="difficulty rating" />
            ) : task.task_difficulty === 2 ? (
              <div>
                <img src={star} alt="difficulty rating" />
                <img src={star} alt="difficulty rating" />
              </div>
            ) : task.task_difficulty === 3 ? (
              <div>
                <img src={star} alt="difficulty rating" />
                <img src={star} alt="difficulty rating" />
                <img src={star} alt="difficulty rating" />
              </div>
            ) : task.task_difficulty === 4 ? (
              <div>
                <img src={star} alt="difficulty rating" />
                <img src={star} alt="difficulty rating" />
                <img src={star} alt="difficulty rating" />
                <img src={star} alt="difficulty rating" />
              </div>
            ) : (
              <div>
                <img src={star} alt="difficulty rating" />
                <img src={star} alt="difficulty rating" />
                <img src={star} alt="difficulty rating" />
                <img src={star} alt="difficulty rating" />
                <img src={star} alt="difficulty rating" />
              </div>
            )}
          </div>
          <div>
            <button
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
              onClick={() => {
                handleSubmit(task);
              }}
            >
              {isHovered ? <FiCheckCircle /> : <FiCircle />}
            </button>
          </div>
        </div>
      </li>
    </>
  );
};
