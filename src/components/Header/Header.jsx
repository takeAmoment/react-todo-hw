import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <nav className={styles.header__menu}>
        <ul className={styles.menu__list}>
          <li className={styles.list__item}>
            <NavLink to="" className={styles.link}>
              Page 1
            </NavLink>
          </li>
          <li className={styles.list__item}>
            <NavLink to="" className={styles.link}>
              Page 2
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
