import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RegistrationForm.css';

export default class RegistrationForm extends Component {
    static propTypes = {
        onRegister: PropTypes.func
    };

    static defaultProps = {
        onRegister: () => {}
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { onRegister } = this.props;

        onRegister();

        // Add post user function here to post to db
    }

    render() {
        return (
            <form className="RegistrationForm">
                {/* <div role='alert'> */}
                    {/* {error && <p className="red">{error}</p>} */}
                {/* </div> */}
                <div className="full_name">
                    <label htmlFor="RegistrationForm__full_name">
                        Full Name 
                    </label>
                    <input
                        name="full_name"
                        type="text"
                        id="RegistrationForm__full_name"
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