import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from '../../components/Category/Category';
import { v4 as uuidv4 } from 'uuid';
import Store from '../../STORE';
import './CategoryListPage.css';

export default class CategoryListPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            categories: Store.categories
        }
    }
    
    renderCategories() {
        return this.state.categories.map((category) => (
            <Category
                key={category.id}
                category={category}
            />
        ));
    }

    updateList = (title) => {
        const newCategory = {
            id: uuidv4(),
            title
        };

        this.setState({
            categories: {
                ...this.state.categories,
                newCategory
            }
        })
    }

    render() {
        return (
            <ul className="CategoryListPage">
                {this.renderCategories()}
                <Link to={{
                    pathname: '/categories/add',
                    state: {
                        updateList: this.updateList
                }
                }} >+ Add New Category</Link>
            </ul>
        );
    }
}
