import { useState } from "react";
import { FiCircle, FiCheckCircle } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import styles from "../styles/tasklistcard.module.css";

export const TaskListCard = ({ task, index }) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>

      <li className={styles.taskcard}>
        <p>{task.name}</p>
        <div className={styles.taskcardright}>
          <div>
            {task.difficulty === 1 ? (
              <AiFillStar />
            ) : task.difficulty === 2 ? (
              <div>
                <AiFillStar /> <AiFillStar />
              </div>
            ) : (
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
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
