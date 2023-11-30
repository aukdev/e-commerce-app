import { useEffect, useState } from "react";
import userRegister from "../../Utils/auth/register";
import userLogin from "../../Utils/auth/login";
import { useNavigate } from "react-router-dom";
import emailValidate from "../../Utils/validate/emailValidate";
import passwordValidate, {
  confirmPasswordValidate,
} from "../../Utils/validate/passwordValidate";
import { genderData } from "../../Utils/data";
import userDataValidate from "../../Utils/validate/userDataValidate";

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
  console.log("LoginComponent");

  const navigate = useNavigate();
  const [canSubmit, setCanSubmit] = useState(true);
  const [firebaseError, setFirebaseError] = useState({
    email: false,
    password: false,
  });

  const loginHandle = (e) => {
    e.preventDefault();

    const email = e.target["email"].value;
    const password = e.target["password"].value;

    if (canSubmit && email.length > 0 && password.length > 0) {
      userLogin(email, password, navigate, setFirebaseError);
    } else {
      console.log("can submit", canSubmit);
    }

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
          errorMsgBase="email"
          setCanSubmit={setCanSubmit}
          firebaseError={firebaseError}
          setFirebaseError={setFirebaseError}
        />
        <LoginInputBox
          inputType="password"
          label="Password"
          name="password"
          placeholder="Enter Your Password"
          errorMsgBase="password"
          setCanSubmit={setCanSubmit}
          firebaseError={firebaseError}
          setFirebaseError={setFirebaseError}
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

const firebaseError = {
  email: false,
  password: false,
};

const setFirebaseError = (setter = () => {}) => {};

const RegisterComponent = () => {
  const [canSubmit, setCanSubmit] = useState(true);
  const [section, setSection] = useState(1);

  const registerHandle = (e) => {
    e.preventDefault();

    const firstname = e.target["firstname"].value;
    const lastname = e.target["lastname"].value;
    const gender = e.target["gender"].value;
    const address = e.target["address"].value;
    const email = e.target["email"].value;
    const phone = e.target["phone"].value;
    const password = e.target["password"].value;
    const cpassword = e.target["cpassword"].value;

    const name = `${firstname} ${lastname}`;

    if (
      canSubmit &&
      firstname &&
      lastname &&
      gender &&
      address &&
      email &&
      phone &&
      password &&
      cpassword
    ) {
      userRegister(email, password, name, gender, address, phone);
    } else {
      console.log("can not submit");
    }
  };

  return (
    <div className=" w-[90%] p-5 shadow-lg flex flex-col items-center">
      <h1 className=" text-3xl font-bold mb-7">Register</h1>
      <form
        onSubmit={registerHandle}
        className=" w-full flex flex-col items-center"
      >
        <div className={` w-full ${section === 2 && "hidden"}`}>
          <LoginInputBox
            inputType="text"
            label="First Name"
            name="firstname"
            placeholder="Your First Name"
            errorMsgBase="firstname"
            setCanSubmit={setCanSubmit}
            firebaseError={firebaseError}
            setFirebaseError={setFirebaseError}
          />
          <LoginInputBox
            inputType="text"
            label="Last Name"
            name="lastname"
            placeholder="Your Last Name"
            errorMsgBase="lastname"
            setCanSubmit={setCanSubmit}
            firebaseError={firebaseError}
            setFirebaseError={setFirebaseError}
          />
          <LoginInputBox
            inputType="text"
            label="Gender"
            name="gender"
            placeholder="Your Gender"
            errorMsgBase="gender"
            setCanSubmit={setCanSubmit}
            firebaseError={firebaseError}
            setFirebaseError={setFirebaseError}
            selectorData={genderData}
          />
          <LoginInputBox
            inputType="text"
            label="Address"
            name="address"
            placeholder="Your Address"
            errorMsgBase="address"
            setCanSubmit={setCanSubmit}
            firebaseError={firebaseError}
            setFirebaseError={setFirebaseError}
          />
        </div>
        <div className={` w-full ${section === 1 && "hidden"}`}>
          <LoginInputBox
            inputType="email"
            label="Email"
            name="email"
            placeholder="Your Email Address"
            errorMsgBase="email"
            setCanSubmit={setCanSubmit}
            firebaseError={firebaseError}
            setFirebaseError={setFirebaseError}
          />
          <LoginInputBox
            inputType="text"
            label="Phone Number"
            name="phone"
            placeholder="Your Phone Number"
            errorMsgBase="phone"
            setCanSubmit={setCanSubmit}
            firebaseError={firebaseError}
            setFirebaseError={setFirebaseError}
          />
          <LoginInputBox
            inputType="password"
            label="Password"
            name="password"
            placeholder="Password"
            errorMsgBase="password"
            setCanSubmit={setCanSubmit}
            firebaseError={firebaseError}
            setFirebaseError={setFirebaseError}
          />
          <LoginInputBox
            inputType="password"
            label="Confirm Password"
            name="cpassword"
            placeholder="Confirm Password"
            errorMsgBase="cpassword"
            setCanSubmit={setCanSubmit}
            firebaseError={firebaseError}
            setFirebaseError={setFirebaseError}
          />
        </div>

        <div
          className={` w-full flex ${
            section === 1 ? "justify-end" : "justify-between"
          } px-7`}
        >
          {section === 2 && (
            <>
              <button
                className=" font-bold mt-4 px-5 py-1 border-[2px] hover:shadow-lg hover:bg-slate-100 border-[black] rounded"
                type="submit"
                onClick={() => setSection(1)}
              >
                Back
              </button>
              <button
                className=" font-bold mt-4 px-5 py-1 border-[2px] hover:shadow-lg hover:bg-slate-100 border-[black] rounded"
                type="submit"
              >
                Register
              </button>
            </>
          )}
          {section === 1 && (
            <button
              className=" font-bold mt-4 px-5 py-1 border-[2px] hover:shadow-lg hover:bg-slate-100 border-[black] rounded"
              type="submit"
              onClick={() => setSection(2)}
            >
              Next
            </button>
          )}
        </div>
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
  setCanSubmit,
  firebaseError,
  setFirebaseError,
  selectorData,
}) => {
  console.log("LoginInputBox");

  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState([]);

  useEffect(() => {
    if (errorMsgBase === "email") {
      if (firebaseError.email !== false) {
        setError(true);
        setErrMsg([firebaseError.email]);
      }
    }

    if (errorMsgBase === "password") {
      if (firebaseError.password !== false) {
        setError(true);
        setErrMsg([firebaseError.password]);
      }
    }
  }, [firebaseError]);

  return (
    <>
      <div
        className={` relative w-[95%] border p-3 ${
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
        {selectorData ? (
          <select
            name={name}
            defaultValue={selectorData.defaultValue}
            className="outline-none w-full bg-transparent"
          >
            {selectorData.data.map(({ value, title }) => (
              <option key={value} value={value}>
                {title}
              </option>
            ))}
          </select>
        ) : (
          <input
            className={` outline-none w-full ${
              error && "placeholder:text-red-500 text-red-500"
            }`}
            onBlur={(e) =>
              errorMsgBase === "email"
                ? emailValidate(
                    e.target.value,
                    setErrMsg,
                    setError,
                    setCanSubmit
                  )
                : errorMsgBase === "password"
                ? passwordValidate(
                    e.target.value,
                    setErrMsg,
                    setError,
                    setCanSubmit
                  )
                : errorMsgBase === "cpassword"
                ? confirmPasswordValidate(
                    e.target.value,
                    setErrMsg,
                    setError,
                    setCanSubmit
                  )
                : errorMsgBase === "address"
                ? userDataValidate(
                    e.target.value,
                    setErrMsg,
                    setError,
                    setCanSubmit,
                    errorMsgBase
                  )
                : errorMsgBase === "phone"
                ? userDataValidate(
                    e.target.value,
                    setErrMsg,
                    setError,
                    setCanSubmit,
                    errorMsgBase
                  )
                : userDataValidate(
                    e.target.value,
                    setErrMsg,
                    setError,
                    setCanSubmit,
                    label
                  )
            }
            onChange={() => {
              if (errorMsgBase === "email") {
                if (firebaseError.email !== false) {
                  setFirebaseError((pre) => {
                    const temp = { ...pre, email: false };
                    return temp;
                  });
                }
              }

              if (errorMsgBase === "password") {
                if (firebaseError.password !== false) {
                  setFirebaseError((pre) => {
                    const temp = { ...pre, password: false };
                    return temp;
                  });
                }
              }
              if (error) {
                setError(false);
                setCanSubmit(true);
                setErrMsg([]);
              }
            }}
            type={inputType}
            name={name}
            placeholder={placeholder}
          />
        )}
      </div>
      {error &&
        (errorMsgBase === "password" ? (
          errMsg.map((err, index) => (
            <p
              key={index}
              className={` text-red-500 font-bold w-[90%] text-sm ${
                index === 0 && "mt-[-12px]"
              } ml-3`}
            >
              {err}
            </p>
          ))
        ) : (
          <p className=" text-red-500 font-bold w-[90%] text-sm mt-[-12px] ml-3">
            {errMsg?.join(", ")}
          </p>
        ))}
    </>
  );
};
