import { Route, Navigate } from "react-router-dom";

function AuthGuard({ children }) {
  const isAuthenticated = sessionStorage.getItem("token");
  

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
}

export default AuthGuard;
