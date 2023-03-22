import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { changeActive } from "../../features/todos.slice";
import styles from "./TodoItem.module.css";

export function TodoItem({ task }) {
  const dispatch = useDispatch();
  function checkStyle() {
    if (!task.active) {
      return `${styles.task} ${styles.inactive}`;
    }
    return `${styles.task}`;
  }

  function handleClick() {
    dispatch(changeActive(task.id));
  }

  return (
    <div className={checkStyle()}>
      <div
        className={styles.description__block}
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleClick}
      >
        <p className={styles.task__description}>{task.name}</p>
      </div>
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
