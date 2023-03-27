import React, { FC } from "react";
import { ButtonProps } from "../../types/types";

export const Button: FC<ButtonProps> = ({
  type,
  text,
  nameOfClass,
  disabled,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={nameOfClass}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
