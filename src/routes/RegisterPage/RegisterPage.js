import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import './RegisterPage.css';

class RegisterPage extends Component {
    static propTypes = {
        history: PropTypes.shape({
            push: PropTypes.func
        })
    };

    static defaultProps = {
        history: {
            push: () => {}
        }
    }

    handleRegister = () => {
        const { history } = this.props;
        history.push('/signin');
    }

    render() {
        return (
            <section className="RegisterPage">
                <h2>Register</h2>
                <RegistrationForm
                    onRegister={this.handleRegister}
                />
            </section>
        );
    }
}

export default withRouter(RegisterPage);