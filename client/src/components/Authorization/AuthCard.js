import React from 'react';
import PropTypes from 'prop-types';

const AuthCard = ({ signUp, formik, handleClick }) => {
  return (
    <form className="mx-auto max-w-md" onSubmit={formik.handleSubmit}>
      <h4 className="text-center mb-4">
        {signUp ? 'Enter your credentials to sign up!' : 'Enter your credentials to log in!'}
      </h4>
      <div className="mb-4">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="w-full bg-fuchsia-800 hover:bg-fuchsia-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {signUp ? 'Sign Up!' : 'Log In!'}
        </button>
      </div>
      <h5 className="text-center">
        {signUp ? 'Already a member?' : 'Not a member?'}
      </h5>
      <button
        type="button"
        onClick={handleClick}
        className="text-blue-500 hover:text-blue-700 text-sm focus:outline-none text-center"
      >
        {signUp ? 'Log In!' : 'Sign Up!'}
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