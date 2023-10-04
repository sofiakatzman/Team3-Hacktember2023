import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../functionality/UserContext';
import { useNavigate } from "react-router-dom";
import * as yup from "yup"
import { useFormik } from "formik"
import AuthCard from '../components/Authorization/AuthCard';

const Authentication = () => {
  const { user, checkAuthorization, setUser, logout } = useContext(UserContext);
  const [signUp, setSignUp] = useState(false);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    checkAuthorization();
  }, [checkAuthorization]);

  const handleClick = () => {
    setSignUp(prevState => !prevState);
    setErrorMessage("");
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
        setUser(data);
        navigate("/");
      } else {
        if (signUp) {
          throw new Error("Sign-up failed. Please check your inputs and try again.");
        } else {
          throw Error("Login failed. Please check your username and password.");
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
      {user ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <AuthCard signUp={signUp} formik={formik} handleClick={handleClick} />
      )}
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
  );
}

export default Authentication;