import { useState } from "react";
import styles from "./MainPage.module.css";

export function MainPage() {
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("* Fill this field!");
  const [isShow, setIsShow] = useState(false);

  function checkIsValid() {
    if (error) {
      setIsValid(false);
    }

    setIsValid(true);
  }

  function checkIsError(value) {
    if (value.trim().length === 0) {
      setError("* Fill this field!");
    } else if (!value.match(/[a-zа-я ]+$/iu)) {
      setError("* Only letters!");
    } else if (value.trim().length < 3) {
      setError("* At least 3 letters!");
    } else {
      setError("");
    }

    checkIsValid();
  }

  function handleChange(e) {
    const { value } = e.target;
    setName(value);
    checkIsError(value);
  }

  function saveName() {
    checkIsValid();
    if (isValid) {
      setIsShow(false);
      setIsValid(false);
      setError("* Fill this field!");
      setName("");
    } else {
      setIsShow(true);
    }
  }

  return (
    <main>
      <div className={styles.main__contant}>
        <h1 className={styles.title}>Hello, friend!</h1>
        <h3 className={styles.subtitle}>Lets get to know each other</h3>
        <div className={styles.task__container}>
          <p className={styles.task__description}>
            Your first task to add your name!!
          </p>
          <div className={styles.form}>
            <div className={styles.field}>
              <input
                type="text"
                className={styles.input}
                value={name}
                onChange={handleChange}
                maxLength="20"
              />
              <p className={styles.error}>{isShow && error}</p>
            </div>
            <button type="button" className={styles.button} onClick={saveName}>
              Add
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
