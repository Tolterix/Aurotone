import React from "react";
import "./Registration.css";
import { StateContext } from "../../State";

export default function Registration() {
  let context = React.useContext(StateContext);

  const submitForm = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    context.setState({
      registrationForm: {
        ...context.registrationForm,
        [event.target.id]: event.target.value,
      },
    });
  };

  console.log(context.registrationForm);
  return (
    <div>
      <h1 id="registration_title">Welcome! Please Register</h1>
      <form id="registration_form" onSubmit={submitForm}>
        <p id="firstName">First Name:</p>
        <input
          value={context.registrationForm.first_name}
          id="first_name"
          className="formInput"
          type="string"
          onChange={handleChange}
        />

        <p id="lastName">Last Name:</p>
        <input
          value={context.registrationForm.last_name}
          id="last_name"
          className="formInput"
          type="string"
          onChange={handleChange}
        />

        <p id="emailInput">Email:</p>
        <input
          value={context.registrationForm.email}
          id="email"
          className="formInput"
          type="string"
          onChange={handleChange}
        />

        <p id="passwordInput">Password:</p>
        <input
          value={context.registrationForm.password}
          id="password"
          className="formInput"
          type="string"
          onChange={handleChange}
        />

        <p id="repasswordInput">Re-type Password:</p>
        <input className="formInput" type="string" />

        <p>
          <input className="formCheckbox" id="userCheckbox" type="checkbox" />
          <label id="formUser">User</label>
        </p>
        <p>
          <input className="formCheckbox" id="runnerCheckbox" type="checkbox" />
          <label id="formRunner">Runner</label>
        </p>

        <ul>
          <p>
            <input
              className="formCheckbox"
              id="formTermsOfServiceCheckbox"
              type="checkbox"
            />
            <label id="formTermsOfService">Agree to the terms of service</label>
          </p>
        </ul>

        <button id="formSubmitButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
