import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

export default function Category(props) {
    const { category } = props;
    console.log(category);
    return (
        <Link to={`/categories/${category.id}`} className="Category">
            <li>
                <h2 className="Category__title">
                    {category.title}
                </h2>
            </li>
        </Link>
    )
};