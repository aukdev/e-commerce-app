import { useState } from "react";
import userRegister from "../../Utils/auth/register";
import userLogin from "../../Utils/auth/login";

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
  const loginHandle = (e) => {
    e.preventDefault();

    const email = e.target["email"].value;
    const password = e.target["password"].value;

    userLogin(email, password);

    // console.log(email, password);
  };
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginHandle}>
        <input type="text" name="email" placeholder="Enter your email" />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />

        <button type="submit">Login</button>
      </form>
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

    const name = `${e.target[0].value} ${e.target[1].value}`;
    const email = e.target[2].value;
    const address = e.target[3].value;
    const password = e.target[4].value;
    const cPassword = e.target[5].value;
    const phoneNumber = e.target[6].value;
    const profileImage = e.target[7].value;

    if (password === cPassword) {
      userRegister(email, password, name, address, phoneNumber, profileImage);
    }

    // console.log({ name, email, address, password, cPassword, phoneNumber });
    // console.log(e.target[0].value);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerHandle}>
        <div>
          <input type="text" placeholder="Your First Name" />
          <input type="text" placeholder="Your Last Name" />
        </div>
        <input type="email" placeholder="Your email Address" />
        <input type="text" placeholder="Your Address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <input type="text" placeholder="Your Phone Number" />
        <input type="text" placeholder="Your Profile Image" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
