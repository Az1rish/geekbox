import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import './Nav.css';

class Nav extends Component {
    static propTypes = {
      toggleAuth: PropTypes.func
    }

    static defaultProps = {
      toggleAuth: () => {}
    }

    handleSignOut = () => {
      const { toggleAuth } = this.props;
      TokenService.clearAuthToken();
      localStorage.removeItem('user');
      toggleAuth();
    }

    render() {
      return (
        <nav className="navBar">
          <Link to="/">
            <h1 className="white">
              GeekBox
              {' '}
              <FontAwesomeIcon icon="box-open" />
            </h1>
          </Link>
          <span className="links">
            <Link to="/categories">
              Categories
            </Link>
            {' | '}  
            {TokenService.hasAuthToken()
              ? (
                <Link
                  onClick={this.handleSignOut}
                  to="/"
                >
                  Sign Out
                </Link>
              )
              : (
                <>
                  <Link to="/register">
                    Register
                  </Link>
                  {' | '}
                  <Link to="/signin">
                    Sign In
                  </Link>
                </>
              )}
          </span>
        </nav>
      );
    }
}

export default Nav;
