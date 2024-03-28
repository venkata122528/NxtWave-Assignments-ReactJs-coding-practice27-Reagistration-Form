// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    isFirstNameEmpty: false,
    isLastNameEmpty: false,
    canIShowForm: true,
  }

  onChangeFirstName = event => {
    console.log(event.target.value)
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    console.log(event.target.value)
    this.setState({lastName: event.target.value})
  }

  onFirstNameBlur = event => {
    const {firstName} = this.state
    console.log(event.target.value)

    if (event.target.value === '') {
      this.setState({isFirstNameEmpty: true})
    } else {
      this.setState({isFirstNameEmpty: false})
    }
  }

  onLastNameBlur = event => {
    const {lastName} = this.state
    console.log(event.target.value)

    if (event.target.value === '') {
      this.setState({isLastNameEmpty: true})
    } else {
      this.setState({isLastNameEmpty: false})
    }
  }

  onSubmitButtonClick = event => {
    event.preventDefault()
    const firstName = document.getElementById('firstNameInputEl').value
    const lastName = document.getElementById('lastNameInputEl').value

    if (firstName === '') {
      this.setState({isFirstNameEmpty: true})
    }
    if (lastName === '') {
      this.setState({isLastNameEmpty: true})
    }
    if (firstName !== '' && lastName !== '') {
      this.setState({firstName: '', lastName: '', canIShowForm: false})
    }
  }

  onClickReSubmit = event => {
    event.preventDefault()
    this.setState({canIShowForm: true})
  }

  render() {
    const {
      firstName,
      lastName,
      isFirstNameEmpty,
      isLastNameEmpty,
      canIShowForm,
    } = this.state

    return (
      <div className="mainContainer">
        <div className="formContainer">
          <h1 className="mainHeading">Registration</h1>
          {canIShowForm ? (
            <form className="form" onSubmit={this.onSubmitButtonClick}>
              <label htmlFor="firstNameInputEl" className="firstNameLabel">
                FIRST NAME
              </label>
              <br />
              <input
                type="text"
                className="firstNameInputEl"
                id="firstNameInputEl"
                placeholder="First name"
                onBlur={this.onFirstNameBlur}
                onChange={this.onChangeFirstName}
                value={firstName}
              />
              <p className="requiredText">{isFirstNameEmpty && 'Required'}</p>
              <label htmlFor="lastNameInputEl" className="lastNameLabel">
                LAST NAME
              </label>
              <br />
              <input
                type="text"
                className="lastNameInputEl"
                id="lastNameInputEl"
                placeholder="Last name"
                onBlur={this.onLastNameBlur}
                onChange={this.onChangeLastName}
                value={lastName}
              />
              <p className="requiredText">{isLastNameEmpty && 'Required'}</p>
              <div className="buttonContainer">
                <button className="submitButton" type="submit">
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={this.onClickReSubmit}>
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
                className="successImage"
              />
              <p className="submitStatusText">Submitted Successfully</p>
              <button type="submit" className="reSubmitButton">
                Submit Another Response
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
