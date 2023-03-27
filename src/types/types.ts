export type FilterValue = "all" | "active" | "inactive";

export enum Errors {
  ERROR_EMPTY = "* Fill this field!",
  ERROR_SHORT = "* At least 3 letters!",
  ERROR_ONLY_LETTERS = "* Only letters!",
}

export interface ButtonProps {
  type: "submit" | "button" | "reset";
  text: string;
  nameOfClass: string;
  disabled?: boolean;
  onClick: () => void;
}

export interface InputFieldProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  isShow?: boolean;
  maxLength?: string;
}

export interface UsernameInitialState {
  username: string;
}

export interface ITodo {
  id: number;
  name: string;
  active: boolean;
}

export interface TodosInitialState {
  todoList: ITodo[];
  todoForEdit: ITodo | null;
  filterValue: FilterValue;
}

export interface ProtectedRouteProps {
  children: JSX.Element;
}

export interface TodoItemProps {
  task: ITodo;
}
