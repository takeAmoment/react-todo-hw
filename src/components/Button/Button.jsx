export function Button({ type, text, nameOfClass, disabled, onClick }) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={nameOfClass}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
