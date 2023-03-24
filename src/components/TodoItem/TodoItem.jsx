import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  changeActive,
  deleteTodo,
  setTodoForEdit,
  cancelEdition,
} from "../../features/todos.slice";
import styles from "./TodoItem.module.css";

export function TodoItem({ task }) {
  const [mode, setMode] = useState("");
  const { todoForEdit } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    if (todoForEdit?.id === task.id) {
      setMode("edit");
    } else {
      setMode("");
    }
  }, [todoForEdit, task]);

  function checkStyle() {
    if (!task.active) {
      return `${styles.task} ${styles.inactive}`;
    }
    return `${styles.task}`;
  }

  function handleClick() {
    dispatch(changeActive(task.id));
    if (mode) {
      dispatch(cancelEdition());
    }
  }

  function deleteTask() {
    dispatch(deleteTodo(task.id));
  }

  function editTask() {
    dispatch(setTodoForEdit(task));
  }

  return (
    <div
      className={checkStyle()}
      style={{
        border: mode && "0.2rem solid #b5f5ec",
        backgroundColor: mode && "#e6fffb",
      }}
    >
      <div
        className={styles.description__block}
        role="button"
        tabIndex={0}
        onClick={handleClick}
        onKeyDown={handleClick}
      >
        <p className={styles.task__description}>{task.name}</p>
      </div>
      {!mode && (
        <div className={styles.task__controllers}>
          <button
            type="button"
            className={styles.delete__btn}
            onClick={() => deleteTask()}
          >
            <MdDeleteOutline color="red" className={styles.task__icon} />
            Delete
          </button>
          {task.active && (
            <button
              type="button"
              className={styles.edit__btn}
              onClick={() => editTask()}
            >
              <AiOutlineEdit color="white" className={styles.task__icon} />
              Edit
            </button>
          )}
        </div>
      )}
    </div>
  );
}
