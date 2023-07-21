import { useState } from "react";
import userRegister from "../../Utils/auth/register";
import userLogin from "../../Utils/auth/login";
import { useNavigate } from "react-router-dom";
import emailValidate from "../../Utils/validate/emailValidate";

const Login = () => {
  const [select, setSelect] = useState("login");
  return (
    <div className=" w-full h-screen flex flex-col items-center justify-center">
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
 */

const LoginComponent = () => {
  const navigate = useNavigate();

  const loginHandle = (e) => {
    e.preventDefault();

    const email = e.target["email"].value;
    const password = e.target["password"].value;

    // userLogin(email, password, navigate);

    console.log(email, password);
  };
  return (
    <div className=" w-[90%] p-5 shadow-lg flex flex-col items-center">
      <h1 className=" text-3xl font-bold mb-7">Login</h1>
      <form
        onSubmit={loginHandle}
        className=" w-full flex flex-col items-center"
      >
        <LoginInputBox
          inputType="email"
          label="Your Email"
          name="email"
          placeholder="Enter Your Email"
          errorMsgBase="email error"
        />
        <LoginInputBox
          inputType="password"
          label="Password"
          name="password"
          placeholder="Enter Your Password"
          errorMsgBase="password error"
        />

        <button
          className=" font-bold mt-4 px-5 py-1 border-[2px] hover:shadow-lg hover:bg-slate-100 border-[black] rounded"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

/**
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

/**
 *
 */

const LoginInputBox = ({
  inputType,
  label,
  placeholder,
  name,
  errorMsgBase,
}) => {
  const [error, serError] = useState(true);
  const [errMsg, setErrMsg] = useState([]);

  return (
    <>
      <div
        className={` relative w-[90%] border p-3 ${
          error ? "border-red-500" : "border-gray-400"
        } rounded-[5px] m-3`}
      >
        <label
          className={`absolute top-[-12px] left-2 ${
            error && "text-red-500"
          } bg-white px-1 font-semibold text-sm`}
        >
          {label}
        </label>
        <input
          className={` outline-none w-full ${
            error && "placeholder:text-red-500 text-red-500"
          }`}
          onBlur={(e) => emailValidate(e.target.value, setErrMsg)}
          type={inputType}
          name={name}
          placeholder={placeholder}
        />
      </div>
      {error && (
        <p className=" text-red-500 font-bold w-[90%] text-sm mt-[-12px] ml-3">
          {errMsg?.join(",")}
        </p>
      )}
    </>
  );
};
