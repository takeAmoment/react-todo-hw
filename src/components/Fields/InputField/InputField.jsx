import styles from "./InputField.module.css";

export function InputField({
  type,
  value,
  onChange,
  error,
  isShow,
  maxLength,
}) {
  return (
    <div className={styles.field}>
      <input
        type={type}
        className={styles.input}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
      <p className={styles.error}>{isShow ? error : ""}</p>
    </div>
  );
}
