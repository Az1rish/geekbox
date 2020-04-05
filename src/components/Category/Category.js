import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

export default function Category(props) {
    const { category } = props;
    return (
        // <section className="Category__List"
        <Link to={{
            pathname: `/categories/${category.id}`,
            state: {
                category
            }
        }} className="Category__link">
            <li className="Category">
                <h2 className="Category__title">
                    {category.title}
                </h2>
            </li>
        </Link>
    )
};