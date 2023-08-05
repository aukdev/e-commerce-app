import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase";

const userLogin = (email, password, navigate, ferror) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      //   const user = userCredential.user;
      // ...
      navigate("/");
    })
    .catch((error) => {
      //   const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
      if (errorMessage === "Firebase: Error (auth/user-not-found).") {
        // console.log("user-not-found");
        ferror((pre) => {
          const temp = { ...pre, email: "user-not-found" };
          return temp;
        });
      }
      if (errorMessage === "Firebase: Error (auth/wrong-password).") {
        // console.log("wrong-password");
        ferror((pre) => {
          const temp = { ...pre, password: "wrong-password" };
          return temp;
        });
      }
    });
};

export default userLogin;
