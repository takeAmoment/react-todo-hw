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
      <h4 className={styles.task__name}>
        {task.id}
        {task.name}
      </h4>
      <div className={styles.task__body}>
        <p className={styles.task__description}>{task.description}</p>
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
    </div>
  );
}
