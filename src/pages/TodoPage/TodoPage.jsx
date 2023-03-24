import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addTodo, changeTask, cancelEdition } from "../../features/todos.slice";
import styles from "./TodoPage.module.css";
import { InputField, Button, TabContainer, TodoList } from "../../components";

export function TodoPage() {
  const { todoForEdit, todoList } = useSelector((state) => state.todos);
  const { username } = useSelector((state) => state.username);
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (todoForEdit) {
      setTaskName(todoForEdit.name);
    } else {
      setTaskName("");
    }
  }, [todoForEdit]);

  function reset() {
    setIsDisabled(true);
    setTaskName("");
  }

  function handleChange(e) {
    const { value } = e.target;
    setTaskName(value);
    if (value.trim().length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }

  function createTask() {
    const date = new Date();
    const newTask = {
      id: date.getTime(),
      name: taskName,
      active: true,
    };

    dispatch(addTodo(newTask));
    reset();
  }

  function changeTodo() {
    dispatch(changeTask(taskName));
    reset();
  }

  function cancel() {
    dispatch(cancelEdition());
  }

  function createTitle() {
    return `${
      username.slice(0, 1).toUpperCase() + username.slice(1)
    } you have ${todoList.length} ${todoList.length < 2 ? "task" : "tasks"}`;
  }

  return (
    <main className={styles.todo__page}>
      <div className={styles.page__container}>
        <div className={styles.task__form}>
          <InputField
            type="text"
            value={taskName}
            onChange={(e) => handleChange(e)}
          />
          {!todoForEdit ? (
            <Button
              type="button"
              nameOfClass={styles.button}
              text="Add"
              onClick={() => createTask()}
              disabled={isDisabled}
            />
          ) : (
            <div className={styles.edit__buttons}>
              <Button
                type="button"
                nameOfClass={styles.button}
                text="Edit"
                onClick={() => changeTodo()}
                disabled={isDisabled}
              />
              <Button
                type="button"
                nameOfClass={styles.button_cancel}
                text="Cancel"
                onClick={() => cancel()}
              />
            </div>
          )}
        </div>
        <h2 className={styles.user__title}>{createTitle()}</h2>
        <TabContainer />
        <TodoList />
      </div>
    </main>
  );
}
