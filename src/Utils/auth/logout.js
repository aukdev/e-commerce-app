import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase";

const logout = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
};

export default logout;
