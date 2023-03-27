import { Errors } from "../types/types";
export function checkUsername(value: string) {
  let message;
  if (value.trim().length === 0) {
    message = Errors.ERROR_EMPTY;
  } else if (!value.match(/[a-zа-я ]+$/iu)) {
    message = Errors.ERROR_ONLY_LETTERS;
  } else if (value.trim().length < 3) {
    message = Errors.ERROR_SHORT;
  } else {
    message = "";
  }

  return message;
}
