import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';
import GeekBoxContext from '../../GeekBoxContext';
import './SignInForm.css';

export default class SignInForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            error: null
        }
    }

    static contextType = GeekBoxContext;
    
    static propTypes = {
        onSignIn: PropTypes.func
    }

    static defaultProps = {
        onSignIn: () => {}
    }

    handleSubmitJwtAuth = (e) => {
      e.preventDefault();
      const { user_name, password } = e.target;
      const { setUser, clearError } = this.context;
      const { onSignIn } = this.props;
      clearError();
      AuthApiService.postSignIn({
        user_name: user_name.value,
        password: password.value
      })
        .then((res) => {
          setUser(user_name.value);
          user_name.value = '';
          password.value = '';
          TokenService.saveAuthToken(res.authToken);
          onSignIn();
        })
        .catch((res) => {
          this.setState({ error: res.error })
        })
    }

    render() {
      const { error } = this.state;
        return (
          <form
            className="SignInForm"
            onSubmit={this.handleSubmitJwtAuth}
          >
            <div role="alert">
              {error && <p className="black">{error}</p>}
            </div>
            <div className="user_name">
              <label htmlFor="SignInForm__user_name">
                User name
              </label>
              <input
                required
                name="user_name"
                id="SignInForm__user_name"
              />
            </div>
            <div className="password">
              <label htmlFor="SignInForm__password">
                Password
              </label>
              <input
                required
                name="password"
                type="password"
                id="SignInForm__password"
              />
            </div>
            <button type="submit" className="SignIn">
              Sign In
            </button>
          </form>
        );
      }
}