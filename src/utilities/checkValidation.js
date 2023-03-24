const ERROR_EMPTY = "* Fill this field!";
const ERROR_SHORT = "* At least 3 letters!";
const ERROR_ONLY_LETTERS = "* Only letters!";

export function checkUsername(value) {
  let message;
  if (value.trim().length === 0) {
    message = ERROR_EMPTY;
  } else if (!value.match(/[a-zа-я ]+$/iu)) {
    message = ERROR_ONLY_LETTERS;
  } else if (value.trim().length < 3) {
    message = ERROR_SHORT;
  } else {
    message = "";
  }

  return message;
}
