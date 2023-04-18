import { Navigate, Outlet } from "react-router-dom";

const UserProtected = () => {
  const user = false;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default UserProtected;
