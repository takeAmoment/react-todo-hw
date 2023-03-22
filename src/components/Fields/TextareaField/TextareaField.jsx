import styles from "./TextareaField.module.css";

export function TextareaField() {
  return (
    <div className={styles.field}>
      <textarea className={styles.input} />
      <p className={styles.error} />
    </div>
  );
}
