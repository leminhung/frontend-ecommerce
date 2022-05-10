import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Footer from "src/component/Footer";
import Menu from "src/component/Menu";
import {
  authSignInAsyncAction,
  logOutAuto,
} from "src/store/user/user.action.js";

const Signin = ({ history, ...props }) => {
  //query string url parameter
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = values;
  const dispatch = useDispatch();

  const { isAuthenticated, error } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log("authen--", isAuthenticated);
    if (isAuthenticated) {
      history.push("/hekko");
    }
  }, [dispatch, isAuthenticated, error, history]);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     props.history.push(redirect);
  //     dispatch(logOutAuto());
  //   }
  // }, [props.history, redirect, isAuthenticated]);

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(authSignInAsyncAction(email, password));
  };

  return (
    <div>
      <Menu />
      <div className='container custom_class'>
        <h2 className='signup_title '>SIGN IN </h2>
        <form className=' col-sm-6 offset-3 pt-5 signup_form'>
          <div className='form-outline mb-4'>
            <input
              onChange={handleChange("email")}
              type='email'
              id='form4Example2'
              className='form-control'
              value={email}
            />
            <label className='form-label' htmlFor='form4Example2'>
              Email{" "}
            </label>
          </div>

          <div className='form-outline mb-4'>
            <input
              onChange={handleChange("password")}
              type='password'
              id='form4Example3'
              className='form-control'
              value={password}
            />
            <label className='form-label' htmlFor='form4Example3'>
              Password
            </label>
          </div>

          <button
            onClick={handleSubmit}
            type='submit'
            className='btn btn-primary btn-block mb-4'
          >
            Sign In
          </button>
          <h6>Not a user? {<Link to='/signup'>Sign Up</Link>} </h6>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
