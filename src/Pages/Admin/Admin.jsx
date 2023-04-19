import { useDispatch } from "react-redux";
import { removeUser } from "../../Store/ReduxSlice/userSlice";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(removeUser());
    navigate("/admin");
  };
  return (
    <div>
      <p>Admin</p>
      <br />
      <button onClick={logout}>log out</button>
    </div>
  );
};

export default Admin;
