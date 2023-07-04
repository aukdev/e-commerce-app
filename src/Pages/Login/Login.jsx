import { useState } from "react";
import getDataFromSubCollection from "../../Utils/dataFetch/getdataFromSubCollection";

const Login = () => {
  const [select, setSelect] = useState("login");
  return (
    <div>
      {select === "login" ? (
        <LoginComponent />
      ) : select === "register" ? (
        <RegisterComponent />
      ) : null}

      {/* change login or register */}
      <div className=" mt-7">
        {select === "login" ? (
          <p>
            Don't have an account?{" "}
            <span
              className=" cursor-pointer"
              onClick={() => setSelect("register")}
            >
              Sign Up
            </span>
          </p>
        ) : select === "register" ? (
          <p>
            Already have an accout{" "}
            <span
              className=" cursor-pointer"
              onClick={() => setSelect("login")}
            >
              Sign In
            </span>
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Login;

/**
 *
 *
 *
 */

const LoginComponent = () => {
  const [data, setData] = useState([]);

  const testFun = () => {
    getDataFromSubCollection("category", "category1", "category1", setData);
  };

  console.log("sub collection data", data);
  return (
    <div>
      <h1>Login</h1>
      <button onClick={testFun}>get data</button>
    </div>
  );
};

/**
 *
 *
 *
 */

const RegisterComponent = () => {
  const registerHandle = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerHandle}>
        <div>
          <input type="text" placeholder="Your First Name" />
          <input type="text" placeholder="Your Last Name" />
        </div>
        <input type="text" placeholder="Your email Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <input type="text" placeholder="Your Phone Number" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
