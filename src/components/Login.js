import React, { useState } from "react";
import * as yup from "yup";
const initialValues = {
  username: "",
  password: "",
  phoneNumber: "",
};

function Login() {
  const [formValues, setFormValues] = useState(initialValues);

  const onChange = (event) => {
    console.log(formValues);
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className="register-wrapper">
      <h2>Sign in</h2>
      <form>
        <div className="inputContainer">
          <div className="inputContainer">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              name="username"
              type="text"
              value={formValues.username}
              onChange={onChange}
              placeholder="username"
            ></input>
          </div>
          <div className="inputContainer">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={formValues.password}
              onChange={onChange}
            ></input>
          </div>
        </div>
        <div className="buttonContainer">
          <button>Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
