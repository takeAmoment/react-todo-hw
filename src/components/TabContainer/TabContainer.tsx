import { useAppSelector, useAppDispatch } from "../../hooks/reduxHooks";
import { changeFilterValue } from "../../features/todos.slice";
import styles from "./TabContainer.module.css";
import React from "react";
import { FilterValue } from "../../types/types";

export const TabContainer = () => {
  const { filterValue } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  function checkClassName(type: FilterValue) {
    if (filterValue === type) {
      return styles.active;
    }
    return styles.item;
  }

  function changeFilter(value: FilterValue) {
    dispatch(changeFilterValue(value));
  }

  return (
    <ul className={styles.tab__wrap}>
      <li
        className={checkClassName("active")}
        onClick={() => changeFilter("active")}
      >
        Active
      </li>
      <li className={checkClassName("all")} onClick={() => changeFilter("all")}>
        All
      </li>
      <li
        className={checkClassName("inactive")}
        onClick={() => changeFilter("inactive")}
      >
        Inactive
      </li>
    </ul>
  );
};
