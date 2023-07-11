import logout from "../../Utils/auth/logout";

const User = () => {
  return (
    <div className=" pt-[200px]">
      user
      <button onClick={logout}>logout</button>
    </div>
  );
};

export default User;
