import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { userSelector } from "../Store/ReduxSlice/userSlice";
import { useEffect, useState } from "react";
import NoUrl from "../Pages/404/NoUrl";

const AdminProtected = () => {
  const userData = useSelector(userSelector);

  const [canView, setCanView] = useState(false);

  useEffect(() => {
    if (userData.name) {
      // console.log("name");
      if (!(userData.name === "default")) {
        // console.log("not default", userData.name === "default");
        if (userData.role === "admin") {
          setCanView(true);
        }
      }
    }
    console.log("admin use effect");
    // eslint-disable-next-line
  }, [userData]);

  return canView ? <Outlet /> : <NoUrl />;
};

export default AdminProtected;
