import React from 'react';
import PropTypes from 'prop-types';

const AuthCard = ({ signUp, formik, handleClick }) => {
  return (
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
  );
};

AuthCard.propTypes = {
  signUp: PropTypes.bool.isRequired,
  formik: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default AuthCard;