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
      return !categories.length
        ? <p className="black registerPlease">Currently no categories available. Feel free to add one.</p>
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
            ? <Link to="/categories/add" className="addCat">+ Add New Category</Link>
            : <p className="black registerPlease">If you&apos;d like to to add a category please register an account and sign in.</p>}
        </ul>
      );
    }
}

export default withRouter(CategoryListPage);
