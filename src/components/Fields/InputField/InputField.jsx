import styles from "./InputField.module.css";

export function InputField({ type }) {
  return (
    <div className={styles.field}>
      <input type={type} className={styles.input} />
      <p className={styles.error} />
    </div>
  );
}
