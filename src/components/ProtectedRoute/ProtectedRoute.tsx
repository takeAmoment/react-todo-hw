import React, { FC } from "react";
import { useAppSelector } from "../../hooks/reduxHooks";
import { Navigate } from "react-router-dom";
import { ProtectedRouteProps } from "../../types/types";

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { username } = useAppSelector((state) => state.username);
  if (!username) {
    return <Navigate to="/" />;
  }
  return children;
};
