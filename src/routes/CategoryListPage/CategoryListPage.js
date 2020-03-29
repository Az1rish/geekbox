import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Category from '../../components/Category/Category';
import TokenService from '../../services/token-service';
import GeekBoxContext from '../../GeekBoxContext';
import './CategoryListPage.css';

class CategoryListPage extends Component {
    static contextType = GeekBoxContext;
    
    renderCategories() {
        const { categories } = this.context;
        return categories.map((category) => (
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
                {TokenService.hasAuthToken() 
                    ? <Link to='/categories/add' >+ Add New Category</Link> 
                    : null}
            </ul>
        );
    }
}

export default withRouter(CategoryListPage);