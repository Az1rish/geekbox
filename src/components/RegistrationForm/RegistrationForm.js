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
            </form> 
        )
    }
}