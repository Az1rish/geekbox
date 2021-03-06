import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GeekBoxContext from '../../GeekBoxContext';
import AuthApiService from '../../services/auth-api-service';
import './RegistrationForm.css';

export default class RegistrationForm extends Component {
    static contextType = GeekBoxContext;

    static propTypes = {
      onRegister: PropTypes.func
    };

    static defaultProps = {
      onRegister: () => {}
    };

    constructor(props) {
      super(props);
      this.state = {
        error: null
      };
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const {
        first_name, last_name, user_name, password
      } = e.target;
      const { onRegister } = this.props;
      const { clearError } = this.context;
      const newUser = {
        first_name: first_name.value,
        last_name: last_name.value,
        user_name: user_name.value,
        password: password.value
      };
      clearError();
      AuthApiService.postUser(newUser)
        .then(() => {
          first_name.value = '';
          last_name.value = '';
          user_name.value = '';
          password.value = '';
          onRegister();
        })
        .catch((res) => {
          this.setState({ error: res.error });
        });
    }

    render() {
      const { error } = this.state;
      return (
        <form
          className="RegistrationForm"
          onSubmit={this.handleSubmit}
        >
          <div role="alert">
            {error && <p className="black">{error}</p>}
          </div>
          <div className="first_name">
            <label htmlFor="RegistrationForm__first_name">
              First Name
              <input
                name="first_name"
                type="text"
                id="RegistrationForm__first_name"
                required
              />
            </label>
          </div>
          <div className="last_name">
            <label htmlFor="RegistrationForm__last_name">
              Last Name
              <input
                name="last_name"
                type="text"
                id="RegistrationForm__last_name"
                required
              />
            </label>
          </div>
          <div className="user_name">
            <label htmlFor="RegistrationForm__user_name">
              User Name
              <input
                name="user_name"
                type="text"
                id="RegistrationForm__user_name"
                required
              />
            </label>
          </div>
          <div className="password">
            <label htmlFor="RegistrationForm__password">
              Password
              <input
                name="password"
                type="password"
                id="RegistrationForm__password"
                required
              />
            </label>
            <p className="passwordInstruction">
              Password must contain at least 1 uppercase letter, 1 lower case letter, 1 number and 1 special character (!,@,#,$,%,^ or &), be at least 8 characters long and contain no spaces
            </p>
          </div>
          <button type="submit" className="register">
            Register
          </button>
        </form>
      );
    }
}
