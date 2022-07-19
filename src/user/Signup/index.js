import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import "./styles.css";

const Signup = ({ history }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });

  const { name, email, password, repassword } = values;

  // get the values in the form
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  //send values to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data, status } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/register`,
        {
          name,
          email,
          password,
        }
      );

      switch (status) {
        case 200:
          toast.success("Account created, please log In");
          setValues({ name: "", email: "", password: "", repassword: "" });
          break;
        case 400:
          toast.error("Account existed, try another");
          setValues({ name: "", email: "", password: "", repassword: "" });
          break;
        case 404:
          toast.error("Please fill in form");
          setValues({ name: "", email: "", password: "", repassword: "" });
          break;
        default:
          break;
      }

      // history.push("/signin");
    } catch (err) {
      if (err.response.data.success === false) {
        toast.error(err.response.data.error);
      }
    }
  };

  return (
    <div className='container custom_class'>
      <div className='row'>
        <div className='col-md-offset-3 col-md-6'>
          <form className='form-horizontal col-sm-12 offset-6 pt-5 signup_form'>
            <span className='heading'>Sign up</span>
            <div className='form-group'>
              <input
                onChange={handleChange("email")}
                type='email'
                className='form-control'
                id='inputEmail3'
                placeholder='Email'
                value={email}
              />
              <i className='fa fa-envelope'></i>
            </div>
            <div className='form-group'>
              <input
                onChange={handleChange("name")}
                type='text'
                className='form-control'
                id='inputEmail3'
                placeholder='Username'
                value={name}
              />
              <i className='fa fa-user'></i>
            </div>
            <div className='form-group help'>
              <input
                onChange={handleChange("password")}
                type='password'
                className='form-control'
                id='inputPassword3'
                placeholder='Password'
                value={password}
              />
              <i className='fa fa-lock'></i>
              <a href='#' className='fa fa-question-circle'></a>
            </div>
            <div className='form-group help'>
              <input
                onChange={handleChange("repassword")}
                type='password'
                className='form-control'
                id='inputPassword3'
                placeholder='Reenter password'
                value={repassword}
              />
              <i className='fa fa-repeat'></i>
              <a href='#' className='fa fa-question-circle'></a>
            </div>
            <div className='form-group'>
              <div className='main-checkbox'>
                <input
                  type='checkbox'
                  value='None'
                  id='checkbox1'
                  name='check'
                />
                <label for='checkbox1'></label>
              </div>
              <span className='text'>Remember me</span>
              <button
                onClick={handleSubmit}
                type='submit'
                className='btn btn-default'
              >
                Sign up
              </button>
            </div>
            <span className='register'>
              <a href='/signin'>Signin /</a>
              <a href='/'>Back home</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
