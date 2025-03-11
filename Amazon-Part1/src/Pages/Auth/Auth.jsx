import React, { useState, useContext } from "react";
import classes from "./SignUp.module.css";
// import LayOut from '../../Components/LayOut/LayOut'
import { Link, useNavigate, useLocation, redirect } from "react-router-dom";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ClipLoader } from "react-spinners";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });

  const { state, dispatch } = useContext(DataContext);
  const  user  = state.user;
  console.log(user);
  const navigate = useNavigate();
  const navStateData = useLocation()
  
  

  const authHandler = async (e) => {
    e.preventDefault();
    if (e.target.name == "signin") {
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate(navStateData?.state?.redirect ||"/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signIn: false });
        });
    } else {
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate((navStateData?.state?.redirect ||"/"));
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signUp: false });
        });
    }
  };
  // console.log(password,email);
  return (
    <section className={classes.login}>
      {/* logo */}
      <Link to={"/"}>
        <img
          src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/amazon-1024.png"
          alt=""
        />
      </Link>

      {/* form */}

      <div className={classes.login_container}>
        <h1>Sign-In</h1>
        {navStateData?.state?.msg && (
          <small 
          style={{
            padding:"5px",
            textAlign: "center",
            color: "red",
            fontSize: "bold"
          }}>
          {navStateData.state.msg}
          </small>
        )}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="Password"
            />
          </div>

          <button
            type="submit"
            name="signin"
            onClick={authHandler}
            className={classes.login_signInButton}
          >
            {loading.signIn ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              " Sign In"
            )}
          </button>
        </form>

        {/* agreement */}
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
          Sale. Please see our privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>


        {/* create acc btn */}
        <button
          type="submit"
          name="signup"
          onClick={authHandler}
          className={classes.login_regButton}
        >
          {loading.signUp ? (
            <ClipLoader color="#000" size={15}></ClipLoader>
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
