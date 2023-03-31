import { useAppSelector } from "../../hooks/reduxHooks";
import { NavLink } from "react-router-dom";
import { BiTask } from "react-icons/bi";
import styles from "./Header.module.css";
import React from "react";

export const Header = () => {
  const { todoList } = useAppSelector((state) => state.todos);
  const { username } = useAppSelector((state) => state.username);

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
        {username && (
          <div className={styles.user__info}>
            <span className={styles.user__name}>{username}</span>
            <div className={styles.user__tasks}>
              <BiTask className={styles.tasks__icon} />
              <span className={styles.tasks__amount}>
                {todoList.filter((task) => task.active).length}
              </span>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
