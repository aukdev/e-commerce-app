import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { userSelector } from "../Store/ReduxSlice/userSlice";

const AdminProtected = () => {
  const admin = false;

  const user = useSelector(userSelector);
  console.log(user);

  if (user.role) {
    if (user.role === "admin") {
      return <Outlet />;
    } else {
      return <Navigate to="/404" />;
    }
  } else {
    return <Navigate to="/404" />;
  }
};

export default AdminProtected;
