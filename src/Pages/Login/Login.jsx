import { collection, getDocs, query, where } from "firebase/firestore";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import db from "../../Firebase/firebase";
import { addUser } from "../../Store/ReduxSlice/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const username = useRef();
  const password = useRef();

  const navigate = useNavigate();

  const loginSubmit = () => {
    const q = query(collection(db, "users"), where("username", "==", "admin"));

    getDocs(q)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
          dispatch(addUser(doc.data()));
        });
        navigate("/admin");
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
  };

  return (
    <div>
      <input ref={username} type="text" placeholder="username" />
      <input ref={password} type="password" placeholder="password" />
      <button onClick={loginSubmit}>Login</button>
    </div>
  );
};

export default Login;
