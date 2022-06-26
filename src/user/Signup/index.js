import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import "./styles.css";

const Signup = ({ history }) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [avatar, setAvatar] = useState("");

  const { name, email, password } = values;

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setAvatar(reader.result);
    };
  };

  // get the values in the form
  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  //send values to backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/v1/auth/register`,
        {
          name,
          email,
          password,
          // avatar,
        }
      );

      if (data.success === true) {
        //console.log(signUser.data);
        toast.success("Account created, please log In");
        setValues({ name: "", email: "", password: "" });
      }

      history.push("/signin");
    } catch (err) {
      if (err.response.data.success === false) {
        toast.error(err.response.data.error);
      }
    }
  };

  return (
    // <div className='container custom_class'>
    //   <h2 className='signup_title '>SIGN UP</h2>
    //   <form className=' col-sm-6 offset-3 pt-5 signup_form'>
    //     <div className='form-outline mb-4'>
    //       <input
    //         onChange={handleChange("name")}
    //         type='text'
    //         id='form4Example1'
    //         className='form-control'
    //         value={name}
    //       />
    //       <label className='form-label' htmlFor='form4Example1'>
    //         Name
    //       </label>
    //     </div>

    //     <div className='form-outline mb-4'>
    //       <input
    //         onChange={handleChange("email")}
    //         type='email'
    //         id='form4Example2'
    //         className='form-control'
    //         value={email}
    //       />
    //       <label className='form-label' htmlFor='form4Example2'>
    //         Email{" "}
    //       </label>
    //     </div>

    //     <div className='form-outline mb-4'>
    //       <input
    //         onChange={handleChange("password")}
    //         type='password'
    //         id='form4Example3'
    //         className='form-control'
    //         value={password}
    //       />
    //       <label className='form-label' htmlFor='form4Example3'>
    //         Password
    //       </label>
    //     </div>

    //     {/* <div className="form-outline mb-4">
    //                     <input  type="file" id="formupload" name="image" className="form-control" />
    //                     <label className="form-label" htmlFor="form4Example2"  onChange={handleImage} >Avatar</label>
    //                 </div> */}

    //     <div className='form-outline mb-4'>
    //       {/* <label className="form-label" htmlFor="formFileLg">Avatar</label> */}
    //       <input
    //         className='form-control '
    //         id='formFileLg'
    //         type='file'
    //         onChange={handleImage}
    //         placeholder='Add profile picture'
    //       />
    //     </div>

    //     <button
    //       onClick={handleSubmit}
    //       type='submit'
    //       className='btn btn-primary btn-block mb-4'
    //     >
    //       Register
    //     </button>
    //     <img className='img-fluid' alt={name} src={avatar} />
    //   </form>
    // </div>
    <div class='container custom_class'>
      <div class='row'>
        <div class='col-md-offset-3 col-md-6'>
          <form class='form-horizontal col-sm-12 offset-6 pt-5 signup_form'>
            <span class='heading'>Sign up</span>
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
            <div class='form-group help'>
              <input
                type='password'
                class='form-control'
                id='inputPassword3'
                placeholder='Reenter password'
              />
              <i class='fa fa-repeat'></i>
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
                Sign up
              </button>
            </div>
            <span class='register'>
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
