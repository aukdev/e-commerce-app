import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { userSelector } from "../Store/ReduxSlice/userSlice";
import { useEffect } from "react";

const AdminProtected = () => {
  const userData = useSelector(userSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (userData.name) {
      console.log("name");
      if (!(userData.name === "default")) {
        // console.log("not default", userData.name === "default");
        if (!(userData.role === "admin")) {
          navigate("/404");
        }
      }
    }
    // eslint-disable-next-line
  }, [userData]);

  return <Outlet />;
};

export default AdminProtected;
