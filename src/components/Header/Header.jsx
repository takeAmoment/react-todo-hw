import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

export function Header() {
  const { username } = useSelector((state) => state.username);
  return (
    <header>
      <nav className={styles.header__menu}>
        <ul className={styles.menu__list}>
          <li className={styles.list__item}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Page 1
            </NavLink>
          </li>
          {username && (
            <li className={styles.list__item}>
              <NavLink
                to="/todo"
                className={({ isActive }) =>
                  isActive ? `${styles.link} ${styles.active}` : styles.link
                }
              >
                Page 2
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
