import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AdminGuard = ({ children }) => {
  const { currentUser, isAdmin } = useAuth();

  if (!currentUser || !isAdmin()) {
    return <Navigate to="/qa" />;
  }

  return children;
};

export default AdminGuard;
