export function Button({ type, text, nameOfClass, disabled }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={nameOfClass} disabled={disabled}>
      {text}
    </button>
  );
}
