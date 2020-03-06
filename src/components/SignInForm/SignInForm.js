import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SignInForm.css';

export default class SignInForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            error: null
        }
    }
    
    static propTypes = {
        onLoginSuccess: PropTypes.func
    }

    static defaultProps = {
        onLoginSuccess: () => {}
    }

    render() {
        const { error } = this.state;
        return (
          <form
            className="LoginForm"
            onSubmit={this.handleSubmitJwtAuth}
          >
            <div role="alert">
              {error && <p className="red">{error}</p>}
            </div>
            <div className="user_name">
              <label htmlFor="LoginForm__user_name">
                User name
              </label>
              <input
                required
                name="user_name"
                id="LoginForm__user_name"
              />
            </div>
            <div className="password">
              <label htmlFor="LoginForm__password">
                Password
              </label>
              <input
                required
                name="password"
                type="password"
                id="LoginForm__password"
              />
            </div>
            <button type="submit">
              Login
            </button>
          </form>
        );
      }
}