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
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const { email, password } = values;
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    const { isAuthenticated } = auth;
    console.log(isAuthenticated);
    if (isAuthenticated) {
      // history.push("/");
    }
  }, [auth, history]);

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
