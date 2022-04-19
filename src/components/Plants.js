import React, { useState } from "react";
import * as yup from "yup";
const initialValues = {
  nickname: "",
  species: "",
  h2oFrequency: "",
};

function Plants() {
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
      <h2>Create a new plant</h2>
      <form>
        <div className="inputContainer">
          <div className="inputContainer">
            <label htmlFor="nickname">Nickname:</label>
            <input
              id="nickname"
              name="nickname"
              type="text"
              value={formValues.nickname}
              onChange={onChange}
              placeholder="nickname"
            ></input>
          </div>
          <div className="inputContainer">
            <label htmlFor="species">Species:</label>
            <input
              id="species"
              name="species"
              type="species"
              placeholder="species"
              value={formValues.species}
              onChange={onChange}
            ></input>
          </div>
          <div className="inputContainer">
            <label htmlFor="h2oFrequency">Water Frequency:</label>
            <input
              id="h2oFrequency"
              name="h2oFrequency"
              type="text"
              placeholder="daily"
              value={formValues.h2oFrequency}
              onChange={onChange}
            ></input>
          </div>
        </div>
        <div className="buttonContainer">
          <button>Create new Plant</button>
        </div>
      </form>
    </div>
  );
}

export default Plants;
