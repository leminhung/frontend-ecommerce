import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.css";
import Menu from "src/component/Menu";

// import Header from "src/component/Header";
import Footer from "src/component/Footer";
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
      {/* <div className='container custom_class'>
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
      </div> */}

      <div class='container custom_class'>
        <div class='row'>
          <div class='col-md-offset-3 col-md-6'>
            <form class='form-horizontal col-sm-12 offset-6 pt-5 signup_form'>
              <span class='heading'>Log In</span>
              <div class='form-group'>
                <input
                  type='email'
                  class='form-control'
                  id='inputEmail3'
                  placeholder='Email'
                />
                <i class='fa fa-user'></i>
              </div>
              <div class='form-group help'>
                <input
                  type='password'
                  class='form-control'
                  id='inputPassword3'
                  placeholder='Password'
                />
                <i class='fa fa-lock'></i>
                <a href='#' class='fa fa-question-circle'></a>
              </div>
              <div class='form-group'>
                <div class='main-checkbox'>
                  <input
                    type='checkbox'
                    value='None'
                    id='checkbox1'
                    name='check'
                  />
                  <label for='checkbox1'></label>
                </div>
                <span class='text'>Remember me</span>
                <button type='submit' class='btn btn-default'>
                  log in
                </button>
              </div>
              <span class='register'>
                <a href='/signup'>Signup /</a>
                <a href='#'>Forgot password</a>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
