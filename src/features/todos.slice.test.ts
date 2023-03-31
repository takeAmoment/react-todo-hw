import todosReducer, {
  addTodo,
  changeActive,
  deleteTodo,
  setTodoForEdit,
  changeTask,
  changeFilterValue,
  initialState,
} from "./todos.slice";
import todoList from "../data/todoList";
import { TodosInitialState } from "../types/types";

const task = {
  id: "1",
  name: "Test task",
  active: false,
};

const addTask = () => {
  const action = { type: addTodo.type, payload: task };

  const result = todosReducer(initialState, action);
  return result;
};

const setTask = (newInitialState: TodosInitialState) => {
  const action = { type: setTodoForEdit.type, payload: task };
  const result = todosReducer(newInitialState, action);
  return result;
};

describe("todoslice", () => {
  test("should return default state", () => {
    const result = todosReducer(undefined, { type: "" });

    expect(result).toEqual(initialState);
  });
  test("should add new task with 'addTodo' action", () => {
    const result = addTask();
    const resultsTodoList = result.todoList;

    expect(resultsTodoList).toHaveLength(todoList.length + 1);
    expect(resultsTodoList[todoList.length].name).toBe(task.name);
    expect(resultsTodoList[todoList.length].active).toBe(task.active);
  });
  test("change active with 'changeActive' action", () => {
    const newInitialState = addTask();

    const action = { type: changeActive.type, payload: task.id };

    const result = todosReducer(newInitialState, action);
    const resultsTodoList = result.todoList;

    expect(resultsTodoList[todoList.length].active).toBe(!task.active);
  });
  test("remove task with 'deleteTodo' action", () => {
    const newInitialState = addTask();

    const action = { type: deleteTodo.type, payload: task.id };

    const result = todosReducer(newInitialState, action);
    const resultsTodoList = result.todoList;

    expect(resultsTodoList).toHaveLength(todoList.length);
  });
  test("save task for edit with 'setTaskForEdit' action", () => {
    const newInitialState = addTask();

    const result = setTask(newInitialState);
    const taskForEdit = result.todoForEdit;

    expect(taskForEdit).toBeTruthy();
    expect(taskForEdit?.name).toBe(task.name);
  });
  test("change task with 'changeTask' action", () => {
    const newInitialState = addTask();

    const state = setTask(newInitialState);

    const action = { type: changeTask.type, payload: "New name for test" };
    const result = todosReducer(state, action);
    const taskForEdit = result.todoForEdit;
    const resultsTodoList = result.todoList;

    expect(taskForEdit).toBeNull();
    expect(resultsTodoList[todoList.length].name).toBe("New name for test");
  });
  test("change filter value with 'changeFilterValue' action", () => {
    const action = { type: changeFilterValue.type, payload: "new" };
    const result = todosReducer(initialState, action);

    expect(result.filterValue).toBe("new");
  });
});
