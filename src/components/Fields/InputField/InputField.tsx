import React, { FC } from "react";
import { InputFieldProps } from "../../../types/types";
import styles from "./InputField.module.css";

export const InputField: FC<InputFieldProps> = ({
  type,
  value,
  onChange,
  error,
  isShow,
  maxLength,
}) => {
  return (
    <div className={styles.field}>
      <input
        type={type}
        className={styles.input}
        value={value}
        onChange={onChange}
        maxLength={maxLength ? Number(maxLength) : undefined}
      />
      {maxLength && <p className={styles.error}>{isShow ? error : ""}</p>}
    </div>
  );
};
