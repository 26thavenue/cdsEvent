import { useAuth } from "./context.tsx";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }:any) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}