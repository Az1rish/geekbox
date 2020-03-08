import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from '../../components/Category/Category';
import Store from '../../STORE';
import './CategoryListPage.css';

export default class CategoryListPage extends Component {
    renderCategories() {
        return Store.categories.map((category) => (
            <Category
                key={category.id}
                category={category}
            />
        ));
    }

    render() {
        return (
            <ul className="CategoryListPage">
                {this.renderCategories()}
                <Link to='/categories/add'>+ Add New Category</Link>
            </ul>
        );
    }
}
