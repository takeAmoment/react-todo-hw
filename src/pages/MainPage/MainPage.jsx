import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsername } from "../../features/username.slice";
import styles from "./MainPage.module.css";
import { InputField, Button } from "../../components";
import { checkUsername } from "../../utilities/checkValidation";

export function MainPage() {
  const { username } = useSelector((state) => state.username);
  const [name, setName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("* Fill this field!");
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    checkIsValid();
  }, [error]);

  function checkIsValid() {
    if (error) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }

  function checkIsError(value) {
    const message = checkUsername(value);
    setError(message);

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
      dispatch(addUsername(name));
    } else {
      setIsShow(true);
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.main__contant}>
        <h1 className={styles.title}>
          Hello,&nbsp;
          {` ${username}` || " friend"}
          !!!
        </h1>
        {!username && (
          <h3 className={styles.subtitle}>Lets get to know each other</h3>
        )}
        <div className={styles.task__container}>
          <p className={styles.task__description}>
            {!username
              ? "Your first task to add your name!"
              : "You can change your name ;)"}
          </p>
          <div className={styles.form}>
            <InputField
              type="text"
              value={name}
              onChange={(e) => handleChange(e)}
              maxLength="15"
              error={error}
              isShow={isShow}
            />
            <Button
              type="button"
              nameOfClass={styles.button}
              onClick={() => saveName()}
              text={username ? "Change" : "Add"}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
