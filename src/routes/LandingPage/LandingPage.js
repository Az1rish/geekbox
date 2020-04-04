import React from 'react';
import TokenService from '../../services/token-service';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <>
            <section>
                <h2>The web's repository for education resources!</h2>
            </section>
            <section>
                <p>Find a resource for what you'd like to learn</p>
                <p>You can register and sign in if you'd like to add a category, resource, comment or rating</p>
                {TokenService.hasAuthToken()
                    ? <p className="black">You are already Signed In.</p>
                    : <>
                        <Link to='/register'>Register</Link>
                        <Link to='/signin'>Sign In</Link>
                      </>
                }               
            </section>
            <section>
                <p>Or, if you'd just like to view resources, enter the site here:</p>
                <Link to='/categories'>Enter GeekBox</Link>
            </section>
        </>
    )
}