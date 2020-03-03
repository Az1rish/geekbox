import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <section>
            <h2>404 - Page not found</h2>
            <Link to='/categories'>Click here to return to the site</Link>
        </section>
    )
}