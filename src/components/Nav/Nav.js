import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <nav className="navBar">
                <Link to="/">
                    <h1>
                        GeekBox
                        {' '}
                        <FontAwesomeIcon icon={'box-open'} />
                    </h1>
                </Link>
                <span className="links">
                    <Link to='/categories'>
                        Home
                    </Link>
                    {" | "}
                    <Link to='/register'>
                        Register
                    </Link>
                    {" | "}
                    <Link to='/signin'>
                        Sign In
                    </Link>
                </span>
            </nav>
        );
    };
};

export default Nav;