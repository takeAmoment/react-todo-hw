import styles from "./TodoPage.module.css";
import todoList from "../../data/todoList";
import { TodoItem, InputField, Button } from "../../components";

export function TodoPage() {
  return (
    <main className={styles.todo__page}>
      <div className={styles.page__container}>
        <div className={styles.task__form}>
          <InputField type="text" />
          <Button type="button" nameOfClass={styles.button} text="Add" />
        </div>
        <div className={styles.tabs}>
          <div className={styles.tab}>
            <span>Active</span>
          </div>
          <div className={`${styles.tab} ${styles.active}`}>
            <span>Inactive</span>
          </div>
        </div>
        <div className={styles.todos__container}>
          {todoList ? (
            <ul className={styles.todos}>
              {todoList.map((task) => (
                <TodoItem key={task.id} task={task} />
              ))}
            </ul>
          ) : (
            <p>Your list is empty!!</p>
          )}
        </div>
      </div>
    </main>
  );
}
