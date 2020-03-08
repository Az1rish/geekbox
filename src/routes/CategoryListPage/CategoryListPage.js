import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Category from '../../components/Category/Category';
import { v4 as uuidv4 } from 'uuid';
import Store from '../../STORE';
import './CategoryListPage.css';

class CategoryListPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            categories: Store.categories
        }
    }

    componentDidMount() {
        this._isMounted = true;
      }
    
      componentWillUnmount() {
        this._isMounted = false;
      }
    
    renderCategories() {
        const { categories } = this.state;
        console.log(categories);
        return categories.map((category) => (
            <Category
                key={category.id}
                category={category}
            />
        ));
    }

    updateList = (title) => {
        const newCategory = {
            id: uuidv4(),
            title,
            userId: 1
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
                    updateList: this.updateList
                }} >+ Add New Category</Link>
            </ul>
        );
    }
}

export default withRouter(CategoryListPage);