import React from "react";
import { useState, useEffect } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import { TodoItem } from "../index";
import styles from "./TodoList.module.css";

export const TodoList = () => {
  const { todoList, filterValue } = useAppSelector((state) => state.todos);
  const [list, setList] = useState(todoList);

  useEffect(() => {
    if (filterValue === "active") {
      filterTodoList(true);
    } else if (filterValue === "inactive") {
      filterTodoList(false);
    } else {
      setList(todoList);
    }
  }, [filterValue, todoList]);

  function filterTodoList(isActive: boolean) {
    setList(todoList.filter((item) => item.active === isActive));
  }

  return (
    <div className={styles.todos__container}>
      {list.length > 0 ? (
        <ul className={styles.todos}>
          {list.map((todo) => (
            <TodoItem key={todo.id} task={todo} />
          ))}
        </ul>
      ) : (
        <p className={styles.empty__message}>No tasks here!!!</p>
      )}
    </div>
  );
};
