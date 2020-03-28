import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GeekBoxContext from '../../GeekBoxContext';
import AuthApiService from '../../services/auth-api-service';
import './RegistrationForm.css';

export default class RegistrationForm extends Component {
    state = {
        error: null
    }
    static propTypes = {
        onRegister: PropTypes.func
    };

    static defaultProps = {
        onRegister: () => {}
    };

    static contextType = GeekBoxContext;

    handleSubmit = (e) => {
        e.preventDefault();
        const { first_name, last_name, user_name, password } = e.target;
        // console.log('first', first_name.value)
        const { onRegister } = this.props;
        const { clearError, setError } = this.context;
        const newUser = {
            first_name: first_name.value,
            last_name: last_name.value,
            user_name: user_name.value,
            password: password.value
        }
        console.log('User', newUser)
        clearError();
        AuthApiService.postUser(newUser)
            .then(() => {
                first_name.value = '';
                last_name.value = '';
                user_name.value = '';
                password.value = '';
                onRegister();
            })
            .then(() => console.log('submitted'))
            .catch(setError);
    }

    render() {
        console.log(this.context)
        const { error } = this.state;
        return (
            <form 
                className="RegistrationForm" 
                onSubmit={this.handleSubmit}
            >
                <div role='alert'>
                    {error && <p className="red">{error}</p>}
                </div>
                <div className="first_name">
                    <label htmlFor="RegistrationForm__first_name">
                        First Name 
                    </label>
                    <input
                        name="first_name"
                        type="text"
                        id="RegistrationForm__first_name"
                        required
                    />
                </div>
                <div className="last_name">
                    <label htmlFor="RegistrationForm__last_name">
                        Last Name 
                    </label>
                    <input
                        name="last_name"
                        type="text"
                        id="RegistrationForm__last_name"
                        required
                    />
                </div>
                <div className="user_name">
                    <label htmlFor="RegistrationForm__user_name">
                        User Name
                    </label>
                    <input
                        name="user_name"
                        type="text"
                        id="RegistrationForm__user_name"
                        required
                    />
                </div>
                <div className="password">
                    <label htmlFor="RegistrationForm__password">
                        Password
                    </label>
                    <input
                        name="password"
                        type="password"
                        id="RegistrationForm__password"
                        required
                    />
                    <p className="passwordInstruction">
                        Password must contain at least 1 uppercase letter, 1 lower case letter and 1 number, be at least 8 characters long and contain no spaces
                    </p>
                </div>
                <button type="submit">
                    Register
                </button>
            </form> 
        )
    }
}