import styles from "../styles/tasklist.module.css";
import { TaskListCard } from "./TaskListCard";

export const TaskList = () => {

  const fakeTasks = [
    { name: "make the bed", difficulty: 1, is_completed: false },
    { name: "go to the shop", difficulty: 1, is_completed: false },
    { name: "have 4 cups of water", difficulty: 2, is_completed: false },
    { name: "another task", difficulty: 1, is_completed: false },
    { name: "a really difficult task", difficulty: 3, is_completed: false },
  ];

  return (
    <div className={styles.container}>
      <ul>
        {fakeTasks.map((task, index) => {
          return <TaskListCard task={task} index={index} />;
        })}
      </ul>
    </div>
  );
};
