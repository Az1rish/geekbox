import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
            <nav className="navBar">
                <h1>GeekBox</h1>
                <span>
                    <Link to='/home'>
                        Home
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