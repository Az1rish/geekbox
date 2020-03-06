import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SignInForm from '../../components/SignInForm/SignInForm';
import './SignInPage.css';

class SignInPage extends Component {
    static propTypes = {
        history: PropTypes.shape
    };

    static defaultProps = {
        history: {
            push: () => {}
        }
    };

    onSignIn = () => {
        const { history } = this.props;
        history.push('/categories');
    }

    render() {
        return (
            <section className='SignInPage'>
                <h2>Sign In</h2>
                <SignInForm onSignIn={this.onSignIn} />
            </section>
        )
    }
};

export default withRouter(SignInPage);