import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { changeActive, deleteTodo } from "../../features/todos.slice";
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

  function deleteTask() {
    dispatch(deleteTodo(task.id));
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
        <button
          type="button"
          className={styles.delete__btn}
          onClick={() => deleteTask()}
        >
          <MdDeleteOutline color="red" className={styles.task__icon} />
          Delete
        </button>
        <button type="button" className={styles.edit__btn}>
          <AiOutlineEdit color="green" className={styles.task__icon} />
          Edit
        </button>
      </div>
    </div>
  );
}
