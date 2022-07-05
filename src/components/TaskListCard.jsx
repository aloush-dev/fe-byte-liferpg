import { useState } from "react";
import { FiCircle, FiCheckCircle } from "react-icons/fi";
import star from "../assets/icons/star.png";
import styles from "../styles/tasklistcard.module.css";

export const TaskListCard = ({ task }) => {
  const [isHovered, setIsHovered] = useState(false);

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
            >
              {isHovered ? <FiCheckCircle /> : <FiCircle />}
            </button>
          </div>
        </div>
      </li>
    </>
  );
};
