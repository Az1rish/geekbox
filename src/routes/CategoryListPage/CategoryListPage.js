import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Category from '../../components/Category/Category';
import TokenService from '../../services/token-service';
import GeekBoxContext from '../../GeekBoxContext';
import '../../index.css';

class CategoryListPage extends Component {
    static contextType = GeekBoxContext;
    
    renderCategories() {
        const { categories } = this.context;
        return !categories.length
            ? <p>Currently no categories available. Feel free to add one.</p>
            : categories.map((category) => (
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
                    : <p className="black">If you'd like to to add a category please register an account and sign in.</p>}
            </ul>
        );
    }
}

export default withRouter(CategoryListPage);