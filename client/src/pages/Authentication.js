import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../functionality/UserContext';
import { useNavigate } from "react-router-dom";
import * as yup from "yup"
import { useFormik } from "formik"

const Authentication = () => {
  const { checkAuthorization } = useContext(UserContext);
  const [signUp, setSignUp] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  // Check if a user is logged in when the component mounts
  useEffect(() => {
    checkAuthorization();
  }, [checkAuthorization]);

  const handleClick = () => {
    setSignUp(prevState => !prevState);
    setErrorMessage(""); // Clear any previous error message when switching between sign-up and login
  }

  const handleSubmit = async (values) => {
    const url = signUp ? "/api/signup" : "/api/login";
    
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const data = await response.json();
        // Update user context or set a token in local storage
        // depending on your Authorization setup
        // updateUser(data);
        navigate("/");
      } else {
        if (signUp) {
          throw new Error("Sign-up failed. Please check your inputs and try again.");
        } else {
          throw new Error("Login failed. Please check your username and password.");
        }
      }
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
    }
  }

  const formSchema = yup.object().shape({
    username: yup.string().required("Please enter a username."),
    password: yup.string().required("Please enter a password."),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <form className="" onSubmit={formik.handleSubmit}>
        <h4>{signUp ? "Enter your credentials to sign up!" : "Enter your credentials to log in!"}</h4>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <input type="submit" value={signUp ? "Sign Up!" : "Log In!"} />
        <h5>{signUp ? "Already a member?" : "Not a member?"}</h5>
        <button type="button" onClick={handleClick}>
          {signUp ? "Log In!" : "Sign Up!"}
        </button>
      </form>
      {errorMessage && (
        <div className="errors">
          <h6 style={{ color: "red" }}>{errorMessage}</h6>
        </div>
      )}
      {formik.errors && (
        <div className="errors">
          <ul>
            {Object.values(formik.errors).map((error, index) => (
              <h6 key={index} style={{ color: "red" }}>
                {error}
              </h6>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default Authentication;
