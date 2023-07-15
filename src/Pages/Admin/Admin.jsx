import logout from "../../Utils/auth/logout";

const Admin = () => {
  return (
    <div>
      <p>Admin</p>
      <br />
      <button onClick={logout}>log out</button>
    </div>
  );
};

export default Admin;
