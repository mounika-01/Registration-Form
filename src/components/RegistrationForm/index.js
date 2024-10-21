import { Component } from 'react';
import './index.css';

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: false,
    lastNameError: false,
    isSubmitted: false,
  };

  // Handling first name input
  onChangeFirstName = event => {
    this.setState({ firstName: event.target.value });
  };

  // Handling last name input
  onChangeLastName = event => {
    this.setState({ lastName: event.target.value });
  };

  // Validating fields when the user loses focus on the input field
  validateFirstName = () => {
    const { firstName } = this.state;
    if (firstName === '') {
      this.setState({ firstNameError: true });
    } else {
      this.setState({ firstNameError: false });
    }
  };

  validateLastName = () => {
    const { lastName } = this.state;
    if (lastName === '') {
      this.setState({ lastNameError: true });
    } else {
      this.setState({ lastNameError: false });
    }
  };

  // Handling form submission
  onSubmitForm = event => {
    event.preventDefault();
    const { firstName, lastName } = this.state;
    const isFirstNameValid = firstName !== '';
    const isLastNameValid = lastName !== '';

    if (!isFirstNameValid || !isLastNameValid) {
      this.setState({
        firstNameError: !isFirstNameValid,
        lastNameError: !isLastNameValid,
      });
    } else {
      this.setState({ isSubmitted: true });
    }
  };

  // Reset the form after successful submission
  onSubmitAnotherResponse = () => {
    this.setState({
      firstName: '',
      lastName: '',
      firstNameError: false,
      lastNameError: false,
      isSubmitted: false,
    });
  };

  // Render success message view
  renderSuccessView = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-icon"
      />
      <p>Submitted Successfully</p>
      <button
        type="button"
        className="submit-another-btn"
        onClick={this.onSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  );

  // Render registration form
  renderRegistrationForm = () => {
    const { firstName, lastName, firstNameError, lastNameError } = this.state;
    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        <h1 className="form-heading">Registration</h1> {/* Heading added here */}
        <div className="input-container">
          <label className="input-label" htmlFor="firstName">
            FIRST NAME
          </label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            className={`input-field ${firstNameError ? 'error-field' : ''}`}
            placeholder="First name"
            onChange={this.onChangeFirstName}
            onBlur={this.validateFirstName}
          />
          {firstNameError && <p className="error-message">Required</p>}
        </div>

        <div className="input-container">
          <label className="input-label" htmlFor="lastName">
            LAST NAME
          </label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            className={`input-field ${lastNameError ? 'error-field' : ''}`}
            placeholder="Last name"
            onChange={this.onChangeLastName}
            onBlur={this.validateLastName}
          />
          {lastNameError && <p className="error-message">Required</p>}
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    );
  };

  render() {
    const { isSubmitted } = this.state;
    return (
      <div className="registration-form-container">
        {isSubmitted ? this.renderSuccessView() : this.renderRegistrationForm()}
      </div>
    );
  }
}

export default RegistrationForm;
