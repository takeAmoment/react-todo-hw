import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import styles from "./TodoItem.module.css";

export function TodoItem({ task }) {
  function checkStyle() {
    if (task.active === false) {
      return `${styles.task} ${styles.inactive}`;
    }
    return `${styles.task}`;
  }
  return (
    <div className={checkStyle()}>
      <p className={styles.task__description}>{task.name}</p>
      <div className={styles.task__controllers}>
        <MdDeleteOutline
          color="red"
          className={styles.task__icon}
          title="Delete"
        />
        <AiOutlineEdit
          color="orange"
          className={styles.task__icon}
          title="Edit"
        />
      </div>
    </div>
  );
}
