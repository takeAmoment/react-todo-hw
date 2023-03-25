import { useSelector, useDispatch } from "react-redux";
import { changeFilterValue } from "../../features/todos.slice";
import styles from "./TabContainer.module.css";

export function TabContainer() {
  const { filterValue } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function checkClassName(type) {
    if (filterValue === type) {
      return styles.active;
    }
    return styles.item;
  }

  function changeFilter(value) {
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
}
