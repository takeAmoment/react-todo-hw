import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function ProtectedRoute({ children }) {
  const { username } = useSelector((state) => state.username);
  if (!username) {
    return <Navigate to="/" />;
  }
  return children;
}
