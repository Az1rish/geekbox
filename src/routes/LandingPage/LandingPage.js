import React from 'react';
import TokenService from '../../services/token-service';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
    return (
        <>
            <section>
                <h2>The web's repository for education resources!</h2>
            </section>
            <section>
                <p>Find a resource for what you'd like to learn</p>
                <p>We strive to make this page as easy and accessible as possible. Navigation flows like this:</p>
                <ul className="instructions black">
                    <li className="innerLeft black">If you don't want to sign in:
                        <ul className="innerInstructions black">
                            <li className="innerLeft black">Click "Categories" in the nav bar above or "Enter GeekBox" below.</li>
                            <li className="innerLeft black">You will then be taken to a page with buttons that represent the currently available categories. Click a category you're interested in to see the resources that have been added</li>
                            <li className="innerLeft black">You will then be taken to a page similar to the "Categories" page but this time it will be a list of "Resources" that you can click on. A resource could be anything that can be found on the web: a website, a video, a book, a course, you get the picture. Click one that looks interesting to you.</li>
                            <li className="innerLeft black">On the resource page you will see the name of that resource, a link to their website, a description of the resource and any comments/reviews that other users have left.</li>
                        </ul>
                    </li>
                    <li className="innerLeft black">If you'd like to register an account and sign in, navigation is the same as above, just click register or sign in if you've already registered. You will then have the capability to add categories, resources and comments/reviews.</li>
                </ul>
                {TokenService.hasAuthToken()
                    ? <p className="black">You are already Signed In.</p>
                    : <>
                        <p>You can register or sign in by clicking one of these links ( you can try out the site by signing in with user_name: User and password: AAaa11!! )</p>
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