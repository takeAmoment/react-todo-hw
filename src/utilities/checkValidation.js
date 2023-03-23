export function checkUsername(value) {
  let message;
  if (value.trim().length === 0) {
    message = "* Fill this field!";
  } else if (!value.match(/[a-zа-я ]+$/iu)) {
    message = "* Only letters!";
  } else if (value.trim().length < 3) {
    message = "* At least 3 letters!";
  } else {
    message = "";
  }

  return message;
}
