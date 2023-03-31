import { Link } from "react-router-dom";
import image from "../../assets/images/error.jpg";
import styles from "./ErrorPage.module.css";

export function ErrorPage() {
  return (
    <main className={styles.error__page}>
      <div className={styles.error}>
        <h2 className={styles.error__title}>
          Sorry! This adress does not exist...
        </h2>
        <img className={styles.error__image} src={image} alt="error" />
        <button type="button" className={styles.error__button}>
          <Link to="/todo" className={styles.button__link}>
            Go to todo list
          </Link>
        </button>
      </div>
    </main>
  );
}
