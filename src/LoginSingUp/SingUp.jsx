import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import './SignUp.css';
import { handleError, handleSuccess } from "../util";

const SignUp = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setSignUpInfo(prevInfo => ({ ...prevInfo, [name]: value }));
  };

  console.log(signUpInfo);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = signUpInfo;
    if (!name || !email || !password) {
      return handleError('All fields are required');
    }

    try {
      const url = "http://localhost:8080/auth/signUp"; // Fixed typo in endpoint
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(signUpInfo)
      });
      const result = await response.json();
      console.log(result);
      const { success, error, message } = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/home');
        }, 1000);
      } else if (error) {
        const details = error?.details[0]?.message; // Fixed typo and added safe access
        handleError(details || "An error occurred");
      }
    } catch (err) {
      handleError(err.message || "An error occurred");
    }
  };

  return (
    <>
      <div className="container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              autoFocus
              placeholder="Enter your name ..."
              value={signUpInfo.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email ..."
              value={signUpInfo.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password ..."
              value={signUpInfo.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">Sign Up</button>
          <span>
            Already have an account?
            <Link to='/login'> Login</Link>
          </span>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};

export default SignUp;
